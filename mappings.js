const { highlight, languages } = require('prismjs');

const types = ['video', 'image', 'embed'];

const classNames = (...classes) => classes.filter(a => !!a).join(' ');

const getTextContent = text => text.reduce((prev, current) => prev + current[0], '');

const groupBlockContent = blockMap => {
    const output = [];
    let lastType;
    let index = -1;
    Object.keys(blockMap).forEach(id => {
        var _blockMap$id$value$co;

        (_blockMap$id$value$co = blockMap[id].value.content) === null ||
        _blockMap$id$value$co === void 0
            ? void 0
            : _blockMap$id$value$co.forEach(blockId => {
                  var _blockMap$blockId;

                  const blockType =
                      (_blockMap$blockId = blockMap[blockId]) === null ||
                      _blockMap$blockId === void 0
                          ? void 0
                          : _blockMap$blockId.value.type;

                  if (blockType && blockType !== lastType) {
                      index++;
                      lastType = blockType;
                      output[index] = [];
                  }

                  output[index].push(blockId);
              });
        lastType = undefined;
    });
    return output;
};

const getListNumber = (blockId, blockMap) => {
    const groups = groupBlockContent(blockMap);
    const group = groups.find(g => g.includes(blockId));

    if (!group) {
        return;
    }

    return group.indexOf(blockId) + 1;
};

const toNotionImageUrl = url =>
    `https://notion.so${url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`}`;

const Code = ({ code, language = 'javascript' }) => {
    const prismLanguage = languages[language.toLowerCase()] || languages.javascript;
    return highlight(code, prismLanguage, language);
};

const Asset = ({ block }) => {
    const { value } = block;
    const { type } = block.value;

    if (!types.includes(type)) {
        return null;
    }

    const { format } = value;
    const { display_source, block_aspect_ratio, block_height, block_width } = format;
    const aspectRatio = block_aspect_ratio || block_height / block_width;
    const aspect = `${aspectRatio * 100}%`;
    const styles = `padding-bottom: ${aspect}; position: relative;`;

    if (type === 'embed' || type === 'video') {
        return `<div
          style="${styles}"
        >
          <iframe className="notion-image-inset" src="{${display_source}}" />
        </div>`;
    }

    const src = toNotionImageUrl(value.properties.source[0][0]);

    if (type === 'image') {
        var _value$properties$cap;

        const caption =
            (_value$properties$cap = value.properties.caption) === null ||
            _value$properties$cap === void 0
                ? void 0
                : _value$properties$cap[0][0];

        if (block_aspect_ratio) {
            return `<div
            style="${styles}"
          >
            <img className="notion-image-inset" alt="{${caption}}" src="{${src}}" />
          </div>`;
        }

        return `<img alt="${caption}" src="${src}" />`;
    }

    return null;
};

const renderChildText = properties =>
    properties === null || properties === void 0
        ? void 0
        : properties.map(([text, decorations], i) => {
              if (!decorations) {
                  return text;
              }

              return decorations.reduceRight((element, decorator) => {
                  switch (decorator[0]) {
                      case 'h':
                          return element;

                      case 'c':
                          return `\`${element}\``;

                      case 'b':
                          return `**${element}**`;

                      case 'i':
                          return `*${element}*`;

                      case 's':
                          return `~~${element}~~`;

                      case 'a':
                          return `[${element}](${decorator[1]})`;

                      default:
                          return element;
                  }
              }, '');
          });

const isIconBlock = value => value.type === 'page' || value.type === 'callout';

const PageIcon = ({ block }) => {
    if (!isIconBlock(block.value)) {
        return null;
    }

    const icon = block.value.format.page_icon;
    const { title } = block.value.properties;

    if (icon === null || icon === void 0 ? void 0 : icon.includes('http')) {
        return `![${title ? getTextContent(title) : 'Icon'}](${toNotionImageUrl(icon)})`;
    }
};

const renderBlock = props => {
    var _props$mapPageUrl;
    var _blockValue$format;

    const { block, children, level, fullPage, blockMap } = props;
    const blockValue = block === null || block === void 0 ? void 0 : block.value;

    switch (blockValue === null || blockValue === void 0 ? void 0 : blockValue.type) {
        case 'page':
            if (level === 0) {
                if (fullPage) {
                    if (!blockValue.properties) {
                        return null;
                    }

                    const {
                        page_icon,
                        page_cover,
                        page_cover_position,
                        page_full_width,
                        page_small_text,
                    } = blockValue.format || {};
                    const coverPosition = (1 - (page_cover_position || 0.5)) * 100;
                    const pageIcon = page_icon
                        ? PageIcon({
                              block,
                          })
                        : '';
                    const pageCover = page_cover
                        ? `![${getTextContent(blockValue.properties.title)}](${toNotionImageUrl(
                              page_cover
                          )})`
                        : '';
                    return `
                  ${pageIcon}

                  ${pageCover}

                  # ${renderChildText(blockValue.properties.title)}

                  ${children}
                `;
                }

                return children;
            }

            if (!blockValue.properties) return null;
            return `<a
              className="notion-page-link"
              href="${((_props$mapPageUrl = props.mapPageUrl) === null ||
              _props$mapPageUrl === void 0
                  ? void 0
                  : _props$mapPageUrl.call(props, blockValue.id)) || `/${blockValue.id}`}"
            >
              ${
                  blockValue.format
                      ? `<div className="notion-page-icon">
                  <PageIcon block={block} />
                </div>`
                      : ''
              }
              <div className="notion-page-text">
                ${renderChildText(blockValue.properties.title)}
              </div>
            </a>`;

        case 'header':
            if (!blockValue.properties) return null;
            return `# ${renderChildText(blockValue.properties.title)}`;

        case 'sub_header':
            if (!blockValue.properties) return null;
            return `## ${renderChildText(blockValue.properties.title)}`;

        case 'sub_sub_header':
            if (!blockValue.properties) return null;
            return `### ${renderChildText(blockValue.properties.title)}`;

        case 'divider':
            return `\n---\n`;

        case 'text':
            if (!blockValue.properties) {
                return '';
            }

            const blockColor =
                (_blockValue$format = blockValue.format) === null || _blockValue$format === void 0
                    ? void 0
                    : _blockValue$format.block_color;
            return renderChildText(blockValue.properties.title);

        case 'bulleted_list':
        case 'numbered_list':
            const wrapList = (content, start) =>
                blockValue.type === 'bulleted_list'
                    ? `<ul className="notion-list notion-list-disc">${content}</ul>`
                    : `<ol start=${start} className="notion-list notion-list-numbered">
              ${content}
            </ol>`;

            let output = null;

            if (blockValue.content) {
                const li = blockValue.properties
                    ? `<li>${renderChildText(blockValue.properties.title)}</li>`
                    : '';
                output = `
              ${li}
              ${wrapList(children)}
            `;
            } else {
                output = blockValue.properties
                    ? `<li>${renderChildText(blockValue.properties.title)}</li>`
                    : null;
            }

            const isTopLevel = block.value.type !== blockMap[block.value.parent_id].value.type;
            const start = getListNumber(blockValue.id, blockMap);
            return isTopLevel ? wrapList(output, start) : output;

        case 'image':
        case 'embed':
        case 'video':
            const { value } = block;
            const cap = value.properties.caption
                ? `<figcaption className="notion-image-caption">
            ${renderChildText(value.properties.caption)}
          </figcaption>`
                : '';
            return `<figure
            className="notion-asset-wrapper"
            style="width: ${value.format.block_width};"
          >
            ${Asset({
                block,
            })}

          </figure>`;

        case 'code': {
            if (blockValue.properties.title) {
                const content = blockValue.properties.title[0][0];
                const language = blockValue.properties.language[0][0];
                return `\`\`\`\n${Code({
                    key: blockValue.id,
                    language: language || '',
                    code: content,
                })}\n\`\`\``;
            }

            break;
        }

        case 'column_list':
            return `<div className="notion-row">${children}</div>`;

        case 'column':
            const spacerWith = 46;
            const ratio = blockValue.format.column_ratio;
            const columns = Number((1 / ratio).toFixed(0));
            const spacerTotalWith = (columns - 1) * spacerWith;
            const width = `calc((100% - ${spacerTotalWith}px) * ${ratio})`;
            return `
            <div className="notion-column" style="width: ${width};">
              ${children}
            </div>
            <div className="notion-spacer" style="width: ${spacerWith}" />
          `;

        case 'quote':
            if (!blockValue.properties) return null;
            return `<blockquote className="notion-quote">
            ${renderChildText(blockValue.properties.title)}
          </blockquote>`;

        case 'callout':
            const classes = classNames(
                'notion-callout',
                blockValue.format.block_color && `notion-${blockValue.format.block_color}_co`
            );
            return `<div
            className="${classes}"
          >
            <div>
              <PageIcon block={block} />
            </div>
            <div className="notion-callout-text">
              {renderChildText(blockValue.properties.title)}
            </div>
          </div>`;

        case 'bookmark':
            return 'TODO';
        // <div className="notion-row">
        //   <a
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className={classNames(
        //       "notion-bookmark",
        //       blockValue.format.block_color &&
        //         `notion-${blockValue.format.block_color}`
        //     )}
        //     href={blockValue.properties.link[0][0]}
        //   >
        //     <div>
        //       <div className="notion-bookmark-title">
        //         {renderChildText(blockValue.properties.title)}
        //       </div>
        //       <div className="notion-bookmark-description">
        //         {renderChildText(blockValue.properties.description)}
        //       </div>
        //       <div className="notion-bookmark-link">
        //         <img
        //           src={blockValue.format.bookmark_icon}
        //           alt={getTextContent(blockValue.properties.title)}
        //         />
        //         <div>{renderChildText(blockValue.properties.link)}</div>
        //       </div>
        //     </div>
        //     <div className="notion-bookmark-image">
        //       <img
        //         src={blockValue.format.bookmark_cover}
        //         alt={getTextContent(blockValue.properties.title)}
        //       />
        //     </div>
        //   </a>
        // </div>

        case 'toggle':
            return 'TODO';
        // <details className="notion-toggle">
        //   <summary>{renderChildText(blockValue.properties.title)}</summary>
        //   <div>{children}</div>
        // </details>

        default:
            if (process.env.NODE_ENV !== 'production') {
                var _block$value;

                console.log(
                    `Unsupported type ${
                        block === null || block === void 0
                            ? void 0
                            : (_block$value = block.value) === null || _block$value === void 0
                            ? void 0
                            : _block$value.type
                    }`
                );
            }

            return '';
    }

    return null;
};

const renderNotion = ({ level = 0, currentId, ...props }) => {
    var _currentBlock$value;
    var _currentBlock$value$c;

    const { blockMap } = props;
    const id = currentId || Object.keys(blockMap)[0];
    const currentBlock = blockMap[id];
    if (!currentBlock) return null;
    return renderBlock({
        key: id,
        level,
        block: currentBlock,
        ...props,
        children:
            currentBlock === null || currentBlock === void 0
                ? void 0
                : (_currentBlock$value = currentBlock.value) === null ||
                  _currentBlock$value === void 0
                ? void 0
                : (_currentBlock$value$c = _currentBlock$value.content) === null ||
                  _currentBlock$value$c === void 0
                ? void 0
                : _currentBlock$value$c.map(contentId =>
                      renderNotion({
                          key: contentId,
                          currentId: contentId,
                          level: level + 1,
                          ...props,
                      })
                  ),
    });
};

module.exports = {
    renderNotion,
};

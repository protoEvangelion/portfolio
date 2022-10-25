import React, { useState } from 'react';
import { Box, Grid, Input, Text } from 'theme-ui';

import { SourceList } from '@pauliescanlon/gatsby-theme-terminal';
import { PostCard } from '../PostCard';

import Fuse from 'fuse.js';
import { Fragment } from 'react';
import { useLocation, navigate } from '@reach/router';
import { Tags } from '../Tags';
import { getUrl } from '../../utils/get-url';

const getUrlParams = search => {
    const params = new URLSearchParams(search.slice(1));
    const tags = params.get('tags');
    return {
        tags: tags ? tags.split(',') : [],
        term: params.get('term') || '',
    };
};

export const PostsPage = () => {
    const location = useLocation();
    const [query, updateQuery] = useState(getUrlParams(location.search));

    React.useEffect(() => {
        updateQuery(getUrlParams(location.search));
    }, [location.search]);

    const onSearch = event => {
        navigate(getUrl({ query, term: event.currentTarget.value || '' }));
    };

    return (
        <Box>
            <Tags query={query} />

            <SourceList filter="posts">
                {posts => {
                    const filteredByTags = posts.filter(({ node }) =>
                        query.tags.length
                            ? query.tags.some(tag => node.frontmatter.tags.includes(tag))
                            : true
                    );

                    const fuse = new Fuse(filteredByTags, {
                        includeScore: true,
                        keys: ['node.frontmatter.title'],
                        isCaseSensitive: false,
                        findAllMatches: true,
                        ignoreLocation: true,
                        threshold: 0.2,
                    });

                    const results = fuse.search(query.term);

                    const searchResults = query.term.length
                        ? results.map(result => result.item)
                        : filteredByTags;

                    return (
                        <Fragment>
                            <Box
                                sx={{
                                    my: 3,
                                }}
                            >
                                <Input
                                    value={query.term || ''}
                                    placeholder="Search"
                                    onChange={onSearch}
                                />
                            </Box>

                            <Text
                                sx={{
                                    display: 'block',
                                    mb: 3,
                                    color: 'success',
                                }}
                            >
                                {searchResults.length} Results Found
                            </Text>

                            <Grid
                                sx={{
                                    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
                                }}
                            >
                                {searchResults
                                    .filter(edge => !edge.node.frontmatter.isPrivate)
                                    .reduce((posts, post) => {
                                        return post.node.frontmatter.pinned
                                            ? [post, ...posts]
                                            : [...posts, post];
                                    }, [])
                                    .map(({ node }, index) => {
                                        const {
                                            frontmatter: {
                                                title,
                                                tags,
                                                date,
                                                dateModified,
                                                pinned,
                                                featuredImage,
                                            },
                                            excerpt,
                                            fields: { slug },
                                        } = node;

                                        return (
                                            <PostCard
                                                key={index}
                                                title={title}
                                                featuredImageUrl={featuredImage}
                                                tags={tags}
                                                date={date}
                                                dateModified={dateModified}
                                                excerpt={excerpt}
                                                slug={slug}
                                                pinned={pinned}
                                            />
                                        );
                                    })}
                            </Grid>
                        </Fragment>
                    );
                }}
            </SourceList>
        </Box>
    );
};

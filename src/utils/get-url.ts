import { Query } from '../types';

type GetUrlProps = {
    query: Query;
    term: string;
    tag?: string;
};
export const getUrl = ({ query, term, tag }: GetUrlProps) => {
    // query isn't passed on homepage
    if (!query) {
        return `/posts?tags=${tag}`;
    }

    const tags = query.tags;
    const tagsStr =
        tag && (tags.includes(tag) ? tags.filter(x => x !== tag) : [...tags, tag]).join(',');

    const paramsStr = Object.entries({
        term: term === '' || term ? term : query.term,
        tags: tag ? tagsStr : query.tags,
    })
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    return `/posts?${paramsStr}`;
};

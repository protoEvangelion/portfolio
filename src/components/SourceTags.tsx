import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { useTags } from '../utils/use-tags';

type Tag = {
    name: string | null;
    count: number;
    percent: number;
};
type SourceTagsProps = {
    filter?: string;
    children: (tags: Tag[]) => React.ReactElement;
};
export const SourceTags = ({ filter, children }: SourceTagsProps) => {
    const count: Tag[] = Object.values(
        useTags(filter)
            .filter(edge => edge?.node?.frontmatter?.tags)
            .reduce<Tag[]>((items, item) => {
                const tags = item?.node?.frontmatter?.tags || [];

                return [
                    ...items,
                    ...tags.map(tag => ({
                        name: tag,
                        count: 1,
                        percent: 1,
                    })),
                ];
            }, [])
            .reduce((items, item) => {
                const { count, name = 'ts' } = item;
                items[name!] = items[name!] || { count: 0, name };
                items[name!].count += count;

                return items;
            }, [])
    );

    const total = count.reduce((a, b) => a + b.count, 0);

    const tags = count.map(item => {
        return {
            ...item,
            percent: Math.round((item.count / total) * 100),
        };
    });

    return <Fragment>{tags.length ? children(tags) : null}</Fragment>;
};

SourceTags.propTypes = {
    /** A string used as a filter for the allMdx GraphQL query */
    filter: PropTypes.string,
    /** React children */
    children: PropTypes.func,
};

import React from 'react';
import { Box, Badge, Link } from 'theme-ui';
import { mix } from '@theme-ui/color';
import { Link as GatsbyLink } from 'gatsby';
import { getUrl } from '../utils/get-url';
import { SourceTags } from './SourceTags';

export function Tags({ query }) {
    return (
        <SourceTags>
            {tags => (
                <Box>
                    {tags
                        .sort((a, b) => b.percent - a.percent)
                        .map((tag, index) => {
                            const { name } = tag;
                            const color = mix('secondary', 'primary', `${index / tags.length}`);
                            console.log('shadow', `inset 0 0 30px ${color}, 0 0 30px ${color}`);

                            return (
                                <Link
                                    key={index}
                                    as={GatsbyLink}
                                    to={getUrl({ query, tag: name })}
                                    sx={{
                                        '&:focus': {
                                            boxShadow: 'none',
                                        },
                                    }}
                                >
                                    <Badge
                                        variant="primary"
                                        sx={{
                                            mr: 2,
                                            mb: 2,
                                            color,
                                            boxShadow: t =>
                                                query?.tags?.includes?.(name)
                                                    ? `inset 0 0 10px ${color(t)}, 0 0 10px ${color(
                                                          t
                                                      )}`
                                                    : 'none',
                                            borderColor: color,
                                        }}
                                    >
                                        {name}
                                    </Badge>
                                </Link>
                            );
                        })}
                </Box>
            )}
        </SourceTags>
    );
}

import React from 'react';
import GatsbyLink from 'gatsby-link';
import { format } from 'date-fns';
import { Flex, Box, Badge, Link, Card, Heading, Text, LinkProps } from 'theme-ui';
import { mix } from '@theme-ui/color';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface ILink extends LinkProps {
    to?: string;
}
type ForwardRef<T, P> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
>;
type MergedLinkProps = ForwardRef<HTMLAnchorElement, ILink>;
const MergedLink: MergedLinkProps = Link;

export const PostCard = ({
    title,
    featuredImage,
    tags,
    date,
    dateModified,
    excerpt,
    slug,
    pinned,
}) => {
    const img = getImage(featuredImage?.childImageSharp?.gatsbyImageData);
    return (
        <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
            }}
        >
            <MergedLink
                as={GatsbyLink}
                to={slug}
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '1px',
                    textDecoration: 'none',
                }}
            >
                <Card
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        minHeight: '1px',
                    }}
                >
                    <Box
                        sx={{
                            minHeight: '1px',
                            '.gatsby-image-wrapper': {
                                m: 0,
                                height: '100%',
                            },
                            height: '400px',
                            maxHeight: '400px',
                        }}
                    >
                        {featuredImage ? <GatsbyImage alt={title} image={img!} /> : null}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                            p: 3,
                        }}
                    >
                        <Heading
                            as="div"
                            variant="styles.h3"
                            sx={{
                                color: 'text',
                                mt: 3,
                                span: { mr: 2 },
                            }}
                        >
                            {pinned ? (
                                <span role="img" aria-label="A thumbtack (drawing pin)">
                                    📌
                                </span>
                            ) : null}
                            {title}
                        </Heading>
                        <Flex
                            sx={{
                                justifyContent: 'space-between',
                            }}
                        >
                            {dateModified ? (
                                <Text
                                    sx={{
                                        mb: 1,
                                        color: 'success',
                                    }}
                                >
                                    {format(new Date(dateModified), 'd-MMM-u')}
                                </Text>
                            ) : null}

                            {date ? (
                                <Text
                                    sx={{
                                        mb: 1,
                                        color: dateModified ? 'muted' : 'success',
                                        textDecoration: dateModified ? 'line-through' : 'none',
                                    }}
                                >
                                    {format(new Date(date), 'd-MMM-u')}
                                </Text>
                            ) : null}
                        </Flex>
                        <Text sx={{ mb: 1, color: 'text', wordBreak: 'break-word' }}>
                            {excerpt}
                        </Text>
                    </Box>
                    <Box
                        sx={{
                            p: 3,
                        }}
                    >
                        {tags
                            ? tags.map((tag, index) => {
                                  return (
                                      <Badge
                                          key={index}
                                          variant="primary"
                                          sx={{
                                              mr: 2,
                                              mb: 2,
                                              color: mix('muted', 'primary', index / tags.length),
                                              borderColor: mix(
                                                  'muted',
                                                  'primary',
                                                  index / tags.length
                                              ),
                                          }}
                                      >
                                          {tag}
                                      </Badge>
                                  );
                              })
                            : null}
                    </Box>
                    <Box sx={{ p: 3 }}>
                        <Text sx={{ color: 'secondary', textAlign: 'right' }}>
                            View {!date ? 'Project' : 'Post'}
                        </Text>
                    </Box>
                </Card>
            </MergedLink>
        </Box>
    );
};

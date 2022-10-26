import { useStaticQuery, graphql } from 'gatsby';
import { PostsTagsQuery } from '../../graphql-types';

type PostTagsQueryReturn = PostsTagsQuery['allMdx']['edges'];
type UseTags = (filter?: string) => PostTagsQueryReturn;
export const useTags: UseTags = filter => {
    const query: PostsTagsQuery = useStaticQuery(graphql`
        query postsTags {
            allMdx(
                filter: {
                    fields: { slug: { regex: "//posts/.+/" } }
                    frontmatter: { status: { ne: "draft" }, navigationLabel: { eq: null } }
                }
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        frontmatter {
                            tags
                            date
                            status
                            isPrivate
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (!filter)
        return query.allMdx.edges.filter(edge => edge?.node?.frontmatter?.isPrivate !== true);

    return query.allMdx.edges
        .map(edge => edge)
        .filter(
            edge =>
                edge?.node?.fields?.slug?.includes?.(filter) &&
                edge?.node?.frontmatter?.isPrivate !== true
        );
};

import { gql, GraphQLClient } from "graphql-request";

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com");
};

const myHashnodeURL = "drowr.hashnode.dev";

export const getAllPosts = async () => {
  const client = getClient();

  const allPosts = await client.request(
    gql`
        query allPosts {
            publication(host: "${myHashnodeURL}") {
                id
                title
                posts(first: 20) {
                    totalDocuments
                    edges {
                        node {
                            slug
                            url
                            brief
                            title
                            subtitle
                            hasLatexInPost
                            publishedAt
                            updatedAt
                            readTimeInMinutes
                            reactionCount
                            responseCount
                            publication {
                                id
                            }
                            seo {
                                title
                                description
                            }
                            coverImage {
                                url
                            }
                            author {
                                name
                                username
                                profilePicture
                            }
                            title
                            content {
                                markdown
                                html
                            }
                            ogMetaData {
                                image
                            }
                            tags {
                                id
                                name
                                slug
                            }
                            features {
                                tableOfContents {
                                    isEnabled
                                    items {
                                        id
                                        level
                                        parentId
                                        slug
                                        title
                                    }
                                }
                            }
                            preferences {
                                disableComments
                            }
                        }
                    }
                }
            }
        }
        `,
  );
  return allPosts;
};

export const getPost = async (slug: string) => {
  const client = getClient();

  const data = await client.request(
    gql`
        query postDetails($slug: String!) {
            publication(host: "${myHashnodeURL}") {
                id
                post(slug: $slug) {
                    title
                    subtitle
                    hasLatexInPost
                    publishedAt
                    updatedAt
                    readTimeInMinutes
                    tags {
                        id
                        name
                        slug
                    }
                    content{
                        markdown
                        html
                    }
                    seo {
                        title
                        description
                    }
                }
            }
        }
        `,
    { slug: slug },
  );

  return data.publication.post;
};

export const getAllPostsByTag = async (first, tagName) => {
  const client = getClient();

  const allPosts = await client.request(
    gql`
        query TagPostsByPublication {
            publication(host: "${myHashnodeURL}") {
                id
                title
                posts(first: ${first}, filter: { tagSlugs: ["${tagName}"] }) {
                    totalDocuments
                    edges {
                        node {
                            slug
                            url
                            brief
                            title
                            subtitle
                            hasLatexInPost
                            publishedAt
                            updatedAt
                            readTimeInMinutes
                            reactionCount
                            responseCount
                            publication {
                                id
                            }
                            seo {
                                title
                                description
                            }
                            coverImage {
                                url
                            }
                            author {
                                name
                                username
                                profilePicture
                            }
                            title
                            content {
                                markdown
                                html
                            }
                            ogMetaData {
                                image
                            }
                            tags {
                                id
                                name
                                slug
                            }
                            features {
                                tableOfContents {
                                    isEnabled
                                    items {
                                        id
                                        level
                                        parentId
                                        slug
                                        title
                                    }
                                }
                            }
                            preferences {
                                disableComments
                            }
                        }
                    }
                }
            }
        }
        `,
  );
  return allPosts;
};

// Static page created on Hashnode. Dashboard > Pages
export const getStaticPage = async (name) => {
  const client = getClient();

  const page = await client.request(
    gql`
        query PageByPublication {
            publication(host: "${myHashnodeURL}") {
                id
                url
                followersCount
                author {
                    name
                    username
                    profilePicture
                    followersCount
                }
                staticPage(slug: "${name}") {
                    id
                    title
                    slug
                    seo {
                        description
                    }
                    ogMetaData {
                        image
                    }
                    content {
                        markdown
                    }
                }
            }
        }
        `,
  );
  return page;
};

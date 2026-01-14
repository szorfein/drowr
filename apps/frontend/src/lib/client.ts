import { gql, GraphQLClient } from "graphql-request";

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com");
};

const myHashnodeURL = "drowr.hashnode.dev";

export const getAllPosts = async () => {
  const client = getClient();

  const allPosts = await client.request(gql`
      query allPosts {
        publication(host: "${myHashnodeURL}") {
          id
          title
          posts(first: 20) {
              edges {
                  node {
                      title
                      slug
                  }
              }
          }
        }
      }
  `);
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
              content{
                  html
              }
          }
        }
      }
      `,
    { slug: slug },
  );

  return data.publication.post;
};

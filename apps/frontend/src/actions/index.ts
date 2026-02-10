import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { gql, GraphQLClient } from "graphql-request";

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com");
};

const myHashnodeURL = "drowr.hashnode.dev";

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (input) => {
      console.log(`Action get ${input.email}`);

      const myHashnodeURL = "drowr.hashnode.dev";
      const client = getClient();

      const data = await client.request(
        gql`
          mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
            subscribeToNewsletter(input: $input) {
              status
            }
          }
        `,
        {
          input: {
            publicationId: "6967af603501e94f33fdd67e",
            email: input.email,
          },
        },
      );

      const dataStatus = data?.subscribeToNewsletter?.status;
      return { data: dataStatus };
    },
  }),
};

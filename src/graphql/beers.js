import { find } from 'lodash'

const beersSchema = `
  type Beers {
    id: ID!
    name: String!
    image_url: String
    description: String
  }
`;

export const resolvers = {
  Beers: {
    beers(parent, args) {
      return find(beersSchema, { id: args.id });
    },
  }
};
import { ApolloServer, gql, IResolverObject } from "apollo-server";
import fetch from "node-fetch";
import { RESTDataSource } from "apollo-datasource-rest";

export class RandomUserDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.randomuser.me/";
  }

  async getPerson() {
    const { results } = await this.get("");
    return results;
  }
}

const typeDefs = gql`
  type Person {
    gender: String
    email: String
    phone: String
  }
  type Query {
    randomPerson: [Person!]!
    randomPerson2: [Person!]!
  }
`;

const resolvers = {
  Query: {
    randomPerson: async () => {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      return data.results;
    },
    randomPerson2: (_: any, __: any, { dataSources }: {dataSources: any}) => {
      return dataSources.randomUserAPI.getPerson();
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    formAPI: new RandomUserDataSource()
  })
});

server.listen(5555).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
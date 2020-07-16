
import { ApolloServer } from 'apollo-server';
import { FormApiDataSource } from '../lib/form/datasource/form.datasource';
import { decodedToken } from './decoded';
import { typeDefs } from './server.typedefs';
import { resolvers } from './server.resolvers';
import { schemaDirectives } from './server.directives';

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  dataSources: () => ({
    formAPI: new FormApiDataSource()
  }),
  context: (context) => {
    const decode = decodedToken(context.req)
    return {
      projectId : context.req.headers.projectid,
      userid: context.req.headers.userid || decode.account_id,
      user : decode,
      authorization: context.req.headers.authorization,
      numperpage: context.req.headers.numperpage || 10,
      pagenumber: context.req.headers.pagenumber || 1
    };
  },
});

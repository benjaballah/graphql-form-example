import { server } from './server/server';

server.listen(process.env.GRAPHQL_PORT || 9090)
.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
.catch(err => {
  console.log(err);
});

import { GraphQLScalarType } from "graphql";

export const Any = new GraphQLScalarType({
  name: 'Any',
  description: 'The Any scalar type represents all types',
  serialize(value) {
    let result = value;
    // Implement custom behavior by setting the 'result' variable
    return result;
  }
});

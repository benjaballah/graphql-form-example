import { gql } from 'apollo-server';
import { FormTypes } from '../lib/form/types/form.types';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  # custom type

  # models
  ${FormTypes}

  # the schema allows the following query:

  # this schema allows the following mutation:
`;

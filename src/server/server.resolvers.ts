import { FormCategoriesResolvers } from "../lib/form/resolvers/form.resolvers";
import { GlobalTypesResolvers } from "./resolvers/types.resolvers";

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  ...GlobalTypesResolvers,
  ...FormCategoriesResolvers,
};

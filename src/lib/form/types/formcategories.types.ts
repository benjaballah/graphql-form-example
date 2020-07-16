export const FormCategoriesTypes = `
  directive @upper on FIELD_DEFINITION
  type FormCategories {
    id: ID!,
    name: String @upper,
    archive: Int
  }
  type FormCategoriesPage {
    data: [FormCategories],
    numPages: Int,
    numRows: Int,
    numPerPage: Int,
    pageNumber: Int
  }
`;

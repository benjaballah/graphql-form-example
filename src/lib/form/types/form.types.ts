import { FormCategoriesTypes } from "./formcategories.types";
import { FormTemplateTypes } from "./FormTemplates.types";
import { FormInstanceTypes } from "./forminstance.types";

export const FormTypes = `
  ${FormCategoriesTypes}
  ${FormTemplateTypes}
  ${FormInstanceTypes}
  type Query {
    FormCategories: FormCategoriesPage!
    FormCategoriesById(id: Int): FormCategories!
    FormTemplates(name: String, categoryId: Int, schema: Boolean): FormTemplatesPage!
    FormTemplatesById(id: Int): FormTemplates!
    FormInstances(name: String, formTemplateId: Int, schema: Boolean): FormInstancesPage!
    FormInstancesById(id: Int): FormInstances!
  }
`;

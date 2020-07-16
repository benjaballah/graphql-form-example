import { FormApiDataSource } from "../datasource/form.datasource";

export const FormCategoriesResolvers = {
  Query: {
    FormCategories: (_: any, __: any, { dataSources }: {dataSources: { formAPI: FormApiDataSource }}) => {
      return dataSources.formAPI.getFormCategories();
    },
    FormCategoriesById: (_: any, { id }: any, { dataSources }: {dataSources: { formAPI: FormApiDataSource }}) => {
      return dataSources.formAPI.getFormCategoriesById(id);
    },
    FormTemplates: (_: any, { name, categoryId, schema }: any, { dataSources }: {dataSources: { formAPI: FormApiDataSource }}) => {
      return dataSources.formAPI.getFormTemplates(name, categoryId, schema);
    }
    ,
    FormTemplatesById: (_: any, { id }: any, { dataSources }: {dataSources: { formAPI: FormApiDataSource }}) => {
      return dataSources.formAPI.getFormTemplatesById(id);
    },
    FormInstances: (_: any, { name, formTemplateId, schema }: any, { dataSources }: {dataSources: { formAPI: FormApiDataSource }}) => {
      return dataSources.formAPI.getFormInstances(name, formTemplateId, schema);
    }
    ,
    FormInstancesById: (_: any, { id }: any, { dataSources }: {dataSources: { formAPI: FormApiDataSource }}) => {
      return dataSources.formAPI.getFormInstancesById(id);
    }
  }
};
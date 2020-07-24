export const FormTemplateTypes = `
  type FormTemplateTree {
    id: ID,
    children: [FormTemplateTree]
  }
  type FormTemplateFields {
    id: ID!,
    type: String,
    label: String,
    isPhotoEnabled: Boolean,
    isCommentEnabled: Boolean,
    level: Int,
    defaultValue: String
  }
  type FormTemplatesSchema {
    fields: [FormTemplateFields],
    tree: [FormTemplateTree]
  }
  type FormTemplates {
    id: ID!,
    name: String,
    category_id: Int,
    icon_id: Int,
    created_by: Int,
    created_date: Int,
    updated_by: Int,
    updated_date: Int,
    archive: Int,
    reference_id: String,
    copied_id: Int,
    current_version: Int,
    schema: FormTemplatesSchema
  }
  type FormTemplatesPage {
    data: [FormTemplates],
    numPages: Int,
    numRows: Int,
    numPerPage: Int,
    pageNumber: Int
  }
`;

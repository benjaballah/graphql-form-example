export const FormInstanceTypes = `
  scalar Any

  type FieldsValue {
    value: Any,
    id: Int,
    comment: String,
    photos: [String],
    isFixed: Boolean,
    isLocked: Boolean,
    isSigned: Boolean
  }
  type FormInstanceSchema {
    id: Int,
    label: String,
    creation_date: Int,
    status: Int,
    fields: [FieldsValue]
  }
  type FormInstances {
    id: ID!,
    name: String,
    status: Int,
    reference_id: String,
    version: Int,
    created_by: Int,
    created_date: Int,
    updated_by: Int,
    updated_date: Int,
    archive: Int,
    step_id: Int,
    form_template_version_id: Int,
    map_location: String,
    map_abs_location: String,
    map_id: Int,
    bim_element_id: String,
    locked: Int,
    visual_identifier: Int,
    bim_model_id: Int,
    form_template_id: Int,
    schema: FormInstanceSchema,
    item14: String @deprecated(reason: "Use 'schema'")
  }
  type FormInstancesPage {
    data: [FormInstances],
    numPages: Int,
    numRows: Int,
    numPerPage: Int,
    pageNumber: Int
  }
`;

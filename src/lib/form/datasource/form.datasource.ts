import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { FormApiContext } from '../interface/form.interface';

export class FormApiDataSource extends RESTDataSource<FormApiContext> {

  constructor() {
    super();
    this.baseURL = process.env.DS_FORM_URL || 'http://localhost:2020';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('userid', this.context.userid);
    request.headers.set('authorization', this.context.authorization);
    request.headers.set('numperpage', this.context.numperpage);
    request.headers.set('pagenumber', this.context.pagenumber);
  }

  async getFormCategories() {
    return this.get(`/projects/${this.context.projectId}/formCategories`);
  }

  async getFormCategoriesById(id: number) {
    return this.get(`/projects/${this.context.projectId}/formCategories/${id}`);
  }

  async getFormTemplates(name?: string, categoryId?: number, schema?: boolean) {
    return this.get(`/projects/${this.context.projectId}/forms`, this.formatParam({name, categoryId, schema}));
  }

  async getFormTemplatesById(id: number) {
    return this.get(`/projects/${this.context.projectId}/forms/${id}`);
  }

  async getFormInstances(name?: string, formTemplateId?: number, schema?: boolean) {
    return this.get(`/projects/${this.context.projectId}/instances`, this.formatParam({name, form_template_id: formTemplateId, schema}));
  }

  async getFormInstancesById(id: number) {
    return this.get(`/projects/${this.context.projectId}/instances/${id}`);
  }

  private formatParam({...args}) {
    const objs: any = {};
    for (const [key, value] of Object.entries(args)) {
      if (value) {
        objs[key] = value;
      }
    }
    return objs;
  }
}

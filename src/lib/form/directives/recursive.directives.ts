import { SchemaDirectiveVisitor } from "apollo-server";
import { GraphQLField } from "graphql";

export class RecrusiveDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { url } = this.args;
    field.resolve = () => fetch(url);
  }
}

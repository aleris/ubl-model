import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'

export enum ExtensionContentField {

}



export class ExtensionContentFieldMeta {

}

export const ExtensionContentFieldMap = new Map([

])

export const ExtensionContentType: Type<ExtensionContentField> = {
  name: 'ExtensionContent',
  label: 'undefined',
  module: TypeModule.ext,
  definition: '',
  fields: ExtensionContentFieldMap,
}

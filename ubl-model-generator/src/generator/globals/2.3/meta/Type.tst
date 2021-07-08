import { FieldMeta } from './FieldMeta'

export enum TypeModule {
  cac = 'cac',
  cbc = 'cbc',
  doc = 'doc',
  ext = 'ext',
}

export type Type<TField> = {
  name: string
  label: string
  module: Module
  definition: string
  fields: Map<TField, FieldMeta<TField>>
}

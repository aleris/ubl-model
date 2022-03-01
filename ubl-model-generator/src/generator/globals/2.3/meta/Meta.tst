export enum UblModule {
  cac = 'cac',
  cbc = 'cbc',
  doc = 'doc',
  ext = 'ext',
}

export interface Meta {
  name: string
  label: string
  typeName: string
  definition: string
  module: UblModule
}

export enum FieldCardinality {
  UniOptional = '0..1',
  Uni = '1',
  MultiOptional = '0..n',
  Multi = '1..n',
}

export interface FieldMeta<E> extends Meta {
  field: E
  name: string
  label: string
  typeName: string
  definition: string
  module: UblModule
  cardinality: FieldCardinality
  alternativeBusinessTerms?: string
  examples?: string
}

export interface TypeMeta extends Meta {
  name: string
  label: string
  typeName: string,
  definition: string
  module: UblModule
}

export function isMulti(cardinality: FieldCardinality | undefined): boolean {
  if (cardinality === undefined) {
    return false
  }
  return cardinality === FieldCardinality.MultiOptional || cardinality === FieldCardinality.Multi
}

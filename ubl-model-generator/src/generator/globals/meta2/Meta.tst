export enum UblVersion {
 v20 = 'v2.0',
 v21 = 'v2.1',
 v22 = 'v2.2',
 v23 = 'v2.3',
}

export const AllVersions = [
  UblVersion.v20,
  UblVersion.v21,
  UblVersion.v22,
  UblVersion.v23,
]

export enum UblModule {
  ccts_cct = 'ccts-cct',
  udt = 'udt',
  cac = 'cac',
  cbc = 'cbc',
  doc = 'doc',
  ext = 'ext',
}

export interface Meta {
  module: UblModule
  name: string
  label: string
  definition: string
}

export enum Cardinality {
  UniOptional = '0..1',
  Uni = '1',
  MultiOptional = '0..n',
  Multi = '1..n',
}

export interface ElementMeta extends Meta {
  typeName: string
  cardinality: Cardinality
  alternativeBusinessTerms?: string
  examples?: string
  primitiveType?: string
  usageRule?: string
}

export interface TypeMeta extends Meta {
  elements?: ElementMeta[] | undefined
}

export function moduleAndName(meta: Meta): string {
    return `${meta.module}:${meta.name}`
}

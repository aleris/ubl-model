export enum FieldCardinality {
  UniOptional = '0..1',
  Uni = '1',
  MultiOptional = '0..n',
  Multi = '1..n',
}

export class FieldMeta<E> {
  constructor(
    public readonly field: E,
    public readonly name: string,
    public readonly label: string,
    public readonly typeName: string,
    public readonly definition: string,
    public readonly cardinality: FieldCardinality,
    public readonly module: FieldModule,
    public readonly alternativeBusinessTerms?: string,
    public readonly examples?: string,
  ) { }
}

export function isMulti(cardinality: FieldCardinality | undefined): boolean {
  if (cardinality === undefined) {
    return false
  }
  return cardinality === FieldCardinality.MultiOptional || cardinality === FieldCardinality.Multi
}

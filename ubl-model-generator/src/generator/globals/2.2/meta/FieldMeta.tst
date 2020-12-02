export class FieldMeta<E> {
  constructor(
    public readonly field: E,
    public readonly name: string,
    public readonly label: string,
    public readonly typeName: string,
    public readonly definition: string,
    public readonly cardinality: string,
    public readonly module: string,
    public readonly alternativeBusinessTerms?: string,
    public readonly examples?: string
  ) { }
}

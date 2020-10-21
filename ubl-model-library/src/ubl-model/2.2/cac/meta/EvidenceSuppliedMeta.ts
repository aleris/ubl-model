import { FieldMeta } from '../../FieldMeta'

export enum EvidenceSuppliedField {
  ID = 'ID'
}

export const EvidenceSuppliedFieldMetaID = new FieldMeta<EvidenceSuppliedField>(
  EvidenceSuppliedField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'The identifier of the referenced evidence.',
  '1',
  undefined,
  undefined
)

export class EvidenceSuppliedFieldMeta {
  public static readonly ID = EvidenceSuppliedFieldMetaID
}

export const EvidenceSuppliedFieldMap = new Map([
  [EvidenceSuppliedField.ID, EvidenceSuppliedFieldMetaID]
])

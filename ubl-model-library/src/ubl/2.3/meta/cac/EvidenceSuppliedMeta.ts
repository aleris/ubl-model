import { FieldMeta } from '../FieldMeta'

export enum EvidenceSuppliedField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID'
}

export const EvidenceSuppliedFieldMetaUBLExtensions = new FieldMeta<EvidenceSuppliedField>(
  EvidenceSuppliedField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EvidenceSuppliedFieldMetaID = new FieldMeta<EvidenceSuppliedField>(
  EvidenceSuppliedField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'The identifier of the referenced evidence.',
  '1',
  'cbc',
  undefined,
  undefined
)

export class EvidenceSuppliedFieldMeta {
  public static readonly UBLExtensions = EvidenceSuppliedFieldMetaUBLExtensions
  public static readonly ID = EvidenceSuppliedFieldMetaID
}

export const EvidenceSuppliedFieldMap = new Map([
  [EvidenceSuppliedField.UBLExtensions, EvidenceSuppliedFieldMetaUBLExtensions],
  [EvidenceSuppliedField.ID, EvidenceSuppliedFieldMetaID]
])

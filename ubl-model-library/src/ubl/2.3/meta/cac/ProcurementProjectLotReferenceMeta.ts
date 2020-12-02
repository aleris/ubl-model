import { FieldMeta } from '../FieldMeta'

export enum ProcurementProjectLotReferenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID'
}

export const ProcurementProjectLotReferenceFieldMetaUBLExtensions = new FieldMeta<ProcurementProjectLotReferenceField>(
  ProcurementProjectLotReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProcurementProjectLotReferenceFieldMetaID = new FieldMeta<ProcurementProjectLotReferenceField>(
  ProcurementProjectLotReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this procurement project lot.',
  '1',
  'cbc',
  undefined,
  undefined
)

export class ProcurementProjectLotReferenceFieldMeta {
  public static readonly UBLExtensions = ProcurementProjectLotReferenceFieldMetaUBLExtensions
  public static readonly ID = ProcurementProjectLotReferenceFieldMetaID
}

export const ProcurementProjectLotReferenceFieldMap = new Map([
  [ProcurementProjectLotReferenceField.UBLExtensions, ProcurementProjectLotReferenceFieldMetaUBLExtensions],
  [ProcurementProjectLotReferenceField.ID, ProcurementProjectLotReferenceFieldMetaID]
])

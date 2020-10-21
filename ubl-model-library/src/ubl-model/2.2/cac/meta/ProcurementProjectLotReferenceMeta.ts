import { FieldMeta } from '../../FieldMeta'

export enum ProcurementProjectLotReferenceField {
  ID = 'ID'
}

export const ProcurementProjectLotReferenceFieldMetaID = new FieldMeta<ProcurementProjectLotReferenceField>(
  ProcurementProjectLotReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this procurement project lot.',
  '1',
  undefined,
  undefined
)

export class ProcurementProjectLotReferenceFieldMeta {
  public static readonly ID = ProcurementProjectLotReferenceFieldMetaID
}

export const ProcurementProjectLotReferenceFieldMap = new Map([
  [ProcurementProjectLotReferenceField.ID, ProcurementProjectLotReferenceFieldMetaID]
])

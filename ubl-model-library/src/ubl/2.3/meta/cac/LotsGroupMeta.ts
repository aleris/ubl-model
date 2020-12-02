import { FieldMeta } from '../FieldMeta'

export enum LotsGroupField {
  UBLExtensions = 'UBLExtensions',
  LotLotsGroupID = 'LotLotsGroupID',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const LotsGroupFieldMetaUBLExtensions = new FieldMeta<LotsGroupField>(
  LotsGroupField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LotsGroupFieldMetaLotLotsGroupID = new FieldMeta<LotsGroupField>(
  LotsGroupField.LotLotsGroupID,
  'LotLotsGroupID',
  'Lot Lots Group',
  'Identifier',
  'An identifier for the lotsgroup.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const LotsGroupFieldMetaProcurementProjectLot = new FieldMeta<LotsGroupField>(
  LotsGroupField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'A Procurement project lot that is included in this LotsGroup.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class LotsGroupFieldMeta {
  public static readonly UBLExtensions = LotsGroupFieldMetaUBLExtensions
  public static readonly LotLotsGroupID = LotsGroupFieldMetaLotLotsGroupID
  public static readonly ProcurementProjectLot = LotsGroupFieldMetaProcurementProjectLot
}

export const LotsGroupFieldMap = new Map([
  [LotsGroupField.UBLExtensions, LotsGroupFieldMetaUBLExtensions],
  [LotsGroupField.LotLotsGroupID, LotsGroupFieldMetaLotLotsGroupID],
  [LotsGroupField.ProcurementProjectLot, LotsGroupFieldMetaProcurementProjectLot]
])

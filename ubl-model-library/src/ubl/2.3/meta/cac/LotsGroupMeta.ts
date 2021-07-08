import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ProcurementProjectLotType } from './ProcurementProjectLotMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LotsGroupField {
  UBLExtensions = 'UBLExtensions',
  LotLotsGroupID = 'LotLotsGroupID',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const LotsGroupFieldMetaUBLExtensions = new FieldMeta<LotsGroupField>(
  LotsGroupField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LotsGroupFieldMetaLotLotsGroupID = new FieldMeta<LotsGroupField>(
  LotsGroupField.LotLotsGroupID,
  'LotLotsGroupID',
  'Lot Lots Group',
  IdentifierType.name,
  'An identifier for the lotsgroup.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LotsGroupFieldMetaProcurementProjectLot = new FieldMeta<LotsGroupField>(
  LotsGroupField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'A Procurement project lot that is included in this LotsGroup.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const LotsGroupType: Type<LotsGroupField> = {
  name: 'LotsGroup',
  label: 'Lots Group',
  module: TypeModule.cac,
  definition: 'A class for defining set of lots.',
  fields: LotsGroupFieldMap,
}

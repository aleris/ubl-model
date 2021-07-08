import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RailTransportField {
  UBLExtensions = 'UBLExtensions',
  TrainID = 'TrainID',
  RailCarID = 'RailCarID'
}

export const RailTransportFieldMetaUBLExtensions = new FieldMeta<RailTransportField>(
  RailTransportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RailTransportFieldMetaTrainID = new FieldMeta<RailTransportField>(
  RailTransportField.TrainID,
  'TrainID',
  'Train Identifier',
  IdentifierType.name,
  'An identifier for the train used as the means of transport.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Train Number (WCO ID 167)',
  undefined
)

export const RailTransportFieldMetaRailCarID = new FieldMeta<RailTransportField>(
  RailTransportField.RailCarID,
  'RailCarID',
  'Rail Car Identifier',
  IdentifierType.name,
  'An identifier for the rail car on the train used as the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class RailTransportFieldMeta {
  public static readonly UBLExtensions = RailTransportFieldMetaUBLExtensions
  public static readonly TrainID = RailTransportFieldMetaTrainID
  public static readonly RailCarID = RailTransportFieldMetaRailCarID
}

export const RailTransportFieldMap = new Map([
  [RailTransportField.UBLExtensions, RailTransportFieldMetaUBLExtensions],
  [RailTransportField.TrainID, RailTransportFieldMetaTrainID],
  [RailTransportField.RailCarID, RailTransportFieldMetaRailCarID]
])

export const RailTransportType: Type<RailTransportField> = {
  name: 'RailTransport',
  label: 'Rail Transport',
  module: TypeModule.cac,
  definition: 'A class defining details about a train wagon used as a means of transport.',
  fields: RailTransportFieldMap,
}

import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AirTransportType } from './AirTransportMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DimensionType } from './DimensionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MaritimeTransportType } from './MaritimeTransportMeta'
import { PartyType } from './PartyMeta'
import { RailTransportType } from './RailTransportMeta'
import { RoadTransportType } from './RoadTransportMeta'
import { StowageType } from './StowageMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportMeansField {
  UBLExtensions = 'UBLExtensions',
  JourneyID = 'JourneyID',
  RegistrationNationalityID = 'RegistrationNationalityID',
  RegistrationNationality = 'RegistrationNationality',
  DirectionCode = 'DirectionCode',
  TransportMeansTypeCode = 'TransportMeansTypeCode',
  TradeServiceCode = 'TradeServiceCode',
  Stowage = 'Stowage',
  AirTransport = 'AirTransport',
  RoadTransport = 'RoadTransport',
  RailTransport = 'RailTransport',
  MaritimeTransport = 'MaritimeTransport',
  OwnerParty = 'OwnerParty',
  MeasurementDimension = 'MeasurementDimension'
}

export const TransportMeansFieldMetaUBLExtensions = new FieldMeta<TransportMeansField>(
  TransportMeansField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportMeansFieldMetaJourneyID = new FieldMeta<TransportMeansField>(
  TransportMeansField.JourneyID,
  'JourneyID',
  'Journey Identifier',
  IdentifierType.name,
  'An identifier for the regular service schedule of this means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Voyage Number, Scheduled Conveyance Identifier (WCO ID 205), Flight Number',
  undefined
)

export const TransportMeansFieldMetaRegistrationNationalityID = new FieldMeta<TransportMeansField>(
  TransportMeansField.RegistrationNationalityID,
  'RegistrationNationalityID',
  'Registration Nationality Identifier',
  IdentifierType.name,
  'An identifier for the country in which this means of transport is registered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Nationality of Means of Transport (WCO 175, 178 and 179)',
  'LIB'
)

export const TransportMeansFieldMetaRegistrationNationality = new FieldMeta<TransportMeansField>(
  TransportMeansField.RegistrationNationality,
  'RegistrationNationality',
  'Registration Nationality',
  TextType.name,
  'Text describing the country in which this means of transport is registered.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Flag of Vessel, Nationality of Ship',
  'Liberia'
)

export const TransportMeansFieldMetaDirectionCode = new FieldMeta<TransportMeansField>(
  TransportMeansField.DirectionCode,
  'DirectionCode',
  'Direction Code',
  CodeType.name,
  'A code signifying the direction of this means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Transit Direction',
  'North , East'
)

export const TransportMeansFieldMetaTransportMeansTypeCode = new FieldMeta<TransportMeansField>(
  TransportMeansField.TransportMeansTypeCode,
  'TransportMeansTypeCode',
  'Transport Means Type Code',
  CodeType.name,
  'A code signifying the type of this means of transport (truck, vessel, etc.).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportMeansFieldMetaTradeServiceCode = new FieldMeta<TransportMeansField>(
  TransportMeansField.TradeServiceCode,
  'TradeServiceCode',
  'Trade Service Code',
  CodeType.name,
  'A code signifying the service regularly provided by the carrier operating this means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportMeansFieldMetaStowage = new FieldMeta<TransportMeansField>(
  TransportMeansField.Stowage,
  'Stowage',
  'Stowage',
  StowageType.name,
  'The location within the means of transport where goods are to be or have been stowed.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportMeansFieldMetaAirTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.AirTransport,
  'AirTransport',
  'Air Transport',
  AirTransportType.name,
  'An aircraft used for transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportMeansFieldMetaRoadTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.RoadTransport,
  'RoadTransport',
  'Road Transport',
  RoadTransportType.name,
  'A vehicle used for road transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportMeansFieldMetaRailTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.RailTransport,
  'RailTransport',
  'Rail Transport',
  RailTransportType.name,
  'Equipment used for rail transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportMeansFieldMetaMaritimeTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.MaritimeTransport,
  'MaritimeTransport',
  'Maritime Transport',
  MaritimeTransportType.name,
  'A vessel used for transport by water (not only by sea).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportMeansFieldMetaOwnerParty = new FieldMeta<TransportMeansField>(
  TransportMeansField.OwnerParty,
  'OwnerParty',
  'Owner Party',
  PartyType.name,
  'The party that owns this means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportMeansFieldMetaMeasurementDimension = new FieldMeta<TransportMeansField>(
  TransportMeansField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of this means of transport.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportMeansFieldMeta {
  public static readonly UBLExtensions = TransportMeansFieldMetaUBLExtensions
  public static readonly JourneyID = TransportMeansFieldMetaJourneyID
  public static readonly RegistrationNationalityID = TransportMeansFieldMetaRegistrationNationalityID
  public static readonly RegistrationNationality = TransportMeansFieldMetaRegistrationNationality
  public static readonly DirectionCode = TransportMeansFieldMetaDirectionCode
  public static readonly TransportMeansTypeCode = TransportMeansFieldMetaTransportMeansTypeCode
  public static readonly TradeServiceCode = TransportMeansFieldMetaTradeServiceCode
  public static readonly Stowage = TransportMeansFieldMetaStowage
  public static readonly AirTransport = TransportMeansFieldMetaAirTransport
  public static readonly RoadTransport = TransportMeansFieldMetaRoadTransport
  public static readonly RailTransport = TransportMeansFieldMetaRailTransport
  public static readonly MaritimeTransport = TransportMeansFieldMetaMaritimeTransport
  public static readonly OwnerParty = TransportMeansFieldMetaOwnerParty
  public static readonly MeasurementDimension = TransportMeansFieldMetaMeasurementDimension
}

export const TransportMeansFieldMap = new Map([
  [TransportMeansField.UBLExtensions, TransportMeansFieldMetaUBLExtensions],
  [TransportMeansField.JourneyID, TransportMeansFieldMetaJourneyID],
  [TransportMeansField.RegistrationNationalityID, TransportMeansFieldMetaRegistrationNationalityID],
  [TransportMeansField.RegistrationNationality, TransportMeansFieldMetaRegistrationNationality],
  [TransportMeansField.DirectionCode, TransportMeansFieldMetaDirectionCode],
  [TransportMeansField.TransportMeansTypeCode, TransportMeansFieldMetaTransportMeansTypeCode],
  [TransportMeansField.TradeServiceCode, TransportMeansFieldMetaTradeServiceCode],
  [TransportMeansField.Stowage, TransportMeansFieldMetaStowage],
  [TransportMeansField.AirTransport, TransportMeansFieldMetaAirTransport],
  [TransportMeansField.RoadTransport, TransportMeansFieldMetaRoadTransport],
  [TransportMeansField.RailTransport, TransportMeansFieldMetaRailTransport],
  [TransportMeansField.MaritimeTransport, TransportMeansFieldMetaMaritimeTransport],
  [TransportMeansField.OwnerParty, TransportMeansFieldMetaOwnerParty],
  [TransportMeansField.MeasurementDimension, TransportMeansFieldMetaMeasurementDimension]
])

export const TransportMeansType: Type<TransportMeansField> = {
  name: 'TransportMeans',
  label: 'Transport Means',
  module: TypeModule.cac,
  definition: 'A class to describe a particular vehicle or vessel used for the conveyance of goods or persons.',
  fields: TransportMeansFieldMap,
}

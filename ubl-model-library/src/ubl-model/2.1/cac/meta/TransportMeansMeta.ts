import { FieldMeta } from '../../FieldMeta'

export enum TransportMeansField {
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

export const TransportMeansFieldMetaJourneyID = new FieldMeta<TransportMeansField>(
  TransportMeansField.JourneyID,
  'JourneyID',
  'Journey Identifier',
  'Identifier',
  'An identifier for the regular service schedule of this means of transport.',
  '0..1',
  'Voyage Number, Scheduled Conveyance Identifier (WCO ID 205), Flight Number',
  undefined
)

export const TransportMeansFieldMetaRegistrationNationalityID = new FieldMeta<TransportMeansField>(
  TransportMeansField.RegistrationNationalityID,
  'RegistrationNationalityID',
  'Nationality Identifier',
  'Identifier',
  'An identifier for the country in which this means of transport is registered.',
  '0..1',
  'Nationality of Means of Transport (WCO 175, 178 and 179)',
  'LIB'
)

export const TransportMeansFieldMetaRegistrationNationality = new FieldMeta<TransportMeansField>(
  TransportMeansField.RegistrationNationality,
  'RegistrationNationality',
  'Nationality',
  'Text',
  'Text describing the country in which this means of transport is registered.',
  '0..n',
  'Flag of Vessel, Nationality of Ship',
  'Liberia'
)

export const TransportMeansFieldMetaDirectionCode = new FieldMeta<TransportMeansField>(
  TransportMeansField.DirectionCode,
  'DirectionCode',
  'Direction Code',
  'Code',
  'A code signifying the direction of this means of transport.',
  '0..1',
  'Transit Direction',
  'North , East'
)

export const TransportMeansFieldMetaTransportMeansTypeCode = new FieldMeta<TransportMeansField>(
  TransportMeansField.TransportMeansTypeCode,
  'TransportMeansTypeCode',
  'Transport Means Type Code',
  'Code',
  'A code signifying the type of this means of transport (truck, vessel, etc.).',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaTradeServiceCode = new FieldMeta<TransportMeansField>(
  TransportMeansField.TradeServiceCode,
  'TradeServiceCode',
  'Trade Service Code',
  'Code',
  'A code signifying the service regularly provided by the carrier operating this means of transport.',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaStowage = new FieldMeta<TransportMeansField>(
  TransportMeansField.Stowage,
  'Stowage',
  'Stowage',
  'Stowage',
  'The location within the means of transport where goods are to be or have been stowed.',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaAirTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.AirTransport,
  'AirTransport',
  'Air Transport',
  'AirTransport',
  'An aircraft used for transport.',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaRoadTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.RoadTransport,
  'RoadTransport',
  'Road Transport',
  'RoadTransport',
  'A vehicle used for road transport.',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaRailTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.RailTransport,
  'RailTransport',
  'Rail Transport',
  'RailTransport',
  'Equipment used for rail transport.',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaMaritimeTransport = new FieldMeta<TransportMeansField>(
  TransportMeansField.MaritimeTransport,
  'MaritimeTransport',
  'Maritime Transport',
  'MaritimeTransport',
  'A vessel used for transport by water (not only by sea).',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaOwnerParty = new FieldMeta<TransportMeansField>(
  TransportMeansField.OwnerParty,
  'OwnerParty',
  'Party',
  'Party',
  'The party that owns this means of transport.',
  '0..1',
  undefined,
  undefined
)

export const TransportMeansFieldMetaMeasurementDimension = new FieldMeta<TransportMeansField>(
  TransportMeansField.MeasurementDimension,
  'MeasurementDimension',
  'Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of this means of transport.',
  '0..n',
  undefined,
  undefined
)

export class TransportMeansFieldMeta {
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

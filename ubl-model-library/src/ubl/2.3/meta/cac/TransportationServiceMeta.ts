import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CommodityClassificationType } from './CommodityClassificationMeta'
import { DateType } from '../cbc/DateMeta'
import { DimensionType } from './DimensionMeta'
import { EnvironmentalEmissionType } from './EnvironmentalEmissionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { ServiceFrequencyType } from './ServiceFrequencyMeta'
import { ShipmentStageType } from './ShipmentStageMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportEquipmentType } from './TransportEquipmentMeta'
import { TransportEventType } from './TransportEventMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportationServiceField {
  UBLExtensions = 'UBLExtensions',
  TransportServiceCode = 'TransportServiceCode',
  TariffClassCode = 'TariffClassCode',
  Priority = 'Priority',
  FreightRateClassCode = 'FreightRateClassCode',
  TransportationServiceDescription = 'TransportationServiceDescription',
  TransportationServiceDetailsURI = 'TransportationServiceDetailsURI',
  NominationDate = 'NominationDate',
  NominationTime = 'NominationTime',
  Name = 'Name',
  SequenceNumeric = 'SequenceNumeric',
  TransportEquipment = 'TransportEquipment',
  SupportedTransportEquipment = 'SupportedTransportEquipment',
  UnsupportedTransportEquipment = 'UnsupportedTransportEquipment',
  CommodityClassification = 'CommodityClassification',
  SupportedCommodityClassification = 'SupportedCommodityClassification',
  UnsupportedCommodityClassification = 'UnsupportedCommodityClassification',
  TotalCapacityDimension = 'TotalCapacityDimension',
  ShipmentStage = 'ShipmentStage',
  TransportEvent = 'TransportEvent',
  ResponsibleTransportServiceProviderParty = 'ResponsibleTransportServiceProviderParty',
  EnvironmentalEmission = 'EnvironmentalEmission',
  EstimatedDurationPeriod = 'EstimatedDurationPeriod',
  ScheduledServiceFrequency = 'ScheduledServiceFrequency'
}

export const TransportationServiceFieldMetaUBLExtensions = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaTransportServiceCode = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TransportServiceCode,
  'TransportServiceCode',
  'Transport Service Code',
  CodeType.name,
  'A code signifying the extent of this transportation service (e.g., door-to-door, port-to-port).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaTariffClassCode = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TariffClassCode,
  'TariffClassCode',
  'Tariff Class Code',
  CodeType.name,
  'A code signifying the tariff class applicable to this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Tariff Class Specifier',
  undefined
)

export const TransportationServiceFieldMetaPriority = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.Priority,
  'Priority',
  'Priority',
  TextType.name,
  'The priority of this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaFreightRateClassCode = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.FreightRateClassCode,
  'FreightRateClassCode',
  'Freight Rate Class Code',
  CodeType.name,
  'A code signifying the rate class for freight in this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Charge Basis',
  undefined
)

export const TransportationServiceFieldMetaTransportationServiceDescription = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TransportationServiceDescription,
  'TransportationServiceDescription',
  'Transportation Service Description',
  TextType.name,
  'Text describing this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaTransportationServiceDetailsURI = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TransportationServiceDetailsURI,
  'TransportationServiceDetailsURI',
  'Transportation Service Details URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of a document providing additional details regarding this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaNominationDate = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.NominationDate,
  'NominationDate',
  'Nomination Date',
  DateType.name,
  'In a transport contract, the deadline date by which this transportation service has to be booked. For example, if this service is scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15 February 2011.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaNominationTime = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.NominationTime,
  'NominationTime',
  'Nomination Time',
  TimeType.name,
  'In a transport contract, the deadline time by which this transportation service has to be booked. For example, if this service is scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15 February 2011 and the nomination time 4 p.m. at the latest.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaName = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaSequenceNumeric = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  NumericType.name,
  'A number indicating the order of this transportation service in a sequence of transportation services.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaTransportEquipment = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TransportEquipment,
  'TransportEquipment',
  'Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment used in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaSupportedTransportEquipment = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.SupportedTransportEquipment,
  'SupportedTransportEquipment',
  'Supported Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment supported in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaUnsupportedTransportEquipment = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.UnsupportedTransportEquipment,
  'UnsupportedTransportEquipment',
  'Unsupported Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment that is not supported in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaCommodityClassification = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.CommodityClassification,
  'CommodityClassification',
  'Commodity Classification',
  CommodityClassificationType.name,
  'A classification of this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaSupportedCommodityClassification = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.SupportedCommodityClassification,
  'SupportedCommodityClassification',
  'Supported Commodity Classification',
  CommodityClassificationType.name,
  'A classification (e.g., general cargo) for commodities that can be handled in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaUnsupportedCommodityClassification = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.UnsupportedCommodityClassification,
  'UnsupportedCommodityClassification',
  'Unsupported Commodity Classification',
  CommodityClassificationType.name,
  'A classification for commodities that cannot be handled in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaTotalCapacityDimension = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TotalCapacityDimension,
  'TotalCapacityDimension',
  'Total Capacity Dimension',
  DimensionType.name,
  'The total capacity or volume available in this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaShipmentStage = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.ShipmentStage,
  'ShipmentStage',
  'Shipment Stage',
  ShipmentStageType.name,
  'One of the stages of shipment in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaTransportEvent = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  TransportEventType.name,
  'One of the transport events taking place in this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaResponsibleTransportServiceProviderParty = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.ResponsibleTransportServiceProviderParty,
  'ResponsibleTransportServiceProviderParty',
  'Responsible Transport Service Provider Party',
  PartyType.name,
  'The transport service provider responsible for this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaEnvironmentalEmission = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.EnvironmentalEmission,
  'EnvironmentalEmission',
  'Environmental Emission',
  EnvironmentalEmissionType.name,
  'An environmental emission resulting from this transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaEstimatedDurationPeriod = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.EstimatedDurationPeriod,
  'EstimatedDurationPeriod',
  'Estimated Duration Period',
  PeriodType.name,
  'The estimated duration of this transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationServiceFieldMetaScheduledServiceFrequency = new FieldMeta<TransportationServiceField>(
  TransportationServiceField.ScheduledServiceFrequency,
  'ScheduledServiceFrequency',
  'Scheduled Service Frequency',
  ServiceFrequencyType.name,
  'A class to specify which day of the week a transport service is operational.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportationServiceFieldMeta {
  public static readonly UBLExtensions = TransportationServiceFieldMetaUBLExtensions
  public static readonly TransportServiceCode = TransportationServiceFieldMetaTransportServiceCode
  public static readonly TariffClassCode = TransportationServiceFieldMetaTariffClassCode
  public static readonly Priority = TransportationServiceFieldMetaPriority
  public static readonly FreightRateClassCode = TransportationServiceFieldMetaFreightRateClassCode
  public static readonly TransportationServiceDescription = TransportationServiceFieldMetaTransportationServiceDescription
  public static readonly TransportationServiceDetailsURI = TransportationServiceFieldMetaTransportationServiceDetailsURI
  public static readonly NominationDate = TransportationServiceFieldMetaNominationDate
  public static readonly NominationTime = TransportationServiceFieldMetaNominationTime
  public static readonly Name = TransportationServiceFieldMetaName
  public static readonly SequenceNumeric = TransportationServiceFieldMetaSequenceNumeric
  public static readonly TransportEquipment = TransportationServiceFieldMetaTransportEquipment
  public static readonly SupportedTransportEquipment = TransportationServiceFieldMetaSupportedTransportEquipment
  public static readonly UnsupportedTransportEquipment = TransportationServiceFieldMetaUnsupportedTransportEquipment
  public static readonly CommodityClassification = TransportationServiceFieldMetaCommodityClassification
  public static readonly SupportedCommodityClassification = TransportationServiceFieldMetaSupportedCommodityClassification
  public static readonly UnsupportedCommodityClassification = TransportationServiceFieldMetaUnsupportedCommodityClassification
  public static readonly TotalCapacityDimension = TransportationServiceFieldMetaTotalCapacityDimension
  public static readonly ShipmentStage = TransportationServiceFieldMetaShipmentStage
  public static readonly TransportEvent = TransportationServiceFieldMetaTransportEvent
  public static readonly ResponsibleTransportServiceProviderParty = TransportationServiceFieldMetaResponsibleTransportServiceProviderParty
  public static readonly EnvironmentalEmission = TransportationServiceFieldMetaEnvironmentalEmission
  public static readonly EstimatedDurationPeriod = TransportationServiceFieldMetaEstimatedDurationPeriod
  public static readonly ScheduledServiceFrequency = TransportationServiceFieldMetaScheduledServiceFrequency
}

export const TransportationServiceFieldMap = new Map([
  [TransportationServiceField.UBLExtensions, TransportationServiceFieldMetaUBLExtensions],
  [TransportationServiceField.TransportServiceCode, TransportationServiceFieldMetaTransportServiceCode],
  [TransportationServiceField.TariffClassCode, TransportationServiceFieldMetaTariffClassCode],
  [TransportationServiceField.Priority, TransportationServiceFieldMetaPriority],
  [TransportationServiceField.FreightRateClassCode, TransportationServiceFieldMetaFreightRateClassCode],
  [TransportationServiceField.TransportationServiceDescription, TransportationServiceFieldMetaTransportationServiceDescription],
  [TransportationServiceField.TransportationServiceDetailsURI, TransportationServiceFieldMetaTransportationServiceDetailsURI],
  [TransportationServiceField.NominationDate, TransportationServiceFieldMetaNominationDate],
  [TransportationServiceField.NominationTime, TransportationServiceFieldMetaNominationTime],
  [TransportationServiceField.Name, TransportationServiceFieldMetaName],
  [TransportationServiceField.SequenceNumeric, TransportationServiceFieldMetaSequenceNumeric],
  [TransportationServiceField.TransportEquipment, TransportationServiceFieldMetaTransportEquipment],
  [TransportationServiceField.SupportedTransportEquipment, TransportationServiceFieldMetaSupportedTransportEquipment],
  [TransportationServiceField.UnsupportedTransportEquipment, TransportationServiceFieldMetaUnsupportedTransportEquipment],
  [TransportationServiceField.CommodityClassification, TransportationServiceFieldMetaCommodityClassification],
  [TransportationServiceField.SupportedCommodityClassification, TransportationServiceFieldMetaSupportedCommodityClassification],
  [TransportationServiceField.UnsupportedCommodityClassification, TransportationServiceFieldMetaUnsupportedCommodityClassification],
  [TransportationServiceField.TotalCapacityDimension, TransportationServiceFieldMetaTotalCapacityDimension],
  [TransportationServiceField.ShipmentStage, TransportationServiceFieldMetaShipmentStage],
  [TransportationServiceField.TransportEvent, TransportationServiceFieldMetaTransportEvent],
  [TransportationServiceField.ResponsibleTransportServiceProviderParty, TransportationServiceFieldMetaResponsibleTransportServiceProviderParty],
  [TransportationServiceField.EnvironmentalEmission, TransportationServiceFieldMetaEnvironmentalEmission],
  [TransportationServiceField.EstimatedDurationPeriod, TransportationServiceFieldMetaEstimatedDurationPeriod],
  [TransportationServiceField.ScheduledServiceFrequency, TransportationServiceFieldMetaScheduledServiceFrequency]
])

export const TransportationServiceType: Type<TransportationServiceField> = {
  name: 'TransportationService',
  label: 'Transportation Service',
  module: TypeModule.cac,
  definition: 'A class to describe a transportation service.',
  fields: TransportationServiceFieldMap,
}

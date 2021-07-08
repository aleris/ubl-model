import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContactType } from './ContactMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from './LocationMeta'
import { PeriodType } from './PeriodMeta'
import { ShipmentType } from './ShipmentMeta'
import { SignatureType } from './SignatureMeta'
import { StatusType } from './StatusMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportEventField {
  UBLExtensions = 'UBLExtensions',
  IdentificationID = 'IdentificationID',
  OccurrenceDate = 'OccurrenceDate',
  OccurrenceTime = 'OccurrenceTime',
  TransportEventTypeCode = 'TransportEventTypeCode',
  Description = 'Description',
  CompletionIndicator = 'CompletionIndicator',
  ReportedShipment = 'ReportedShipment',
  CurrentStatus = 'CurrentStatus',
  Contact = 'Contact',
  Location = 'Location',
  Signature = 'Signature',
  Period = 'Period'
}

export const TransportEventFieldMetaUBLExtensions = new FieldMeta<TransportEventField>(
  TransportEventField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportEventFieldMetaIdentificationID = new FieldMeta<TransportEventField>(
  TransportEventField.IdentificationID,
  'IdentificationID',
  'Identification',
  IdentifierType.name,
  'An identifier for this transport event within an agreed event identification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEventFieldMetaOccurrenceDate = new FieldMeta<TransportEventField>(
  TransportEventField.OccurrenceDate,
  'OccurrenceDate',
  'Occurrence Date',
  DateType.name,
  'The date of this transport event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEventFieldMetaOccurrenceTime = new FieldMeta<TransportEventField>(
  TransportEventField.OccurrenceTime,
  'OccurrenceTime',
  'Occurrence Time',
  TimeType.name,
  'The time of this transport event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEventFieldMetaTransportEventTypeCode = new FieldMeta<TransportEventField>(
  TransportEventField.TransportEventTypeCode,
  'TransportEventTypeCode',
  'Transport Event Type Code',
  CodeType.name,
  'A code signifying the type of this transport event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEventFieldMetaDescription = new FieldMeta<TransportEventField>(
  TransportEventField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this transport event.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEventFieldMetaCompletionIndicator = new FieldMeta<TransportEventField>(
  TransportEventField.CompletionIndicator,
  'CompletionIndicator',
  'Completion Indicator',
  IndicatorType.name,
  'An indicator that this transport event has been completed (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEventFieldMetaReportedShipment = new FieldMeta<TransportEventField>(
  TransportEventField.ReportedShipment,
  'ReportedShipment',
  'Reported Shipment',
  ShipmentType.name,
  'The shipment involved in this transport event.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEventFieldMetaCurrentStatus = new FieldMeta<TransportEventField>(
  TransportEventField.CurrentStatus,
  'CurrentStatus',
  'Current Status',
  StatusType.name,
  'The current status of this transport event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEventFieldMetaContact = new FieldMeta<TransportEventField>(
  TransportEventField.Contact,
  'Contact',
  'Contact',
  ContactType.name,
  'A contact associated with this transport event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEventFieldMetaLocation = new FieldMeta<TransportEventField>(
  TransportEventField.Location,
  'Location',
  'Location',
  LocationType.name,
  'The location associated with this transport event.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEventFieldMetaSignature = new FieldMeta<TransportEventField>(
  TransportEventField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature that can be used to sign for an entry or an exit at a transport location (e.g., port terminal).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEventFieldMetaPeriod = new FieldMeta<TransportEventField>(
  TransportEventField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'A period of time associated with this transport event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportEventFieldMeta {
  public static readonly UBLExtensions = TransportEventFieldMetaUBLExtensions
  public static readonly IdentificationID = TransportEventFieldMetaIdentificationID
  public static readonly OccurrenceDate = TransportEventFieldMetaOccurrenceDate
  public static readonly OccurrenceTime = TransportEventFieldMetaOccurrenceTime
  public static readonly TransportEventTypeCode = TransportEventFieldMetaTransportEventTypeCode
  public static readonly Description = TransportEventFieldMetaDescription
  public static readonly CompletionIndicator = TransportEventFieldMetaCompletionIndicator
  public static readonly ReportedShipment = TransportEventFieldMetaReportedShipment
  public static readonly CurrentStatus = TransportEventFieldMetaCurrentStatus
  public static readonly Contact = TransportEventFieldMetaContact
  public static readonly Location = TransportEventFieldMetaLocation
  public static readonly Signature = TransportEventFieldMetaSignature
  public static readonly Period = TransportEventFieldMetaPeriod
}

export const TransportEventFieldMap = new Map([
  [TransportEventField.UBLExtensions, TransportEventFieldMetaUBLExtensions],
  [TransportEventField.IdentificationID, TransportEventFieldMetaIdentificationID],
  [TransportEventField.OccurrenceDate, TransportEventFieldMetaOccurrenceDate],
  [TransportEventField.OccurrenceTime, TransportEventFieldMetaOccurrenceTime],
  [TransportEventField.TransportEventTypeCode, TransportEventFieldMetaTransportEventTypeCode],
  [TransportEventField.Description, TransportEventFieldMetaDescription],
  [TransportEventField.CompletionIndicator, TransportEventFieldMetaCompletionIndicator],
  [TransportEventField.ReportedShipment, TransportEventFieldMetaReportedShipment],
  [TransportEventField.CurrentStatus, TransportEventFieldMetaCurrentStatus],
  [TransportEventField.Contact, TransportEventFieldMetaContact],
  [TransportEventField.Location, TransportEventFieldMetaLocation],
  [TransportEventField.Signature, TransportEventFieldMetaSignature],
  [TransportEventField.Period, TransportEventFieldMetaPeriod]
])

export const TransportEventType: Type<TransportEventField> = {
  name: 'TransportEvent',
  label: 'Transport Event',
  module: TypeModule.cac,
  definition: 'A class to describe a significant occurrence or happening related to the transportation of goods.',
  fields: TransportEventFieldMap,
}

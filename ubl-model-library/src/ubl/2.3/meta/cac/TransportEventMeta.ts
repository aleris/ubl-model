import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TransportEventFieldMetaIdentificationID = new FieldMeta<TransportEventField>(
  TransportEventField.IdentificationID,
  'IdentificationID',
  'Identification',
  'Identifier',
  'An identifier for this transport event within an agreed event identification scheme.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEventFieldMetaOccurrenceDate = new FieldMeta<TransportEventField>(
  TransportEventField.OccurrenceDate,
  'OccurrenceDate',
  'Occurrence Date',
  'Date',
  'The date of this transport event.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEventFieldMetaOccurrenceTime = new FieldMeta<TransportEventField>(
  TransportEventField.OccurrenceTime,
  'OccurrenceTime',
  'Occurrence Time',
  'Time',
  'The time of this transport event.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEventFieldMetaTransportEventTypeCode = new FieldMeta<TransportEventField>(
  TransportEventField.TransportEventTypeCode,
  'TransportEventTypeCode',
  'Transport Event Type Code',
  'Code',
  'A code signifying the type of this transport event.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEventFieldMetaDescription = new FieldMeta<TransportEventField>(
  TransportEventField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this transport event.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransportEventFieldMetaCompletionIndicator = new FieldMeta<TransportEventField>(
  TransportEventField.CompletionIndicator,
  'CompletionIndicator',
  'Completion Indicator',
  'Indicator',
  'An indicator that this transport event has been completed (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEventFieldMetaReportedShipment = new FieldMeta<TransportEventField>(
  TransportEventField.ReportedShipment,
  'ReportedShipment',
  'Reported Shipment',
  'Shipment',
  'The shipment involved in this transport event.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportEventFieldMetaCurrentStatus = new FieldMeta<TransportEventField>(
  TransportEventField.CurrentStatus,
  'CurrentStatus',
  'Current Status',
  'Status',
  'The current status of this transport event.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportEventFieldMetaContact = new FieldMeta<TransportEventField>(
  TransportEventField.Contact,
  'Contact',
  'Contact',
  'Contact',
  'A contact associated with this transport event.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TransportEventFieldMetaLocation = new FieldMeta<TransportEventField>(
  TransportEventField.Location,
  'Location',
  'Location',
  'Location',
  'The location associated with this transport event.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportEventFieldMetaSignature = new FieldMeta<TransportEventField>(
  TransportEventField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature that can be used to sign for an entry or an exit at a transport location (e.g., port terminal).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportEventFieldMetaPeriod = new FieldMeta<TransportEventField>(
  TransportEventField.Period,
  'Period',
  'Period',
  'Period',
  'A period of time associated with this transport event.',
  '0..n',
  'cac',
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

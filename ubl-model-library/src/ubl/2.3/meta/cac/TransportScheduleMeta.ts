import { FieldMeta } from '../FieldMeta'

export enum TransportScheduleField {
  UBLExtensions = 'UBLExtensions',
  SequenceNumeric = 'SequenceNumeric',
  ReferenceDate = 'ReferenceDate',
  ReferenceTime = 'ReferenceTime',
  ReliabilityPercent = 'ReliabilityPercent',
  Remarks = 'Remarks',
  StatusLocation = 'StatusLocation',
  ActualArrivalTransportEvent = 'ActualArrivalTransportEvent',
  ActualDepartureTransportEvent = 'ActualDepartureTransportEvent',
  EstimatedDepartureTransportEvent = 'EstimatedDepartureTransportEvent',
  EstimatedArrivalTransportEvent = 'EstimatedArrivalTransportEvent',
  PlannedDepartureTransportEvent = 'PlannedDepartureTransportEvent',
  PlannedArrivalTransportEvent = 'PlannedArrivalTransportEvent'
}

export const TransportScheduleFieldMetaUBLExtensions = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaSequenceNumeric = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  'Numeric',
  'A number indicating the order of this status in the sequence in which statuses are to be presented.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaReferenceDate = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ReferenceDate,
  'ReferenceDate',
  'Reference Date',
  'Date',
  'The reference date for the transport schedule status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaReferenceTime = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ReferenceTime,
  'ReferenceTime',
  'Reference Time',
  'Time',
  'The reference time for the transport schedule status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaReliabilityPercent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ReliabilityPercent,
  'ReliabilityPercent',
  'Reliability Percent',
  'Numeric',
  'The reliability of the transport schedule status, expressed as a percentage.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaRemarks = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.Remarks,
  'Remarks',
  'Remarks',
  'Text',
  'Remarks related to the transport schedule status.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaStatusLocation = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.StatusLocation,
  'StatusLocation',
  'Status Location',
  'Location',
  'The location for which status is reported.',
  '1',
  'cac',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaActualArrivalTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ActualArrivalTransportEvent,
  'ActualArrivalTransportEvent',
  'Actual Arrival Transport Event',
  'TransportEvent',
  'The actual arrival at a location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaActualDepartureTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ActualDepartureTransportEvent,
  'ActualDepartureTransportEvent',
  'Actual Departure Transport Event',
  'TransportEvent',
  'The actual departure from a location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaEstimatedDepartureTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.EstimatedDepartureTransportEvent,
  'EstimatedDepartureTransportEvent',
  'Estimated Departure Transport Event',
  'TransportEvent',
  'An estimated departure from a specified location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaEstimatedArrivalTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.EstimatedArrivalTransportEvent,
  'EstimatedArrivalTransportEvent',
  'Estimated Arrival Transport Event',
  'TransportEvent',
  'An estimated arrival at a specified location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaPlannedDepartureTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.PlannedDepartureTransportEvent,
  'PlannedDepartureTransportEvent',
  'Planned Departure Transport Event',
  'TransportEvent',
  'The planned departure from a specified location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TransportScheduleFieldMetaPlannedArrivalTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.PlannedArrivalTransportEvent,
  'PlannedArrivalTransportEvent',
  'Planned Arrival Transport Event',
  'TransportEvent',
  'The planned arrival at a specified location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class TransportScheduleFieldMeta {
  public static readonly UBLExtensions = TransportScheduleFieldMetaUBLExtensions
  public static readonly SequenceNumeric = TransportScheduleFieldMetaSequenceNumeric
  public static readonly ReferenceDate = TransportScheduleFieldMetaReferenceDate
  public static readonly ReferenceTime = TransportScheduleFieldMetaReferenceTime
  public static readonly ReliabilityPercent = TransportScheduleFieldMetaReliabilityPercent
  public static readonly Remarks = TransportScheduleFieldMetaRemarks
  public static readonly StatusLocation = TransportScheduleFieldMetaStatusLocation
  public static readonly ActualArrivalTransportEvent = TransportScheduleFieldMetaActualArrivalTransportEvent
  public static readonly ActualDepartureTransportEvent = TransportScheduleFieldMetaActualDepartureTransportEvent
  public static readonly EstimatedDepartureTransportEvent = TransportScheduleFieldMetaEstimatedDepartureTransportEvent
  public static readonly EstimatedArrivalTransportEvent = TransportScheduleFieldMetaEstimatedArrivalTransportEvent
  public static readonly PlannedDepartureTransportEvent = TransportScheduleFieldMetaPlannedDepartureTransportEvent
  public static readonly PlannedArrivalTransportEvent = TransportScheduleFieldMetaPlannedArrivalTransportEvent
}

export const TransportScheduleFieldMap = new Map([
  [TransportScheduleField.UBLExtensions, TransportScheduleFieldMetaUBLExtensions],
  [TransportScheduleField.SequenceNumeric, TransportScheduleFieldMetaSequenceNumeric],
  [TransportScheduleField.ReferenceDate, TransportScheduleFieldMetaReferenceDate],
  [TransportScheduleField.ReferenceTime, TransportScheduleFieldMetaReferenceTime],
  [TransportScheduleField.ReliabilityPercent, TransportScheduleFieldMetaReliabilityPercent],
  [TransportScheduleField.Remarks, TransportScheduleFieldMetaRemarks],
  [TransportScheduleField.StatusLocation, TransportScheduleFieldMetaStatusLocation],
  [TransportScheduleField.ActualArrivalTransportEvent, TransportScheduleFieldMetaActualArrivalTransportEvent],
  [TransportScheduleField.ActualDepartureTransportEvent, TransportScheduleFieldMetaActualDepartureTransportEvent],
  [TransportScheduleField.EstimatedDepartureTransportEvent, TransportScheduleFieldMetaEstimatedDepartureTransportEvent],
  [TransportScheduleField.EstimatedArrivalTransportEvent, TransportScheduleFieldMetaEstimatedArrivalTransportEvent],
  [TransportScheduleField.PlannedDepartureTransportEvent, TransportScheduleFieldMetaPlannedDepartureTransportEvent],
  [TransportScheduleField.PlannedArrivalTransportEvent, TransportScheduleFieldMetaPlannedArrivalTransportEvent]
])

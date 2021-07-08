import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { LocationType } from './LocationMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportEventType } from './TransportEventMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaSequenceNumeric = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  NumericType.name,
  'A number indicating the order of this status in the sequence in which statuses are to be presented.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaReferenceDate = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ReferenceDate,
  'ReferenceDate',
  'Reference Date',
  DateType.name,
  'The reference date for the transport schedule status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaReferenceTime = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ReferenceTime,
  'ReferenceTime',
  'Reference Time',
  TimeType.name,
  'The reference time for the transport schedule status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaReliabilityPercent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ReliabilityPercent,
  'ReliabilityPercent',
  'Reliability Percent',
  NumericType.name,
  'The reliability of the transport schedule status, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaRemarks = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.Remarks,
  'Remarks',
  'Remarks',
  TextType.name,
  'Remarks related to the transport schedule status.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaStatusLocation = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.StatusLocation,
  'StatusLocation',
  'Status Location',
  LocationType.name,
  'The location for which status is reported.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaActualArrivalTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ActualArrivalTransportEvent,
  'ActualArrivalTransportEvent',
  'Actual Arrival Transport Event',
  TransportEventType.name,
  'The actual arrival at a location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaActualDepartureTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.ActualDepartureTransportEvent,
  'ActualDepartureTransportEvent',
  'Actual Departure Transport Event',
  TransportEventType.name,
  'The actual departure from a location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaEstimatedDepartureTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.EstimatedDepartureTransportEvent,
  'EstimatedDepartureTransportEvent',
  'Estimated Departure Transport Event',
  TransportEventType.name,
  'An estimated departure from a specified location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaEstimatedArrivalTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.EstimatedArrivalTransportEvent,
  'EstimatedArrivalTransportEvent',
  'Estimated Arrival Transport Event',
  TransportEventType.name,
  'An estimated arrival at a specified location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaPlannedDepartureTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.PlannedDepartureTransportEvent,
  'PlannedDepartureTransportEvent',
  'Planned Departure Transport Event',
  TransportEventType.name,
  'The planned departure from a specified location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportScheduleFieldMetaPlannedArrivalTransportEvent = new FieldMeta<TransportScheduleField>(
  TransportScheduleField.PlannedArrivalTransportEvent,
  'PlannedArrivalTransportEvent',
  'Planned Arrival Transport Event',
  TransportEventType.name,
  'The planned arrival at a specified location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const TransportScheduleType: Type<TransportScheduleField> = {
  name: 'TransportSchedule',
  label: 'Transport Schedule',
  module: TypeModule.cac,
  definition: 'Describes the location and schedule relating to a transport means.',
  fields: TransportScheduleFieldMap,
}

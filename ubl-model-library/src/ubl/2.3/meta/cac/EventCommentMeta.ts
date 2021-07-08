import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EventCommentField {
  UBLExtensions = 'UBLExtensions',
  Comment = 'Comment',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime'
}

export const EventCommentFieldMetaUBLExtensions = new FieldMeta<EventCommentField>(
  EventCommentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EventCommentFieldMetaComment = new FieldMeta<EventCommentField>(
  EventCommentField.Comment,
  'Comment',
  'Comment',
  TextType.name,
  'Text commenting on the event.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventCommentFieldMetaIssueDate = new FieldMeta<EventCommentField>(
  EventCommentField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which this comment was made.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventCommentFieldMetaIssueTime = new FieldMeta<EventCommentField>(
  EventCommentField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which this comment was made.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class EventCommentFieldMeta {
  public static readonly UBLExtensions = EventCommentFieldMetaUBLExtensions
  public static readonly Comment = EventCommentFieldMetaComment
  public static readonly IssueDate = EventCommentFieldMetaIssueDate
  public static readonly IssueTime = EventCommentFieldMetaIssueTime
}

export const EventCommentFieldMap = new Map([
  [EventCommentField.UBLExtensions, EventCommentFieldMetaUBLExtensions],
  [EventCommentField.Comment, EventCommentFieldMetaComment],
  [EventCommentField.IssueDate, EventCommentFieldMetaIssueDate],
  [EventCommentField.IssueTime, EventCommentFieldMetaIssueTime]
])

export const EventCommentType: Type<EventCommentField> = {
  name: 'EventComment',
  label: 'Event Comment',
  module: TypeModule.cac,
  definition: 'A class to define comments about a retail event.',
  fields: EventCommentFieldMap,
}

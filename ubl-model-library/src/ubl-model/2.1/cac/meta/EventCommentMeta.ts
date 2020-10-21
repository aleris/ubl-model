import { FieldMeta } from '../../FieldMeta'

export enum EventCommentField {
  Comment = 'Comment',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime'
}

export const EventCommentFieldMetaComment = new FieldMeta<EventCommentField>(
  EventCommentField.Comment,
  'Comment',
  'Comment',
  'Text',
  'Text commenting on the event.',
  '1',
  undefined,
  undefined
)

export const EventCommentFieldMetaIssueDate = new FieldMeta<EventCommentField>(
  EventCommentField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which this comment was made.',
  '0..1',
  undefined,
  undefined
)

export const EventCommentFieldMetaIssueTime = new FieldMeta<EventCommentField>(
  EventCommentField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time at which this comment was made.',
  '0..1',
  undefined,
  undefined
)

export class EventCommentFieldMeta {
  public static readonly Comment = EventCommentFieldMetaComment
  public static readonly IssueDate = EventCommentFieldMetaIssueDate
  public static readonly IssueTime = EventCommentFieldMetaIssueTime
}

export const EventCommentFieldMap = new Map([
  [EventCommentField.Comment, EventCommentFieldMetaComment],
  [EventCommentField.IssueDate, EventCommentFieldMetaIssueDate],
  [EventCommentField.IssueTime, EventCommentFieldMetaIssueTime]
])

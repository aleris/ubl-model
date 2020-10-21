import { FieldMeta } from '../../FieldMeta'

export enum ClauseField {
  ID = 'ID',
  Content = 'Content'
}

export const ClauseFieldMetaID = new FieldMeta<ClauseField>(
  ClauseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this clause.',
  '0..1',
  undefined,
  undefined
)

export const ClauseFieldMetaContent = new FieldMeta<ClauseField>(
  ClauseField.Content,
  'Content',
  'Content',
  'Text',
  'The text of this clause.',
  '0..n',
  undefined,
  undefined
)

export class ClauseFieldMeta {
  public static readonly ID = ClauseFieldMetaID
  public static readonly Content = ClauseFieldMetaContent
}

export const ClauseFieldMap = new Map([
  [ClauseField.ID, ClauseFieldMetaID],
  [ClauseField.Content, ClauseFieldMetaContent]
])

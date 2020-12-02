import { FieldMeta } from '../FieldMeta'

export enum ClauseField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Content = 'Content'
}

export const ClauseFieldMetaUBLExtensions = new FieldMeta<ClauseField>(
  ClauseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ClauseFieldMetaID = new FieldMeta<ClauseField>(
  ClauseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this clause.',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  undefined
)

export class ClauseFieldMeta {
  public static readonly UBLExtensions = ClauseFieldMetaUBLExtensions
  public static readonly ID = ClauseFieldMetaID
  public static readonly Content = ClauseFieldMetaContent
}

export const ClauseFieldMap = new Map([
  [ClauseField.UBLExtensions, ClauseFieldMetaUBLExtensions],
  [ClauseField.ID, ClauseFieldMetaID],
  [ClauseField.Content, ClauseFieldMetaContent]
])

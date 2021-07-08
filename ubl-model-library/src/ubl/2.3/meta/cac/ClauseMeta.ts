import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ClauseField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Content = 'Content'
}

export const ClauseFieldMetaUBLExtensions = new FieldMeta<ClauseField>(
  ClauseField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ClauseFieldMetaID = new FieldMeta<ClauseField>(
  ClauseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this clause.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ClauseFieldMetaContent = new FieldMeta<ClauseField>(
  ClauseField.Content,
  'Content',
  'Content',
  TextType.name,
  'The text of this clause.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const ClauseType: Type<ClauseField> = {
  name: 'Clause',
  label: 'Clause',
  module: TypeModule.cac,
  definition: 'A class to define a clause (a distinct article or provision) in a contract, treaty, will, or other formal or legal written document requiring compliance.',
  fields: ClauseFieldMap,
}

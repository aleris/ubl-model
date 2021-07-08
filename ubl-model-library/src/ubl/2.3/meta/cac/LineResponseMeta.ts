import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { LineReferenceType } from './LineReferenceMeta'
import { ResponseType } from './ResponseMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LineResponseField {
  UBLExtensions = 'UBLExtensions',
  LineReference = 'LineReference',
  Response = 'Response'
}

export const LineResponseFieldMetaUBLExtensions = new FieldMeta<LineResponseField>(
  LineResponseField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LineResponseFieldMetaLineReference = new FieldMeta<LineResponseField>(
  LineResponseField.LineReference,
  'LineReference',
  'Line Reference',
  LineReferenceType.name,
  'A reference to the line being responded to.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const LineResponseFieldMetaResponse = new FieldMeta<LineResponseField>(
  LineResponseField.Response,
  'Response',
  'Response',
  ResponseType.name,
  'A response to the referenced line.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class LineResponseFieldMeta {
  public static readonly UBLExtensions = LineResponseFieldMetaUBLExtensions
  public static readonly LineReference = LineResponseFieldMetaLineReference
  public static readonly Response = LineResponseFieldMetaResponse
}

export const LineResponseFieldMap = new Map([
  [LineResponseField.UBLExtensions, LineResponseFieldMetaUBLExtensions],
  [LineResponseField.LineReference, LineResponseFieldMetaLineReference],
  [LineResponseField.Response, LineResponseFieldMetaResponse]
])

export const LineResponseType: Type<LineResponseField> = {
  name: 'LineResponse',
  label: 'Line Response',
  module: TypeModule.cac,
  definition: 'A class to describe responses to a line in a document.',
  fields: LineResponseFieldMap,
}

import { FieldMeta } from '../FieldMeta'

export enum LineResponseField {
  UBLExtensions = 'UBLExtensions',
  LineReference = 'LineReference',
  Response = 'Response'
}

export const LineResponseFieldMetaUBLExtensions = new FieldMeta<LineResponseField>(
  LineResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LineResponseFieldMetaLineReference = new FieldMeta<LineResponseField>(
  LineResponseField.LineReference,
  'LineReference',
  'Line Reference',
  'LineReference',
  'A reference to the line being responded to.',
  '1',
  'cac',
  undefined,
  undefined
)

export const LineResponseFieldMetaResponse = new FieldMeta<LineResponseField>(
  LineResponseField.Response,
  'Response',
  'Response',
  'Response',
  'A response to the referenced line.',
  '1..n',
  'cac',
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

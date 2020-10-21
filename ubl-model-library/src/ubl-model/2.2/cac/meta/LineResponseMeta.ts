import { FieldMeta } from '../../FieldMeta'

export enum LineResponseField {
  LineReference = 'LineReference',
  Response = 'Response'
}

export const LineResponseFieldMetaLineReference = new FieldMeta<LineResponseField>(
  LineResponseField.LineReference,
  'LineReference',
  'Line Reference',
  'LineReference',
  'A reference to the line being responded to.',
  '1',
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
  undefined,
  undefined
)

export class LineResponseFieldMeta {
  public static readonly LineReference = LineResponseFieldMetaLineReference
  public static readonly Response = LineResponseFieldMetaResponse
}

export const LineResponseFieldMap = new Map([
  [LineResponseField.LineReference, LineResponseFieldMetaLineReference],
  [LineResponseField.Response, LineResponseFieldMetaResponse]
])

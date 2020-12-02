import { FieldMeta } from '../FieldMeta'

export enum ResponseValueField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Description = 'Description',
  Response = 'Response',
  ResponseAmount = 'ResponseAmount',
  ResponseBinaryObject = 'ResponseBinaryObject',
  ResponseCode = 'ResponseCode',
  ResponseDate = 'ResponseDate',
  ResponseID = 'ResponseID',
  ResponseIndicator = 'ResponseIndicator',
  ResponseMeasure = 'ResponseMeasure',
  ResponseNumeric = 'ResponseNumeric',
  ResponseQuantity = 'ResponseQuantity',
  ResponseTime = 'ResponseTime',
  ResponseURI = 'ResponseURI'
}

export const ResponseValueFieldMetaUBLExtensions = new FieldMeta<ResponseValueField>(
  ResponseValueField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ResponseValueFieldMetaID = new FieldMeta<ResponseValueField>(
  ResponseValueField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier to refer to the criterion requirement response value.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaDescription = new FieldMeta<ResponseValueField>(
  ResponseValueField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the response value to the criterion requirement.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponse = new FieldMeta<ResponseValueField>(
  ResponseValueField.Response,
  'Response',
  'Response Text',
  'Text',
  'A text or name used as a reply to the criterion requirement.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseAmount = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseAmount,
  'ResponseAmount',
  'Response Amount',
  'Amount',
  'An amount used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseBinaryObject = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseBinaryObject,
  'ResponseBinaryObject',
  'Response Binary Object',
  'BinaryObject',
  'A binary graphic, picture, sound or video object used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseCode = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseCode,
  'ResponseCode',
  'Response Code',
  'Code',
  'A code used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseDate = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseDate,
  'ResponseDate',
  'Response Date',
  'Date',
  'A date used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseID = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseID,
  'ResponseID',
  'Response Identifier',
  'Identifier',
  'An identifier used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseIndicator = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseIndicator,
  'ResponseIndicator',
  'Response Indicator',
  'Indicator',
  'An indicator used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseMeasure = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseMeasure,
  'ResponseMeasure',
  'Response Measure',
  'Measure',
  'A measure used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseNumeric = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseNumeric,
  'ResponseNumeric',
  'Response Numeric',
  'Numeric',
  'A number, rate or percent used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseQuantity = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseQuantity,
  'ResponseQuantity',
  'Response Quantity',
  'Quantity',
  'A quantity used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseTime = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseTime,
  'ResponseTime',
  'Response Time',
  'Time',
  'A time used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseValueFieldMetaResponseURI = new FieldMeta<ResponseValueField>(
  ResponseValueField.ResponseURI,
  'ResponseURI',
  'Response URI',
  'Identifier',
  'A URI value used as a reply to the criterion requirement.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class ResponseValueFieldMeta {
  public static readonly UBLExtensions = ResponseValueFieldMetaUBLExtensions
  public static readonly ID = ResponseValueFieldMetaID
  public static readonly Description = ResponseValueFieldMetaDescription
  public static readonly Response = ResponseValueFieldMetaResponse
  public static readonly ResponseAmount = ResponseValueFieldMetaResponseAmount
  public static readonly ResponseBinaryObject = ResponseValueFieldMetaResponseBinaryObject
  public static readonly ResponseCode = ResponseValueFieldMetaResponseCode
  public static readonly ResponseDate = ResponseValueFieldMetaResponseDate
  public static readonly ResponseID = ResponseValueFieldMetaResponseID
  public static readonly ResponseIndicator = ResponseValueFieldMetaResponseIndicator
  public static readonly ResponseMeasure = ResponseValueFieldMetaResponseMeasure
  public static readonly ResponseNumeric = ResponseValueFieldMetaResponseNumeric
  public static readonly ResponseQuantity = ResponseValueFieldMetaResponseQuantity
  public static readonly ResponseTime = ResponseValueFieldMetaResponseTime
  public static readonly ResponseURI = ResponseValueFieldMetaResponseURI
}

export const ResponseValueFieldMap = new Map([
  [ResponseValueField.UBLExtensions, ResponseValueFieldMetaUBLExtensions],
  [ResponseValueField.ID, ResponseValueFieldMetaID],
  [ResponseValueField.Description, ResponseValueFieldMetaDescription],
  [ResponseValueField.Response, ResponseValueFieldMetaResponse],
  [ResponseValueField.ResponseAmount, ResponseValueFieldMetaResponseAmount],
  [ResponseValueField.ResponseBinaryObject, ResponseValueFieldMetaResponseBinaryObject],
  [ResponseValueField.ResponseCode, ResponseValueFieldMetaResponseCode],
  [ResponseValueField.ResponseDate, ResponseValueFieldMetaResponseDate],
  [ResponseValueField.ResponseID, ResponseValueFieldMetaResponseID],
  [ResponseValueField.ResponseIndicator, ResponseValueFieldMetaResponseIndicator],
  [ResponseValueField.ResponseMeasure, ResponseValueFieldMetaResponseMeasure],
  [ResponseValueField.ResponseNumeric, ResponseValueFieldMetaResponseNumeric],
  [ResponseValueField.ResponseQuantity, ResponseValueFieldMetaResponseQuantity],
  [ResponseValueField.ResponseTime, ResponseValueFieldMetaResponseTime],
  [ResponseValueField.ResponseURI, ResponseValueFieldMetaResponseURI]
])

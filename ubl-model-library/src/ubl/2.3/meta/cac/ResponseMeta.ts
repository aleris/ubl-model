import { FieldMeta } from '../FieldMeta'

export enum ResponseField {
  UBLExtensions = 'UBLExtensions',
  ReferenceID = 'ReferenceID',
  ResponseCode = 'ResponseCode',
  Description = 'Description',
  EffectiveDate = 'EffectiveDate',
  EffectiveTime = 'EffectiveTime',
  Status = 'Status'
}

export const ResponseFieldMetaUBLExtensions = new FieldMeta<ResponseField>(
  ResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ResponseFieldMetaReferenceID = new FieldMeta<ResponseField>(
  ResponseField.ReferenceID,
  'ReferenceID',
  'Reference',
  'Identifier',
  'An identifier for the section (or line) of the document to which this response applies.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseFieldMetaResponseCode = new FieldMeta<ResponseField>(
  ResponseField.ResponseCode,
  'ResponseCode',
  'Response Code',
  'Code',
  'A code signifying the type of response.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseFieldMetaDescription = new FieldMeta<ResponseField>(
  ResponseField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this response.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ResponseFieldMetaEffectiveDate = new FieldMeta<ResponseField>(
  ResponseField.EffectiveDate,
  'EffectiveDate',
  'Effective Date',
  'Date',
  'The date upon which this response is valid.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseFieldMetaEffectiveTime = new FieldMeta<ResponseField>(
  ResponseField.EffectiveTime,
  'EffectiveTime',
  'Effective Time',
  'Time',
  'The time at which this response is valid.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ResponseFieldMetaStatus = new FieldMeta<ResponseField>(
  ResponseField.Status,
  'Status',
  'Status',
  'Status',
  'A status report associated with this response.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ResponseFieldMeta {
  public static readonly UBLExtensions = ResponseFieldMetaUBLExtensions
  public static readonly ReferenceID = ResponseFieldMetaReferenceID
  public static readonly ResponseCode = ResponseFieldMetaResponseCode
  public static readonly Description = ResponseFieldMetaDescription
  public static readonly EffectiveDate = ResponseFieldMetaEffectiveDate
  public static readonly EffectiveTime = ResponseFieldMetaEffectiveTime
  public static readonly Status = ResponseFieldMetaStatus
}

export const ResponseFieldMap = new Map([
  [ResponseField.UBLExtensions, ResponseFieldMetaUBLExtensions],
  [ResponseField.ReferenceID, ResponseFieldMetaReferenceID],
  [ResponseField.ResponseCode, ResponseFieldMetaResponseCode],
  [ResponseField.Description, ResponseFieldMetaDescription],
  [ResponseField.EffectiveDate, ResponseFieldMetaEffectiveDate],
  [ResponseField.EffectiveTime, ResponseFieldMetaEffectiveTime],
  [ResponseField.Status, ResponseFieldMetaStatus]
])

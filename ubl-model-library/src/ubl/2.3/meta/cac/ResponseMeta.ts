import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { StatusType } from './StatusMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ResponseFieldMetaReferenceID = new FieldMeta<ResponseField>(
  ResponseField.ReferenceID,
  'ReferenceID',
  'Reference',
  IdentifierType.name,
  'An identifier for the section (or line) of the document to which this response applies.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResponseFieldMetaResponseCode = new FieldMeta<ResponseField>(
  ResponseField.ResponseCode,
  'ResponseCode',
  'Response Code',
  CodeType.name,
  'A code signifying the type of response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResponseFieldMetaDescription = new FieldMeta<ResponseField>(
  ResponseField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this response.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResponseFieldMetaEffectiveDate = new FieldMeta<ResponseField>(
  ResponseField.EffectiveDate,
  'EffectiveDate',
  'Effective Date',
  DateType.name,
  'The date upon which this response is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResponseFieldMetaEffectiveTime = new FieldMeta<ResponseField>(
  ResponseField.EffectiveTime,
  'EffectiveTime',
  'Effective Time',
  TimeType.name,
  'The time at which this response is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ResponseFieldMetaStatus = new FieldMeta<ResponseField>(
  ResponseField.Status,
  'Status',
  'Status',
  StatusType.name,
  'A status report associated with this response.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ResponseType: Type<ResponseField> = {
  name: 'Response',
  label: 'Response',
  module: TypeModule.cac,
  definition: 'A class to describe an application-level response to a document.',
  fields: ResponseFieldMap,
}

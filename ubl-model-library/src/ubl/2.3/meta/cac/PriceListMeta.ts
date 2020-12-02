import { FieldMeta } from '../FieldMeta'

export enum PriceListField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  StatusCode = 'StatusCode',
  ValidityPeriod = 'ValidityPeriod',
  PreviousPriceList = 'PreviousPriceList'
}

export const PriceListFieldMetaUBLExtensions = new FieldMeta<PriceListField>(
  PriceListField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PriceListFieldMetaID = new FieldMeta<PriceListField>(
  PriceListField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this price list.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PriceListFieldMetaStatusCode = new FieldMeta<PriceListField>(
  PriceListField.StatusCode,
  'StatusCode',
  'Status Code',
  'Code',
  'A code signifying whether this price list is an original, copy, revision, or cancellation.',
  '0..1',
  'cbc',
  undefined,
  'new - announcement only , new and available , deleted - announcement only'
)

export const PriceListFieldMetaValidityPeriod = new FieldMeta<PriceListField>(
  PriceListField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'A period during which this price list is valid.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PriceListFieldMetaPreviousPriceList = new FieldMeta<PriceListField>(
  PriceListField.PreviousPriceList,
  'PreviousPriceList',
  'Previous Price List',
  'PriceList',
  'The previous price list.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class PriceListFieldMeta {
  public static readonly UBLExtensions = PriceListFieldMetaUBLExtensions
  public static readonly ID = PriceListFieldMetaID
  public static readonly StatusCode = PriceListFieldMetaStatusCode
  public static readonly ValidityPeriod = PriceListFieldMetaValidityPeriod
  public static readonly PreviousPriceList = PriceListFieldMetaPreviousPriceList
}

export const PriceListFieldMap = new Map([
  [PriceListField.UBLExtensions, PriceListFieldMetaUBLExtensions],
  [PriceListField.ID, PriceListFieldMetaID],
  [PriceListField.StatusCode, PriceListFieldMetaStatusCode],
  [PriceListField.ValidityPeriod, PriceListFieldMetaValidityPeriod],
  [PriceListField.PreviousPriceList, PriceListFieldMetaPreviousPriceList]
])

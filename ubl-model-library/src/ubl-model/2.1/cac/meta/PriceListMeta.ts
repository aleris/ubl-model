import { FieldMeta } from '../../FieldMeta'

export enum PriceListField {
  ID = 'ID',
  StatusCode = 'StatusCode',
  ValidityPeriod = 'ValidityPeriod',
  PreviousPriceList = 'PreviousPriceList'
}

export const PriceListFieldMetaID = new FieldMeta<PriceListField>(
  PriceListField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this price list.',
  '0..1',
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
  undefined,
  'new - announcement only , new and available , deleted - announcement only'
)

export const PriceListFieldMetaValidityPeriod = new FieldMeta<PriceListField>(
  PriceListField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period during which this price list is valid.',
  '0..n',
  undefined,
  undefined
)

export const PriceListFieldMetaPreviousPriceList = new FieldMeta<PriceListField>(
  PriceListField.PreviousPriceList,
  'PreviousPriceList',
  'Price List',
  'PriceList',
  'The previous price list.',
  '0..1',
  undefined,
  undefined
)

export class PriceListFieldMeta {
  public static readonly ID = PriceListFieldMetaID
  public static readonly StatusCode = PriceListFieldMetaStatusCode
  public static readonly ValidityPeriod = PriceListFieldMetaValidityPeriod
  public static readonly PreviousPriceList = PriceListFieldMetaPreviousPriceList
}

export const PriceListFieldMap = new Map([
  [PriceListField.ID, PriceListFieldMetaID],
  [PriceListField.StatusCode, PriceListFieldMetaStatusCode],
  [PriceListField.ValidityPeriod, PriceListFieldMetaValidityPeriod],
  [PriceListField.PreviousPriceList, PriceListFieldMetaPreviousPriceList]
])

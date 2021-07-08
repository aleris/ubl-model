import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PriceListFieldMetaID = new FieldMeta<PriceListField>(
  PriceListField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this price list.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PriceListFieldMetaStatusCode = new FieldMeta<PriceListField>(
  PriceListField.StatusCode,
  'StatusCode',
  'Status Code',
  CodeType.name,
  'A code signifying whether this price list is an original, copy, revision, or cancellation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'new - announcement only , new and available , deleted - announcement only'
)

export const PriceListFieldMetaValidityPeriod = new FieldMeta<PriceListField>(
  PriceListField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period during which this price list is valid.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PriceListFieldMetaPreviousPriceList = new FieldMeta<PriceListField>(
  PriceListField.PreviousPriceList,
  'PreviousPriceList',
  'Previous Price List',
  PriceListType.name,
  'The previous price list.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const PriceListType: Type<PriceListField> = {
  name: 'PriceList',
  label: 'Price List',
  module: TypeModule.cac,
  definition: 'A class to describe a price list.',
  fields: PriceListFieldMap,
}

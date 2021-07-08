import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemPropertyType } from './ItemPropertyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LotIdentificationField {
  UBLExtensions = 'UBLExtensions',
  LotNumberID = 'LotNumberID',
  ExpiryDate = 'ExpiryDate',
  AdditionalItemProperty = 'AdditionalItemProperty'
}

export const LotIdentificationFieldMetaUBLExtensions = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LotIdentificationFieldMetaLotNumberID = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.LotNumberID,
  'LotNumberID',
  'Lot Number',
  IdentifierType.name,
  'An identifier for the lot.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LotIdentificationFieldMetaExpiryDate = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.ExpiryDate,
  'ExpiryDate',
  'Expiry Date',
  DateType.name,
  'The expiry date of the lot.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LotIdentificationFieldMetaAdditionalItemProperty = new FieldMeta<LotIdentificationField>(
  LotIdentificationField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Additional Item Property',
  ItemPropertyType.name,
  'An additional property of the lot.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class LotIdentificationFieldMeta {
  public static readonly UBLExtensions = LotIdentificationFieldMetaUBLExtensions
  public static readonly LotNumberID = LotIdentificationFieldMetaLotNumberID
  public static readonly ExpiryDate = LotIdentificationFieldMetaExpiryDate
  public static readonly AdditionalItemProperty = LotIdentificationFieldMetaAdditionalItemProperty
}

export const LotIdentificationFieldMap = new Map([
  [LotIdentificationField.UBLExtensions, LotIdentificationFieldMetaUBLExtensions],
  [LotIdentificationField.LotNumberID, LotIdentificationFieldMetaLotNumberID],
  [LotIdentificationField.ExpiryDate, LotIdentificationFieldMetaExpiryDate],
  [LotIdentificationField.AdditionalItemProperty, LotIdentificationFieldMetaAdditionalItemProperty]
])

export const LotIdentificationType: Type<LotIdentificationField> = {
  name: 'LotIdentification',
  label: 'Lot Identification',
  module: TypeModule.cac,
  definition: 'A class for defining a lot identifier (the identifier of a set of item instances that would be used in case of a recall of that item).',
  fields: LotIdentificationFieldMap,
}

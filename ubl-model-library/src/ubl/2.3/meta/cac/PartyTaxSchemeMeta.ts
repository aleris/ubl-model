import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TaxSchemeType } from './TaxSchemeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PartyTaxSchemeField {
  UBLExtensions = 'UBLExtensions',
  RegistrationName = 'RegistrationName',
  CompanyID = 'CompanyID',
  TaxLevelCode = 'TaxLevelCode',
  ExemptionReasonCode = 'ExemptionReasonCode',
  ExemptionReason = 'ExemptionReason',
  RegistrationAddress = 'RegistrationAddress',
  TaxScheme = 'TaxScheme'
}

export const PartyTaxSchemeFieldMetaUBLExtensions = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaRegistrationName = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.RegistrationName,
  'RegistrationName',
  'Registration Name',
  TextType.name,
  'The name of the party as registered with the relevant fiscal authority.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Microsoft Corporation'
)

export const PartyTaxSchemeFieldMetaCompanyID = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.CompanyID,
  'CompanyID',
  'Company Identifier',
  IdentifierType.name,
  'An identifier for the party assigned for tax purposes by the taxation authority.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'VAT Number',
  '3556625'
)

export const PartyTaxSchemeFieldMetaTaxLevelCode = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.TaxLevelCode,
  'TaxLevelCode',
  'Tax Level Code',
  CodeType.name,
  'A code signifying the tax level applicable to the party within this taxation scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaExemptionReasonCode = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.ExemptionReasonCode,
  'ExemptionReasonCode',
  'Exemption Reason Code',
  CodeType.name,
  'A reason for the party\'s exemption from tax, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaExemptionReason = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.ExemptionReason,
  'ExemptionReason',
  'Exemption Reason',
  TextType.name,
  'A reason for the party\'s exemption from tax, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaRegistrationAddress = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.RegistrationAddress,
  'RegistrationAddress',
  'Registration Address',
  AddressType.name,
  'The address of the party as registered for tax purposes.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaTaxScheme = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.TaxScheme,
  'TaxScheme',
  'Tax Scheme',
  TaxSchemeType.name,
  'The taxation scheme applicable to the party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class PartyTaxSchemeFieldMeta {
  public static readonly UBLExtensions = PartyTaxSchemeFieldMetaUBLExtensions
  public static readonly RegistrationName = PartyTaxSchemeFieldMetaRegistrationName
  public static readonly CompanyID = PartyTaxSchemeFieldMetaCompanyID
  public static readonly TaxLevelCode = PartyTaxSchemeFieldMetaTaxLevelCode
  public static readonly ExemptionReasonCode = PartyTaxSchemeFieldMetaExemptionReasonCode
  public static readonly ExemptionReason = PartyTaxSchemeFieldMetaExemptionReason
  public static readonly RegistrationAddress = PartyTaxSchemeFieldMetaRegistrationAddress
  public static readonly TaxScheme = PartyTaxSchemeFieldMetaTaxScheme
}

export const PartyTaxSchemeFieldMap = new Map([
  [PartyTaxSchemeField.UBLExtensions, PartyTaxSchemeFieldMetaUBLExtensions],
  [PartyTaxSchemeField.RegistrationName, PartyTaxSchemeFieldMetaRegistrationName],
  [PartyTaxSchemeField.CompanyID, PartyTaxSchemeFieldMetaCompanyID],
  [PartyTaxSchemeField.TaxLevelCode, PartyTaxSchemeFieldMetaTaxLevelCode],
  [PartyTaxSchemeField.ExemptionReasonCode, PartyTaxSchemeFieldMetaExemptionReasonCode],
  [PartyTaxSchemeField.ExemptionReason, PartyTaxSchemeFieldMetaExemptionReason],
  [PartyTaxSchemeField.RegistrationAddress, PartyTaxSchemeFieldMetaRegistrationAddress],
  [PartyTaxSchemeField.TaxScheme, PartyTaxSchemeFieldMetaTaxScheme]
])

export const PartyTaxSchemeType: Type<PartyTaxSchemeField> = {
  name: 'PartyTaxScheme',
  label: 'Party Tax Scheme',
  module: TypeModule.cac,
  definition: 'A class to describe a taxation scheme applying to a party.',
  fields: PartyTaxSchemeFieldMap,
}

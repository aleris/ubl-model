import { FieldMeta } from '../../FieldMeta'

export enum PartyTaxSchemeField {
  RegistrationName = 'RegistrationName',
  CompanyID = 'CompanyID',
  TaxLevelCode = 'TaxLevelCode',
  ExemptionReasonCode = 'ExemptionReasonCode',
  ExemptionReason = 'ExemptionReason',
  RegistrationAddress = 'RegistrationAddress',
  TaxScheme = 'TaxScheme'
}

export const PartyTaxSchemeFieldMetaRegistrationName = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.RegistrationName,
  'RegistrationName',
  'Name',
  'Text',
  'The name of the party as registered with the relevant fiscal authority.',
  '0..1',
  undefined,
  'Microsoft Corporation'
)

export const PartyTaxSchemeFieldMetaCompanyID = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.CompanyID,
  'CompanyID',
  'Company Identifier',
  'Identifier',
  'An identifier for the party assigned for tax purposes by the taxation authority.',
  '0..1',
  'VAT Number',
  '3556625'
)

export const PartyTaxSchemeFieldMetaTaxLevelCode = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.TaxLevelCode,
  'TaxLevelCode',
  'Tax Level Code',
  'Code',
  'A code signifying the tax level applicable to the party within this taxation scheme.',
  '0..1',
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaExemptionReasonCode = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.ExemptionReasonCode,
  'ExemptionReasonCode',
  'Exemption Reason Code',
  'Code',
  'A reason for the party\'s exemption from tax, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaExemptionReason = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.ExemptionReason,
  'ExemptionReason',
  'Reason',
  'Text',
  'A reason for the party\'s exemption from tax, expressed as text.',
  '0..n',
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaRegistrationAddress = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.RegistrationAddress,
  'RegistrationAddress',
  'Address',
  'Address',
  'The address of the party as registered for tax purposes.',
  '0..1',
  undefined,
  undefined
)

export const PartyTaxSchemeFieldMetaTaxScheme = new FieldMeta<PartyTaxSchemeField>(
  PartyTaxSchemeField.TaxScheme,
  'TaxScheme',
  'Tax Scheme',
  'TaxScheme',
  'The taxation scheme applicable to the party.',
  '1',
  undefined,
  undefined
)

export class PartyTaxSchemeFieldMeta {
  public static readonly RegistrationName = PartyTaxSchemeFieldMetaRegistrationName
  public static readonly CompanyID = PartyTaxSchemeFieldMetaCompanyID
  public static readonly TaxLevelCode = PartyTaxSchemeFieldMetaTaxLevelCode
  public static readonly ExemptionReasonCode = PartyTaxSchemeFieldMetaExemptionReasonCode
  public static readonly ExemptionReason = PartyTaxSchemeFieldMetaExemptionReason
  public static readonly RegistrationAddress = PartyTaxSchemeFieldMetaRegistrationAddress
  public static readonly TaxScheme = PartyTaxSchemeFieldMetaTaxScheme
}

export const PartyTaxSchemeFieldMap = new Map([
  [PartyTaxSchemeField.RegistrationName, PartyTaxSchemeFieldMetaRegistrationName],
  [PartyTaxSchemeField.CompanyID, PartyTaxSchemeFieldMetaCompanyID],
  [PartyTaxSchemeField.TaxLevelCode, PartyTaxSchemeFieldMetaTaxLevelCode],
  [PartyTaxSchemeField.ExemptionReasonCode, PartyTaxSchemeFieldMetaExemptionReasonCode],
  [PartyTaxSchemeField.ExemptionReason, PartyTaxSchemeFieldMetaExemptionReason],
  [PartyTaxSchemeField.RegistrationAddress, PartyTaxSchemeFieldMetaRegistrationAddress],
  [PartyTaxSchemeField.TaxScheme, PartyTaxSchemeFieldMetaTaxScheme]
])

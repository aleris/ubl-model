import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CorporateRegistrationSchemeType } from './CorporateRegistrationSchemeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from './PartyMeta'
import { ShareholderPartyType } from './ShareholderPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PartyLegalEntityField {
  UBLExtensions = 'UBLExtensions',
  RegistrationName = 'RegistrationName',
  CompanyID = 'CompanyID',
  RegistrationDate = 'RegistrationDate',
  RegistrationExpirationDate = 'RegistrationExpirationDate',
  CompanyLegalFormCode = 'CompanyLegalFormCode',
  CompanyLegalForm = 'CompanyLegalForm',
  SoleProprietorshipIndicator = 'SoleProprietorshipIndicator',
  CompanyLiquidationStatusCode = 'CompanyLiquidationStatusCode',
  CorporateStockAmount = 'CorporateStockAmount',
  FullyPaidSharesIndicator = 'FullyPaidSharesIndicator',
  RegistrationAddress = 'RegistrationAddress',
  CorporateRegistrationScheme = 'CorporateRegistrationScheme',
  HeadOfficeParty = 'HeadOfficeParty',
  ShareholderParty = 'ShareholderParty'
}

export const PartyLegalEntityFieldMetaUBLExtensions = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaRegistrationName = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationName,
  'RegistrationName',
  'Registration Name',
  TextType.name,
  'The name of the party as registered with the relevant legal authority.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Microsoft Corporation'
)

export const PartyLegalEntityFieldMetaCompanyID = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyID,
  'CompanyID',
  'Company Identifier',
  IdentifierType.name,
  'An identifier for the party as registered within a company registration scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Business Registration Number, Company Number',
  '3556625'
)

export const PartyLegalEntityFieldMetaRegistrationDate = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationDate,
  'RegistrationDate',
  'Registration Date',
  DateType.name,
  'The registration date of the CompanyID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaRegistrationExpirationDate = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationExpirationDate,
  'RegistrationExpirationDate',
  'Registration Expiration Date',
  DateType.name,
  'The date upon which a registration expires (e.g., registration for an import/export license).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCompanyLegalFormCode = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyLegalFormCode,
  'CompanyLegalFormCode',
  'Company Legal Form Code',
  CodeType.name,
  'A code signifying the party\'s legal status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Legal Status',
  undefined
)

export const PartyLegalEntityFieldMetaCompanyLegalForm = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyLegalForm,
  'CompanyLegalForm',
  'Company Legal Form',
  TextType.name,
  'The company legal status, expressed as a text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaSoleProprietorshipIndicator = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.SoleProprietorshipIndicator,
  'SoleProprietorshipIndicator',
  'Sole Proprietorship Indicator',
  IndicatorType.name,
  'An indicator that the company is owned and controlled by one person (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCompanyLiquidationStatusCode = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyLiquidationStatusCode,
  'CompanyLiquidationStatusCode',
  'Company Liquidation Status Code',
  CodeType.name,
  'A code signifying the party\'s liquidation status.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCorporateStockAmount = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CorporateStockAmount,
  'CorporateStockAmount',
  'Corporate Stock Amount',
  AmountType.name,
  'The number of shares in the capital stock of a corporation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaFullyPaidSharesIndicator = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.FullyPaidSharesIndicator,
  'FullyPaidSharesIndicator',
  'Fully Paid Shares Indicator',
  IndicatorType.name,
  'An indicator that all shares of corporate stock have been paid by shareholders (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaRegistrationAddress = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationAddress,
  'RegistrationAddress',
  'Registration Address',
  AddressType.name,
  'The registered address of the party within a corporate registration scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCorporateRegistrationScheme = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CorporateRegistrationScheme,
  'CorporateRegistrationScheme',
  'Corporate Registration Scheme',
  CorporateRegistrationSchemeType.name,
  'The corporate registration scheme used to register the party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaHeadOfficeParty = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.HeadOfficeParty,
  'HeadOfficeParty',
  'Head Office Party',
  PartyType.name,
  'The head office of the legal entity',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaShareholderParty = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.ShareholderParty,
  'ShareholderParty',
  'Shareholder Party',
  ShareholderPartyType.name,
  'A party owning shares in this legal entity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PartyLegalEntityFieldMeta {
  public static readonly UBLExtensions = PartyLegalEntityFieldMetaUBLExtensions
  public static readonly RegistrationName = PartyLegalEntityFieldMetaRegistrationName
  public static readonly CompanyID = PartyLegalEntityFieldMetaCompanyID
  public static readonly RegistrationDate = PartyLegalEntityFieldMetaRegistrationDate
  public static readonly RegistrationExpirationDate = PartyLegalEntityFieldMetaRegistrationExpirationDate
  public static readonly CompanyLegalFormCode = PartyLegalEntityFieldMetaCompanyLegalFormCode
  public static readonly CompanyLegalForm = PartyLegalEntityFieldMetaCompanyLegalForm
  public static readonly SoleProprietorshipIndicator = PartyLegalEntityFieldMetaSoleProprietorshipIndicator
  public static readonly CompanyLiquidationStatusCode = PartyLegalEntityFieldMetaCompanyLiquidationStatusCode
  public static readonly CorporateStockAmount = PartyLegalEntityFieldMetaCorporateStockAmount
  public static readonly FullyPaidSharesIndicator = PartyLegalEntityFieldMetaFullyPaidSharesIndicator
  public static readonly RegistrationAddress = PartyLegalEntityFieldMetaRegistrationAddress
  public static readonly CorporateRegistrationScheme = PartyLegalEntityFieldMetaCorporateRegistrationScheme
  public static readonly HeadOfficeParty = PartyLegalEntityFieldMetaHeadOfficeParty
  public static readonly ShareholderParty = PartyLegalEntityFieldMetaShareholderParty
}

export const PartyLegalEntityFieldMap = new Map([
  [PartyLegalEntityField.UBLExtensions, PartyLegalEntityFieldMetaUBLExtensions],
  [PartyLegalEntityField.RegistrationName, PartyLegalEntityFieldMetaRegistrationName],
  [PartyLegalEntityField.CompanyID, PartyLegalEntityFieldMetaCompanyID],
  [PartyLegalEntityField.RegistrationDate, PartyLegalEntityFieldMetaRegistrationDate],
  [PartyLegalEntityField.RegistrationExpirationDate, PartyLegalEntityFieldMetaRegistrationExpirationDate],
  [PartyLegalEntityField.CompanyLegalFormCode, PartyLegalEntityFieldMetaCompanyLegalFormCode],
  [PartyLegalEntityField.CompanyLegalForm, PartyLegalEntityFieldMetaCompanyLegalForm],
  [PartyLegalEntityField.SoleProprietorshipIndicator, PartyLegalEntityFieldMetaSoleProprietorshipIndicator],
  [PartyLegalEntityField.CompanyLiquidationStatusCode, PartyLegalEntityFieldMetaCompanyLiquidationStatusCode],
  [PartyLegalEntityField.CorporateStockAmount, PartyLegalEntityFieldMetaCorporateStockAmount],
  [PartyLegalEntityField.FullyPaidSharesIndicator, PartyLegalEntityFieldMetaFullyPaidSharesIndicator],
  [PartyLegalEntityField.RegistrationAddress, PartyLegalEntityFieldMetaRegistrationAddress],
  [PartyLegalEntityField.CorporateRegistrationScheme, PartyLegalEntityFieldMetaCorporateRegistrationScheme],
  [PartyLegalEntityField.HeadOfficeParty, PartyLegalEntityFieldMetaHeadOfficeParty],
  [PartyLegalEntityField.ShareholderParty, PartyLegalEntityFieldMetaShareholderParty]
])

export const PartyLegalEntityType: Type<PartyLegalEntityField> = {
  name: 'PartyLegalEntity',
  label: 'Party Legal Entity',
  module: TypeModule.cac,
  definition: 'A class to describe a party as a legal entity.',
  fields: PartyLegalEntityFieldMap,
}

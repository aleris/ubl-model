import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaRegistrationName = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationName,
  'RegistrationName',
  'Registration Name',
  'Text',
  'The name of the party as registered with the relevant legal authority.',
  '0..1',
  'cbc',
  undefined,
  'Microsoft Corporation'
)

export const PartyLegalEntityFieldMetaCompanyID = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyID,
  'CompanyID',
  'Company Identifier',
  'Identifier',
  'An identifier for the party as registered within a company registration scheme.',
  '0..1',
  'cbc',
  'Business Registration Number, Company Number',
  '3556625'
)

export const PartyLegalEntityFieldMetaRegistrationDate = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationDate,
  'RegistrationDate',
  'Registration Date',
  'Date',
  'The registration date of the CompanyID.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaRegistrationExpirationDate = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationExpirationDate,
  'RegistrationExpirationDate',
  'Registration Expiration Date',
  'Date',
  'The date upon which a registration expires (e.g., registration for an import/export license).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCompanyLegalFormCode = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyLegalFormCode,
  'CompanyLegalFormCode',
  'Company Legal Form Code',
  'Code',
  'A code signifying the party\'s legal status.',
  '0..1',
  'cbc',
  'Legal Status',
  undefined
)

export const PartyLegalEntityFieldMetaCompanyLegalForm = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyLegalForm,
  'CompanyLegalForm',
  'Company Legal Form',
  'Text',
  'The company legal status, expressed as a text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaSoleProprietorshipIndicator = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.SoleProprietorshipIndicator,
  'SoleProprietorshipIndicator',
  'Sole Proprietorship Indicator',
  'Indicator',
  'An indicator that the company is owned and controlled by one person (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCompanyLiquidationStatusCode = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CompanyLiquidationStatusCode,
  'CompanyLiquidationStatusCode',
  'Company Liquidation Status Code',
  'Code',
  'A code signifying the party\'s liquidation status.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCorporateStockAmount = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CorporateStockAmount,
  'CorporateStockAmount',
  'Corporate Stock Amount',
  'Amount',
  'The number of shares in the capital stock of a corporation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaFullyPaidSharesIndicator = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.FullyPaidSharesIndicator,
  'FullyPaidSharesIndicator',
  'Fully Paid Shares Indicator',
  'Indicator',
  'An indicator that all shares of corporate stock have been paid by shareholders (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaRegistrationAddress = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.RegistrationAddress,
  'RegistrationAddress',
  'Registration Address',
  'Address',
  'The registered address of the party within a corporate registration scheme.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaCorporateRegistrationScheme = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.CorporateRegistrationScheme,
  'CorporateRegistrationScheme',
  'Corporate Registration Scheme',
  'CorporateRegistrationScheme',
  'The corporate registration scheme used to register the party.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaHeadOfficeParty = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.HeadOfficeParty,
  'HeadOfficeParty',
  'Head Office Party',
  'Party',
  'The head office of the legal entity',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PartyLegalEntityFieldMetaShareholderParty = new FieldMeta<PartyLegalEntityField>(
  PartyLegalEntityField.ShareholderParty,
  'ShareholderParty',
  'Shareholder Party',
  'ShareholderParty',
  'A party owning shares in this legal entity.',
  '0..n',
  'cac',
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

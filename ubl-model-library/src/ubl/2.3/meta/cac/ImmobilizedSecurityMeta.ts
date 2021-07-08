import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ImmobilizedSecurityField {
  UBLExtensions = 'UBLExtensions',
  ImmobilizationCertificateID = 'ImmobilizationCertificateID',
  SecurityID = 'SecurityID',
  IssueDate = 'IssueDate',
  FaceValueAmount = 'FaceValueAmount',
  MarketValueAmount = 'MarketValueAmount',
  SharesNumberQuantity = 'SharesNumberQuantity',
  IssuerParty = 'IssuerParty'
}

export const ImmobilizedSecurityFieldMetaUBLExtensions = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaImmobilizationCertificateID = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.ImmobilizationCertificateID,
  'ImmobilizationCertificateID',
  'Immobilization Certificate Identifier',
  IdentifierType.name,
  'An identifier for the certificate of this immobilized security.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaSecurityID = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.SecurityID,
  'SecurityID',
  'Security Identifier',
  IdentifierType.name,
  'An identifier for the security being immobilized.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaIssueDate = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which this immobilized security was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaFaceValueAmount = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.FaceValueAmount,
  'FaceValueAmount',
  'Face Value',
  AmountType.name,
  'The value of the security on the day it was immobilized.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaMarketValueAmount = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.MarketValueAmount,
  'MarketValueAmount',
  'Market Value',
  AmountType.name,
  'The current market value of the immobilized security.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaSharesNumberQuantity = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.SharesNumberQuantity,
  'SharesNumberQuantity',
  'Shares Number',
  QuantityType.name,
  'The number of shares immobilized.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaIssuerParty = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party issuing the immobilized security certificate.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ImmobilizedSecurityFieldMeta {
  public static readonly UBLExtensions = ImmobilizedSecurityFieldMetaUBLExtensions
  public static readonly ImmobilizationCertificateID = ImmobilizedSecurityFieldMetaImmobilizationCertificateID
  public static readonly SecurityID = ImmobilizedSecurityFieldMetaSecurityID
  public static readonly IssueDate = ImmobilizedSecurityFieldMetaIssueDate
  public static readonly FaceValueAmount = ImmobilizedSecurityFieldMetaFaceValueAmount
  public static readonly MarketValueAmount = ImmobilizedSecurityFieldMetaMarketValueAmount
  public static readonly SharesNumberQuantity = ImmobilizedSecurityFieldMetaSharesNumberQuantity
  public static readonly IssuerParty = ImmobilizedSecurityFieldMetaIssuerParty
}

export const ImmobilizedSecurityFieldMap = new Map([
  [ImmobilizedSecurityField.UBLExtensions, ImmobilizedSecurityFieldMetaUBLExtensions],
  [ImmobilizedSecurityField.ImmobilizationCertificateID, ImmobilizedSecurityFieldMetaImmobilizationCertificateID],
  [ImmobilizedSecurityField.SecurityID, ImmobilizedSecurityFieldMetaSecurityID],
  [ImmobilizedSecurityField.IssueDate, ImmobilizedSecurityFieldMetaIssueDate],
  [ImmobilizedSecurityField.FaceValueAmount, ImmobilizedSecurityFieldMetaFaceValueAmount],
  [ImmobilizedSecurityField.MarketValueAmount, ImmobilizedSecurityFieldMetaMarketValueAmount],
  [ImmobilizedSecurityField.SharesNumberQuantity, ImmobilizedSecurityFieldMetaSharesNumberQuantity],
  [ImmobilizedSecurityField.IssuerParty, ImmobilizedSecurityFieldMetaIssuerParty]
])

export const ImmobilizedSecurityType: Type<ImmobilizedSecurityField> = {
  name: 'ImmobilizedSecurity',
  label: 'Immobilized Security',
  module: TypeModule.cac,
  definition: 'A class to describe an immobilized security to be used as a guarantee.',
  fields: ImmobilizedSecurityFieldMap,
}

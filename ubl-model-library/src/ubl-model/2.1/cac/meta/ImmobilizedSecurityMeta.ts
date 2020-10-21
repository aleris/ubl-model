import { FieldMeta } from '../../FieldMeta'

export enum ImmobilizedSecurityField {
  ImmobilizationCertificateID = 'ImmobilizationCertificateID',
  SecurityID = 'SecurityID',
  IssueDate = 'IssueDate',
  FaceValueAmount = 'FaceValueAmount',
  MarketValueAmount = 'MarketValueAmount',
  SharesNumberQuantity = 'SharesNumberQuantity',
  IssuerParty = 'IssuerParty'
}

export const ImmobilizedSecurityFieldMetaImmobilizationCertificateID = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.ImmobilizationCertificateID,
  'ImmobilizationCertificateID',
  'Immobilization Certificate Identifier',
  'Identifier',
  'An identifier for the certificate of this immobilized security.',
  '0..1',
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaSecurityID = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.SecurityID,
  'SecurityID',
  'Security Identifier',
  'Identifier',
  'An identifier for the security being immobilized.',
  '0..1',
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaIssueDate = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which this immobilized security was issued.',
  '0..1',
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaFaceValueAmount = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.FaceValueAmount,
  'FaceValueAmount',
  'Face Value',
  'Amount',
  'The value of the security on the day it was immobilized.',
  '0..1',
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaMarketValueAmount = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.MarketValueAmount,
  'MarketValueAmount',
  'Market Value',
  'Amount',
  'The current market value of the immobilized security.',
  '0..1',
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaSharesNumberQuantity = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.SharesNumberQuantity,
  'SharesNumberQuantity',
  'Shares Number',
  'Quantity',
  'The number of shares immobilized.',
  '0..1',
  undefined,
  undefined
)

export const ImmobilizedSecurityFieldMetaIssuerParty = new FieldMeta<ImmobilizedSecurityField>(
  ImmobilizedSecurityField.IssuerParty,
  'IssuerParty',
  'Party',
  'Party',
  'The party issuing the immobilized security certificate.',
  '0..1',
  undefined,
  undefined
)

export class ImmobilizedSecurityFieldMeta {
  public static readonly ImmobilizationCertificateID = ImmobilizedSecurityFieldMetaImmobilizationCertificateID
  public static readonly SecurityID = ImmobilizedSecurityFieldMetaSecurityID
  public static readonly IssueDate = ImmobilizedSecurityFieldMetaIssueDate
  public static readonly FaceValueAmount = ImmobilizedSecurityFieldMetaFaceValueAmount
  public static readonly MarketValueAmount = ImmobilizedSecurityFieldMetaMarketValueAmount
  public static readonly SharesNumberQuantity = ImmobilizedSecurityFieldMetaSharesNumberQuantity
  public static readonly IssuerParty = ImmobilizedSecurityFieldMetaIssuerParty
}

export const ImmobilizedSecurityFieldMap = new Map([
  [ImmobilizedSecurityField.ImmobilizationCertificateID, ImmobilizedSecurityFieldMetaImmobilizationCertificateID],
  [ImmobilizedSecurityField.SecurityID, ImmobilizedSecurityFieldMetaSecurityID],
  [ImmobilizedSecurityField.IssueDate, ImmobilizedSecurityFieldMetaIssueDate],
  [ImmobilizedSecurityField.FaceValueAmount, ImmobilizedSecurityFieldMetaFaceValueAmount],
  [ImmobilizedSecurityField.MarketValueAmount, ImmobilizedSecurityFieldMetaMarketValueAmount],
  [ImmobilizedSecurityField.SharesNumberQuantity, ImmobilizedSecurityFieldMetaSharesNumberQuantity],
  [ImmobilizedSecurityField.IssuerParty, ImmobilizedSecurityFieldMetaIssuerParty]
])

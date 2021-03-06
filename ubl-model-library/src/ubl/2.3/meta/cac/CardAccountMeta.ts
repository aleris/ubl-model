import { FieldMeta } from '../FieldMeta'

export enum CardAccountField {
  UBLExtensions = 'UBLExtensions',
  PrimaryAccountNumberID = 'PrimaryAccountNumberID',
  NetworkID = 'NetworkID',
  CardTypeCode = 'CardTypeCode',
  ValidityStartDate = 'ValidityStartDate',
  ExpiryDate = 'ExpiryDate',
  IssuerID = 'IssuerID',
  IssueNumberID = 'IssueNumberID',
  CV2ID = 'CV2ID',
  CardChipCode = 'CardChipCode',
  ChipApplicationID = 'ChipApplicationID',
  HolderName = 'HolderName',
  RoleCode = 'RoleCode'
}

export const CardAccountFieldMetaUBLExtensions = new FieldMeta<CardAccountField>(
  CardAccountField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CardAccountFieldMetaPrimaryAccountNumberID = new FieldMeta<CardAccountField>(
  CardAccountField.PrimaryAccountNumberID,
  'PrimaryAccountNumberID',
  'Primary Account Number',
  'Identifier',
  'An identifier of the card (e.g., the Primary Account Number (PAN)).',
  '1',
  'cbc',
  undefined,
  '4558 XXXX XXXX XXXX (a real card number)'
)

export const CardAccountFieldMetaNetworkID = new FieldMeta<CardAccountField>(
  CardAccountField.NetworkID,
  'NetworkID',
  'Network',
  'Identifier',
  'An identifier for the financial service network provider of the card.',
  '1',
  'cbc',
  undefined,
  'VISA, MasterCard, American Express'
)

export const CardAccountFieldMetaCardTypeCode = new FieldMeta<CardAccountField>(
  CardAccountField.CardTypeCode,
  'CardTypeCode',
  'Card Type Code',
  'Code',
  'A mutually agreed code signifying the type of card. Examples of types are "debit", "credit" and "purchasing"',
  '0..1',
  'cbc',
  undefined,
  'Debit Card, Credit Card, Procurement Card'
)

export const CardAccountFieldMetaValidityStartDate = new FieldMeta<CardAccountField>(
  CardAccountField.ValidityStartDate,
  'ValidityStartDate',
  'Validity Start Date',
  'Date',
  'The date from which the card is valid.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaExpiryDate = new FieldMeta<CardAccountField>(
  CardAccountField.ExpiryDate,
  'ExpiryDate',
  'Expiry Date',
  'Date',
  'The date on which the card expires.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaIssuerID = new FieldMeta<CardAccountField>(
  CardAccountField.IssuerID,
  'IssuerID',
  'Issuer',
  'Identifier',
  'An identifier for the institution issuing the card.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaIssueNumberID = new FieldMeta<CardAccountField>(
  CardAccountField.IssueNumberID,
  'IssueNumberID',
  'Issue Number',
  'Identifier',
  'An identifier for the card, specified by the issuer.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaCV2ID = new FieldMeta<CardAccountField>(
  CardAccountField.CV2ID,
  'CV2ID',
  'CV2',
  'Identifier',
  'An identifier for the Card Verification Value (often found on the reverse of the card itself).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaCardChipCode = new FieldMeta<CardAccountField>(
  CardAccountField.CardChipCode,
  'CardChipCode',
  'Card Chip Code',
  'Code',
  'A mutually agreed code to distinguish between CHIP and MAG STRIPE cards.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaChipApplicationID = new FieldMeta<CardAccountField>(
  CardAccountField.ChipApplicationID,
  'ChipApplicationID',
  'Chip Application',
  'Identifier',
  'An identifier on the chip card for the application that provides the quoted information; an AID (application ID).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaHolderName = new FieldMeta<CardAccountField>(
  CardAccountField.HolderName,
  'HolderName',
  'Holder',
  'Text',
  'The name of the cardholder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CardAccountFieldMetaRoleCode = new FieldMeta<CardAccountField>(
  CardAccountField.RoleCode,
  'RoleCode',
  'Role Code',
  'Code',
  'The role of this card or the card holder (e.g., the buyer, when the card is used as a payment means to pay for an item), expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class CardAccountFieldMeta {
  public static readonly UBLExtensions = CardAccountFieldMetaUBLExtensions
  public static readonly PrimaryAccountNumberID = CardAccountFieldMetaPrimaryAccountNumberID
  public static readonly NetworkID = CardAccountFieldMetaNetworkID
  public static readonly CardTypeCode = CardAccountFieldMetaCardTypeCode
  public static readonly ValidityStartDate = CardAccountFieldMetaValidityStartDate
  public static readonly ExpiryDate = CardAccountFieldMetaExpiryDate
  public static readonly IssuerID = CardAccountFieldMetaIssuerID
  public static readonly IssueNumberID = CardAccountFieldMetaIssueNumberID
  public static readonly CV2ID = CardAccountFieldMetaCV2ID
  public static readonly CardChipCode = CardAccountFieldMetaCardChipCode
  public static readonly ChipApplicationID = CardAccountFieldMetaChipApplicationID
  public static readonly HolderName = CardAccountFieldMetaHolderName
  public static readonly RoleCode = CardAccountFieldMetaRoleCode
}

export const CardAccountFieldMap = new Map([
  [CardAccountField.UBLExtensions, CardAccountFieldMetaUBLExtensions],
  [CardAccountField.PrimaryAccountNumberID, CardAccountFieldMetaPrimaryAccountNumberID],
  [CardAccountField.NetworkID, CardAccountFieldMetaNetworkID],
  [CardAccountField.CardTypeCode, CardAccountFieldMetaCardTypeCode],
  [CardAccountField.ValidityStartDate, CardAccountFieldMetaValidityStartDate],
  [CardAccountField.ExpiryDate, CardAccountFieldMetaExpiryDate],
  [CardAccountField.IssuerID, CardAccountFieldMetaIssuerID],
  [CardAccountField.IssueNumberID, CardAccountFieldMetaIssueNumberID],
  [CardAccountField.CV2ID, CardAccountFieldMetaCV2ID],
  [CardAccountField.CardChipCode, CardAccountFieldMetaCardChipCode],
  [CardAccountField.ChipApplicationID, CardAccountFieldMetaChipApplicationID],
  [CardAccountField.HolderName, CardAccountFieldMetaHolderName],
  [CardAccountField.RoleCode, CardAccountFieldMetaRoleCode]
])

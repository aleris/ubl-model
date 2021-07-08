import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CardAccountFieldMetaPrimaryAccountNumberID = new FieldMeta<CardAccountField>(
  CardAccountField.PrimaryAccountNumberID,
  'PrimaryAccountNumberID',
  'Primary Account Number',
  IdentifierType.name,
  'An identifier of the card (e.g., the Primary Account Number (PAN)).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '4558 XXXX XXXX XXXX (a real card number)'
)

export const CardAccountFieldMetaNetworkID = new FieldMeta<CardAccountField>(
  CardAccountField.NetworkID,
  'NetworkID',
  'Network',
  IdentifierType.name,
  'An identifier for the financial service network provider of the card.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'VISA, MasterCard, American Express'
)

export const CardAccountFieldMetaCardTypeCode = new FieldMeta<CardAccountField>(
  CardAccountField.CardTypeCode,
  'CardTypeCode',
  'Card Type Code',
  CodeType.name,
  'A mutually agreed code signifying the type of card. Examples of types are "debit", "credit" and "purchasing"',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Debit Card, Credit Card, Procurement Card'
)

export const CardAccountFieldMetaValidityStartDate = new FieldMeta<CardAccountField>(
  CardAccountField.ValidityStartDate,
  'ValidityStartDate',
  'Validity Start Date',
  DateType.name,
  'The date from which the card is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaExpiryDate = new FieldMeta<CardAccountField>(
  CardAccountField.ExpiryDate,
  'ExpiryDate',
  'Expiry Date',
  DateType.name,
  'The date on which the card expires.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaIssuerID = new FieldMeta<CardAccountField>(
  CardAccountField.IssuerID,
  'IssuerID',
  'Issuer',
  IdentifierType.name,
  'An identifier for the institution issuing the card.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaIssueNumberID = new FieldMeta<CardAccountField>(
  CardAccountField.IssueNumberID,
  'IssueNumberID',
  'Issue Number',
  IdentifierType.name,
  'An identifier for the card, specified by the issuer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaCV2ID = new FieldMeta<CardAccountField>(
  CardAccountField.CV2ID,
  'CV2ID',
  'CV2',
  IdentifierType.name,
  'An identifier for the Card Verification Value (often found on the reverse of the card itself).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaCardChipCode = new FieldMeta<CardAccountField>(
  CardAccountField.CardChipCode,
  'CardChipCode',
  'Card Chip Code',
  CodeType.name,
  'A mutually agreed code to distinguish between CHIP and MAG STRIPE cards.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaChipApplicationID = new FieldMeta<CardAccountField>(
  CardAccountField.ChipApplicationID,
  'ChipApplicationID',
  'Chip Application',
  IdentifierType.name,
  'An identifier on the chip card for the application that provides the quoted information; an AID (application ID).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaHolderName = new FieldMeta<CardAccountField>(
  CardAccountField.HolderName,
  'HolderName',
  'Holder',
  TextType.name,
  'The name of the cardholder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CardAccountFieldMetaRoleCode = new FieldMeta<CardAccountField>(
  CardAccountField.RoleCode,
  'RoleCode',
  'Role Code',
  CodeType.name,
  'The role of this card or the card holder (e.g., the buyer, when the card is used as a payment means to pay for an item), expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const CardAccountType: Type<CardAccountField> = {
  name: 'CardAccount',
  label: 'Card Account',
  module: TypeModule.cac,
  definition: 'A class to define a credit card, debit card, or charge card account.',
  fields: CardAccountFieldMap,
}

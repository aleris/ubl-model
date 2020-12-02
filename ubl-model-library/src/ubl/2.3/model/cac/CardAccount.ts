import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a credit card, debit card, or charge card account.
 */
export interface CardAccount {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier of the card (e.g., the Primary Account Number (PAN)).
   * Identifier
   * Cardinality: 1
   * Examples: 4558 XXXX XXXX XXXX (a real card number)
   */
  PrimaryAccountNumberID: Array<Identifier>

  /**
   * An identifier for the financial service network provider of the card.
   * Identifier
   * Cardinality: 1
   * Examples: VISA, MasterCard, American Express
   */
  NetworkID: Array<Identifier>

  /**
   * A mutually agreed code signifying the type of card. Examples of types are "debit", "credit" and "purchasing"
   * Code
   * Cardinality: 0..1
   * Examples: Debit Card, Credit Card, Procurement Card
   */
  CardTypeCode?: Array<Code> | undefined

  /**
   * The date from which the card is valid.
   * Date
   * Cardinality: 0..1
   */
  ValidityStartDate?: Array<Date> | undefined

  /**
   * The date on which the card expires.
   * Date
   * Cardinality: 0..1
   */
  ExpiryDate?: Array<Date> | undefined

  /**
   * An identifier for the institution issuing the card.
   * Identifier
   * Cardinality: 0..1
   */
  IssuerID?: Array<Identifier> | undefined

  /**
   * An identifier for the card, specified by the issuer.
   * Identifier
   * Cardinality: 0..1
   */
  IssueNumberID?: Array<Identifier> | undefined

  /**
   * An identifier for the Card Verification Value (often found on the reverse of the card itself).
   * Identifier
   * Cardinality: 0..1
   */
  CV2ID?: Array<Identifier> | undefined

  /**
   * A mutually agreed code to distinguish between CHIP and MAG STRIPE cards.
   * Code
   * Cardinality: 0..1
   */
  CardChipCode?: Array<Code> | undefined

  /**
   * An identifier on the chip card for the application that provides the quoted information; an AID (application ID).
   * Identifier
   * Cardinality: 0..1
   */
  ChipApplicationID?: Array<Identifier> | undefined

  /**
   * The name of the cardholder.
   * Name
   * Cardinality: 0..1
   */
  HolderName?: Array<Text> | undefined

  /**
   * The role of this card or the card holder (e.g., the buyer, when the card is used as a payment means to pay for an
   * item), expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  RoleCode?: Array<Code> | undefined
}

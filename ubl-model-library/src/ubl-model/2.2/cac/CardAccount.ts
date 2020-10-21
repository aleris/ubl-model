import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to define a credit card, debit card, or charge card account.
 */
export interface CardAccount {
  /**
   * An identifier of the card (e.g., the Primary Account Number (PAN)).
   * Identifier
   * Cardinality: 1
   * Examples: 4558 XXXX XXXX XXXX (a real card number)
   */
  PrimaryAccountNumberID: [Identifier]

  /**
   * An identifier for the financial service network provider of the card.
   * Identifier
   * Cardinality: 1
   * Examples: VISA, MasterCard, American Express
   */
  NetworkID: [Identifier]

  /**
   * A mutually agreed code signifying the type of card. Examples of types are "debit", "credit" and "purchasing"
   * Code
   * Cardinality: 0..1
   * Examples: Debit Card, Credit Card, Procurement Card
   */
  CardTypeCode?: [Code] | undefined

  /**
   * The date from which the card is valid.
   * Date
   * Cardinality: 0..1
   */
  ValidityStartDate?: [Date] | undefined

  /**
   * The date on which the card expires.
   * Date
   * Cardinality: 0..1
   */
  ExpiryDate?: [Date] | undefined

  /**
   * An identifier for the institution issuing the card.
   * Identifier
   * Cardinality: 0..1
   */
  IssuerID?: [Identifier] | undefined

  /**
   * An identifier for the card, specified by the issuer.
   * Identifier
   * Cardinality: 0..1
   */
  IssueNumberID?: [Identifier] | undefined

  /**
   * An identifier for the Card Verification Value (often found on the reverse of the card itself).
   * Identifier
   * Cardinality: 0..1
   */
  CV2ID?: [Identifier] | undefined

  /**
   * A mutually agreed code to distinguish between CHIP and MAG STRIPE cards.
   * Code
   * Cardinality: 0..1
   */
  CardChipCode?: [Code] | undefined

  /**
   * An identifier on the chip card for the application that provides the quoted information; an AID (application ID).
   * Identifier
   * Cardinality: 0..1
   */
  ChipApplicationID?: [Identifier] | undefined

  /**
   * The name of the cardholder.
   * Name
   * Cardinality: 0..1
   */
  HolderName?: [Text] | undefined
}

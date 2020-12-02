import { Amount } from '../cbc/Amount'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { LineItem } from './LineItem'
import { LineReference } from './LineReference'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in a Quotation.
 */
export interface QuotationLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this quotation line.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity of the item quoted.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * The total amount for this quotation line, including allowance charges but net of taxes.
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total amount for this quotation line, including all allowances, charges and taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveLineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total tax amount for this quotation line.
   * Amount
   * Cardinality: 0..1
   */
  TotalTaxAmount?: Array<Amount> | undefined

  /**
   * An identifier for the line in the Request for Quotation to which this line is a response.
   * Identifier
   * Cardinality: 0..1
   */
  RequestForQuotationLineID?: Array<Identifier> | undefined

  /**
   * A reference to a document associated with this quotation line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * The item that is the subject of this quotation line.
   * Line Item
   * Cardinality: 1
   */
  LineItem: Array<LineItem>

  /**
   * An item proposed by the seller as a substitute for the item that is the subject of this quotation line.
   * Line Item
   * Cardinality: 0..n
   */
  SellerProposedSubstituteLineItem?: Array<LineItem> | undefined

  /**
   * An item proposed by the seller as an alternative to the item that is the subject of this quotation line.
   * Line Item
   * Cardinality: 0..n
   */
  AlternativeLineItem?: Array<LineItem> | undefined

  /**
   * A reference to the line in the Request for Quotation to which this line is a response.
   * Line Reference
   * Cardinality: 0..1
   */
  RequestLineReference?: Array<LineReference> | undefined
}

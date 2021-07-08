import { Amount } from '../cbc/Amount'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe an immobilized security to be used as a guarantee.
 */
export interface ImmobilizedSecurity {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the certificate of this immobilized security.
   * Identifier
   * Cardinality: 0..1
   */
  ImmobilizationCertificateID?: Array<Identifier> | undefined

  /**
   * An identifier for the security being immobilized.
   * Identifier
   * Cardinality: 0..1
   */
  SecurityID?: Array<Identifier> | undefined

  /**
   * The date on which this immobilized security was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The value of the security on the day it was immobilized.
   * Amount
   * Cardinality: 0..1
   */
  FaceValueAmount?: Array<Amount> | undefined

  /**
   * The current market value of the immobilized security.
   * Amount
   * Cardinality: 0..1
   */
  MarketValueAmount?: Array<Amount> | undefined

  /**
   * The number of shares immobilized.
   * Quantity
   * Cardinality: 0..1
   */
  SharesNumberQuantity?: Array<Quantity> | undefined

  /**
   * The party issuing the immobilized security certificate.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: Array<Party> | undefined
}

import { Amount } from '../cbc/Amount'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'

/**
 * A class to describe an immobilized security to be used as a guarantee.
 */
export interface ImmobilizedSecurity {
  /**
   * An identifier for the certificate of this immobilized security.
   * Identifier
   * Cardinality: 0..1
   */
  ImmobilizationCertificateID?: [Identifier] | undefined

  /**
   * An identifier for the security being immobilized.
   * Identifier
   * Cardinality: 0..1
   */
  SecurityID?: [Identifier] | undefined

  /**
   * The date on which this immobilized security was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: [Date] | undefined

  /**
   * The value of the security on the day it was immobilized.
   * Amount
   * Cardinality: 0..1
   */
  FaceValueAmount?: [Amount] | undefined

  /**
   * The current market value of the immobilized security.
   * Amount
   * Cardinality: 0..1
   */
  MarketValueAmount?: [Amount] | undefined

  /**
   * The number of shares immobilized.
   * Quantity
   * Cardinality: 0..1
   */
  SharesNumberQuantity?: [Quantity] | undefined

  /**
   * The party issuing the immobilized security certificate.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: [Party] | undefined
}

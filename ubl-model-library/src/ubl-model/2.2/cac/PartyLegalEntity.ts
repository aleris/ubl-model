import { Address } from './Address'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { CorporateRegistrationScheme } from './CorporateRegistrationScheme'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from './Party'
import { ShareholderParty } from './ShareholderParty'
import { Text } from '../cbc/Text'

/**
 * A class to describe a party as a legal entity.
 */
export interface PartyLegalEntity {
  /**
   * The name of the party as registered with the relevant legal authority.
   * Name
   * Cardinality: 0..1
   * Examples: Microsoft Corporation
   */
  RegistrationName?: [Text] | undefined

  /**
   * An identifier for the party as registered within a company registration scheme.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Business Registration Number, Company Number
   * Examples: 3556625
   */
  CompanyID?: [Identifier] | undefined

  /**
   * The registration date of the CompanyID.
   * Date
   * Cardinality: 0..1
   */
  RegistrationDate?: [Date] | undefined

  /**
   * The date upon which a registration expires (e.g., registration for an import/export license).
   * Date
   * Cardinality: 0..1
   */
  RegistrationExpirationDate?: [Date] | undefined

  /**
   * A code signifying the party's legal status.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Legal Status
   */
  CompanyLegalFormCode?: [Code] | undefined

  /**
   * The company legal status, expressed as a text.
   * Text
   * Cardinality: 0..1
   */
  CompanyLegalForm?: [Text] | undefined

  /**
   * An indicator that the company is owned and controlled by one person (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SoleProprietorshipIndicator?: [Indicator] | undefined

  /**
   * A code signifying the party's liquidation status.
   * Code
   * Cardinality: 0..1
   */
  CompanyLiquidationStatusCode?: [Code] | undefined

  /**
   * The number of shares in the capital stock of a corporation.
   * Amount
   * Cardinality: 0..1
   */
  CorporateStockAmount?: [Amount] | undefined

  /**
   * An indicator that all shares of corporate stock have been paid by shareholders (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  FullyPaidSharesIndicator?: [Indicator] | undefined

  /**
   * The registered address of the party within a corporate registration scheme.
   * Address
   * Cardinality: 0..1
   */
  RegistrationAddress?: [Address] | undefined

  /**
   * The corporate registration scheme used to register the party.
   * Corporate Registration Scheme
   * Cardinality: 0..1
   */
  CorporateRegistrationScheme?: [CorporateRegistrationScheme] | undefined

  /**
   * The head office of the legal entity
   * Party
   * Cardinality: 0..1
   */
  HeadOfficeParty?: [Party] | undefined

  /**
   * A party owning shares in this legal entity.
   * Shareholder Party
   * Cardinality: 0..n
   */
  ShareholderParty?: Array<ShareholderParty> | undefined
}

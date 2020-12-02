import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Contract } from './Contract'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { SubcontractTerms } from './SubcontractTerms'
import { TenderedProject } from './TenderedProject'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
import { WinningParty } from './WinningParty'

/**
 * A class to describe the awarding of a tender in a tendering process.
 */
export interface TenderResult {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this tender result.
   * Identifier
   * Cardinality: 0..1
   */
  AwardID?: Array<Identifier> | undefined

  /**
   * A code signifying the result of the tendering process.
   * Code
   * Cardinality: 0..1
   */
  TenderResultCode?: Array<Code> | undefined

  /**
   * Text describing the result of the tendering process.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The monetary value of the advertisement for this tendering process.
   * Amount
   * Cardinality: 0..1
   */
  AdvertisementAmount?: Array<Amount> | undefined

  /**
   * The date on which this result was formalized.
   * Date
   * Cardinality: 1
   */
  AwardDate: Array<Date>

  /**
   * The time at which this result was formalized.
   * Time
   * Cardinality: 0..1
   */
  AwardTime?: Array<Time> | undefined

  /**
   * The total number of tenders received in this tendering process.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedTenderQuantity?: Array<Quantity> | undefined

  /**
   * The least expensive tender received in the tendering process.
   * Amount
   * Cardinality: 0..1
   */
  LowerTenderAmount?: Array<Amount> | undefined

  /**
   * The most expensive tender received in this tendering process.
   * Amount
   * Cardinality: 0..1
   */
  HigherTenderAmount?: Array<Amount> | undefined

  /**
   * The date on which the awarded contract begins.
   * Date
   * Cardinality: 0..1
   */
  StartDate?: Array<Date> | undefined

  /**
   * The number of electronic tenders received.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedElectronicTenderQuantity?: Array<Quantity> | undefined

  /**
   * The number of foreing tenders received.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedForeignTenderQuantity?: Array<Quantity> | undefined

  /**
   * A contract governing this tender result.
   * Contract
   * Cardinality: 0..1
   */
  Contract?: Array<Contract> | undefined

  /**
   * The awarded tendered project associated with this tender result.
   * Tendered Project
   * Cardinality: 0..1
   */
  AwardedTenderedProject?: Array<TenderedProject> | undefined

  /**
   * The period during which a contract associated with the awarded project is to be formalized.
   * Period
   * Cardinality: 0..1
   */
  ContractFormalizationPeriod?: Array<Period> | undefined

  /**
   * Subcontract terms for this tender result.
   * Subcontract Terms
   * Cardinality: 0..n
   */
  SubcontractTerms?: Array<SubcontractTerms> | undefined

  /**
   * A party that is identified as the awarded by a tender result.
   * Winning Party
   * Cardinality: 0..n
   */
  WinningParty?: Array<WinningParty> | undefined
}

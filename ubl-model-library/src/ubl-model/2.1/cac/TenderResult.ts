import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Contract } from './Contract'
import { Date } from '../cbc/Date'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { SubcontractTerms } from './SubcontractTerms'
import { TenderedProject } from './TenderedProject'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { WinningParty } from './WinningParty'

/**
 * A class to describe the awarding of a tender in a tendering process.
 */
export interface TenderResult {
  /**
   * A code signifying the result of the tendering process.
   * Code
   * Cardinality: 0..1
   */
  TenderResultCode?: [Code] | undefined

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
  AdvertisementAmount?: [Amount] | undefined

  /**
   * The date on which this result was formalized.
   * Date
   * Cardinality: 1
   */
  AwardDate: [Date]

  /**
   * The time at which this result was formalized.
   * Time
   * Cardinality: 0..1
   */
  AwardTime?: [Time] | undefined

  /**
   * The total number of tenders received in this tendering process.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedTenderQuantity?: [Quantity] | undefined

  /**
   * The least expensive tender received in the tendering process.
   * Amount
   * Cardinality: 0..1
   */
  LowerTenderAmount?: [Amount] | undefined

  /**
   * The most expensive tender received in this tendering process.
   * Amount
   * Cardinality: 0..1
   */
  HigherTenderAmount?: [Amount] | undefined

  /**
   * The date on which the awarded contract begins.
   * Date
   * Cardinality: 0..1
   */
  StartDate?: [Date] | undefined

  /**
   * The number of electronic tenders received.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedElectronicTenderQuantity?: [Quantity] | undefined

  /**
   * The number of foreing tenders received.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedForeignTenderQuantity?: [Quantity] | undefined

  /**
   * A contract governing this tender result.
   * Contract
   * Cardinality: 0..1
   */
  Contract?: [Contract] | undefined

  /**
   * The awarded tendered project associated with this tender result.
   * Tendered Project
   * Cardinality: 0..1
   */
  AwardedTenderedProject?: [TenderedProject] | undefined

  /**
   * The period during which a contract associated with the awarded project is to be formalized.
   * Period
   * Cardinality: 0..1
   */
  ContractFormalizationPeriod?: [Period] | undefined

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

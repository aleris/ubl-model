import { Party } from './Party'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe the terms and conditions, set by the contracting authority, under which an appeal can be lodged
 * for a tender award.
 */
export interface AppealTerms {
  /**
   * Text describing the terms of an appeal.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The period during which an appeal can be presented.
   * Period
   * Cardinality: 0..1
   */
  PresentationPeriod?: [Period] | undefined

  /**
   * The party presenting the information for an appeal.
   * Party
   * Cardinality: 0..1
   */
  AppealInformationParty?: [Party] | undefined

  /**
   * The party to whom an appeal should be presented.
   * Party
   * Cardinality: 0..1
   */
  AppealReceiverParty?: [Party] | undefined

  /**
   * The party that has been appointed to mediate any appeal.
   * Party
   * Cardinality: 0..1
   */
  MediationParty?: [Party] | undefined
}

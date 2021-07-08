import { Party } from './Party'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the terms and conditions, set by the contracting authority, under which an appeal can be lodged
 * for a tender award.
 */
export interface AppealTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

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
  PresentationPeriod?: Array<Period> | undefined

  /**
   * The party presenting the information for an appeal.
   * Party
   * Cardinality: 0..1
   */
  AppealInformationParty?: Array<Party> | undefined

  /**
   * The party to whom an appeal should be presented.
   * Party
   * Cardinality: 0..1
   */
  AppealReceiverParty?: Array<Party> | undefined

  /**
   * The party that has been appointed to mediate any appeal.
   * Party
   * Cardinality: 0..1
   */
  MediationParty?: Array<Party> | undefined
}

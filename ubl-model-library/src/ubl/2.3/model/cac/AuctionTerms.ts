import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the terms to be fulfilled by tenderers if an auction is to be executed before the awarding of a
 * tender.
 */
export interface AuctionTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Indicates whether an electronic auction will be used before the awarding of a contract (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  AuctionConstraintIndicator?: Array<Indicator> | undefined

  /**
   * Text describing a justification for the use of an auction in awarding the tender.
   * Text
   * Cardinality: 0..n
   */
  JustificationDescription?: Array<Text> | undefined

  /**
   * Text for tenderers describing terms governing the auction.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Text describing the auction process.
   * Text
   * Cardinality: 0..n
   */
  ProcessDescription?: Array<Text> | undefined

  /**
   * Text describing the conditions under which the tenderers will be able to bid as part of the auction.
   * Text
   * Cardinality: 0..n
   */
  ConditionsDescription?: Array<Text> | undefined

  /**
   * Text describing an electronic device used for the auction, including associated connectivity specifications.
   * Text
   * Cardinality: 0..n
   */
  ElectronicDeviceDescription?: Array<Text> | undefined

  /**
   * The Uniform Resource Identifier (URI) of the electronic device used for the auction.
   * Identifier
   * Cardinality: 0..1
   */
  AuctionURI?: Array<Identifier> | undefined
}

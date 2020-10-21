import { Code } from '../cbc/Code'
import { ConsumptionHistory } from './ConsumptionHistory'
import { ConsumptionReportReference } from './ConsumptionReportReference'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to describe utility consumption, including details of the environment in which consumption takes place.
 */
export interface ConsumptionReport {
  /**
   * An identifier for this consumption report.
   * Identifier
   * Cardinality: 1
   * Examples: n/a
   */
  ID: [Identifier]

  /**
   * The type of consumption, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ConsumptionType?: [Text] | undefined

  /**
   * The type of consumption, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Consumption
   */
  ConsumptionTypeCode?: [Code] | undefined

  /**
   * Text reporting utility consumption.
   * Text
   * Cardinality: 0..n
   * Examples: This report contain the latest year consumption
   */
  Description?: Array<Text> | undefined

  /**
   * The total quantity consumed.
   * Quantity
   * Cardinality: 0..1
   * Examples: 20479.00
   */
  TotalConsumedQuantity?: [Quantity] | undefined

  /**
   * The basic quantity consumed, excluding additional consumption.
   * Quantity
   * Cardinality: 0..1
   * Examples: 20000.00
   */
  BasicConsumedQuantity?: [Quantity] | undefined

  /**
   * The number of people occupying the residence covered by this report.
   * Numeric
   * Cardinality: 0..1
   * Examples: 4.0
   */
  ResidentOccupantsNumeric?: [Numeric] | undefined

  /**
   * The level of energy consumed, compared to the average for this residence type and the number of people living in
   * the residence, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: B
   */
  ConsumersEnergyLevelCode?: [Code] | undefined

  /**
   * The level of energy consumed, compared to the average for this residence type and the number of people living in
   * the residence, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Middel
   */
  ConsumersEnergyLevel?: [Text] | undefined

  /**
   * The type of residence (house, apartment, etc.) covered in this report, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: House
   */
  ResidenceType?: [Text] | undefined

  /**
   * The type of residence (house, apartment, etc.) covered in this report, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: House
   */
  ResidenceTypeCode?: [Code] | undefined

  /**
   * The type of heating in the residence covered in this report, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: District heating
   */
  HeatingType?: [Text] | undefined

  /**
   * The type of heating in the residence covered in this report, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: DistrictHeating
   */
  HeatingTypeCode?: [Code] | undefined

  /**
   * The period of consumption covered in this report.
   * Period
   * Cardinality: 0..1
   */
  Period?: [Period] | undefined

  /**
   * A reference to a document providing an explanation of this kind of report.
   * Document Reference
   * Cardinality: 0..1
   */
  GuidanceDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to some other document (for example, this report in another format).
   * Document Reference
   * Cardinality: 0..1
   */
  DocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to a previous consumption report.
   * Consumption Report Reference
   * Cardinality: 0..n
   */
  ConsumptionReportReference?: Array<ConsumptionReportReference> | undefined

  /**
   * A report describing historical parameters relating to a specific instance of consumption.
   * Consumption History
   * Cardinality: 0..n
   */
  ConsumptionHistory?: Array<ConsumptionHistory> | undefined
}

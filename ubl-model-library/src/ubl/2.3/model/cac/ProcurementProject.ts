import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { CommodityClassification } from './CommodityClassification'
import { ContractExtension } from './ContractExtension'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Period } from './Period'
import { ProcurementAdditionalType } from './ProcurementAdditionalType'
import { Quantity } from '../cbc/Quantity'
import { RequestedTenderTotal } from './RequestedTenderTotal'
import { RequestForTenderLine } from './RequestForTenderLine'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a project to procure goods, works, or services.
 */
export interface ProcurementProject {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this procurement project.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A name of this procurement project.
   * Name
   * Cardinality: 0..n
   */
  Name?: Array<Text> | undefined

  /**
   * Text describing this procurement project.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A code signifying the type of procurement project (e.g., goods, works, services).
   * Code
   * Cardinality: 0..1
   */
  ProcurementTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the subcategory of the type of work for this project (e.g., land surveying, IT consulting).
   * Code
   * Cardinality: 0..1
   */
  ProcurementSubTypeCode?: Array<Code> | undefined

  /**
   * The indication of whether or not the control quality is included in the works project.
   * Code
   * Cardinality: 0..1
   */
  QualityControlCode?: Array<Code> | undefined

  /**
   * The amount of the reimbursement fee for concession procurement projects.
   * Amount
   * Cardinality: 0..1
   */
  RequiredFeeAmount?: Array<Amount> | undefined

  /**
   * Text describing the reimbursement fee for concession procurement projects.
   * Text
   * Cardinality: 0..n
   */
  FeeDescription?: Array<Text> | undefined

  /**
   * The requested delivery date for this procurement project.
   * Date
   * Cardinality: 0..1
   */
  RequestedDeliveryDate?: Array<Date> | undefined

  /**
   * The estimated overall quantity for this procurement project.
   * Quantity
   * Cardinality: 0..1
   */
  EstimatedOverallContractQuantity?: Array<Quantity> | undefined

  /**
   * Free-form text applying to the Procurement Project. This element may contain additional information about the
   * lot/contract that is not contained explicitly in another structure.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Suitable for Small- and Medium-sized Enterprises. This element specifies that the buyer accepts the risks
   * associated of contracting with SMEs.
   * Indicator
   * Cardinality: 0..1
   */
  SMESuitableIndicator?: Array<Indicator> | undefined

  /**
   * Budget monetary amounts for the project as whole.
   * Requested Tender Total
   * Cardinality: 0..1
   */
  RequestedTenderTotal?: Array<RequestedTenderTotal> | undefined

  /**
   * An association to the main classification category for the deliverable requested.
   * Commodity Classification
   * Cardinality: 0..n
   */
  MainCommodityClassification?: Array<CommodityClassification> | undefined

  /**
   * An association to additional classification categories for the deliverable requested.
   * Commodity Classification
   * Cardinality: 0..n
   */
  AdditionalCommodityClassification?: Array<CommodityClassification> | undefined

  /**
   * An association to additional procurement type.
   * Procurement Additional Type
   * Cardinality: 0..n
   */
  ProcurementAdditionalType?: Array<ProcurementAdditionalType> | undefined

  /**
   * A place where this procurement project will be physically realized.
   * Location
   * Cardinality: 0..n
   */
  RealizedLocation?: Array<Location> | undefined

  /**
   * The period during which this procurement project is planned to take place.
   * Period
   * Cardinality: 0..1
   */
  PlannedPeriod?: Array<Period> | undefined

  /**
   * The contract extension for this tendering process.
   * Contract Extension
   * Cardinality: 0..1
   */
  ContractExtension?: Array<ContractExtension> | undefined

  /**
   * A good or service this project is intended to procure.
   * Request For Tender Line
   * Cardinality: 0..n
   */
  RequestForTenderLine?: Array<RequestForTenderLine> | undefined
}

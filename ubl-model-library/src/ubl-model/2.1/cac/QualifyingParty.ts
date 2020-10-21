import { Capability } from './Capability'
import { ClassificationScheme } from './ClassificationScheme'
import { Code } from '../cbc/Code'
import { CompletedTask } from './CompletedTask'
import { Declaration } from './Declaration'
import { EconomicOperatorRole } from './EconomicOperatorRole'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to describe the distinctive features or characteristics qualifying an economic operator to be a party in a
 * tendering process (e.g., number of employees, number of operating units, type of business, technical and financial
 * capabilities, completed projects).
 */
export interface QualifyingParty {
  /**
   * The extent to which this party is expected to participate in the tendering process, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  ParticipationPercent?: [Numeric] | undefined

  /**
   * Text describing the personal situation of the qualifying party.
   * Text
   * Cardinality: 0..n
   */
  PersonalSituation?: Array<Text> | undefined

  /**
   * The number of years that this qualifying party has been in operation.
   * Quantity
   * Cardinality: 0..1
   */
  OperatingYearsQuantity?: [Quantity] | undefined

  /**
   * The number of people employed by this qualifying party.
   * Quantity
   * Cardinality: 0..1
   */
  EmployeeQuantity?: [Quantity] | undefined

  /**
   * An identifier for an item of evidence to support the classification of this qualifying party.
   * Identifier
   * Cardinality: 0..1
   */
  BusinessClassificationEvidenceID?: [Identifier] | undefined

  /**
   * An identifier for an item of evidence to support the business identity of this qualifying party.
   * Identifier
   * Cardinality: 0..1
   */
  BusinessIdentityEvidenceID?: [Identifier] | undefined

  /**
   * A code stating the Tenderer Role.
   * Code
   * Cardinality: 0..1
   */
  TendererRoleCode?: [Code] | undefined

  /**
   * The classification scheme used for the business profile.
   * Classification Scheme
   * Cardinality: 0..1
   */
  BusinessClassificationScheme?: [ClassificationScheme] | undefined

  /**
   * A technical capability of this qualifying party.
   * Capability
   * Cardinality: 0..n
   */
  TechnicalCapability?: Array<Capability> | undefined

  /**
   * A financial capability of this qualifying party.
   * Capability
   * Cardinality: 0..n
   */
  FinancialCapability?: Array<Capability> | undefined

  /**
   * A former task completed by this qualifying party.
   * Completed Task
   * Cardinality: 0..n
   */
  CompletedTask?: Array<CompletedTask> | undefined

  /**
   * A declaration by this qualifying party. of certain characteristics or capabilities in fulfilment of requirements
   * specified in a call for tenders.
   * Declaration
   * Cardinality: 0..n
   */
  Declaration?: Array<Declaration> | undefined

  /**
   * The qualifying party itself.
   * Party
   * Cardinality: 0..1
   */
  Party?: [Party] | undefined

  /**
   * A class to describe the tenderer contracting role.
   * Economic Operator Role
   * Cardinality: 0..1
   */
  EconomicOperatorRole?: [EconomicOperatorRole] | undefined
}

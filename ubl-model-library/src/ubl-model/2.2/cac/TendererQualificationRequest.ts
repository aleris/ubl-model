import { ClassificationScheme } from './ClassificationScheme'
import { Code } from '../cbc/Code'
import { EconomicOperatorRole } from './EconomicOperatorRole'
import { EvaluationCriterion } from './EvaluationCriterion'
import { Quantity } from '../cbc/Quantity'
import { TendererRequirement } from './TendererRequirement'
import { Text } from '../cbc/Text'

/**
 * The evaluation that the Contracting Authority party requests to fulfill to the tenderers.
 */
export interface TendererQualificationRequest {
  /**
   * The legal status requested for potential tenderers, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  CompanyLegalFormCode: [Code] | undefined

  /**
   * The legal status requested for potential tenderers, expressed as text
   * Text
   * Cardinality: 0..1
   */
  CompanyLegalForm: [Text] | undefined

  /**
   * Text describing the personal situation of the economic operators in this tendering process.
   * Text
   * Cardinality: 0..n
   */
  PersonalSituation: Array<Text> | undefined

  /**
   * Textual description of the legal form required for potential tenderers.
   * Quantity
   * Cardinality: 0..1
   */
  OperatingYearsQuantity: [Quantity] | undefined

  /**
   * Textual description of the legal form required for potential tenderers.
   * Quantity
   * Cardinality: 0..1
   */
  EmployeeQuantity: [Quantity] | undefined

  /**
   * Text describing the evaluation requirements for this tenderer.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * A classification scheme for the business profile.
   * Classification Scheme
   * Cardinality: 0..n
   */
  RequiredBusinessClassificationScheme: Array<ClassificationScheme> | undefined

  /**
   * A technical evaluation criterion required for an economic operator in a tendering process.
   * Evaluation Criterion
   * Cardinality: 0..n
   */
  TechnicalEvaluationCriterion: Array<EvaluationCriterion> | undefined

  /**
   * A financial evaluation criterion required for an economic operator in a tendering process.
   * Evaluation Criterion
   * Cardinality: 0..n
   */
  FinancialEvaluationCriterion: Array<EvaluationCriterion> | undefined

  /**
   * A requirement to be met by a tenderer.
   * Tenderer Requirement
   * Cardinality: 0..n
   * Examples: Preregistration in a Business Registry
   */
  SpecificTendererRequirement: Array<TendererRequirement> | undefined

  /**
   * A class to describe the tenderer contracting role.
   * Economic Operator Role
   * Cardinality: 0..n
   */
  EconomicOperatorRole: Array<EconomicOperatorRole> | undefined
}

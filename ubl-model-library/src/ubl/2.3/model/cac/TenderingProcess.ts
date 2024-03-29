import { AuctionTerms } from './AuctionTerms'
import { Code } from '../cbc/Code'
import { ContractingSystem } from './ContractingSystem'
import { DocumentReference } from './DocumentReference'
import { EconomicOperatorShortList } from './EconomicOperatorShortList'
import { Event } from './Event'
import { FrameworkAgreement } from './FrameworkAgreement'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Period } from './Period'
import { ProcessJustification } from './ProcessJustification'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the process of a formal offer and response to execute work or supply goods at a stated price.
 */
export interface TenderingProcess {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this tendering process.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * When reopening a tendering process, the identifier of the original framework agreement or dynamic purchasing
   * system.
   * Identifier
   * Cardinality: 0..1
   */
  OriginalContractingSystemID?: Array<Identifier> | undefined

  /**
   * Text describing the tendering process.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Text describing the negotiation to be followed during the tendering process.
   * Text
   * Cardinality: 0..n
   */
  NegotiationDescription?: Array<Text> | undefined

  /**
   * A code signifying the type of this tendering procedure.
   * Code
   * Cardinality: 0..1
   * Examples: Open, Restricted, Negotiated
   */
  ProcedureCode?: Array<Code> | undefined

  /**
   * A code signifying the urgency of this tendering process.
   * Code
   * Cardinality: 0..1
   * Examples: Urgent, Normal, Emergency
   */
  UrgencyCode?: Array<Code> | undefined

  /**
   * A code signifying the type of expense for this tendering process.
   * Code
   * Cardinality: 0..1
   * Examples: Normal, Anticipated
   */
  ExpenseCode?: Array<Code> | undefined

  /**
   * A code signifying the type of presentation of tenders required (e.g., one lot, multiple lots, or all the lots).
   * Code
   * Cardinality: 0..1
   * Examples: One Lot, Multiple Lots, All Lots
   */
  PartPresentationCode?: Array<Code> | undefined

  /**
   * A code signifying the type of contracting system (e.g., framework agreement, dynamic purchasing system). If the
   * procedure is individual (nonrepetitive), this code should be omitted.
   * Code
   * Cardinality: 0..1
   * Examples: Framework Agreement, Dynamic Purchasing System
   */
  ContractingSystemCode?: Array<Code> | undefined

  /**
   * A code signifying the method to be followed in submitting tenders.
   * Code
   * Cardinality: 0..1
   * Examples: Manual, Electronically, etc.
   */
  SubmissionMethodCode?: Array<Code> | undefined

  /**
   * An indicator that the number of candidates participating in this process has been reduced (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CandidateReductionConstraintIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that the project associated with this tendering process is constrained by a government procurement
   * agreement (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  GovernmentAgreementConstraintIndicator?: Array<Indicator> | undefined

  /**
   * The URI where the tools for electronic communication related with the tendering process can be found.
   * Identifier
   * Cardinality: 0..1
   */
  AccessToolsURI?: Array<Identifier> | undefined

  /**
   * An indicator that the competition launched is terminated.
   * Indicator
   * Cardinality: 0..1
   * Examples: PIN call for competition is terminated.
   */
  TerminatedIndicator?: Array<Indicator> | undefined

  /**
   * The period during which documents relating to this tendering process must be completed.
   * Period
   * Cardinality: 0..1
   */
  DocumentAvailabilityPeriod?: Array<Period> | undefined

  /**
   * The period during which tenders must be delivered.
   * Period
   * Cardinality: 0..1
   */
  TenderSubmissionDeadlinePeriod?: Array<Period> | undefined

  /**
   * The period during which invitations to tender must be completed and delivered.
   * Period
   * Cardinality: 0..1
   */
  InvitationSubmissionPeriod?: Array<Period> | undefined

  /**
   * The period during which the invitation to participate must be sent.
   * Period
   * Cardinality: 0..1
   */
  ParticipationInvitationPeriod?: Array<Period> | undefined

  /**
   * The period during which requests for participation must be completed and delivered.
   * Period
   * Cardinality: 0..1
   */
  ParticipationRequestReceptionPeriod?: Array<Period> | undefined

  /**
   * The period during which additional information about the procurement can be requested.
   * Period
   * Cardinality: 0..1
   */
  AdditionalInformationRequestPeriod?: Array<Period> | undefined

  /**
   * A reference to a notice pertaining to this tendering process.
   * Document Reference
   * Cardinality: 0..n
   */
  NoticeDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A justification for the selection of this tendering process.
   * Process Justification
   * Cardinality: 0..n
   */
  ProcessJustification?: Array<ProcessJustification> | undefined

  /**
   * A set of criteria used to create a short list of candidates.
   * Economic Operator Short List
   * Cardinality: 0..n
   */
  EconomicOperatorShortList?: Array<EconomicOperatorShortList> | undefined

  /**
   * Textual description of the legal form required for potential tenderers.
   * Event
   * Cardinality: 0..n
   */
  OpenTenderEvent?: Array<Event> | undefined

  /**
   * The terms to be fulfilled by tenderers if an auction is to be executed before the awarding of a tender.
   * Auction Terms
   * Cardinality: 0..1
   */
  AuctionTerms?: Array<AuctionTerms> | undefined

  /**
   * A tendering framework agreement.
   * Framework Agreement
   * Cardinality: 0..1
   */
  FrameworkAgreement?: Array<FrameworkAgreement> | undefined

  /**
   * A reference to a contracting system. Only when the procedure is repetitive.
   * Contracting System
   * Cardinality: 0..n
   */
  ContractingSystem?: Array<ContractingSystem> | undefined
}

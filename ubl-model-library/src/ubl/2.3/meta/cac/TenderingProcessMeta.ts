import { FieldMeta } from '../FieldMeta'

export enum TenderingProcessField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  OriginalContractingSystemID = 'OriginalContractingSystemID',
  Description = 'Description',
  NegotiationDescription = 'NegotiationDescription',
  ProcedureCode = 'ProcedureCode',
  UrgencyCode = 'UrgencyCode',
  ExpenseCode = 'ExpenseCode',
  PartPresentationCode = 'PartPresentationCode',
  ContractingSystemCode = 'ContractingSystemCode',
  SubmissionMethodCode = 'SubmissionMethodCode',
  CandidateReductionConstraintIndicator = 'CandidateReductionConstraintIndicator',
  GovernmentAgreementConstraintIndicator = 'GovernmentAgreementConstraintIndicator',
  AccessToolsURI = 'AccessToolsURI',
  TerminatedIndicator = 'TerminatedIndicator',
  DocumentAvailabilityPeriod = 'DocumentAvailabilityPeriod',
  TenderSubmissionDeadlinePeriod = 'TenderSubmissionDeadlinePeriod',
  InvitationSubmissionPeriod = 'InvitationSubmissionPeriod',
  ParticipationInvitationPeriod = 'ParticipationInvitationPeriod',
  ParticipationRequestReceptionPeriod = 'ParticipationRequestReceptionPeriod',
  AdditionalInformationRequestPeriod = 'AdditionalInformationRequestPeriod',
  NoticeDocumentReference = 'NoticeDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  ProcessJustification = 'ProcessJustification',
  EconomicOperatorShortList = 'EconomicOperatorShortList',
  OpenTenderEvent = 'OpenTenderEvent',
  AuctionTerms = 'AuctionTerms',
  FrameworkAgreement = 'FrameworkAgreement',
  ContractingSystem = 'ContractingSystem'
}

export const TenderingProcessFieldMetaUBLExtensions = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaID = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this tendering process.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaOriginalContractingSystemID = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.OriginalContractingSystemID,
  'OriginalContractingSystemID',
  'Original Contracting System',
  'Identifier',
  'When reopening a tendering process, the identifier of the original framework agreement or dynamic purchasing system.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaDescription = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the tendering process.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaNegotiationDescription = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.NegotiationDescription,
  'NegotiationDescription',
  'Negotiation Description',
  'Text',
  'Text describing the negotiation to be followed during the tendering process.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaProcedureCode = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ProcedureCode,
  'ProcedureCode',
  'Procedure Code',
  'Code',
  'A code signifying the type of this tendering procedure.',
  '0..1',
  'cbc',
  undefined,
  'Open, Restricted, Negotiated'
)

export const TenderingProcessFieldMetaUrgencyCode = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.UrgencyCode,
  'UrgencyCode',
  'Urgency Code',
  'Code',
  'A code signifying the urgency of this tendering process.',
  '0..1',
  'cbc',
  undefined,
  'Urgent, Normal, Emergency'
)

export const TenderingProcessFieldMetaExpenseCode = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ExpenseCode,
  'ExpenseCode',
  'Expense Code',
  'Code',
  'A code signifying the type of expense for this tendering process.',
  '0..1',
  'cbc',
  undefined,
  'Normal, Anticipated'
)

export const TenderingProcessFieldMetaPartPresentationCode = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.PartPresentationCode,
  'PartPresentationCode',
  'Part Presentation Code',
  'Code',
  'A code signifying the type of presentation of tenders required (e.g., one lot, multiple lots, or all the lots).',
  '0..1',
  'cbc',
  undefined,
  'One Lot, Multiple Lots, All Lots'
)

export const TenderingProcessFieldMetaContractingSystemCode = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ContractingSystemCode,
  'ContractingSystemCode',
  'Contracting System Code',
  'Code',
  'A code signifying the type of contracting system (e.g., framework agreement, dynamic purchasing system). If the procedure is individual (nonrepetitive), this code should be omitted.',
  '0..1',
  'cbc',
  undefined,
  'Framework Agreement, Dynamic Purchasing System'
)

export const TenderingProcessFieldMetaSubmissionMethodCode = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.SubmissionMethodCode,
  'SubmissionMethodCode',
  'Submission Method Code',
  'Code',
  'A code signifying the method to be followed in submitting tenders.',
  '0..1',
  'cbc',
  undefined,
  'Manual, Electronically, etc.'
)

export const TenderingProcessFieldMetaCandidateReductionConstraintIndicator = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.CandidateReductionConstraintIndicator,
  'CandidateReductionConstraintIndicator',
  'Candidate Reduction Constraint',
  'Indicator',
  'An indicator that the number of candidates participating in this process has been reduced (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaGovernmentAgreementConstraintIndicator = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.GovernmentAgreementConstraintIndicator,
  'GovernmentAgreementConstraintIndicator',
  'Government Agreement Constraint',
  'Indicator',
  'An indicator that the project associated with this tendering process is constrained by a government procurement agreement (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaAccessToolsURI = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.AccessToolsURI,
  'AccessToolsURI',
  'Access Tools URI',
  'Identifier',
  'The URI where the tools for electronic communication related with the tendering process can be found.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaTerminatedIndicator = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.TerminatedIndicator,
  'TerminatedIndicator',
  'Terminated',
  'Indicator',
  'An indicator that the competition launched is terminated.',
  '0..1',
  'cbc',
  undefined,
  'PIN call for competition is terminated.'
)

export const TenderingProcessFieldMetaDocumentAvailabilityPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.DocumentAvailabilityPeriod,
  'DocumentAvailabilityPeriod',
  'Document Availability Period',
  'Period',
  'The period during which documents relating to this tendering process must be completed.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaTenderSubmissionDeadlinePeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.TenderSubmissionDeadlinePeriod,
  'TenderSubmissionDeadlinePeriod',
  'Tender Submission Deadline Period',
  'Period',
  'The period during which tenders must be delivered.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaInvitationSubmissionPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.InvitationSubmissionPeriod,
  'InvitationSubmissionPeriod',
  'Invitation Submission Period',
  'Period',
  'The period during which invitations to tender must be completed and delivered.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaParticipationInvitationPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ParticipationInvitationPeriod,
  'ParticipationInvitationPeriod',
  'Participation Invitation Period',
  'Period',
  'The period during which the invitation to participate must be sent.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaParticipationRequestReceptionPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ParticipationRequestReceptionPeriod,
  'ParticipationRequestReceptionPeriod',
  'Participation Request Reception Period',
  'Period',
  'The period during which requests for participation must be completed and delivered.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaAdditionalInformationRequestPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.AdditionalInformationRequestPeriod,
  'AdditionalInformationRequestPeriod',
  'Additional Information Request Period',
  'Period',
  'The period during which additional information about the procurement can be requested.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaNoticeDocumentReference = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.NoticeDocumentReference,
  'NoticeDocumentReference',
  'Notice Document Reference',
  'DocumentReference',
  'A reference to a notice pertaining to this tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaAdditionalDocumentReference = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaProcessJustification = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ProcessJustification,
  'ProcessJustification',
  'Process Justification',
  'ProcessJustification',
  'A justification for the selection of this tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaEconomicOperatorShortList = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.EconomicOperatorShortList,
  'EconomicOperatorShortList',
  'Economic Operator Short List',
  'EconomicOperatorShortList',
  'A set of criteria used to create a short list of candidates.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaOpenTenderEvent = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.OpenTenderEvent,
  'OpenTenderEvent',
  'Open Tender Event',
  'Event',
  'Textual description of the legal form required for potential tenderers.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaAuctionTerms = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.AuctionTerms,
  'AuctionTerms',
  'Auction Terms',
  'AuctionTerms',
  'The terms to be fulfilled by tenderers if an auction is to be executed before the awarding of a tender.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaFrameworkAgreement = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.FrameworkAgreement,
  'FrameworkAgreement',
  'Framework Agreement',
  'FrameworkAgreement',
  'A tendering framework agreement.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaContractingSystem = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ContractingSystem,
  'ContractingSystem',
  'Contracting System',
  'ContractingSystem',
  'A reference to a contracting system. Only when the procedure is repetitive.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TenderingProcessFieldMeta {
  public static readonly UBLExtensions = TenderingProcessFieldMetaUBLExtensions
  public static readonly ID = TenderingProcessFieldMetaID
  public static readonly OriginalContractingSystemID = TenderingProcessFieldMetaOriginalContractingSystemID
  public static readonly Description = TenderingProcessFieldMetaDescription
  public static readonly NegotiationDescription = TenderingProcessFieldMetaNegotiationDescription
  public static readonly ProcedureCode = TenderingProcessFieldMetaProcedureCode
  public static readonly UrgencyCode = TenderingProcessFieldMetaUrgencyCode
  public static readonly ExpenseCode = TenderingProcessFieldMetaExpenseCode
  public static readonly PartPresentationCode = TenderingProcessFieldMetaPartPresentationCode
  public static readonly ContractingSystemCode = TenderingProcessFieldMetaContractingSystemCode
  public static readonly SubmissionMethodCode = TenderingProcessFieldMetaSubmissionMethodCode
  public static readonly CandidateReductionConstraintIndicator = TenderingProcessFieldMetaCandidateReductionConstraintIndicator
  public static readonly GovernmentAgreementConstraintIndicator = TenderingProcessFieldMetaGovernmentAgreementConstraintIndicator
  public static readonly AccessToolsURI = TenderingProcessFieldMetaAccessToolsURI
  public static readonly TerminatedIndicator = TenderingProcessFieldMetaTerminatedIndicator
  public static readonly DocumentAvailabilityPeriod = TenderingProcessFieldMetaDocumentAvailabilityPeriod
  public static readonly TenderSubmissionDeadlinePeriod = TenderingProcessFieldMetaTenderSubmissionDeadlinePeriod
  public static readonly InvitationSubmissionPeriod = TenderingProcessFieldMetaInvitationSubmissionPeriod
  public static readonly ParticipationInvitationPeriod = TenderingProcessFieldMetaParticipationInvitationPeriod
  public static readonly ParticipationRequestReceptionPeriod = TenderingProcessFieldMetaParticipationRequestReceptionPeriod
  public static readonly AdditionalInformationRequestPeriod = TenderingProcessFieldMetaAdditionalInformationRequestPeriod
  public static readonly NoticeDocumentReference = TenderingProcessFieldMetaNoticeDocumentReference
  public static readonly AdditionalDocumentReference = TenderingProcessFieldMetaAdditionalDocumentReference
  public static readonly ProcessJustification = TenderingProcessFieldMetaProcessJustification
  public static readonly EconomicOperatorShortList = TenderingProcessFieldMetaEconomicOperatorShortList
  public static readonly OpenTenderEvent = TenderingProcessFieldMetaOpenTenderEvent
  public static readonly AuctionTerms = TenderingProcessFieldMetaAuctionTerms
  public static readonly FrameworkAgreement = TenderingProcessFieldMetaFrameworkAgreement
  public static readonly ContractingSystem = TenderingProcessFieldMetaContractingSystem
}

export const TenderingProcessFieldMap = new Map([
  [TenderingProcessField.UBLExtensions, TenderingProcessFieldMetaUBLExtensions],
  [TenderingProcessField.ID, TenderingProcessFieldMetaID],
  [TenderingProcessField.OriginalContractingSystemID, TenderingProcessFieldMetaOriginalContractingSystemID],
  [TenderingProcessField.Description, TenderingProcessFieldMetaDescription],
  [TenderingProcessField.NegotiationDescription, TenderingProcessFieldMetaNegotiationDescription],
  [TenderingProcessField.ProcedureCode, TenderingProcessFieldMetaProcedureCode],
  [TenderingProcessField.UrgencyCode, TenderingProcessFieldMetaUrgencyCode],
  [TenderingProcessField.ExpenseCode, TenderingProcessFieldMetaExpenseCode],
  [TenderingProcessField.PartPresentationCode, TenderingProcessFieldMetaPartPresentationCode],
  [TenderingProcessField.ContractingSystemCode, TenderingProcessFieldMetaContractingSystemCode],
  [TenderingProcessField.SubmissionMethodCode, TenderingProcessFieldMetaSubmissionMethodCode],
  [TenderingProcessField.CandidateReductionConstraintIndicator, TenderingProcessFieldMetaCandidateReductionConstraintIndicator],
  [TenderingProcessField.GovernmentAgreementConstraintIndicator, TenderingProcessFieldMetaGovernmentAgreementConstraintIndicator],
  [TenderingProcessField.AccessToolsURI, TenderingProcessFieldMetaAccessToolsURI],
  [TenderingProcessField.TerminatedIndicator, TenderingProcessFieldMetaTerminatedIndicator],
  [TenderingProcessField.DocumentAvailabilityPeriod, TenderingProcessFieldMetaDocumentAvailabilityPeriod],
  [TenderingProcessField.TenderSubmissionDeadlinePeriod, TenderingProcessFieldMetaTenderSubmissionDeadlinePeriod],
  [TenderingProcessField.InvitationSubmissionPeriod, TenderingProcessFieldMetaInvitationSubmissionPeriod],
  [TenderingProcessField.ParticipationInvitationPeriod, TenderingProcessFieldMetaParticipationInvitationPeriod],
  [TenderingProcessField.ParticipationRequestReceptionPeriod, TenderingProcessFieldMetaParticipationRequestReceptionPeriod],
  [TenderingProcessField.AdditionalInformationRequestPeriod, TenderingProcessFieldMetaAdditionalInformationRequestPeriod],
  [TenderingProcessField.NoticeDocumentReference, TenderingProcessFieldMetaNoticeDocumentReference],
  [TenderingProcessField.AdditionalDocumentReference, TenderingProcessFieldMetaAdditionalDocumentReference],
  [TenderingProcessField.ProcessJustification, TenderingProcessFieldMetaProcessJustification],
  [TenderingProcessField.EconomicOperatorShortList, TenderingProcessFieldMetaEconomicOperatorShortList],
  [TenderingProcessField.OpenTenderEvent, TenderingProcessFieldMetaOpenTenderEvent],
  [TenderingProcessField.AuctionTerms, TenderingProcessFieldMetaAuctionTerms],
  [TenderingProcessField.FrameworkAgreement, TenderingProcessFieldMetaFrameworkAgreement],
  [TenderingProcessField.ContractingSystem, TenderingProcessFieldMetaContractingSystem]
])

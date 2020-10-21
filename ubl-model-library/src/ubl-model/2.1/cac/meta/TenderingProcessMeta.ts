import { FieldMeta } from '../../FieldMeta'

export enum TenderingProcessField {
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
  DocumentAvailabilityPeriod = 'DocumentAvailabilityPeriod',
  TenderSubmissionDeadlinePeriod = 'TenderSubmissionDeadlinePeriod',
  InvitationSubmissionPeriod = 'InvitationSubmissionPeriod',
  ParticipationRequestReceptionPeriod = 'ParticipationRequestReceptionPeriod',
  NoticeDocumentReference = 'NoticeDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  ProcessJustification = 'ProcessJustification',
  EconomicOperatorShortList = 'EconomicOperatorShortList',
  OpenTenderEvent = 'OpenTenderEvent',
  AuctionTerms = 'AuctionTerms',
  FrameworkAgreement = 'FrameworkAgreement'
}

export const TenderingProcessFieldMetaID = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaOriginalContractingSystemID = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.OriginalContractingSystemID,
  'OriginalContractingSystemID',
  'Contracting System',
  'Identifier',
  'When reopening a tendering process, the identifier of the original framework agreement or dynamic purchasing system.',
  '0..1',
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
  undefined,
  undefined
)

export const TenderingProcessFieldMetaNegotiationDescription = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.NegotiationDescription,
  'NegotiationDescription',
  'Description',
  'Text',
  'Text describing the negotiation to be followed during the tendering process.',
  '0..n',
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
  undefined,
  'Manual, Electronically, etc.'
)

export const TenderingProcessFieldMetaCandidateReductionConstraintIndicator = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.CandidateReductionConstraintIndicator,
  'CandidateReductionConstraintIndicator',
  'Constraint',
  'Indicator',
  'An indicator that the number of candidates participating in this process has been reduced (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaGovernmentAgreementConstraintIndicator = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.GovernmentAgreementConstraintIndicator,
  'GovernmentAgreementConstraintIndicator',
  'Constraint',
  'Indicator',
  'An indicator that the project associated with this tendering process is constrained by a government procurement agreement (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaDocumentAvailabilityPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.DocumentAvailabilityPeriod,
  'DocumentAvailabilityPeriod',
  'Period',
  'Period',
  'The period during which documents relating to this tendering process must be completed.',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaTenderSubmissionDeadlinePeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.TenderSubmissionDeadlinePeriod,
  'TenderSubmissionDeadlinePeriod',
  'Period',
  'Period',
  'The period during which tenders must be delivered.',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaInvitationSubmissionPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.InvitationSubmissionPeriod,
  'InvitationSubmissionPeriod',
  'Period',
  'Period',
  'The period during which invitations to tender must be completed and delivered.',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaParticipationRequestReceptionPeriod = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.ParticipationRequestReceptionPeriod,
  'ParticipationRequestReceptionPeriod',
  'Period',
  'Period',
  'The period during which requests for participation must be completed and delivered.',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaNoticeDocumentReference = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.NoticeDocumentReference,
  'NoticeDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a notice pertaining to this tendering process.',
  '0..n',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaAdditionalDocumentReference = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document.',
  '0..n',
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
  undefined,
  undefined
)

export const TenderingProcessFieldMetaEconomicOperatorShortList = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.EconomicOperatorShortList,
  'EconomicOperatorShortList',
  'Economic Operator Short List',
  'EconomicOperatorShortList',
  'A set of criteria used to create a short list of candidates.',
  '0..1',
  undefined,
  undefined
)

export const TenderingProcessFieldMetaOpenTenderEvent = new FieldMeta<TenderingProcessField>(
  TenderingProcessField.OpenTenderEvent,
  'OpenTenderEvent',
  'Event',
  'Event',
  'Textual description of the legal form required for potential tenderers.',
  '0..n',
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
  undefined,
  undefined
)

export class TenderingProcessFieldMeta {
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
  public static readonly DocumentAvailabilityPeriod = TenderingProcessFieldMetaDocumentAvailabilityPeriod
  public static readonly TenderSubmissionDeadlinePeriod = TenderingProcessFieldMetaTenderSubmissionDeadlinePeriod
  public static readonly InvitationSubmissionPeriod = TenderingProcessFieldMetaInvitationSubmissionPeriod
  public static readonly ParticipationRequestReceptionPeriod = TenderingProcessFieldMetaParticipationRequestReceptionPeriod
  public static readonly NoticeDocumentReference = TenderingProcessFieldMetaNoticeDocumentReference
  public static readonly AdditionalDocumentReference = TenderingProcessFieldMetaAdditionalDocumentReference
  public static readonly ProcessJustification = TenderingProcessFieldMetaProcessJustification
  public static readonly EconomicOperatorShortList = TenderingProcessFieldMetaEconomicOperatorShortList
  public static readonly OpenTenderEvent = TenderingProcessFieldMetaOpenTenderEvent
  public static readonly AuctionTerms = TenderingProcessFieldMetaAuctionTerms
  public static readonly FrameworkAgreement = TenderingProcessFieldMetaFrameworkAgreement
}

export const TenderingProcessFieldMap = new Map([
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
  [TenderingProcessField.DocumentAvailabilityPeriod, TenderingProcessFieldMetaDocumentAvailabilityPeriod],
  [TenderingProcessField.TenderSubmissionDeadlinePeriod, TenderingProcessFieldMetaTenderSubmissionDeadlinePeriod],
  [TenderingProcessField.InvitationSubmissionPeriod, TenderingProcessFieldMetaInvitationSubmissionPeriod],
  [TenderingProcessField.ParticipationRequestReceptionPeriod, TenderingProcessFieldMetaParticipationRequestReceptionPeriod],
  [TenderingProcessField.NoticeDocumentReference, TenderingProcessFieldMetaNoticeDocumentReference],
  [TenderingProcessField.AdditionalDocumentReference, TenderingProcessFieldMetaAdditionalDocumentReference],
  [TenderingProcessField.ProcessJustification, TenderingProcessFieldMetaProcessJustification],
  [TenderingProcessField.EconomicOperatorShortList, TenderingProcessFieldMetaEconomicOperatorShortList],
  [TenderingProcessField.OpenTenderEvent, TenderingProcessFieldMetaOpenTenderEvent],
  [TenderingProcessField.AuctionTerms, TenderingProcessFieldMetaAuctionTerms],
  [TenderingProcessField.FrameworkAgreement, TenderingProcessFieldMetaFrameworkAgreement]
])

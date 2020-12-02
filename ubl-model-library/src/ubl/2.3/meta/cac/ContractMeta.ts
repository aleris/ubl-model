import { FieldMeta } from '../FieldMeta'

export enum ContractField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  NominationDate = 'NominationDate',
  NominationTime = 'NominationTime',
  ContractTypeCode = 'ContractTypeCode',
  ContractType = 'ContractType',
  Note = 'Note',
  VersionID = 'VersionID',
  ModificationReasonCode = 'ModificationReasonCode',
  ModificationReasonDescription = 'ModificationReasonDescription',
  Description = 'Description',
  ValidityPeriod = 'ValidityPeriod',
  ContractDocumentReference = 'ContractDocumentReference',
  NominationPeriod = 'NominationPeriod',
  ContractualDelivery = 'ContractualDelivery'
}

export const ContractFieldMetaUBLExtensions = new FieldMeta<ContractField>(
  ContractField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractFieldMetaID = new FieldMeta<ContractField>(
  ContractField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this contract.',
  '0..1',
  'cbc',
  undefined,
  'CC23'
)

export const ContractFieldMetaIssueDate = new FieldMeta<ContractField>(
  ContractField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which this contract was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaIssueTime = new FieldMeta<ContractField>(
  ContractField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time at which this contract was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaNominationDate = new FieldMeta<ContractField>(
  ContractField.NominationDate,
  'NominationDate',
  'Nomination Date',
  'Date',
  'In a transportation contract, the deadline date by which the services referred to in the transport execution plan have to be booked. For example, if this service is a carrier service scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15 February 2011.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaNominationTime = new FieldMeta<ContractField>(
  ContractField.NominationTime,
  'NominationTime',
  'Nomination Time',
  'Time',
  'In a transportation contract, the deadline time by which the services referred to in the transport execution plan have to be booked. For example, if this service is a carrier service scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15 February 2011 and the nomination time 4 p.m. at the latest.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaContractTypeCode = new FieldMeta<ContractField>(
  ContractField.ContractTypeCode,
  'ContractTypeCode',
  'Contract Type Code',
  'Code',
  'The type of this contract, expressed as a code, such as "Cost plus award fee" and "Cost plus fixed fee" from UNCEFACT Contract Type code list.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaContractType = new FieldMeta<ContractField>(
  ContractField.ContractType,
  'ContractType',
  'Contract Type',
  'Text',
  'The type of this contract, expressed as text, such as "Cost plus award fee" and "Cost plus fixed fee" from UNCEFACT Contract Type code list.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaNote = new FieldMeta<ContractField>(
  ContractField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  'Remarks',
  undefined
)

export const ContractFieldMetaVersionID = new FieldMeta<ContractField>(
  ContractField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'An identifier for the current version of this contract.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaModificationReasonCode = new FieldMeta<ContractField>(
  ContractField.ModificationReasonCode,
  'ModificationReasonCode',
  'Modification Reason Code',
  'Code',
  'The main reason for modifying the contract expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaModificationReasonDescription = new FieldMeta<ContractField>(
  ContractField.ModificationReasonDescription,
  'ModificationReasonDescription',
  'Modification Reason Description',
  'Text',
  'Text describing the main reason for modifying the contract',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaDescription = new FieldMeta<ContractField>(
  ContractField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this contract.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ContractFieldMetaValidityPeriod = new FieldMeta<ContractField>(
  ContractField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period during which this contract is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ContractFieldMetaContractDocumentReference = new FieldMeta<ContractField>(
  ContractField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  'DocumentReference',
  'A reference to a contract document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ContractFieldMetaNominationPeriod = new FieldMeta<ContractField>(
  ContractField.NominationPeriod,
  'NominationPeriod',
  'Nomination Period',
  'Period',
  'In a transportation contract, the period required to book the services specified in the contract before the services can begin.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ContractFieldMetaContractualDelivery = new FieldMeta<ContractField>(
  ContractField.ContractualDelivery,
  'ContractualDelivery',
  'Contractual Delivery',
  'Delivery',
  'In a transportation contract, the delivery of the services required to book the services specified in the contract.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ContractFieldMeta {
  public static readonly UBLExtensions = ContractFieldMetaUBLExtensions
  public static readonly ID = ContractFieldMetaID
  public static readonly IssueDate = ContractFieldMetaIssueDate
  public static readonly IssueTime = ContractFieldMetaIssueTime
  public static readonly NominationDate = ContractFieldMetaNominationDate
  public static readonly NominationTime = ContractFieldMetaNominationTime
  public static readonly ContractTypeCode = ContractFieldMetaContractTypeCode
  public static readonly ContractType = ContractFieldMetaContractType
  public static readonly Note = ContractFieldMetaNote
  public static readonly VersionID = ContractFieldMetaVersionID
  public static readonly ModificationReasonCode = ContractFieldMetaModificationReasonCode
  public static readonly ModificationReasonDescription = ContractFieldMetaModificationReasonDescription
  public static readonly Description = ContractFieldMetaDescription
  public static readonly ValidityPeriod = ContractFieldMetaValidityPeriod
  public static readonly ContractDocumentReference = ContractFieldMetaContractDocumentReference
  public static readonly NominationPeriod = ContractFieldMetaNominationPeriod
  public static readonly ContractualDelivery = ContractFieldMetaContractualDelivery
}

export const ContractFieldMap = new Map([
  [ContractField.UBLExtensions, ContractFieldMetaUBLExtensions],
  [ContractField.ID, ContractFieldMetaID],
  [ContractField.IssueDate, ContractFieldMetaIssueDate],
  [ContractField.IssueTime, ContractFieldMetaIssueTime],
  [ContractField.NominationDate, ContractFieldMetaNominationDate],
  [ContractField.NominationTime, ContractFieldMetaNominationTime],
  [ContractField.ContractTypeCode, ContractFieldMetaContractTypeCode],
  [ContractField.ContractType, ContractFieldMetaContractType],
  [ContractField.Note, ContractFieldMetaNote],
  [ContractField.VersionID, ContractFieldMetaVersionID],
  [ContractField.ModificationReasonCode, ContractFieldMetaModificationReasonCode],
  [ContractField.ModificationReasonDescription, ContractFieldMetaModificationReasonDescription],
  [ContractField.Description, ContractFieldMetaDescription],
  [ContractField.ValidityPeriod, ContractFieldMetaValidityPeriod],
  [ContractField.ContractDocumentReference, ContractFieldMetaContractDocumentReference],
  [ContractField.NominationPeriod, ContractFieldMetaNominationPeriod],
  [ContractField.ContractualDelivery, ContractFieldMetaContractualDelivery]
])

import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DeliveryType } from './DeliveryMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractFieldMetaID = new FieldMeta<ContractField>(
  ContractField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this contract.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'CC23'
)

export const ContractFieldMetaIssueDate = new FieldMeta<ContractField>(
  ContractField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which this contract was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaIssueTime = new FieldMeta<ContractField>(
  ContractField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which this contract was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaNominationDate = new FieldMeta<ContractField>(
  ContractField.NominationDate,
  'NominationDate',
  'Nomination Date',
  DateType.name,
  'In a transportation contract, the deadline date by which the services referred to in the transport execution plan have to be booked. For example, if this service is a carrier service scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15 February 2011.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaNominationTime = new FieldMeta<ContractField>(
  ContractField.NominationTime,
  'NominationTime',
  'Nomination Time',
  TimeType.name,
  'In a transportation contract, the deadline time by which the services referred to in the transport execution plan have to be booked. For example, if this service is a carrier service scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15 February 2011 and the nomination time 4 p.m. at the latest.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaContractTypeCode = new FieldMeta<ContractField>(
  ContractField.ContractTypeCode,
  'ContractTypeCode',
  'Contract Type Code',
  CodeType.name,
  'The type of this contract, expressed as a code, such as "Cost plus award fee" and "Cost plus fixed fee" from UNCEFACT Contract Type code list.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaContractType = new FieldMeta<ContractField>(
  ContractField.ContractType,
  'ContractType',
  'Contract Type',
  TextType.name,
  'The type of this contract, expressed as text, such as "Cost plus award fee" and "Cost plus fixed fee" from UNCEFACT Contract Type code list.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaNote = new FieldMeta<ContractField>(
  ContractField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Remarks',
  undefined
)

export const ContractFieldMetaVersionID = new FieldMeta<ContractField>(
  ContractField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'An identifier for the current version of this contract.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaModificationReasonCode = new FieldMeta<ContractField>(
  ContractField.ModificationReasonCode,
  'ModificationReasonCode',
  'Modification Reason Code',
  CodeType.name,
  'The main reason for modifying the contract expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaModificationReasonDescription = new FieldMeta<ContractField>(
  ContractField.ModificationReasonDescription,
  'ModificationReasonDescription',
  'Modification Reason Description',
  TextType.name,
  'Text describing the main reason for modifying the contract',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaDescription = new FieldMeta<ContractField>(
  ContractField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this contract.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractFieldMetaValidityPeriod = new FieldMeta<ContractField>(
  ContractField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period during which this contract is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractFieldMetaContractDocumentReference = new FieldMeta<ContractField>(
  ContractField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  DocumentReferenceType.name,
  'A reference to a contract document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractFieldMetaNominationPeriod = new FieldMeta<ContractField>(
  ContractField.NominationPeriod,
  'NominationPeriod',
  'Nomination Period',
  PeriodType.name,
  'In a transportation contract, the period required to book the services specified in the contract before the services can begin.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractFieldMetaContractualDelivery = new FieldMeta<ContractField>(
  ContractField.ContractualDelivery,
  'ContractualDelivery',
  'Contractual Delivery',
  DeliveryType.name,
  'In a transportation contract, the delivery of the services required to book the services specified in the contract.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ContractType: Type<ContractField> = {
  name: 'Contract',
  label: 'Contract',
  module: TypeModule.cac,
  definition: 'A class to describe a contract.',
  fields: ContractFieldMap,
}

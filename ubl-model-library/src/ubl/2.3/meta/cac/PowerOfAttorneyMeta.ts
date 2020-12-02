import { FieldMeta } from '../FieldMeta'

export enum PowerOfAttorneyField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Description = 'Description',
  NotaryParty = 'NotaryParty',
  AgentParty = 'AgentParty',
  WitnessParty = 'WitnessParty',
  MandateDocumentReference = 'MandateDocumentReference'
}

export const PowerOfAttorneyFieldMetaUBLExtensions = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaID = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this power of attorney.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaIssueDate = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date on which this power of attorney was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaIssueTime = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time at which this power of attorney was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaDescription = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this power of attorney.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaNotaryParty = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.NotaryParty,
  'NotaryParty',
  'Notary Party',
  'Party',
  'The party notarizing this power of attorney.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaAgentParty = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.AgentParty,
  'AgentParty',
  'Agent Party',
  'Party',
  'The party who acts as an agent or fiduciary for the principal and who holds this power of attorney on behalf of the principal.',
  '1',
  'cac',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaWitnessParty = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.WitnessParty,
  'WitnessParty',
  'Witness Party',
  'Party',
  'An association to a WitnessParty.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaMandateDocumentReference = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.MandateDocumentReference,
  'MandateDocumentReference',
  'Mandate Document Reference',
  'DocumentReference',
  'A reference to a mandate associated with this power of attorney.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class PowerOfAttorneyFieldMeta {
  public static readonly UBLExtensions = PowerOfAttorneyFieldMetaUBLExtensions
  public static readonly ID = PowerOfAttorneyFieldMetaID
  public static readonly IssueDate = PowerOfAttorneyFieldMetaIssueDate
  public static readonly IssueTime = PowerOfAttorneyFieldMetaIssueTime
  public static readonly Description = PowerOfAttorneyFieldMetaDescription
  public static readonly NotaryParty = PowerOfAttorneyFieldMetaNotaryParty
  public static readonly AgentParty = PowerOfAttorneyFieldMetaAgentParty
  public static readonly WitnessParty = PowerOfAttorneyFieldMetaWitnessParty
  public static readonly MandateDocumentReference = PowerOfAttorneyFieldMetaMandateDocumentReference
}

export const PowerOfAttorneyFieldMap = new Map([
  [PowerOfAttorneyField.UBLExtensions, PowerOfAttorneyFieldMetaUBLExtensions],
  [PowerOfAttorneyField.ID, PowerOfAttorneyFieldMetaID],
  [PowerOfAttorneyField.IssueDate, PowerOfAttorneyFieldMetaIssueDate],
  [PowerOfAttorneyField.IssueTime, PowerOfAttorneyFieldMetaIssueTime],
  [PowerOfAttorneyField.Description, PowerOfAttorneyFieldMetaDescription],
  [PowerOfAttorneyField.NotaryParty, PowerOfAttorneyFieldMetaNotaryParty],
  [PowerOfAttorneyField.AgentParty, PowerOfAttorneyFieldMetaAgentParty],
  [PowerOfAttorneyField.WitnessParty, PowerOfAttorneyFieldMetaWitnessParty],
  [PowerOfAttorneyField.MandateDocumentReference, PowerOfAttorneyFieldMetaMandateDocumentReference]
])

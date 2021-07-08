import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaID = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this power of attorney.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaIssueDate = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which this power of attorney was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaIssueTime = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which this power of attorney was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaDescription = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this power of attorney.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaNotaryParty = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.NotaryParty,
  'NotaryParty',
  'Notary Party',
  PartyType.name,
  'The party notarizing this power of attorney.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaAgentParty = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.AgentParty,
  'AgentParty',
  'Agent Party',
  PartyType.name,
  'The party who acts as an agent or fiduciary for the principal and who holds this power of attorney on behalf of the principal.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaWitnessParty = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.WitnessParty,
  'WitnessParty',
  'Witness Party',
  PartyType.name,
  'An association to a WitnessParty.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PowerOfAttorneyFieldMetaMandateDocumentReference = new FieldMeta<PowerOfAttorneyField>(
  PowerOfAttorneyField.MandateDocumentReference,
  'MandateDocumentReference',
  'Mandate Document Reference',
  DocumentReferenceType.name,
  'A reference to a mandate associated with this power of attorney.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const PowerOfAttorneyType: Type<PowerOfAttorneyField> = {
  name: 'PowerOfAttorney',
  label: 'Power Of Attorney',
  module: TypeModule.cac,
  definition: 'A class to describe a power of attorney.',
  fields: PowerOfAttorneyFieldMap,
}

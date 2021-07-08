import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CapabilityType } from './CapabilityMeta'
import { ClassificationSchemeType } from './ClassificationSchemeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CompletedTaskType } from './CompletedTaskMeta'
import { DeclarationType } from './DeclarationMeta'
import { EconomicOperatorRoleType } from './EconomicOperatorRoleMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum QualifyingPartyField {
  UBLExtensions = 'UBLExtensions',
  ParticipationPercent = 'ParticipationPercent',
  PersonalSituation = 'PersonalSituation',
  OperatingYearsQuantity = 'OperatingYearsQuantity',
  EmployeeQuantity = 'EmployeeQuantity',
  BusinessClassificationEvidenceID = 'BusinessClassificationEvidenceID',
  BusinessIdentityEvidenceID = 'BusinessIdentityEvidenceID',
  TendererRoleCode = 'TendererRoleCode',
  BusinessClassificationScheme = 'BusinessClassificationScheme',
  TechnicalCapability = 'TechnicalCapability',
  FinancialCapability = 'FinancialCapability',
  CompletedTask = 'CompletedTask',
  Declaration = 'Declaration',
  Party = 'Party',
  EconomicOperatorRole = 'EconomicOperatorRole'
}

export const QualifyingPartyFieldMetaUBLExtensions = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaParticipationPercent = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.ParticipationPercent,
  'ParticipationPercent',
  'Participation',
  NumericType.name,
  'The extent to which this party is expected to participate in the tendering process, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaPersonalSituation = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.PersonalSituation,
  'PersonalSituation',
  'Personal Situation',
  TextType.name,
  'Text describing the personal situation of the qualifying party.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaOperatingYearsQuantity = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.OperatingYearsQuantity,
  'OperatingYearsQuantity',
  'Operating Years',
  QuantityType.name,
  'The number of years that this qualifying party has been in operation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaEmployeeQuantity = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.EmployeeQuantity,
  'EmployeeQuantity',
  'Employee',
  QuantityType.name,
  'The number of people employed by this qualifying party.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaBusinessClassificationEvidenceID = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.BusinessClassificationEvidenceID,
  'BusinessClassificationEvidenceID',
  'Business Classification Evidence',
  IdentifierType.name,
  'An identifier for an item of evidence to support the classification of this qualifying party.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaBusinessIdentityEvidenceID = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.BusinessIdentityEvidenceID,
  'BusinessIdentityEvidenceID',
  'Business Identity Evidence',
  IdentifierType.name,
  'An identifier for an item of evidence to support the business identity of this qualifying party.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaTendererRoleCode = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.TendererRoleCode,
  'TendererRoleCode',
  'Tenderer Role Code',
  CodeType.name,
  'A code stating the Tenderer Role.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaBusinessClassificationScheme = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.BusinessClassificationScheme,
  'BusinessClassificationScheme',
  'Business Classification Scheme',
  ClassificationSchemeType.name,
  'The classification scheme used for the business profile.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaTechnicalCapability = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.TechnicalCapability,
  'TechnicalCapability',
  'Technical Capability',
  CapabilityType.name,
  'A technical capability of this qualifying party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaFinancialCapability = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.FinancialCapability,
  'FinancialCapability',
  'Financial Capability',
  CapabilityType.name,
  'A financial capability of this qualifying party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaCompletedTask = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.CompletedTask,
  'CompletedTask',
  'Completed Task',
  CompletedTaskType.name,
  'A former task completed by this qualifying party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaDeclaration = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.Declaration,
  'Declaration',
  'Declaration',
  DeclarationType.name,
  'A declaration by this qualifying party. of certain characteristics or capabilities in fulfilment of requirements specified in a call for tenders.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaParty = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The qualifying party itself.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaEconomicOperatorRole = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.EconomicOperatorRole,
  'EconomicOperatorRole',
  'Economic Operator Role',
  EconomicOperatorRoleType.name,
  'A class to describe the tenderer contracting role.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class QualifyingPartyFieldMeta {
  public static readonly UBLExtensions = QualifyingPartyFieldMetaUBLExtensions
  public static readonly ParticipationPercent = QualifyingPartyFieldMetaParticipationPercent
  public static readonly PersonalSituation = QualifyingPartyFieldMetaPersonalSituation
  public static readonly OperatingYearsQuantity = QualifyingPartyFieldMetaOperatingYearsQuantity
  public static readonly EmployeeQuantity = QualifyingPartyFieldMetaEmployeeQuantity
  public static readonly BusinessClassificationEvidenceID = QualifyingPartyFieldMetaBusinessClassificationEvidenceID
  public static readonly BusinessIdentityEvidenceID = QualifyingPartyFieldMetaBusinessIdentityEvidenceID
  public static readonly TendererRoleCode = QualifyingPartyFieldMetaTendererRoleCode
  public static readonly BusinessClassificationScheme = QualifyingPartyFieldMetaBusinessClassificationScheme
  public static readonly TechnicalCapability = QualifyingPartyFieldMetaTechnicalCapability
  public static readonly FinancialCapability = QualifyingPartyFieldMetaFinancialCapability
  public static readonly CompletedTask = QualifyingPartyFieldMetaCompletedTask
  public static readonly Declaration = QualifyingPartyFieldMetaDeclaration
  public static readonly Party = QualifyingPartyFieldMetaParty
  public static readonly EconomicOperatorRole = QualifyingPartyFieldMetaEconomicOperatorRole
}

export const QualifyingPartyFieldMap = new Map([
  [QualifyingPartyField.UBLExtensions, QualifyingPartyFieldMetaUBLExtensions],
  [QualifyingPartyField.ParticipationPercent, QualifyingPartyFieldMetaParticipationPercent],
  [QualifyingPartyField.PersonalSituation, QualifyingPartyFieldMetaPersonalSituation],
  [QualifyingPartyField.OperatingYearsQuantity, QualifyingPartyFieldMetaOperatingYearsQuantity],
  [QualifyingPartyField.EmployeeQuantity, QualifyingPartyFieldMetaEmployeeQuantity],
  [QualifyingPartyField.BusinessClassificationEvidenceID, QualifyingPartyFieldMetaBusinessClassificationEvidenceID],
  [QualifyingPartyField.BusinessIdentityEvidenceID, QualifyingPartyFieldMetaBusinessIdentityEvidenceID],
  [QualifyingPartyField.TendererRoleCode, QualifyingPartyFieldMetaTendererRoleCode],
  [QualifyingPartyField.BusinessClassificationScheme, QualifyingPartyFieldMetaBusinessClassificationScheme],
  [QualifyingPartyField.TechnicalCapability, QualifyingPartyFieldMetaTechnicalCapability],
  [QualifyingPartyField.FinancialCapability, QualifyingPartyFieldMetaFinancialCapability],
  [QualifyingPartyField.CompletedTask, QualifyingPartyFieldMetaCompletedTask],
  [QualifyingPartyField.Declaration, QualifyingPartyFieldMetaDeclaration],
  [QualifyingPartyField.Party, QualifyingPartyFieldMetaParty],
  [QualifyingPartyField.EconomicOperatorRole, QualifyingPartyFieldMetaEconomicOperatorRole]
])

export const QualifyingPartyType: Type<QualifyingPartyField> = {
  name: 'QualifyingParty',
  label: 'Qualifying Party',
  module: TypeModule.cac,
  definition: 'A class to describe the distinctive features or characteristics qualifying an economic operator to be a party in a tendering process (e.g., number of employees, number of operating units, type of business, technical and financial capabilities, completed projects).',
  fields: QualifyingPartyFieldMap,
}

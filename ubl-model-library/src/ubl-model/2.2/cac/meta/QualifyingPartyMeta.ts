import { FieldMeta } from '../../FieldMeta'

export enum QualifyingPartyField {
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

export const QualifyingPartyFieldMetaParticipationPercent = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.ParticipationPercent,
  'ParticipationPercent',
  'Participation',
  'Numeric',
  'The extent to which this party is expected to participate in the tendering process, expressed as a percentage.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaPersonalSituation = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.PersonalSituation,
  'PersonalSituation',
  'Personal Situation',
  'Text',
  'Text describing the personal situation of the qualifying party.',
  '0..n',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaOperatingYearsQuantity = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.OperatingYearsQuantity,
  'OperatingYearsQuantity',
  'Operating Years',
  'Quantity',
  'The number of years that this qualifying party has been in operation.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaEmployeeQuantity = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.EmployeeQuantity,
  'EmployeeQuantity',
  'Employee',
  'Quantity',
  'The number of people employed by this qualifying party.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaBusinessClassificationEvidenceID = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.BusinessClassificationEvidenceID,
  'BusinessClassificationEvidenceID',
  'Business Classification Evidence',
  'Identifier',
  'An identifier for an item of evidence to support the classification of this qualifying party.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaBusinessIdentityEvidenceID = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.BusinessIdentityEvidenceID,
  'BusinessIdentityEvidenceID',
  'Business Identity Evidence',
  'Identifier',
  'An identifier for an item of evidence to support the business identity of this qualifying party.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaTendererRoleCode = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.TendererRoleCode,
  'TendererRoleCode',
  'Tenderer Role Code',
  'Code',
  'A code stating the Tenderer Role.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaBusinessClassificationScheme = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.BusinessClassificationScheme,
  'BusinessClassificationScheme',
  'Classification Scheme',
  'ClassificationScheme',
  'The classification scheme used for the business profile.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaTechnicalCapability = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.TechnicalCapability,
  'TechnicalCapability',
  'Capability',
  'Capability',
  'A technical capability of this qualifying party.',
  '0..n',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaFinancialCapability = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.FinancialCapability,
  'FinancialCapability',
  'Capability',
  'Capability',
  'A financial capability of this qualifying party.',
  '0..n',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaCompletedTask = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.CompletedTask,
  'CompletedTask',
  'Completed Task',
  'CompletedTask',
  'A former task completed by this qualifying party.',
  '0..n',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaDeclaration = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.Declaration,
  'Declaration',
  'Declaration',
  'Declaration',
  'A declaration by this qualifying party. of certain characteristics or capabilities in fulfilment of requirements specified in a call for tenders.',
  '0..n',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaParty = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The qualifying party itself.',
  '0..1',
  undefined,
  undefined
)

export const QualifyingPartyFieldMetaEconomicOperatorRole = new FieldMeta<QualifyingPartyField>(
  QualifyingPartyField.EconomicOperatorRole,
  'EconomicOperatorRole',
  'Economic Operator Role',
  'EconomicOperatorRole',
  'A class to describe the tenderer contracting role.',
  '0..1',
  undefined,
  undefined
)

export class QualifyingPartyFieldMeta {
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

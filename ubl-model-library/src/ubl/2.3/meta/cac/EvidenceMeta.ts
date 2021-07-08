import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LanguageType } from './LanguageMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EvidenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  EvidenceTypeCode = 'EvidenceTypeCode',
  Name = 'Name',
  Description = 'Description',
  CandidateStatement = 'CandidateStatement',
  ConfidentialityLevelCode = 'ConfidentialityLevelCode',
  EvidenceIssuingParty = 'EvidenceIssuingParty',
  DocumentReference = 'DocumentReference',
  Language = 'Language'
}

export const EvidenceFieldMetaUBLExtensions = new FieldMeta<EvidenceField>(
  EvidenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EvidenceFieldMetaID = new FieldMeta<EvidenceField>(
  EvidenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this item of evidentiary support.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvidenceFieldMetaEvidenceTypeCode = new FieldMeta<EvidenceField>(
  EvidenceField.EvidenceTypeCode,
  'EvidenceTypeCode',
  'Evidence Type Code',
  CodeType.name,
  'A code signifying the type of evidence.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvidenceFieldMetaName = new FieldMeta<EvidenceField>(
  EvidenceField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of the evidence.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvidenceFieldMetaDescription = new FieldMeta<EvidenceField>(
  EvidenceField.Description,
  'Description',
  'Description',
  TextType.name,
  'The textual description for this Evidence.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvidenceFieldMetaCandidateStatement = new FieldMeta<EvidenceField>(
  EvidenceField.CandidateStatement,
  'CandidateStatement',
  'Candidate Statement',
  TextType.name,
  'Information about a candidate statement that the contracting authority accepts as a sufficient response.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvidenceFieldMetaConfidentialityLevelCode = new FieldMeta<EvidenceField>(
  EvidenceField.ConfidentialityLevelCode,
  'ConfidentialityLevelCode',
  'Confidentiality Level Code',
  CodeType.name,
  'A code specifying the confidentiality level of this evidence.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvidenceFieldMetaEvidenceIssuingParty = new FieldMeta<EvidenceField>(
  EvidenceField.EvidenceIssuingParty,
  'EvidenceIssuingParty',
  'Evidence Issuing Party',
  PartyType.name,
  'A class to describe a party issuing an evidentiary document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EvidenceFieldMetaDocumentReference = new FieldMeta<EvidenceField>(
  EvidenceField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to the evidentiary document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EvidenceFieldMetaLanguage = new FieldMeta<EvidenceField>(
  EvidenceField.Language,
  'Language',
  'Language',
  LanguageType.name,
  'Information about a required translation to be part of the response, i.e. the language.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class EvidenceFieldMeta {
  public static readonly UBLExtensions = EvidenceFieldMetaUBLExtensions
  public static readonly ID = EvidenceFieldMetaID
  public static readonly EvidenceTypeCode = EvidenceFieldMetaEvidenceTypeCode
  public static readonly Name = EvidenceFieldMetaName
  public static readonly Description = EvidenceFieldMetaDescription
  public static readonly CandidateStatement = EvidenceFieldMetaCandidateStatement
  public static readonly ConfidentialityLevelCode = EvidenceFieldMetaConfidentialityLevelCode
  public static readonly EvidenceIssuingParty = EvidenceFieldMetaEvidenceIssuingParty
  public static readonly DocumentReference = EvidenceFieldMetaDocumentReference
  public static readonly Language = EvidenceFieldMetaLanguage
}

export const EvidenceFieldMap = new Map([
  [EvidenceField.UBLExtensions, EvidenceFieldMetaUBLExtensions],
  [EvidenceField.ID, EvidenceFieldMetaID],
  [EvidenceField.EvidenceTypeCode, EvidenceFieldMetaEvidenceTypeCode],
  [EvidenceField.Name, EvidenceFieldMetaName],
  [EvidenceField.Description, EvidenceFieldMetaDescription],
  [EvidenceField.CandidateStatement, EvidenceFieldMetaCandidateStatement],
  [EvidenceField.ConfidentialityLevelCode, EvidenceFieldMetaConfidentialityLevelCode],
  [EvidenceField.EvidenceIssuingParty, EvidenceFieldMetaEvidenceIssuingParty],
  [EvidenceField.DocumentReference, EvidenceFieldMetaDocumentReference],
  [EvidenceField.Language, EvidenceFieldMetaLanguage]
])

export const EvidenceType: Type<EvidenceField> = {
  name: 'Evidence',
  label: 'Evidence',
  module: TypeModule.cac,
  definition: 'A class to describe an item of evidentiary support for representations of capabilities or the ability to meet tendering requirements, which an economic operator must provide for acceptance into a tendering process.',
  fields: EvidenceFieldMap,
}

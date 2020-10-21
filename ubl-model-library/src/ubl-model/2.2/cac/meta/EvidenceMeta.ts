import { FieldMeta } from '../../FieldMeta'

export enum EvidenceField {
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

export const EvidenceFieldMetaID = new FieldMeta<EvidenceField>(
  EvidenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this item of evidentiary support.',
  '0..1',
  undefined,
  undefined
)

export const EvidenceFieldMetaEvidenceTypeCode = new FieldMeta<EvidenceField>(
  EvidenceField.EvidenceTypeCode,
  'EvidenceTypeCode',
  'Evidence Type Code',
  'Code',
  'A code signifying the type of evidence.',
  '0..1',
  undefined,
  undefined
)

export const EvidenceFieldMetaName = new FieldMeta<EvidenceField>(
  EvidenceField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the evidence.',
  '0..1',
  undefined,
  undefined
)

export const EvidenceFieldMetaDescription = new FieldMeta<EvidenceField>(
  EvidenceField.Description,
  'Description',
  'Description',
  'Text',
  'The textual description for this Evidence.',
  '0..n',
  undefined,
  undefined
)

export const EvidenceFieldMetaCandidateStatement = new FieldMeta<EvidenceField>(
  EvidenceField.CandidateStatement,
  'CandidateStatement',
  'Statement',
  'Text',
  'Information about a candidate statement that the contracting authority accepts as a sufficient response.',
  '0..n',
  undefined,
  undefined
)

export const EvidenceFieldMetaConfidentialityLevelCode = new FieldMeta<EvidenceField>(
  EvidenceField.ConfidentialityLevelCode,
  'ConfidentialityLevelCode',
  'Confidentiality Level Code',
  'Code',
  'A code specifying the confidentiality level of this evidence.',
  '0..1',
  undefined,
  undefined
)

export const EvidenceFieldMetaEvidenceIssuingParty = new FieldMeta<EvidenceField>(
  EvidenceField.EvidenceIssuingParty,
  'EvidenceIssuingParty',
  'Party',
  'Party',
  'A class to describe a party issuing an evidentiary document.',
  '0..1',
  undefined,
  undefined
)

export const EvidenceFieldMetaDocumentReference = new FieldMeta<EvidenceField>(
  EvidenceField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the evidentiary document.',
  '0..n',
  undefined,
  undefined
)

export const EvidenceFieldMetaLanguage = new FieldMeta<EvidenceField>(
  EvidenceField.Language,
  'Language',
  'Language',
  'Language',
  'Information about a required translation to be part of the response, i.e. the language.',
  '0..1',
  undefined,
  undefined
)

export class EvidenceFieldMeta {
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

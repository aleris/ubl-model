import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttachmentType } from '../cac/AttachmentMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EvidenceType } from '../cac/EvidenceMeta'
import { GoodsItemPassportCounterfoilType } from '../cac/GoodsItemPassportCounterfoilMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ProofOfReexportationField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  VersionID = 'VersionID',
  IssuerParty = 'IssuerParty',
  GoodsItemPassportCounterfoil = 'GoodsItemPassportCounterfoil',
  ReexportationEvidence = 'ReexportationEvidence',
  GoodsItemPassportAttachment = 'GoodsItemPassportAttachment',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature'
}

export const ProofOfReexportationFieldMetaUBLExtensions = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaUBLVersionID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.3'
)

export const ProofOfReexportationFieldMetaCustomizationID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaProfileID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaProfileExecutionID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ProofOfReexportationFieldMetaID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaUUID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaIssueDate = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaIssueTime = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaNote = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaVersionID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this request for proof',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaIssuerParty = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party issuing this proof of re-exportation',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaGoodsItemPassportCounterfoil = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.GoodsItemPassportCounterfoil,
  'GoodsItemPassportCounterfoil',
  'Goods Item Passport Counterfoil',
  GoodsItemPassportCounterfoilType.name,
  'One or more goods item passport or ATA Carnet counterfoils associated with this proof of re-exportation',
  FieldCardinality.Multi,
  TypeModule.cac,
  'ATA Carnet counterfoil',
  undefined
)

export const ProofOfReexportationFieldMetaReexportationEvidence = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ReexportationEvidence,
  'ReexportationEvidence',
  'Reexportation Evidence',
  EvidenceType.name,
  'One or more references to evidence supporting that goods have been re-exported',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaGoodsItemPassportAttachment = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.GoodsItemPassportAttachment,
  'GoodsItemPassportAttachment',
  'Goods Item Passport Attachment',
  AttachmentType.name,
  'Attachment of the goods item passport or ATA Carnet related to this proof of re-exportation',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'ATA Carnet',
  undefined
)

export const ProofOfReexportationFieldMetaAdditionalDocumentReference = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'One or more references to additional documents related to this proof of re-exportation',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaSignature = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ProofOfReexportationFieldMeta {
  public static readonly UBLExtensions = ProofOfReexportationFieldMetaUBLExtensions
  public static readonly UBLVersionID = ProofOfReexportationFieldMetaUBLVersionID
  public static readonly CustomizationID = ProofOfReexportationFieldMetaCustomizationID
  public static readonly ProfileID = ProofOfReexportationFieldMetaProfileID
  public static readonly ProfileExecutionID = ProofOfReexportationFieldMetaProfileExecutionID
  public static readonly ID = ProofOfReexportationFieldMetaID
  public static readonly UUID = ProofOfReexportationFieldMetaUUID
  public static readonly IssueDate = ProofOfReexportationFieldMetaIssueDate
  public static readonly IssueTime = ProofOfReexportationFieldMetaIssueTime
  public static readonly Note = ProofOfReexportationFieldMetaNote
  public static readonly VersionID = ProofOfReexportationFieldMetaVersionID
  public static readonly IssuerParty = ProofOfReexportationFieldMetaIssuerParty
  public static readonly GoodsItemPassportCounterfoil = ProofOfReexportationFieldMetaGoodsItemPassportCounterfoil
  public static readonly ReexportationEvidence = ProofOfReexportationFieldMetaReexportationEvidence
  public static readonly GoodsItemPassportAttachment = ProofOfReexportationFieldMetaGoodsItemPassportAttachment
  public static readonly AdditionalDocumentReference = ProofOfReexportationFieldMetaAdditionalDocumentReference
  public static readonly Signature = ProofOfReexportationFieldMetaSignature
}

export const ProofOfReexportationFieldMap = new Map([
  [ProofOfReexportationField.UBLExtensions, ProofOfReexportationFieldMetaUBLExtensions],
  [ProofOfReexportationField.UBLVersionID, ProofOfReexportationFieldMetaUBLVersionID],
  [ProofOfReexportationField.CustomizationID, ProofOfReexportationFieldMetaCustomizationID],
  [ProofOfReexportationField.ProfileID, ProofOfReexportationFieldMetaProfileID],
  [ProofOfReexportationField.ProfileExecutionID, ProofOfReexportationFieldMetaProfileExecutionID],
  [ProofOfReexportationField.ID, ProofOfReexportationFieldMetaID],
  [ProofOfReexportationField.UUID, ProofOfReexportationFieldMetaUUID],
  [ProofOfReexportationField.IssueDate, ProofOfReexportationFieldMetaIssueDate],
  [ProofOfReexportationField.IssueTime, ProofOfReexportationFieldMetaIssueTime],
  [ProofOfReexportationField.Note, ProofOfReexportationFieldMetaNote],
  [ProofOfReexportationField.VersionID, ProofOfReexportationFieldMetaVersionID],
  [ProofOfReexportationField.IssuerParty, ProofOfReexportationFieldMetaIssuerParty],
  [ProofOfReexportationField.GoodsItemPassportCounterfoil, ProofOfReexportationFieldMetaGoodsItemPassportCounterfoil],
  [ProofOfReexportationField.ReexportationEvidence, ProofOfReexportationFieldMetaReexportationEvidence],
  [ProofOfReexportationField.GoodsItemPassportAttachment, ProofOfReexportationFieldMetaGoodsItemPassportAttachment],
  [ProofOfReexportationField.AdditionalDocumentReference, ProofOfReexportationFieldMetaAdditionalDocumentReference],
  [ProofOfReexportationField.Signature, ProofOfReexportationFieldMetaSignature]
])

export const ProofOfReexportationType: Type<ProofOfReexportationField> = {
  name: 'ProofOfReexportation',
  label: 'Proof Of Reexportation',
  module: TypeModule.doc,
  definition: 'A document providing a status or a proof that goods have been re-exported',
  fields: ProofOfReexportationFieldMap,
}

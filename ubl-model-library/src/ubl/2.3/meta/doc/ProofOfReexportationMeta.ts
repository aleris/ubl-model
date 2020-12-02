import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaUBLVersionID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.3'
)

export const ProofOfReexportationFieldMetaCustomizationID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaProfileID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaProfileExecutionID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const ProofOfReexportationFieldMetaID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaUUID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaIssueDate = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaIssueTime = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaNote = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaVersionID = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this request for proof',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaIssuerParty = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party issuing this proof of re-exportation',
  '1',
  'cac',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaGoodsItemPassportCounterfoil = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.GoodsItemPassportCounterfoil,
  'GoodsItemPassportCounterfoil',
  'Goods Item Passport Counterfoil',
  'GoodsItemPassportCounterfoil',
  'One or more goods item passport or ATA Carnet counterfoils associated with this proof of re-exportation',
  '1..n',
  'cac',
  'ATA Carnet counterfoil',
  undefined
)

export const ProofOfReexportationFieldMetaReexportationEvidence = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.ReexportationEvidence,
  'ReexportationEvidence',
  'Reexportation Evidence',
  'Evidence',
  'One or more references to evidence supporting that goods have been re-exported',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaGoodsItemPassportAttachment = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.GoodsItemPassportAttachment,
  'GoodsItemPassportAttachment',
  'Goods Item Passport Attachment',
  'Attachment',
  'Attachment of the goods item passport or ATA Carnet related to this proof of re-exportation',
  '0..1',
  'cac',
  'ATA Carnet',
  undefined
)

export const ProofOfReexportationFieldMetaAdditionalDocumentReference = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'One or more references to additional documents related to this proof of re-exportation',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProofOfReexportationFieldMetaSignature = new FieldMeta<ProofOfReexportationField>(
  ProofOfReexportationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
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

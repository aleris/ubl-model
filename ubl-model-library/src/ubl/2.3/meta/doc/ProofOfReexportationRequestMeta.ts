import { FieldMeta } from '../FieldMeta'

export enum ProofOfReexportationRequestField {
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
  GoodsItemPassportID = 'GoodsItemPassportID',
  GoodsItemPassportCounterfoilID = 'GoodsItemPassportCounterfoilID',
  IssuerParty = 'IssuerParty',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature'
}

export const ProofOfReexportationRequestFieldMetaUBLExtensions = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaUBLVersionID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.3'
)

export const ProofOfReexportationRequestFieldMetaCustomizationID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaProfileID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaProfileExecutionID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const ProofOfReexportationRequestFieldMetaID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaUUID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaIssueDate = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaIssueTime = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaNote = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaVersionID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this request for proof',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaGoodsItemPassportID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.GoodsItemPassportID,
  'GoodsItemPassportID',
  'Goods Item Passport',
  'Identifier',
  'The identifier of the goods item passport or ATA Carnet of the goods',
  '1',
  'cbc',
  'ATA Carnet number',
  undefined
)

export const ProofOfReexportationRequestFieldMetaGoodsItemPassportCounterfoilID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.GoodsItemPassportCounterfoilID,
  'GoodsItemPassportCounterfoilID',
  'Goods Item Passport Counterfoil',
  'Identifier',
  'A reference to a counterfoil of the goods item passport or ATA Carnet',
  '0..1',
  'cbc',
  'ATA Carnet counterfoil number',
  undefined
)

export const ProofOfReexportationRequestFieldMetaIssuerParty = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  'Party',
  'The party issuing this request for proof of re-exportation',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaAdditionalDocumentReference = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'One or more references to additional documents related to this request',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaSignature = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ProofOfReexportationRequestFieldMeta {
  public static readonly UBLExtensions = ProofOfReexportationRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = ProofOfReexportationRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = ProofOfReexportationRequestFieldMetaCustomizationID
  public static readonly ProfileID = ProofOfReexportationRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = ProofOfReexportationRequestFieldMetaProfileExecutionID
  public static readonly ID = ProofOfReexportationRequestFieldMetaID
  public static readonly UUID = ProofOfReexportationRequestFieldMetaUUID
  public static readonly IssueDate = ProofOfReexportationRequestFieldMetaIssueDate
  public static readonly IssueTime = ProofOfReexportationRequestFieldMetaIssueTime
  public static readonly Note = ProofOfReexportationRequestFieldMetaNote
  public static readonly VersionID = ProofOfReexportationRequestFieldMetaVersionID
  public static readonly GoodsItemPassportID = ProofOfReexportationRequestFieldMetaGoodsItemPassportID
  public static readonly GoodsItemPassportCounterfoilID = ProofOfReexportationRequestFieldMetaGoodsItemPassportCounterfoilID
  public static readonly IssuerParty = ProofOfReexportationRequestFieldMetaIssuerParty
  public static readonly AdditionalDocumentReference = ProofOfReexportationRequestFieldMetaAdditionalDocumentReference
  public static readonly Signature = ProofOfReexportationRequestFieldMetaSignature
}

export const ProofOfReexportationRequestFieldMap = new Map([
  [ProofOfReexportationRequestField.UBLExtensions, ProofOfReexportationRequestFieldMetaUBLExtensions],
  [ProofOfReexportationRequestField.UBLVersionID, ProofOfReexportationRequestFieldMetaUBLVersionID],
  [ProofOfReexportationRequestField.CustomizationID, ProofOfReexportationRequestFieldMetaCustomizationID],
  [ProofOfReexportationRequestField.ProfileID, ProofOfReexportationRequestFieldMetaProfileID],
  [ProofOfReexportationRequestField.ProfileExecutionID, ProofOfReexportationRequestFieldMetaProfileExecutionID],
  [ProofOfReexportationRequestField.ID, ProofOfReexportationRequestFieldMetaID],
  [ProofOfReexportationRequestField.UUID, ProofOfReexportationRequestFieldMetaUUID],
  [ProofOfReexportationRequestField.IssueDate, ProofOfReexportationRequestFieldMetaIssueDate],
  [ProofOfReexportationRequestField.IssueTime, ProofOfReexportationRequestFieldMetaIssueTime],
  [ProofOfReexportationRequestField.Note, ProofOfReexportationRequestFieldMetaNote],
  [ProofOfReexportationRequestField.VersionID, ProofOfReexportationRequestFieldMetaVersionID],
  [ProofOfReexportationRequestField.GoodsItemPassportID, ProofOfReexportationRequestFieldMetaGoodsItemPassportID],
  [ProofOfReexportationRequestField.GoodsItemPassportCounterfoilID, ProofOfReexportationRequestFieldMetaGoodsItemPassportCounterfoilID],
  [ProofOfReexportationRequestField.IssuerParty, ProofOfReexportationRequestFieldMetaIssuerParty],
  [ProofOfReexportationRequestField.AdditionalDocumentReference, ProofOfReexportationRequestFieldMetaAdditionalDocumentReference],
  [ProofOfReexportationRequestField.Signature, ProofOfReexportationRequestFieldMetaSignature]
])

import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaUBLVersionID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.3'
)

export const ProofOfReexportationRequestFieldMetaCustomizationID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaProfileID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaProfileExecutionID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ProofOfReexportationRequestFieldMetaID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaUUID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaIssueDate = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaIssueTime = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaNote = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaVersionID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the current version of this request for proof',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaGoodsItemPassportID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.GoodsItemPassportID,
  'GoodsItemPassportID',
  'Goods Item Passport',
  IdentifierType.name,
  'The identifier of the goods item passport or ATA Carnet of the goods',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'ATA Carnet number',
  undefined
)

export const ProofOfReexportationRequestFieldMetaGoodsItemPassportCounterfoilID = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.GoodsItemPassportCounterfoilID,
  'GoodsItemPassportCounterfoilID',
  'Goods Item Passport Counterfoil',
  IdentifierType.name,
  'A reference to a counterfoil of the goods item passport or ATA Carnet',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'ATA Carnet counterfoil number',
  undefined
)

export const ProofOfReexportationRequestFieldMetaIssuerParty = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party issuing this request for proof of re-exportation',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaAdditionalDocumentReference = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'One or more references to additional documents related to this request',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ProofOfReexportationRequestFieldMetaSignature = new FieldMeta<ProofOfReexportationRequestField>(
  ProofOfReexportationRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ProofOfReexportationRequestType: Type<ProofOfReexportationRequestField> = {
  name: 'ProofOfReexportationRequest',
  label: 'Proof Of Reexportation Request',
  module: TypeModule.doc,
  definition: 'A document requesting the status or proof that goods have been re-exported',
  fields: ProofOfReexportationRequestFieldMap,
}

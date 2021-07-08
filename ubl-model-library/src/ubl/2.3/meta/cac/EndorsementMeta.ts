import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { EndorserPartyType } from './EndorserPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { SignatureType } from './SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EndorsementField {
  UBLExtensions = 'UBLExtensions',
  DocumentID = 'DocumentID',
  ApprovalStatus = 'ApprovalStatus',
  Remarks = 'Remarks',
  EndorserParty = 'EndorserParty',
  Signature = 'Signature'
}

export const EndorsementFieldMetaUBLExtensions = new FieldMeta<EndorsementField>(
  EndorsementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EndorsementFieldMetaDocumentID = new FieldMeta<EndorsementField>(
  EndorsementField.DocumentID,
  'DocumentID',
  'Document',
  IdentifierType.name,
  'An identifier for this endorsement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EndorsementFieldMetaApprovalStatus = new FieldMeta<EndorsementField>(
  EndorsementField.ApprovalStatus,
  'ApprovalStatus',
  'Approval Status',
  TextType.name,
  'The status of this endorsement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Authentication Code',
  undefined
)

export const EndorsementFieldMetaRemarks = new FieldMeta<EndorsementField>(
  EndorsementField.Remarks,
  'Remarks',
  'Remarks',
  TextType.name,
  'Remarks provided by the endorsing party.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EndorsementFieldMetaEndorserParty = new FieldMeta<EndorsementField>(
  EndorsementField.EndorserParty,
  'EndorserParty',
  'Endorser Party',
  EndorserPartyType.name,
  'The type of party providing this endorsement.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const EndorsementFieldMetaSignature = new FieldMeta<EndorsementField>(
  EndorsementField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this endorsement.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class EndorsementFieldMeta {
  public static readonly UBLExtensions = EndorsementFieldMetaUBLExtensions
  public static readonly DocumentID = EndorsementFieldMetaDocumentID
  public static readonly ApprovalStatus = EndorsementFieldMetaApprovalStatus
  public static readonly Remarks = EndorsementFieldMetaRemarks
  public static readonly EndorserParty = EndorsementFieldMetaEndorserParty
  public static readonly Signature = EndorsementFieldMetaSignature
}

export const EndorsementFieldMap = new Map([
  [EndorsementField.UBLExtensions, EndorsementFieldMetaUBLExtensions],
  [EndorsementField.DocumentID, EndorsementFieldMetaDocumentID],
  [EndorsementField.ApprovalStatus, EndorsementFieldMetaApprovalStatus],
  [EndorsementField.Remarks, EndorsementFieldMetaRemarks],
  [EndorsementField.EndorserParty, EndorsementFieldMetaEndorserParty],
  [EndorsementField.Signature, EndorsementFieldMetaSignature]
])

export const EndorsementType: Type<EndorsementField> = {
  name: 'Endorsement',
  label: 'Endorsement',
  module: TypeModule.cac,
  definition: 'A class to describe an endorsement of a document.',
  fields: EndorsementFieldMap,
}

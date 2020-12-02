import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EndorsementFieldMetaDocumentID = new FieldMeta<EndorsementField>(
  EndorsementField.DocumentID,
  'DocumentID',
  'Document',
  'Identifier',
  'An identifier for this endorsement.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const EndorsementFieldMetaApprovalStatus = new FieldMeta<EndorsementField>(
  EndorsementField.ApprovalStatus,
  'ApprovalStatus',
  'Approval Status',
  'Text',
  'The status of this endorsement.',
  '1',
  'cbc',
  'Authentication Code',
  undefined
)

export const EndorsementFieldMetaRemarks = new FieldMeta<EndorsementField>(
  EndorsementField.Remarks,
  'Remarks',
  'Remarks',
  'Text',
  'Remarks provided by the endorsing party.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EndorsementFieldMetaEndorserParty = new FieldMeta<EndorsementField>(
  EndorsementField.EndorserParty,
  'EndorserParty',
  'Endorser Party',
  'EndorserParty',
  'The type of party providing this endorsement.',
  '1',
  'cac',
  undefined,
  undefined
)

export const EndorsementFieldMetaSignature = new FieldMeta<EndorsementField>(
  EndorsementField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this endorsement.',
  '0..n',
  'cac',
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

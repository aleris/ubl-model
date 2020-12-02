import { FieldMeta } from '../FieldMeta'

export enum UtilityStatementField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  UtilityStatementTypeCode = 'UtilityStatementTypeCode',
  Note = 'Note',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  ParentDocumentReference = 'ParentDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  CustomerParty = 'CustomerParty',
  SubscriberParty = 'SubscriberParty',
  MainOnAccountPayment = 'MainOnAccountPayment',
  SubscriberConsumption = 'SubscriberConsumption'
}

export const UtilityStatementFieldMetaUBLExtensions = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaUBLVersionID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0'
)

export const UtilityStatementFieldMetaCustomizationID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'OIOUBL-2.02'
)

export const UtilityStatementFieldMetaProfileID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'Reference-Utility-1.0'
)

export const UtilityStatementFieldMetaProfileExecutionID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const UtilityStatementFieldMetaID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  '61014906x-1'
)

export const UtilityStatementFieldMetaCopyIndicator = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaUUID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  '9756b4d0-8815-1029-857a-e388fe63f499'
)

export const UtilityStatementFieldMetaIssueDate = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  '2007-12-12'
)

export const UtilityStatementFieldMetaIssueTime = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  '12:32:56'
)

export const UtilityStatementFieldMetaUtilityStatementTypeCode = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UtilityStatementTypeCode,
  'UtilityStatementTypeCode',
  'Utility Statement Type Code',
  'Code',
  'A code signifying the type of Utility Statement.',
  '1',
  'cbc',
  undefined,
  'Electricity'
)

export const UtilityStatementFieldMetaNote = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  'Concerning account remark'
)

export const UtilityStatementFieldMetaDocumentCurrencyCode = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaAccountingCostCode = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting cost code, applied to the UtilityStatement.',
  '0..1',
  'cbc',
  undefined,
  '5050.0'
)

export const UtilityStatementFieldMetaAccountingCost = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost code, applied to the UtilityStatement, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaParentDocumentReference = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ParentDocumentReference,
  'ParentDocumentReference',
  'Parent Document Reference',
  'DocumentReference',
  'A reference to the parent Invoice or Credit Note.',
  '1',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaAdditionalDocumentReference = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSignature = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSenderParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaReceiverParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaCustomerParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.CustomerParty,
  'CustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer, if different from the receiver of the document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSubscriberParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.SubscriberParty,
  'SubscriberParty',
  'Subscriber Party',
  'Party',
  'The subscriber (user or receiver of the service), if different from the buyer and from the party receiving this document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaMainOnAccountPayment = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.MainOnAccountPayment,
  'MainOnAccountPayment',
  'Main On Account Payment',
  'OnAccountPayment',
  'A payment on an account.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSubscriberConsumption = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.SubscriberConsumption,
  'SubscriberConsumption',
  'Subscriber Consumption',
  'SubscriberConsumption',
  'A utility statement for a particular consumption point.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class UtilityStatementFieldMeta {
  public static readonly UBLExtensions = UtilityStatementFieldMetaUBLExtensions
  public static readonly UBLVersionID = UtilityStatementFieldMetaUBLVersionID
  public static readonly CustomizationID = UtilityStatementFieldMetaCustomizationID
  public static readonly ProfileID = UtilityStatementFieldMetaProfileID
  public static readonly ProfileExecutionID = UtilityStatementFieldMetaProfileExecutionID
  public static readonly ID = UtilityStatementFieldMetaID
  public static readonly CopyIndicator = UtilityStatementFieldMetaCopyIndicator
  public static readonly UUID = UtilityStatementFieldMetaUUID
  public static readonly IssueDate = UtilityStatementFieldMetaIssueDate
  public static readonly IssueTime = UtilityStatementFieldMetaIssueTime
  public static readonly UtilityStatementTypeCode = UtilityStatementFieldMetaUtilityStatementTypeCode
  public static readonly Note = UtilityStatementFieldMetaNote
  public static readonly DocumentCurrencyCode = UtilityStatementFieldMetaDocumentCurrencyCode
  public static readonly AccountingCostCode = UtilityStatementFieldMetaAccountingCostCode
  public static readonly AccountingCost = UtilityStatementFieldMetaAccountingCost
  public static readonly ParentDocumentReference = UtilityStatementFieldMetaParentDocumentReference
  public static readonly AdditionalDocumentReference = UtilityStatementFieldMetaAdditionalDocumentReference
  public static readonly Signature = UtilityStatementFieldMetaSignature
  public static readonly SenderParty = UtilityStatementFieldMetaSenderParty
  public static readonly ReceiverParty = UtilityStatementFieldMetaReceiverParty
  public static readonly CustomerParty = UtilityStatementFieldMetaCustomerParty
  public static readonly SubscriberParty = UtilityStatementFieldMetaSubscriberParty
  public static readonly MainOnAccountPayment = UtilityStatementFieldMetaMainOnAccountPayment
  public static readonly SubscriberConsumption = UtilityStatementFieldMetaSubscriberConsumption
}

export const UtilityStatementFieldMap = new Map([
  [UtilityStatementField.UBLExtensions, UtilityStatementFieldMetaUBLExtensions],
  [UtilityStatementField.UBLVersionID, UtilityStatementFieldMetaUBLVersionID],
  [UtilityStatementField.CustomizationID, UtilityStatementFieldMetaCustomizationID],
  [UtilityStatementField.ProfileID, UtilityStatementFieldMetaProfileID],
  [UtilityStatementField.ProfileExecutionID, UtilityStatementFieldMetaProfileExecutionID],
  [UtilityStatementField.ID, UtilityStatementFieldMetaID],
  [UtilityStatementField.CopyIndicator, UtilityStatementFieldMetaCopyIndicator],
  [UtilityStatementField.UUID, UtilityStatementFieldMetaUUID],
  [UtilityStatementField.IssueDate, UtilityStatementFieldMetaIssueDate],
  [UtilityStatementField.IssueTime, UtilityStatementFieldMetaIssueTime],
  [UtilityStatementField.UtilityStatementTypeCode, UtilityStatementFieldMetaUtilityStatementTypeCode],
  [UtilityStatementField.Note, UtilityStatementFieldMetaNote],
  [UtilityStatementField.DocumentCurrencyCode, UtilityStatementFieldMetaDocumentCurrencyCode],
  [UtilityStatementField.AccountingCostCode, UtilityStatementFieldMetaAccountingCostCode],
  [UtilityStatementField.AccountingCost, UtilityStatementFieldMetaAccountingCost],
  [UtilityStatementField.ParentDocumentReference, UtilityStatementFieldMetaParentDocumentReference],
  [UtilityStatementField.AdditionalDocumentReference, UtilityStatementFieldMetaAdditionalDocumentReference],
  [UtilityStatementField.Signature, UtilityStatementFieldMetaSignature],
  [UtilityStatementField.SenderParty, UtilityStatementFieldMetaSenderParty],
  [UtilityStatementField.ReceiverParty, UtilityStatementFieldMetaReceiverParty],
  [UtilityStatementField.CustomerParty, UtilityStatementFieldMetaCustomerParty],
  [UtilityStatementField.SubscriberParty, UtilityStatementFieldMetaSubscriberParty],
  [UtilityStatementField.MainOnAccountPayment, UtilityStatementFieldMetaMainOnAccountPayment],
  [UtilityStatementField.SubscriberConsumption, UtilityStatementFieldMetaSubscriberConsumption]
])

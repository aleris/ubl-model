import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { OnAccountPaymentType } from '../cac/OnAccountPaymentMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SubscriberConsumptionType } from '../cac/SubscriberConsumptionMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaUBLVersionID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0'
)

export const UtilityStatementFieldMetaCustomizationID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'OIOUBL-2.02'
)

export const UtilityStatementFieldMetaProfileID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Reference-Utility-1.0'
)

export const UtilityStatementFieldMetaProfileExecutionID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const UtilityStatementFieldMetaID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '61014906x-1'
)

export const UtilityStatementFieldMetaCopyIndicator = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaUUID = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '9756b4d0-8815-1029-857a-e388fe63f499'
)

export const UtilityStatementFieldMetaIssueDate = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '2007-12-12'
)

export const UtilityStatementFieldMetaIssueTime = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '12:32:56'
)

export const UtilityStatementFieldMetaUtilityStatementTypeCode = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.UtilityStatementTypeCode,
  'UtilityStatementTypeCode',
  'Utility Statement Type Code',
  CodeType.name,
  'A code signifying the type of Utility Statement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'Electricity'
)

export const UtilityStatementFieldMetaNote = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Concerning account remark'
)

export const UtilityStatementFieldMetaDocumentCurrencyCode = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaAccountingCostCode = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting cost code, applied to the UtilityStatement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5050.0'
)

export const UtilityStatementFieldMetaAccountingCost = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting cost code, applied to the UtilityStatement, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaParentDocumentReference = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ParentDocumentReference,
  'ParentDocumentReference',
  'Parent Document Reference',
  DocumentReferenceType.name,
  'A reference to the parent Invoice or Credit Note.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaAdditionalDocumentReference = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSignature = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSenderParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaReceiverParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaCustomerParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.CustomerParty,
  'CustomerParty',
  'Customer Party',
  CustomerPartyType.name,
  'The buyer, if different from the receiver of the document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSubscriberParty = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.SubscriberParty,
  'SubscriberParty',
  'Subscriber Party',
  PartyType.name,
  'The subscriber (user or receiver of the service), if different from the buyer and from the party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaMainOnAccountPayment = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.MainOnAccountPayment,
  'MainOnAccountPayment',
  'Main On Account Payment',
  OnAccountPaymentType.name,
  'A payment on an account.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityStatementFieldMetaSubscriberConsumption = new FieldMeta<UtilityStatementField>(
  UtilityStatementField.SubscriberConsumption,
  'SubscriberConsumption',
  'Subscriber Consumption',
  SubscriberConsumptionType.name,
  'A utility statement for a particular consumption point.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const UtilityStatementType: Type<UtilityStatementField> = {
  name: 'UtilityStatement',
  label: 'Utility Statement',
  module: TypeModule.doc,
  definition: 'A supplement to an Invoice or Credit Note, containing information on the consumption of services provided by utility suppliers to private and public customers, including electricity, gas, water, and telephone services.',
  fields: UtilityStatementFieldMap,
}

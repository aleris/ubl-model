import { FieldMeta } from '../../FieldMeta'

export enum ForecastField {
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
  Note = 'Note',
  VersionID = 'VersionID',
  BasedOnConsensusIndicator = 'BasedOnConsensusIndicator',
  ForecastPurposeCode = 'ForecastPurposeCode',
  ForecastPeriod = 'ForecastPeriod',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ForecastLine = 'ForecastLine'
}

export const ForecastFieldMetaUBLExtensions = new FieldMeta<ForecastField>(
  ForecastField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaUBLVersionID = new FieldMeta<ForecastField>(
  ForecastField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const ForecastFieldMetaCustomizationID = new FieldMeta<ForecastField>(
  ForecastField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const ForecastFieldMetaProfileID = new FieldMeta<ForecastField>(
  ForecastField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const ForecastFieldMetaProfileExecutionID = new FieldMeta<ForecastField>(
  ForecastField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const ForecastFieldMetaID = new FieldMeta<ForecastField>(
  ForecastField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Forecast Number',
  undefined
)

export const ForecastFieldMetaCopyIndicator = new FieldMeta<ForecastField>(
  ForecastField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaUUID = new FieldMeta<ForecastField>(
  ForecastField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaIssueDate = new FieldMeta<ForecastField>(
  ForecastField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'Forecast Date',
  undefined
)

export const ForecastFieldMetaIssueTime = new FieldMeta<ForecastField>(
  ForecastField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaNote = new FieldMeta<ForecastField>(
  ForecastField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ForecastFieldMetaVersionID = new FieldMeta<ForecastField>(
  ForecastField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the current version of this document.',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaBasedOnConsensusIndicator = new FieldMeta<ForecastField>(
  ForecastField.BasedOnConsensusIndicator,
  'BasedOnConsensusIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether the Forecast is based on consensus (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaForecastPurposeCode = new FieldMeta<ForecastField>(
  ForecastField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Purpose Code',
  'Code',
  'A code signifying the purpose of the Forecast document.',
  '1',
  undefined,
  undefined
)

export const ForecastFieldMetaForecastPeriod = new FieldMeta<ForecastField>(
  ForecastField.ForecastPeriod,
  'ForecastPeriod',
  'Period',
  'Period',
  'The period to which the Forecast applies.',
  '1',
  undefined,
  undefined
)

export const ForecastFieldMetaAdditionalDocumentReference = new FieldMeta<ForecastField>(
  ForecastField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const ForecastFieldMetaSignature = new FieldMeta<ForecastField>(
  ForecastField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const ForecastFieldMetaSenderParty = new FieldMeta<ForecastField>(
  ForecastField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '1',
  undefined,
  undefined
)

export const ForecastFieldMetaReceiverParty = new FieldMeta<ForecastField>(
  ForecastField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '1',
  undefined,
  undefined
)

export const ForecastFieldMetaBuyerCustomerParty = new FieldMeta<ForecastField>(
  ForecastField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaSellerSupplierParty = new FieldMeta<ForecastField>(
  ForecastField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  undefined,
  undefined
)

export const ForecastFieldMetaForecastLine = new FieldMeta<ForecastField>(
  ForecastField.ForecastLine,
  'ForecastLine',
  'Forecast Line',
  'ForecastLine',
  'A Forecast Line.',
  '1..n',
  undefined,
  undefined
)

export class ForecastFieldMeta {
  public static readonly UBLExtensions = ForecastFieldMetaUBLExtensions
  public static readonly UBLVersionID = ForecastFieldMetaUBLVersionID
  public static readonly CustomizationID = ForecastFieldMetaCustomizationID
  public static readonly ProfileID = ForecastFieldMetaProfileID
  public static readonly ProfileExecutionID = ForecastFieldMetaProfileExecutionID
  public static readonly ID = ForecastFieldMetaID
  public static readonly CopyIndicator = ForecastFieldMetaCopyIndicator
  public static readonly UUID = ForecastFieldMetaUUID
  public static readonly IssueDate = ForecastFieldMetaIssueDate
  public static readonly IssueTime = ForecastFieldMetaIssueTime
  public static readonly Note = ForecastFieldMetaNote
  public static readonly VersionID = ForecastFieldMetaVersionID
  public static readonly BasedOnConsensusIndicator = ForecastFieldMetaBasedOnConsensusIndicator
  public static readonly ForecastPurposeCode = ForecastFieldMetaForecastPurposeCode
  public static readonly ForecastPeriod = ForecastFieldMetaForecastPeriod
  public static readonly AdditionalDocumentReference = ForecastFieldMetaAdditionalDocumentReference
  public static readonly Signature = ForecastFieldMetaSignature
  public static readonly SenderParty = ForecastFieldMetaSenderParty
  public static readonly ReceiverParty = ForecastFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ForecastFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ForecastFieldMetaSellerSupplierParty
  public static readonly ForecastLine = ForecastFieldMetaForecastLine
}

export const ForecastFieldMap = new Map([
  [ForecastField.UBLExtensions, ForecastFieldMetaUBLExtensions],
  [ForecastField.UBLVersionID, ForecastFieldMetaUBLVersionID],
  [ForecastField.CustomizationID, ForecastFieldMetaCustomizationID],
  [ForecastField.ProfileID, ForecastFieldMetaProfileID],
  [ForecastField.ProfileExecutionID, ForecastFieldMetaProfileExecutionID],
  [ForecastField.ID, ForecastFieldMetaID],
  [ForecastField.CopyIndicator, ForecastFieldMetaCopyIndicator],
  [ForecastField.UUID, ForecastFieldMetaUUID],
  [ForecastField.IssueDate, ForecastFieldMetaIssueDate],
  [ForecastField.IssueTime, ForecastFieldMetaIssueTime],
  [ForecastField.Note, ForecastFieldMetaNote],
  [ForecastField.VersionID, ForecastFieldMetaVersionID],
  [ForecastField.BasedOnConsensusIndicator, ForecastFieldMetaBasedOnConsensusIndicator],
  [ForecastField.ForecastPurposeCode, ForecastFieldMetaForecastPurposeCode],
  [ForecastField.ForecastPeriod, ForecastFieldMetaForecastPeriod],
  [ForecastField.AdditionalDocumentReference, ForecastFieldMetaAdditionalDocumentReference],
  [ForecastField.Signature, ForecastFieldMetaSignature],
  [ForecastField.SenderParty, ForecastFieldMetaSenderParty],
  [ForecastField.ReceiverParty, ForecastFieldMetaReceiverParty],
  [ForecastField.BuyerCustomerParty, ForecastFieldMetaBuyerCustomerParty],
  [ForecastField.SellerSupplierParty, ForecastFieldMetaSellerSupplierParty],
  [ForecastField.ForecastLine, ForecastFieldMetaForecastLine]
])

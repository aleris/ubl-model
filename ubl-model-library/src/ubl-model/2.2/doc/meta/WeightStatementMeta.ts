import { FieldMeta } from '../../FieldMeta'

export enum WeightStatementField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  WeightStatementTypeCode = 'WeightStatementTypeCode',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  WeighingParty = 'WeighingParty',
  ShipperParty = 'ShipperParty',
  ResponsibleParty = 'ResponsibleParty',
  Shipment = 'Shipment'
}

export const WeightStatementFieldMetaUBLExtensions = new FieldMeta<WeightStatementField>(
  WeightStatementField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaUBLVersionID = new FieldMeta<WeightStatementField>(
  WeightStatementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.2'
)

export const WeightStatementFieldMetaCustomizationID = new FieldMeta<WeightStatementField>(
  WeightStatementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'SMDG'
)

export const WeightStatementFieldMetaProfileID = new FieldMeta<WeightStatementField>(
  WeightStatementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'SOLAS'
)

export const WeightStatementFieldMetaProfileExecutionID = new FieldMeta<WeightStatementField>(
  WeightStatementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const WeightStatementFieldMetaID = new FieldMeta<WeightStatementField>(
  WeightStatementField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaUUID = new FieldMeta<WeightStatementField>(
  WeightStatementField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaIssueDate = new FieldMeta<WeightStatementField>(
  WeightStatementField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaIssueTime = new FieldMeta<WeightStatementField>(
  WeightStatementField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaWeightStatementTypeCode = new FieldMeta<WeightStatementField>(
  WeightStatementField.WeightStatementTypeCode,
  'WeightStatementTypeCode',
  'Weight Statement Type Code',
  'Code',
  'A code signifying the type of Weight Statement.',
  '0..1',
  undefined,
  'VGM, WeightCertificate'
)

export const WeightStatementFieldMetaSignature = new FieldMeta<WeightStatementField>(
  WeightStatementField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const WeightStatementFieldMetaSenderParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this weight statement (e.g. Weighing Station, Shipper, Freight Forwarder, Carrier, ...).',
  '1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaReceiverParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this weight statement (e.g. Carrier, Terminal Operator, ...).',
  '1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaWeighingParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.WeighingParty,
  'WeighingParty',
  'Party',
  'Party',
  'The party executing the weight measure (e.g. Weighing Station).',
  '0..1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaShipperParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.ShipperParty,
  'ShipperParty',
  'Party',
  'Party',
  'The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the SOLAS Convention).',
  '0..1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaResponsibleParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.ResponsibleParty,
  'ResponsibleParty',
  'Party',
  'Party',
  'The party responsible for signing the VGM on behalf of the Shipper.',
  '0..1',
  undefined,
  undefined
)

export const WeightStatementFieldMetaShipment = new FieldMeta<WeightStatementField>(
  WeightStatementField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The relevant shipment information with details on the transport equipment weight or mass measurements, including verified gross mass (VGM) information.',
  '1',
  undefined,
  undefined
)

export class WeightStatementFieldMeta {
  public static readonly UBLExtensions = WeightStatementFieldMetaUBLExtensions
  public static readonly UBLVersionID = WeightStatementFieldMetaUBLVersionID
  public static readonly CustomizationID = WeightStatementFieldMetaCustomizationID
  public static readonly ProfileID = WeightStatementFieldMetaProfileID
  public static readonly ProfileExecutionID = WeightStatementFieldMetaProfileExecutionID
  public static readonly ID = WeightStatementFieldMetaID
  public static readonly UUID = WeightStatementFieldMetaUUID
  public static readonly IssueDate = WeightStatementFieldMetaIssueDate
  public static readonly IssueTime = WeightStatementFieldMetaIssueTime
  public static readonly WeightStatementTypeCode = WeightStatementFieldMetaWeightStatementTypeCode
  public static readonly Signature = WeightStatementFieldMetaSignature
  public static readonly SenderParty = WeightStatementFieldMetaSenderParty
  public static readonly ReceiverParty = WeightStatementFieldMetaReceiverParty
  public static readonly WeighingParty = WeightStatementFieldMetaWeighingParty
  public static readonly ShipperParty = WeightStatementFieldMetaShipperParty
  public static readonly ResponsibleParty = WeightStatementFieldMetaResponsibleParty
  public static readonly Shipment = WeightStatementFieldMetaShipment
}

export const WeightStatementFieldMap = new Map([
  [WeightStatementField.UBLExtensions, WeightStatementFieldMetaUBLExtensions],
  [WeightStatementField.UBLVersionID, WeightStatementFieldMetaUBLVersionID],
  [WeightStatementField.CustomizationID, WeightStatementFieldMetaCustomizationID],
  [WeightStatementField.ProfileID, WeightStatementFieldMetaProfileID],
  [WeightStatementField.ProfileExecutionID, WeightStatementFieldMetaProfileExecutionID],
  [WeightStatementField.ID, WeightStatementFieldMetaID],
  [WeightStatementField.UUID, WeightStatementFieldMetaUUID],
  [WeightStatementField.IssueDate, WeightStatementFieldMetaIssueDate],
  [WeightStatementField.IssueTime, WeightStatementFieldMetaIssueTime],
  [WeightStatementField.WeightStatementTypeCode, WeightStatementFieldMetaWeightStatementTypeCode],
  [WeightStatementField.Signature, WeightStatementFieldMetaSignature],
  [WeightStatementField.SenderParty, WeightStatementFieldMetaSenderParty],
  [WeightStatementField.ReceiverParty, WeightStatementFieldMetaReceiverParty],
  [WeightStatementField.WeighingParty, WeightStatementFieldMetaWeighingParty],
  [WeightStatementField.ShipperParty, WeightStatementFieldMetaShipperParty],
  [WeightStatementField.ResponsibleParty, WeightStatementFieldMetaResponsibleParty],
  [WeightStatementField.Shipment, WeightStatementFieldMetaShipment]
])

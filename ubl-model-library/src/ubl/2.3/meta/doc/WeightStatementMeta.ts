import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const WeightStatementFieldMetaUBLVersionID = new FieldMeta<WeightStatementField>(
  WeightStatementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.2'
)

export const WeightStatementFieldMetaCustomizationID = new FieldMeta<WeightStatementField>(
  WeightStatementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'SMDG'
)

export const WeightStatementFieldMetaProfileID = new FieldMeta<WeightStatementField>(
  WeightStatementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'SOLAS'
)

export const WeightStatementFieldMetaProfileExecutionID = new FieldMeta<WeightStatementField>(
  WeightStatementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const WeightStatementFieldMetaID = new FieldMeta<WeightStatementField>(
  WeightStatementField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WeightStatementFieldMetaUUID = new FieldMeta<WeightStatementField>(
  WeightStatementField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WeightStatementFieldMetaIssueDate = new FieldMeta<WeightStatementField>(
  WeightStatementField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WeightStatementFieldMetaIssueTime = new FieldMeta<WeightStatementField>(
  WeightStatementField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WeightStatementFieldMetaWeightStatementTypeCode = new FieldMeta<WeightStatementField>(
  WeightStatementField.WeightStatementTypeCode,
  'WeightStatementTypeCode',
  'Weight Statement Type Code',
  CodeType.name,
  'A code signifying the type of Weight Statement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'VGM, WeightCertificate'
)

export const WeightStatementFieldMetaSignature = new FieldMeta<WeightStatementField>(
  WeightStatementField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WeightStatementFieldMetaSenderParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this weight statement (e.g. Weighing Station, Shipper, Freight Forwarder, Carrier, ...).',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const WeightStatementFieldMetaReceiverParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this weight statement (e.g. Carrier, Terminal Operator, ...).',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const WeightStatementFieldMetaWeighingParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.WeighingParty,
  'WeighingParty',
  'Weighing Party',
  PartyType.name,
  'The party executing the weight measure (e.g. Weighing Station).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WeightStatementFieldMetaShipperParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.ShipperParty,
  'ShipperParty',
  'Shipper Party',
  PartyType.name,
  'The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the SOLAS Convention).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WeightStatementFieldMetaResponsibleParty = new FieldMeta<WeightStatementField>(
  WeightStatementField.ResponsibleParty,
  'ResponsibleParty',
  'Responsible Party',
  PartyType.name,
  'The party responsible for signing the VGM on behalf of the Shipper.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WeightStatementFieldMetaShipment = new FieldMeta<WeightStatementField>(
  WeightStatementField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The relevant shipment information with details on the transport equipment weight or mass measurements, including verified gross mass (VGM) information.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const WeightStatementType: Type<WeightStatementField> = {
  name: 'WeightStatement',
  label: 'Weight Statement',
  module: TypeModule.doc,
  definition: 'A document used to report weight or verified mass measurements in the transport chain.',
  fields: WeightStatementFieldMap,
}

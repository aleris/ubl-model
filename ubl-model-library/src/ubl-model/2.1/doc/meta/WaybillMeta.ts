import { FieldMeta } from '../../FieldMeta'

export enum WaybillField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CarrierAssignedID = 'CarrierAssignedID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Name = 'Name',
  Description = 'Description',
  Note = 'Note',
  ShippingOrderID = 'ShippingOrderID',
  AdValoremIndicator = 'AdValoremIndicator',
  DeclaredCarriageValueAmount = 'DeclaredCarriageValueAmount',
  OtherInstruction = 'OtherInstruction',
  ConsignorParty = 'ConsignorParty',
  CarrierParty = 'CarrierParty',
  FreightForwarderParty = 'FreightForwarderParty',
  Shipment = 'Shipment',
  DocumentReference = 'DocumentReference',
  ExchangeRate = 'ExchangeRate',
  DocumentDistribution = 'DocumentDistribution',
  Signature = 'Signature'
}

export const WaybillFieldMetaUBLExtensions = new FieldMeta<WaybillField>(
  WaybillField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaUBLVersionID = new FieldMeta<WaybillField>(
  WaybillField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const WaybillFieldMetaCustomizationID = new FieldMeta<WaybillField>(
  WaybillField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const WaybillFieldMetaProfileID = new FieldMeta<WaybillField>(
  WaybillField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const WaybillFieldMetaProfileExecutionID = new FieldMeta<WaybillField>(
  WaybillField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const WaybillFieldMetaID = new FieldMeta<WaybillField>(
  WaybillField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Master Waybill Number',
  undefined
)

export const WaybillFieldMetaCarrierAssignedID = new FieldMeta<WaybillField>(
  WaybillField.CarrierAssignedID,
  'CarrierAssignedID',
  'Identifier',
  'Identifier',
  'An identifier (in the form of a reference number) assigned by a carrier or its agent to identify a specific shipment.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaUUID = new FieldMeta<WaybillField>(
  WaybillField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaIssueDate = new FieldMeta<WaybillField>(
  WaybillField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaIssueTime = new FieldMeta<WaybillField>(
  WaybillField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaName = new FieldMeta<WaybillField>(
  WaybillField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  undefined,
  'Air Waybill , House Waybill'
)

export const WaybillFieldMetaDescription = new FieldMeta<WaybillField>(
  WaybillField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the contents of the Waybill.',
  '0..n',
  undefined,
  undefined
)

export const WaybillFieldMetaNote = new FieldMeta<WaybillField>(
  WaybillField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const WaybillFieldMetaShippingOrderID = new FieldMeta<WaybillField>(
  WaybillField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  'Identifier',
  'An identifier (in the form of a reference number) of the Shipping Order or Forwarding Instruction associated with this shipment.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaAdValoremIndicator = new FieldMeta<WaybillField>(
  WaybillField.AdValoremIndicator,
  'AdValoremIndicator',
  'Indicator',
  'Indicator',
  'A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities at certain rates per centum on their value.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaDeclaredCarriageValueAmount = new FieldMeta<WaybillField>(
  WaybillField.DeclaredCarriageValueAmount,
  'DeclaredCarriageValueAmount',
  'Value',
  'Amount',
  'Value declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.',
  '0..1',
  undefined,
  undefined
)

export const WaybillFieldMetaOtherInstruction = new FieldMeta<WaybillField>(
  WaybillField.OtherInstruction,
  'OtherInstruction',
  'Instruction',
  'Text',
  'Other free-text instructions related to the shipment to the forwarders or carriers. This should only be used where such information cannot be represented in other structured information entities within the document.',
  '0..n',
  undefined,
  undefined
)

export const WaybillFieldMetaConsignorParty = new FieldMeta<WaybillField>(
  WaybillField.ConsignorParty,
  'ConsignorParty',
  'Party',
  'Party',
  'The party consigning goods, as stipulated in the transport contract by the party ordering transport.',
  '0..1',
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const WaybillFieldMetaCarrierParty = new FieldMeta<WaybillField>(
  WaybillField.CarrierParty,
  'CarrierParty',
  'Party',
  'Party',
  'The party providing the transport of goods between named points.',
  '0..1',
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const WaybillFieldMetaFreightForwarderParty = new FieldMeta<WaybillField>(
  WaybillField.FreightForwarderParty,
  'FreightForwarderParty',
  'Party',
  'Party',
  'A party combining individual smaller consignments into a single larger shipment (a so-called consolidated consignment or shipment) that is sent to a counterpart who mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  '0..1',
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const WaybillFieldMetaShipment = new FieldMeta<WaybillField>(
  WaybillField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'A description of the shipment.',
  '1',
  undefined,
  undefined
)

export const WaybillFieldMetaDocumentReference = new FieldMeta<WaybillField>(
  WaybillField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const WaybillFieldMetaExchangeRate = new FieldMeta<WaybillField>(
  WaybillField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'Information about the rate of exchange (conversion) between two currencies.',
  '0..n',
  undefined,
  undefined
)

export const WaybillFieldMetaDocumentDistribution = new FieldMeta<WaybillField>(
  WaybillField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  'DocumentDistribution',
  'A list of interested parties to whom this document is distributed.',
  '0..n',
  undefined,
  undefined
)

export const WaybillFieldMetaSignature = new FieldMeta<WaybillField>(
  WaybillField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export class WaybillFieldMeta {
  public static readonly UBLExtensions = WaybillFieldMetaUBLExtensions
  public static readonly UBLVersionID = WaybillFieldMetaUBLVersionID
  public static readonly CustomizationID = WaybillFieldMetaCustomizationID
  public static readonly ProfileID = WaybillFieldMetaProfileID
  public static readonly ProfileExecutionID = WaybillFieldMetaProfileExecutionID
  public static readonly ID = WaybillFieldMetaID
  public static readonly CarrierAssignedID = WaybillFieldMetaCarrierAssignedID
  public static readonly UUID = WaybillFieldMetaUUID
  public static readonly IssueDate = WaybillFieldMetaIssueDate
  public static readonly IssueTime = WaybillFieldMetaIssueTime
  public static readonly Name = WaybillFieldMetaName
  public static readonly Description = WaybillFieldMetaDescription
  public static readonly Note = WaybillFieldMetaNote
  public static readonly ShippingOrderID = WaybillFieldMetaShippingOrderID
  public static readonly AdValoremIndicator = WaybillFieldMetaAdValoremIndicator
  public static readonly DeclaredCarriageValueAmount = WaybillFieldMetaDeclaredCarriageValueAmount
  public static readonly OtherInstruction = WaybillFieldMetaOtherInstruction
  public static readonly ConsignorParty = WaybillFieldMetaConsignorParty
  public static readonly CarrierParty = WaybillFieldMetaCarrierParty
  public static readonly FreightForwarderParty = WaybillFieldMetaFreightForwarderParty
  public static readonly Shipment = WaybillFieldMetaShipment
  public static readonly DocumentReference = WaybillFieldMetaDocumentReference
  public static readonly ExchangeRate = WaybillFieldMetaExchangeRate
  public static readonly DocumentDistribution = WaybillFieldMetaDocumentDistribution
  public static readonly Signature = WaybillFieldMetaSignature
}

export const WaybillFieldMap = new Map([
  [WaybillField.UBLExtensions, WaybillFieldMetaUBLExtensions],
  [WaybillField.UBLVersionID, WaybillFieldMetaUBLVersionID],
  [WaybillField.CustomizationID, WaybillFieldMetaCustomizationID],
  [WaybillField.ProfileID, WaybillFieldMetaProfileID],
  [WaybillField.ProfileExecutionID, WaybillFieldMetaProfileExecutionID],
  [WaybillField.ID, WaybillFieldMetaID],
  [WaybillField.CarrierAssignedID, WaybillFieldMetaCarrierAssignedID],
  [WaybillField.UUID, WaybillFieldMetaUUID],
  [WaybillField.IssueDate, WaybillFieldMetaIssueDate],
  [WaybillField.IssueTime, WaybillFieldMetaIssueTime],
  [WaybillField.Name, WaybillFieldMetaName],
  [WaybillField.Description, WaybillFieldMetaDescription],
  [WaybillField.Note, WaybillFieldMetaNote],
  [WaybillField.ShippingOrderID, WaybillFieldMetaShippingOrderID],
  [WaybillField.AdValoremIndicator, WaybillFieldMetaAdValoremIndicator],
  [WaybillField.DeclaredCarriageValueAmount, WaybillFieldMetaDeclaredCarriageValueAmount],
  [WaybillField.OtherInstruction, WaybillFieldMetaOtherInstruction],
  [WaybillField.ConsignorParty, WaybillFieldMetaConsignorParty],
  [WaybillField.CarrierParty, WaybillFieldMetaCarrierParty],
  [WaybillField.FreightForwarderParty, WaybillFieldMetaFreightForwarderParty],
  [WaybillField.Shipment, WaybillFieldMetaShipment],
  [WaybillField.DocumentReference, WaybillFieldMetaDocumentReference],
  [WaybillField.ExchangeRate, WaybillFieldMetaExchangeRate],
  [WaybillField.DocumentDistribution, WaybillFieldMetaDocumentDistribution],
  [WaybillField.Signature, WaybillFieldMetaSignature]
])

import { FieldMeta } from '../../FieldMeta'

export enum ForwardingInstructionsField {
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
  DocumentStatusCode = 'DocumentStatusCode',
  ShippingOrderID = 'ShippingOrderID',
  ToOrderIndicator = 'ToOrderIndicator',
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

export const ForwardingInstructionsFieldMetaUBLExtensions = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaUBLVersionID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const ForwardingInstructionsFieldMetaCustomizationID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const ForwardingInstructionsFieldMetaProfileID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const ForwardingInstructionsFieldMetaProfileExecutionID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const ForwardingInstructionsFieldMetaID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaCarrierAssignedID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.CarrierAssignedID,
  'CarrierAssignedID',
  'Identifier',
  'Identifier',
  'Reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference number when cargo space is reserved prior to loading.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaUUID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaIssueDate = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaIssueTime = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaName = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Name,
  'Name',
  'Name',
  'Text',
  'Text, assigned by the sender, that identifies this document to business users.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDescription = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Description,
  'Description',
  'Description',
  'Text',
  'Textual description of the document instance.',
  '0..n',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaNote = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDocumentStatusCode = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  'Code',
  'A code signifying the status of the Forwarding Instructions with respect to its original state. This code may be used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaShippingOrderID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  'Identifier',
  'Reference number to identify a Shipping Order.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaToOrderIndicator = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ToOrderIndicator,
  'ToOrderIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether the transport document is consigned to order.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaAdValoremIndicator = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.AdValoremIndicator,
  'AdValoremIndicator',
  'Indicator',
  'Indicator',
  'A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities at certain rates per centum on their value.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDeclaredCarriageValueAmount = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DeclaredCarriageValueAmount,
  'DeclaredCarriageValueAmount',
  'Value',
  'Amount',
  'Value declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.',
  '0..1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaOtherInstruction = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.OtherInstruction,
  'OtherInstruction',
  'Instruction',
  'Text',
  'Contains other free-text instructions to the forwarders or carriers related to the shipment. This should only be used where such information cannot be represented in other structured information entities within the document.',
  '0..n',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaConsignorParty = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ConsignorParty,
  'ConsignorParty',
  'Party',
  'Party',
  'The party consigning goods, as stipulated in the transport contract by the party ordering transport.',
  '0..1',
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const ForwardingInstructionsFieldMetaCarrierParty = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.CarrierParty,
  'CarrierParty',
  'Party',
  'Party',
  'The party providing the transport of goods between named points.',
  '0..1',
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const ForwardingInstructionsFieldMetaFreightForwarderParty = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.FreightForwarderParty,
  'FreightForwarderParty',
  'Party',
  'Party',
  'A party combining individual smaller consignments into a single larger shipment (a so-called consolidated consignment or shipment) that is sent to a counterpart who mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  '0..1',
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const ForwardingInstructionsFieldMetaShipment = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'An identifiable collection of one or more goods items to be transported between the seller party and the buyer party.',
  '1',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDocumentReference = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaExchangeRate = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'Information about the rate of exchange (conversion) between two currencies.',
  '0..n',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDocumentDistribution = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  'DocumentDistribution',
  'A list of interested parties to whom this document is distributed.',
  '0..n',
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaSignature = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export class ForwardingInstructionsFieldMeta {
  public static readonly UBLExtensions = ForwardingInstructionsFieldMetaUBLExtensions
  public static readonly UBLVersionID = ForwardingInstructionsFieldMetaUBLVersionID
  public static readonly CustomizationID = ForwardingInstructionsFieldMetaCustomizationID
  public static readonly ProfileID = ForwardingInstructionsFieldMetaProfileID
  public static readonly ProfileExecutionID = ForwardingInstructionsFieldMetaProfileExecutionID
  public static readonly ID = ForwardingInstructionsFieldMetaID
  public static readonly CarrierAssignedID = ForwardingInstructionsFieldMetaCarrierAssignedID
  public static readonly UUID = ForwardingInstructionsFieldMetaUUID
  public static readonly IssueDate = ForwardingInstructionsFieldMetaIssueDate
  public static readonly IssueTime = ForwardingInstructionsFieldMetaIssueTime
  public static readonly Name = ForwardingInstructionsFieldMetaName
  public static readonly Description = ForwardingInstructionsFieldMetaDescription
  public static readonly Note = ForwardingInstructionsFieldMetaNote
  public static readonly DocumentStatusCode = ForwardingInstructionsFieldMetaDocumentStatusCode
  public static readonly ShippingOrderID = ForwardingInstructionsFieldMetaShippingOrderID
  public static readonly ToOrderIndicator = ForwardingInstructionsFieldMetaToOrderIndicator
  public static readonly AdValoremIndicator = ForwardingInstructionsFieldMetaAdValoremIndicator
  public static readonly DeclaredCarriageValueAmount = ForwardingInstructionsFieldMetaDeclaredCarriageValueAmount
  public static readonly OtherInstruction = ForwardingInstructionsFieldMetaOtherInstruction
  public static readonly ConsignorParty = ForwardingInstructionsFieldMetaConsignorParty
  public static readonly CarrierParty = ForwardingInstructionsFieldMetaCarrierParty
  public static readonly FreightForwarderParty = ForwardingInstructionsFieldMetaFreightForwarderParty
  public static readonly Shipment = ForwardingInstructionsFieldMetaShipment
  public static readonly DocumentReference = ForwardingInstructionsFieldMetaDocumentReference
  public static readonly ExchangeRate = ForwardingInstructionsFieldMetaExchangeRate
  public static readonly DocumentDistribution = ForwardingInstructionsFieldMetaDocumentDistribution
  public static readonly Signature = ForwardingInstructionsFieldMetaSignature
}

export const ForwardingInstructionsFieldMap = new Map([
  [ForwardingInstructionsField.UBLExtensions, ForwardingInstructionsFieldMetaUBLExtensions],
  [ForwardingInstructionsField.UBLVersionID, ForwardingInstructionsFieldMetaUBLVersionID],
  [ForwardingInstructionsField.CustomizationID, ForwardingInstructionsFieldMetaCustomizationID],
  [ForwardingInstructionsField.ProfileID, ForwardingInstructionsFieldMetaProfileID],
  [ForwardingInstructionsField.ProfileExecutionID, ForwardingInstructionsFieldMetaProfileExecutionID],
  [ForwardingInstructionsField.ID, ForwardingInstructionsFieldMetaID],
  [ForwardingInstructionsField.CarrierAssignedID, ForwardingInstructionsFieldMetaCarrierAssignedID],
  [ForwardingInstructionsField.UUID, ForwardingInstructionsFieldMetaUUID],
  [ForwardingInstructionsField.IssueDate, ForwardingInstructionsFieldMetaIssueDate],
  [ForwardingInstructionsField.IssueTime, ForwardingInstructionsFieldMetaIssueTime],
  [ForwardingInstructionsField.Name, ForwardingInstructionsFieldMetaName],
  [ForwardingInstructionsField.Description, ForwardingInstructionsFieldMetaDescription],
  [ForwardingInstructionsField.Note, ForwardingInstructionsFieldMetaNote],
  [ForwardingInstructionsField.DocumentStatusCode, ForwardingInstructionsFieldMetaDocumentStatusCode],
  [ForwardingInstructionsField.ShippingOrderID, ForwardingInstructionsFieldMetaShippingOrderID],
  [ForwardingInstructionsField.ToOrderIndicator, ForwardingInstructionsFieldMetaToOrderIndicator],
  [ForwardingInstructionsField.AdValoremIndicator, ForwardingInstructionsFieldMetaAdValoremIndicator],
  [ForwardingInstructionsField.DeclaredCarriageValueAmount, ForwardingInstructionsFieldMetaDeclaredCarriageValueAmount],
  [ForwardingInstructionsField.OtherInstruction, ForwardingInstructionsFieldMetaOtherInstruction],
  [ForwardingInstructionsField.ConsignorParty, ForwardingInstructionsFieldMetaConsignorParty],
  [ForwardingInstructionsField.CarrierParty, ForwardingInstructionsFieldMetaCarrierParty],
  [ForwardingInstructionsField.FreightForwarderParty, ForwardingInstructionsFieldMetaFreightForwarderParty],
  [ForwardingInstructionsField.Shipment, ForwardingInstructionsFieldMetaShipment],
  [ForwardingInstructionsField.DocumentReference, ForwardingInstructionsFieldMetaDocumentReference],
  [ForwardingInstructionsField.ExchangeRate, ForwardingInstructionsFieldMetaExchangeRate],
  [ForwardingInstructionsField.DocumentDistribution, ForwardingInstructionsFieldMetaDocumentDistribution],
  [ForwardingInstructionsField.Signature, ForwardingInstructionsFieldMetaSignature]
])

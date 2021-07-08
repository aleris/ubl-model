import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentDistributionType } from '../cac/DocumentDistributionMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExchangeRateType } from '../cac/ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaUBLVersionID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ForwardingInstructionsFieldMetaCustomizationID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ForwardingInstructionsFieldMetaProfileID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ForwardingInstructionsFieldMetaProfileExecutionID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ForwardingInstructionsFieldMetaID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaCarrierAssignedID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  IdentifierType.name,
  'Reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference number when cargo space is reserved prior to loading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaUUID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaIssueDate = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaIssueTime = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaName = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDescription = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaNote = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDocumentStatusCode = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the Forwarding Instructions with respect to its original state. This code may be used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaShippingOrderID = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  IdentifierType.name,
  'Reference number to identify a Shipping Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaToOrderIndicator = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ToOrderIndicator,
  'ToOrderIndicator',
  'To Order Indicator',
  IndicatorType.name,
  'Indicates whether the transport document is consigned to order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaAdValoremIndicator = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.AdValoremIndicator,
  'AdValoremIndicator',
  'Ad Valorem Indicator',
  IndicatorType.name,
  'A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities at certain rates per centum on their value.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDeclaredCarriageValueAmount = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DeclaredCarriageValueAmount,
  'DeclaredCarriageValueAmount',
  'Declared Carriage Value',
  AmountType.name,
  'Value declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaOtherInstruction = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  TextType.name,
  'Contains other free-text instructions to the forwarders or carriers related to the shipment. This should only be used where such information cannot be represented in other structured information entities within the document.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaConsignorParty = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  PartyType.name,
  'The party consigning goods, as stipulated in the transport contract by the party ordering transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const ForwardingInstructionsFieldMetaCarrierParty = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'The party providing the transport of goods between named points.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const ForwardingInstructionsFieldMetaFreightForwarderParty = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'A party combining individual smaller consignments into a single larger shipment (a so-called consolidated consignment or shipment) that is sent to a counterpart who mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const ForwardingInstructionsFieldMetaShipment = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'An identifiable collection of one or more goods items to be transported between the seller party and the buyer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDocumentReference = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaExchangeRate = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'Information about the rate of exchange (conversion) between two currencies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaDocumentDistribution = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  DocumentDistributionType.name,
  'A list of interested parties to whom this document is distributed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ForwardingInstructionsFieldMetaSignature = new FieldMeta<ForwardingInstructionsField>(
  ForwardingInstructionsField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ForwardingInstructionsType: Type<ForwardingInstructionsField> = {
  name: 'ForwardingInstructions',
  label: 'Forwarding Instructions',
  module: TypeModule.doc,
  definition: 'A document issued to a forwarder, giving instructions regarding the action to be taken for the forwarding of goods described therein. Forwarding Instructions is used by any party who gives instructions for the transportation services required for a consignment of goods to any party who is contracted to provide the transportation services. The parties who issue this document are commonly referred to as the shipper or consignor, while the parties who receive this document are forwarders, carriers, shipping agents, etc. This document may also be issued by a forwarder or shipping agent in its capacity as a shipper. This document can be used to arrange for the transportation (1) of different types of goods or cargoes; (2) whether containerized or non-containerized; (3) through different modes of transport including multi-modal; and (4) from any origin to any destination.',
  fields: ForwardingInstructionsFieldMap,
}

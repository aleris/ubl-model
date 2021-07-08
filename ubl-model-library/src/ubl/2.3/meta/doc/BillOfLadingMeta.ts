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

export enum BillOfLadingField {
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

export const BillOfLadingFieldMetaUBLExtensions = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaUBLVersionID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const BillOfLadingFieldMetaCustomizationID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const BillOfLadingFieldMetaProfileID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const BillOfLadingFieldMetaProfileExecutionID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const BillOfLadingFieldMetaID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Bill of Lading Number',
  undefined
)

export const BillOfLadingFieldMetaCarrierAssignedID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  IdentifierType.name,
  'Reference number (such as a booking reference number) assigned by a carrier or its agent to identify a specific shipment when cargo space is reserved prior to loading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Booking Reference Number',
  undefined
)

export const BillOfLadingFieldMetaUUID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaIssueDate = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Transport Document Date',
  undefined
)

export const BillOfLadingFieldMetaIssueTime = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaName = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'House Bill , Consolidated Bill of Lading , Proforma , Sea Waybill'
)

export const BillOfLadingFieldMetaDescription = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaNote = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaDocumentStatusCode = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the Bill Of Lading (revision, replacement, etc.).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaShippingOrderID = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  IdentifierType.name,
  'Reference number to identify a Shipping Order or Forwarding Instruction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Freight forwarding instruction, Shippers letter of instruction',
  undefined
)

export const BillOfLadingFieldMetaToOrderIndicator = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ToOrderIndicator,
  'ToOrderIndicator',
  'To Order Indicator',
  IndicatorType.name,
  'Indicates whether the transport document is consigned to order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaAdValoremIndicator = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.AdValoremIndicator,
  'AdValoremIndicator',
  'Ad Valorem Indicator',
  IndicatorType.name,
  'A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities at certain rates per centum on their value.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaDeclaredCarriageValueAmount = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.DeclaredCarriageValueAmount,
  'DeclaredCarriageValueAmount',
  'Declared Carriage Value',
  AmountType.name,
  'Value declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Interest in Delivery',
  undefined
)

export const BillOfLadingFieldMetaOtherInstruction = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  TextType.name,
  'Other free-text instructions to the forwarders or carriers related to the shipment. This element should only be used where such information cannot be represented in other structured information entities within the document.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Bill of Lading Remark',
  undefined
)

export const BillOfLadingFieldMetaConsignorParty = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  PartyType.name,
  'The party consigning goods as stipulated in the transport contract by the party ordering transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const BillOfLadingFieldMetaCarrierParty = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'The party providing the transport of goods between named points.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const BillOfLadingFieldMetaFreightForwarderParty = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'A party combining individual smaller consignments into a single larger shipment (a so-called consolidated consignment or shipment) that is sent to a counterpart who mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const BillOfLadingFieldMetaShipment = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'An identifiable collection of one or more goods items to be transported between the seller party and the buyer party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaDocumentReference = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaExchangeRate = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'Information that directly relates to the rate of exchange (conversion) between two currencies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaDocumentDistribution = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  DocumentDistributionType.name,
  'A list of interested parties to whom this document is distributed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const BillOfLadingFieldMetaSignature = new FieldMeta<BillOfLadingField>(
  BillOfLadingField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class BillOfLadingFieldMeta {
  public static readonly UBLExtensions = BillOfLadingFieldMetaUBLExtensions
  public static readonly UBLVersionID = BillOfLadingFieldMetaUBLVersionID
  public static readonly CustomizationID = BillOfLadingFieldMetaCustomizationID
  public static readonly ProfileID = BillOfLadingFieldMetaProfileID
  public static readonly ProfileExecutionID = BillOfLadingFieldMetaProfileExecutionID
  public static readonly ID = BillOfLadingFieldMetaID
  public static readonly CarrierAssignedID = BillOfLadingFieldMetaCarrierAssignedID
  public static readonly UUID = BillOfLadingFieldMetaUUID
  public static readonly IssueDate = BillOfLadingFieldMetaIssueDate
  public static readonly IssueTime = BillOfLadingFieldMetaIssueTime
  public static readonly Name = BillOfLadingFieldMetaName
  public static readonly Description = BillOfLadingFieldMetaDescription
  public static readonly Note = BillOfLadingFieldMetaNote
  public static readonly DocumentStatusCode = BillOfLadingFieldMetaDocumentStatusCode
  public static readonly ShippingOrderID = BillOfLadingFieldMetaShippingOrderID
  public static readonly ToOrderIndicator = BillOfLadingFieldMetaToOrderIndicator
  public static readonly AdValoremIndicator = BillOfLadingFieldMetaAdValoremIndicator
  public static readonly DeclaredCarriageValueAmount = BillOfLadingFieldMetaDeclaredCarriageValueAmount
  public static readonly OtherInstruction = BillOfLadingFieldMetaOtherInstruction
  public static readonly ConsignorParty = BillOfLadingFieldMetaConsignorParty
  public static readonly CarrierParty = BillOfLadingFieldMetaCarrierParty
  public static readonly FreightForwarderParty = BillOfLadingFieldMetaFreightForwarderParty
  public static readonly Shipment = BillOfLadingFieldMetaShipment
  public static readonly DocumentReference = BillOfLadingFieldMetaDocumentReference
  public static readonly ExchangeRate = BillOfLadingFieldMetaExchangeRate
  public static readonly DocumentDistribution = BillOfLadingFieldMetaDocumentDistribution
  public static readonly Signature = BillOfLadingFieldMetaSignature
}

export const BillOfLadingFieldMap = new Map([
  [BillOfLadingField.UBLExtensions, BillOfLadingFieldMetaUBLExtensions],
  [BillOfLadingField.UBLVersionID, BillOfLadingFieldMetaUBLVersionID],
  [BillOfLadingField.CustomizationID, BillOfLadingFieldMetaCustomizationID],
  [BillOfLadingField.ProfileID, BillOfLadingFieldMetaProfileID],
  [BillOfLadingField.ProfileExecutionID, BillOfLadingFieldMetaProfileExecutionID],
  [BillOfLadingField.ID, BillOfLadingFieldMetaID],
  [BillOfLadingField.CarrierAssignedID, BillOfLadingFieldMetaCarrierAssignedID],
  [BillOfLadingField.UUID, BillOfLadingFieldMetaUUID],
  [BillOfLadingField.IssueDate, BillOfLadingFieldMetaIssueDate],
  [BillOfLadingField.IssueTime, BillOfLadingFieldMetaIssueTime],
  [BillOfLadingField.Name, BillOfLadingFieldMetaName],
  [BillOfLadingField.Description, BillOfLadingFieldMetaDescription],
  [BillOfLadingField.Note, BillOfLadingFieldMetaNote],
  [BillOfLadingField.DocumentStatusCode, BillOfLadingFieldMetaDocumentStatusCode],
  [BillOfLadingField.ShippingOrderID, BillOfLadingFieldMetaShippingOrderID],
  [BillOfLadingField.ToOrderIndicator, BillOfLadingFieldMetaToOrderIndicator],
  [BillOfLadingField.AdValoremIndicator, BillOfLadingFieldMetaAdValoremIndicator],
  [BillOfLadingField.DeclaredCarriageValueAmount, BillOfLadingFieldMetaDeclaredCarriageValueAmount],
  [BillOfLadingField.OtherInstruction, BillOfLadingFieldMetaOtherInstruction],
  [BillOfLadingField.ConsignorParty, BillOfLadingFieldMetaConsignorParty],
  [BillOfLadingField.CarrierParty, BillOfLadingFieldMetaCarrierParty],
  [BillOfLadingField.FreightForwarderParty, BillOfLadingFieldMetaFreightForwarderParty],
  [BillOfLadingField.Shipment, BillOfLadingFieldMetaShipment],
  [BillOfLadingField.DocumentReference, BillOfLadingFieldMetaDocumentReference],
  [BillOfLadingField.ExchangeRate, BillOfLadingFieldMetaExchangeRate],
  [BillOfLadingField.DocumentDistribution, BillOfLadingFieldMetaDocumentDistribution],
  [BillOfLadingField.Signature, BillOfLadingFieldMetaSignature]
])

export const BillOfLadingType: Type<BillOfLadingField> = {
  name: 'BillOfLading',
  label: 'Bill Of Lading',
  module: TypeModule.doc,
  definition: 'A document issued by the party who acts as an agent for a transportation carrier or other agents to the party who gives instructions for the transportation services (shipper, consignor, etc.) stating the details of the transportation, charges, and terms and conditions under which the transportation service is provided. The party issuing this document does not necessarily provide the physical transportation service. The information in the Bill of Lading corresponds to the information on the Forwarding Instructions. It is used for any mode of transport. A Bill of Lading can serve as a contractual document between the parties for the transportation service. The document evidences a contract of carriage by sea and the acceptance of responsibility for the goods by the carrier, by which the carrier undertakes to deliver the goods against surrender of the document. A provision in the document that the goods are to be delivered to the order of a named person, or to order, or to bearer, constitutes such an undertaking.',
  fields: BillOfLadingFieldMap,
}

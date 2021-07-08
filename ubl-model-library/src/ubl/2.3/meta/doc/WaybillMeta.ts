import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const WaybillFieldMetaUBLVersionID = new FieldMeta<WaybillField>(
  WaybillField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const WaybillFieldMetaCustomizationID = new FieldMeta<WaybillField>(
  WaybillField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const WaybillFieldMetaProfileID = new FieldMeta<WaybillField>(
  WaybillField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const WaybillFieldMetaProfileExecutionID = new FieldMeta<WaybillField>(
  WaybillField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const WaybillFieldMetaID = new FieldMeta<WaybillField>(
  WaybillField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Master Waybill Number',
  undefined
)

export const WaybillFieldMetaCarrierAssignedID = new FieldMeta<WaybillField>(
  WaybillField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  IdentifierType.name,
  'An identifier (in the form of a reference number) assigned by a carrier or its agent to identify a specific shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaUUID = new FieldMeta<WaybillField>(
  WaybillField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaIssueDate = new FieldMeta<WaybillField>(
  WaybillField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaIssueTime = new FieldMeta<WaybillField>(
  WaybillField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaName = new FieldMeta<WaybillField>(
  WaybillField.Name,
  'Name',
  'Name',
  TextType.name,
  'Text, assigned by the sender, that identifies this document to business users.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Air Waybill , House Waybill'
)

export const WaybillFieldMetaDescription = new FieldMeta<WaybillField>(
  WaybillField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the contents of the Waybill.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaNote = new FieldMeta<WaybillField>(
  WaybillField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaShippingOrderID = new FieldMeta<WaybillField>(
  WaybillField.ShippingOrderID,
  'ShippingOrderID',
  'Shipping Order Identifier',
  IdentifierType.name,
  'An identifier (in the form of a reference number) of the Shipping Order or Forwarding Instruction associated with this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaAdValoremIndicator = new FieldMeta<WaybillField>(
  WaybillField.AdValoremIndicator,
  'AdValoremIndicator',
  'Ad Valorem Indicator',
  IndicatorType.name,
  'A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities at certain rates per centum on their value.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaDeclaredCarriageValueAmount = new FieldMeta<WaybillField>(
  WaybillField.DeclaredCarriageValueAmount,
  'DeclaredCarriageValueAmount',
  'Declared Carriage Value',
  AmountType.name,
  'Value declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaOtherInstruction = new FieldMeta<WaybillField>(
  WaybillField.OtherInstruction,
  'OtherInstruction',
  'Other Instruction',
  TextType.name,
  'Other free-text instructions related to the shipment to the forwarders or carriers. This should only be used where such information cannot be represented in other structured information entities within the document.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const WaybillFieldMetaConsignorParty = new FieldMeta<WaybillField>(
  WaybillField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  PartyType.name,
  'The party consigning goods, as stipulated in the transport contract by the party ordering transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const WaybillFieldMetaCarrierParty = new FieldMeta<WaybillField>(
  WaybillField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'The party providing the transport of goods between named points.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const WaybillFieldMetaFreightForwarderParty = new FieldMeta<WaybillField>(
  WaybillField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'A party combining individual smaller consignments into a single larger shipment (a so-called consolidated consignment or shipment) that is sent to a counterpart who mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const WaybillFieldMetaShipment = new FieldMeta<WaybillField>(
  WaybillField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'A description of the shipment.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const WaybillFieldMetaDocumentReference = new FieldMeta<WaybillField>(
  WaybillField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WaybillFieldMetaExchangeRate = new FieldMeta<WaybillField>(
  WaybillField.ExchangeRate,
  'ExchangeRate',
  'Exchange Rate',
  ExchangeRateType.name,
  'Information about the rate of exchange (conversion) between two currencies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WaybillFieldMetaDocumentDistribution = new FieldMeta<WaybillField>(
  WaybillField.DocumentDistribution,
  'DocumentDistribution',
  'Document Distribution',
  DocumentDistributionType.name,
  'A list of interested parties to whom this document is distributed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const WaybillFieldMetaSignature = new FieldMeta<WaybillField>(
  WaybillField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const WaybillType: Type<WaybillField> = {
  name: 'Waybill',
  label: 'Waybill',
  module: TypeModule.doc,
  definition: 'A transport document describing a shipment It is issued by the party who undertakes to provide transportation services, or undertakes to arrange for their provision, to the party who gives instructions for the transportation services (shipper, consignor, etc.). It states the instructions for the beneficiary and may contain the details of the transportation, charges, and terms and conditions under which the transportation service is provided.',
  fields: WaybillFieldMap,
}

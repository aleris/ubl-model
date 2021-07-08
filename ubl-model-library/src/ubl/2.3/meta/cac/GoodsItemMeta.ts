import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DeliveryType } from './DeliveryMeta'
import { DespatchType } from './DespatchMeta'
import { DimensionType } from './DimensionMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { GoodsItemContainerType } from './GoodsItemContainerMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { InvoiceLineType } from './InvoiceLineMeta'
import { ItemType } from './ItemMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { PackageType } from './PackageMeta'
import { PickupType } from './PickupMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TemperatureType } from './TemperatureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum GoodsItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SequenceNumberID = 'SequenceNumberID',
  Description = 'Description',
  HazardousRiskIndicator = 'HazardousRiskIndicator',
  DeclaredCustomsValueAmount = 'DeclaredCustomsValueAmount',
  DeclaredForCarriageValueAmount = 'DeclaredForCarriageValueAmount',
  DeclaredStatisticsValueAmount = 'DeclaredStatisticsValueAmount',
  FreeOnBoardValueAmount = 'FreeOnBoardValueAmount',
  InsuranceValueAmount = 'InsuranceValueAmount',
  ValueAmount = 'ValueAmount',
  GrossWeightMeasure = 'GrossWeightMeasure',
  NetWeightMeasure = 'NetWeightMeasure',
  NetNetWeightMeasure = 'NetNetWeightMeasure',
  ChargeableWeightMeasure = 'ChargeableWeightMeasure',
  GrossVolumeMeasure = 'GrossVolumeMeasure',
  NetVolumeMeasure = 'NetVolumeMeasure',
  Quantity = 'Quantity',
  PreferenceCriterionCode = 'PreferenceCriterionCode',
  RequiredCustomsID = 'RequiredCustomsID',
  CustomsStatusCode = 'CustomsStatusCode',
  CustomsTariffQuantity = 'CustomsTariffQuantity',
  CustomsImportClassifiedIndicator = 'CustomsImportClassifiedIndicator',
  ChargeableQuantity = 'ChargeableQuantity',
  ReturnableQuantity = 'ReturnableQuantity',
  TraceID = 'TraceID',
  Item = 'Item',
  GoodsItemContainer = 'GoodsItemContainer',
  FreightAllowanceCharge = 'FreightAllowanceCharge',
  InvoiceLine = 'InvoiceLine',
  Temperature = 'Temperature',
  ContainedGoodsItem = 'ContainedGoodsItem',
  OriginAddress = 'OriginAddress',
  Delivery = 'Delivery',
  Pickup = 'Pickup',
  Despatch = 'Despatch',
  MeasurementDimension = 'MeasurementDimension',
  ContainingPackage = 'ContainingPackage',
  ShipmentDocumentReference = 'ShipmentDocumentReference',
  MinimumTemperature = 'MinimumTemperature',
  MaximumTemperature = 'MaximumTemperature'
}

export const GoodsItemFieldMetaUBLExtensions = new FieldMeta<GoodsItemField>(
  GoodsItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsItemFieldMetaID = new FieldMeta<GoodsItemField>(
  GoodsItemField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaSequenceNumberID = new FieldMeta<GoodsItemField>(
  GoodsItemField.SequenceNumberID,
  'SequenceNumberID',
  'Sequence Number',
  IdentifierType.name,
  'A sequence number differentiating a specific goods item within a consignment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaDescription = new FieldMeta<GoodsItemField>(
  GoodsItemField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this goods item to identify it for customs, statistical, or transport purposes.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Description of goods (WCO ID 137)',
  undefined
)

export const GoodsItemFieldMetaHazardousRiskIndicator = new FieldMeta<GoodsItemField>(
  GoodsItemField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  IndicatorType.name,
  'An indication that the transported goods item is subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'default is negative'
)

export const GoodsItemFieldMetaDeclaredCustomsValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.DeclaredCustomsValueAmount,
  'DeclaredCustomsValueAmount',
  'Declared Customs Value',
  AmountType.name,
  'The total declared value for customs purposes of the goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'For Customs Value (WCO ID 108)',
  undefined
)

export const GoodsItemFieldMetaDeclaredForCarriageValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.DeclaredForCarriageValueAmount,
  'DeclaredForCarriageValueAmount',
  'Declared For Carriage Value',
  AmountType.name,
  'The value of this goods item, declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Interest in delivery, declared value for carriage',
  undefined
)

export const GoodsItemFieldMetaDeclaredStatisticsValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.DeclaredStatisticsValueAmount,
  'DeclaredStatisticsValueAmount',
  'Declared Statistics Value',
  AmountType.name,
  'The total declared value of all the goods items in the same consignment with this goods item that have the same statistical heading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Statistical Value (WCO ID 114)',
  undefined
)

export const GoodsItemFieldMetaFreeOnBoardValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.FreeOnBoardValueAmount,
  'FreeOnBoardValueAmount',
  'Free On Board Value',
  AmountType.name,
  'The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'FOB Value',
  undefined
)

export const GoodsItemFieldMetaInsuranceValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.InsuranceValueAmount,
  'InsuranceValueAmount',
  'Insurance Value',
  AmountType.name,
  'The amount covered by insurance for this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Value Insured',
  undefined
)

export const GoodsItemFieldMetaValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.ValueAmount,
  'ValueAmount',
  'Value',
  AmountType.name,
  'The amount on which a duty, tax, or fee will be assessed.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaGrossWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  MeasureType.name,
  'The weight of this goods item, including packing and packaging but excluding the carrier\'s equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Actual Gross Weight',
  undefined
)

export const GoodsItemFieldMetaNetWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  MeasureType.name,
  'The weight of this goods item, excluding packing but including packaging that normally accompanies the goods.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaNetNetWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Net Net Weight',
  MeasureType.name,
  'The total weight of this goods item, excluding all packing and packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Customs Weight (WCO ID 128)',
  undefined
)

export const GoodsItemFieldMetaChargeableWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.ChargeableWeightMeasure,
  'ChargeableWeightMeasure',
  'Chargeable Weight',
  MeasureType.name,
  'The weight on which a charge is to be based.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaGrossVolumeMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  MeasureType.name,
  'The volume of this goods item, normally calculated by multiplying its maximum length, width, and height.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Volume, Gross Measurement Cube (GMC), Cube (WCO ID 134)',
  undefined
)

export const GoodsItemFieldMetaNetVolumeMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  MeasureType.name,
  'The volume contained by a goods item, excluding the volume of any packaging material.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The number of units making up this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaPreferenceCriterionCode = new FieldMeta<GoodsItemField>(
  GoodsItemField.PreferenceCriterionCode,
  'PreferenceCriterionCode',
  'Preference Criterion Code',
  CodeType.name,
  'A code signifying the treatment preference for this goods item according to international trading agreements.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Preference Criterion is used in the following manner in the paper CO of another country (e.g.): A - The good is wholly obtained or produced entirely in the territory of one or more of the NAFTA countries as reference in Article 415. Note: The purchase of a good in the territory does not necessarily render it wholly obtained or produced . If the good is an agricultural good, see also criterion F and Annex 703.2. (Reference: Article 401(a), 415). B - ... C - ... D - ... E - ... F - The good is an originating agricultural good under preference criterion A,B, or C above and is not subjected to quantitative restriction in the importing NAFTA country because.... Thus, the column Preference Criterion will indicate either A, B, C,...'
)

export const GoodsItemFieldMetaRequiredCustomsID = new FieldMeta<GoodsItemField>(
  GoodsItemField.RequiredCustomsID,
  'RequiredCustomsID',
  'Required Customs Identifier',
  IdentifierType.name,
  'An identifier for a set of tariff codes required to specify a type of goods for customs, transport, statistical, or other regulatory purposes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Tariff code extensions (WCO ID 255)',
  undefined
)

export const GoodsItemFieldMetaCustomsStatusCode = new FieldMeta<GoodsItemField>(
  GoodsItemField.CustomsStatusCode,
  'CustomsStatusCode',
  'Customs Status Code',
  CodeType.name,
  'A code assigned by customs to signify the status of this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Customs status of goods (WCO ID 094)',
  undefined
)

export const GoodsItemFieldMetaCustomsTariffQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.CustomsTariffQuantity,
  'CustomsTariffQuantity',
  'Customs Tariff Quantity',
  QuantityType.name,
  'Quantity of the units in this goods item as required by customs for tariff, statistical, or fiscal purposes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaCustomsImportClassifiedIndicator = new FieldMeta<GoodsItemField>(
  GoodsItemField.CustomsImportClassifiedIndicator,
  'CustomsImportClassifiedIndicator',
  'Customs Import Classified Indicator',
  IndicatorType.name,
  'An indicator that this goods item has been classified for import by customs (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaChargeableQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.ChargeableQuantity,
  'ChargeableQuantity',
  'Chargeable Quantity',
  QuantityType.name,
  'The number of units in the goods item to which charges apply.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaReturnableQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.ReturnableQuantity,
  'ReturnableQuantity',
  'Returnable Quantity',
  QuantityType.name,
  'The number of units in the goods item that may be returned.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaTraceID = new FieldMeta<GoodsItemField>(
  GoodsItemField.TraceID,
  'TraceID',
  'Trace Identifier',
  IdentifierType.name,
  'An identifier for use in tracing this goods item, such as the EPC number used in RFID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemFieldMetaItem = new FieldMeta<GoodsItemField>(
  GoodsItemField.Item,
  'Item',
  'Item',
  ItemType.name,
  'Product information relating to a goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaGoodsItemContainer = new FieldMeta<GoodsItemField>(
  GoodsItemField.GoodsItemContainer,
  'GoodsItemContainer',
  'Goods Item Container',
  GoodsItemContainerType.name,
  'The transporting of a goods item in a unit of transport equipment (e.g., container).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaFreightAllowanceCharge = new FieldMeta<GoodsItemField>(
  GoodsItemField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  AllowanceChargeType.name,
  'A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the contract of carriage. In addition to transport costs, this may include such elements as packing, documentation, loading, unloading, and insurance to the extent that they relate to the freight costs.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  'Freight Costs',
  undefined
)

export const GoodsItemFieldMetaInvoiceLine = new FieldMeta<GoodsItemField>(
  GoodsItemField.InvoiceLine,
  'InvoiceLine',
  'Invoice Line',
  InvoiceLineType.name,
  'Information about an invoice line relating to this goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaTemperature = new FieldMeta<GoodsItemField>(
  GoodsItemField.Temperature,
  'Temperature',
  'Temperature',
  TemperatureType.name,
  'The temperature of the goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'maximum, storage, minimum'
)

export const GoodsItemFieldMetaContainedGoodsItem = new FieldMeta<GoodsItemField>(
  GoodsItemField.ContainedGoodsItem,
  'ContainedGoodsItem',
  'Contained Goods Item',
  GoodsItemType.name,
  'A goods item contained in this goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaOriginAddress = new FieldMeta<GoodsItemField>(
  GoodsItemField.OriginAddress,
  'OriginAddress',
  'Origin Address',
  AddressType.name,
  'The region in which the goods have been produced or manufactured, according to criteria laid down for the purposes of application of the customs tariff, or of quantitative restrictions, or of any other measure related to trade.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Region of origin (WCO ID 066)',
  undefined
)

export const GoodsItemFieldMetaDelivery = new FieldMeta<GoodsItemField>(
  GoodsItemField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'The delivery of this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaPickup = new FieldMeta<GoodsItemField>(
  GoodsItemField.Pickup,
  'Pickup',
  'Pickup',
  PickupType.name,
  'The pickup of this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaDespatch = new FieldMeta<GoodsItemField>(
  GoodsItemField.Despatch,
  'Despatch',
  'Despatch',
  DespatchType.name,
  'The despatch of this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaMeasurementDimension = new FieldMeta<GoodsItemField>(
  GoodsItemField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of this goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaContainingPackage = new FieldMeta<GoodsItemField>(
  GoodsItemField.ContainingPackage,
  'ContainingPackage',
  'Containing Package',
  PackageType.name,
  'A package containing this goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaShipmentDocumentReference = new FieldMeta<GoodsItemField>(
  GoodsItemField.ShipmentDocumentReference,
  'ShipmentDocumentReference',
  'Shipment Document Reference',
  DocumentReferenceType.name,
  'A reference to a shipping document associated with this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaMinimumTemperature = new FieldMeta<GoodsItemField>(
  GoodsItemField.MinimumTemperature,
  'MinimumTemperature',
  'Minimum Temperature',
  TemperatureType.name,
  'Information about minimum temperature.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemFieldMetaMaximumTemperature = new FieldMeta<GoodsItemField>(
  GoodsItemField.MaximumTemperature,
  'MaximumTemperature',
  'Maximum Temperature',
  TemperatureType.name,
  'Information about maximum temperature.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class GoodsItemFieldMeta {
  public static readonly UBLExtensions = GoodsItemFieldMetaUBLExtensions
  public static readonly ID = GoodsItemFieldMetaID
  public static readonly SequenceNumberID = GoodsItemFieldMetaSequenceNumberID
  public static readonly Description = GoodsItemFieldMetaDescription
  public static readonly HazardousRiskIndicator = GoodsItemFieldMetaHazardousRiskIndicator
  public static readonly DeclaredCustomsValueAmount = GoodsItemFieldMetaDeclaredCustomsValueAmount
  public static readonly DeclaredForCarriageValueAmount = GoodsItemFieldMetaDeclaredForCarriageValueAmount
  public static readonly DeclaredStatisticsValueAmount = GoodsItemFieldMetaDeclaredStatisticsValueAmount
  public static readonly FreeOnBoardValueAmount = GoodsItemFieldMetaFreeOnBoardValueAmount
  public static readonly InsuranceValueAmount = GoodsItemFieldMetaInsuranceValueAmount
  public static readonly ValueAmount = GoodsItemFieldMetaValueAmount
  public static readonly GrossWeightMeasure = GoodsItemFieldMetaGrossWeightMeasure
  public static readonly NetWeightMeasure = GoodsItemFieldMetaNetWeightMeasure
  public static readonly NetNetWeightMeasure = GoodsItemFieldMetaNetNetWeightMeasure
  public static readonly ChargeableWeightMeasure = GoodsItemFieldMetaChargeableWeightMeasure
  public static readonly GrossVolumeMeasure = GoodsItemFieldMetaGrossVolumeMeasure
  public static readonly NetVolumeMeasure = GoodsItemFieldMetaNetVolumeMeasure
  public static readonly Quantity = GoodsItemFieldMetaQuantity
  public static readonly PreferenceCriterionCode = GoodsItemFieldMetaPreferenceCriterionCode
  public static readonly RequiredCustomsID = GoodsItemFieldMetaRequiredCustomsID
  public static readonly CustomsStatusCode = GoodsItemFieldMetaCustomsStatusCode
  public static readonly CustomsTariffQuantity = GoodsItemFieldMetaCustomsTariffQuantity
  public static readonly CustomsImportClassifiedIndicator = GoodsItemFieldMetaCustomsImportClassifiedIndicator
  public static readonly ChargeableQuantity = GoodsItemFieldMetaChargeableQuantity
  public static readonly ReturnableQuantity = GoodsItemFieldMetaReturnableQuantity
  public static readonly TraceID = GoodsItemFieldMetaTraceID
  public static readonly Item = GoodsItemFieldMetaItem
  public static readonly GoodsItemContainer = GoodsItemFieldMetaGoodsItemContainer
  public static readonly FreightAllowanceCharge = GoodsItemFieldMetaFreightAllowanceCharge
  public static readonly InvoiceLine = GoodsItemFieldMetaInvoiceLine
  public static readonly Temperature = GoodsItemFieldMetaTemperature
  public static readonly ContainedGoodsItem = GoodsItemFieldMetaContainedGoodsItem
  public static readonly OriginAddress = GoodsItemFieldMetaOriginAddress
  public static readonly Delivery = GoodsItemFieldMetaDelivery
  public static readonly Pickup = GoodsItemFieldMetaPickup
  public static readonly Despatch = GoodsItemFieldMetaDespatch
  public static readonly MeasurementDimension = GoodsItemFieldMetaMeasurementDimension
  public static readonly ContainingPackage = GoodsItemFieldMetaContainingPackage
  public static readonly ShipmentDocumentReference = GoodsItemFieldMetaShipmentDocumentReference
  public static readonly MinimumTemperature = GoodsItemFieldMetaMinimumTemperature
  public static readonly MaximumTemperature = GoodsItemFieldMetaMaximumTemperature
}

export const GoodsItemFieldMap = new Map([
  [GoodsItemField.UBLExtensions, GoodsItemFieldMetaUBLExtensions],
  [GoodsItemField.ID, GoodsItemFieldMetaID],
  [GoodsItemField.SequenceNumberID, GoodsItemFieldMetaSequenceNumberID],
  [GoodsItemField.Description, GoodsItemFieldMetaDescription],
  [GoodsItemField.HazardousRiskIndicator, GoodsItemFieldMetaHazardousRiskIndicator],
  [GoodsItemField.DeclaredCustomsValueAmount, GoodsItemFieldMetaDeclaredCustomsValueAmount],
  [GoodsItemField.DeclaredForCarriageValueAmount, GoodsItemFieldMetaDeclaredForCarriageValueAmount],
  [GoodsItemField.DeclaredStatisticsValueAmount, GoodsItemFieldMetaDeclaredStatisticsValueAmount],
  [GoodsItemField.FreeOnBoardValueAmount, GoodsItemFieldMetaFreeOnBoardValueAmount],
  [GoodsItemField.InsuranceValueAmount, GoodsItemFieldMetaInsuranceValueAmount],
  [GoodsItemField.ValueAmount, GoodsItemFieldMetaValueAmount],
  [GoodsItemField.GrossWeightMeasure, GoodsItemFieldMetaGrossWeightMeasure],
  [GoodsItemField.NetWeightMeasure, GoodsItemFieldMetaNetWeightMeasure],
  [GoodsItemField.NetNetWeightMeasure, GoodsItemFieldMetaNetNetWeightMeasure],
  [GoodsItemField.ChargeableWeightMeasure, GoodsItemFieldMetaChargeableWeightMeasure],
  [GoodsItemField.GrossVolumeMeasure, GoodsItemFieldMetaGrossVolumeMeasure],
  [GoodsItemField.NetVolumeMeasure, GoodsItemFieldMetaNetVolumeMeasure],
  [GoodsItemField.Quantity, GoodsItemFieldMetaQuantity],
  [GoodsItemField.PreferenceCriterionCode, GoodsItemFieldMetaPreferenceCriterionCode],
  [GoodsItemField.RequiredCustomsID, GoodsItemFieldMetaRequiredCustomsID],
  [GoodsItemField.CustomsStatusCode, GoodsItemFieldMetaCustomsStatusCode],
  [GoodsItemField.CustomsTariffQuantity, GoodsItemFieldMetaCustomsTariffQuantity],
  [GoodsItemField.CustomsImportClassifiedIndicator, GoodsItemFieldMetaCustomsImportClassifiedIndicator],
  [GoodsItemField.ChargeableQuantity, GoodsItemFieldMetaChargeableQuantity],
  [GoodsItemField.ReturnableQuantity, GoodsItemFieldMetaReturnableQuantity],
  [GoodsItemField.TraceID, GoodsItemFieldMetaTraceID],
  [GoodsItemField.Item, GoodsItemFieldMetaItem],
  [GoodsItemField.GoodsItemContainer, GoodsItemFieldMetaGoodsItemContainer],
  [GoodsItemField.FreightAllowanceCharge, GoodsItemFieldMetaFreightAllowanceCharge],
  [GoodsItemField.InvoiceLine, GoodsItemFieldMetaInvoiceLine],
  [GoodsItemField.Temperature, GoodsItemFieldMetaTemperature],
  [GoodsItemField.ContainedGoodsItem, GoodsItemFieldMetaContainedGoodsItem],
  [GoodsItemField.OriginAddress, GoodsItemFieldMetaOriginAddress],
  [GoodsItemField.Delivery, GoodsItemFieldMetaDelivery],
  [GoodsItemField.Pickup, GoodsItemFieldMetaPickup],
  [GoodsItemField.Despatch, GoodsItemFieldMetaDespatch],
  [GoodsItemField.MeasurementDimension, GoodsItemFieldMetaMeasurementDimension],
  [GoodsItemField.ContainingPackage, GoodsItemFieldMetaContainingPackage],
  [GoodsItemField.ShipmentDocumentReference, GoodsItemFieldMetaShipmentDocumentReference],
  [GoodsItemField.MinimumTemperature, GoodsItemFieldMetaMinimumTemperature],
  [GoodsItemField.MaximumTemperature, GoodsItemFieldMetaMaximumTemperature]
])

export const GoodsItemType: Type<GoodsItemField> = {
  name: 'GoodsItem',
  label: 'Goods Item',
  module: TypeModule.cac,
  definition: 'A class to describe a separately identifiable quantity of goods of a single product type.',
  fields: GoodsItemFieldMap,
}

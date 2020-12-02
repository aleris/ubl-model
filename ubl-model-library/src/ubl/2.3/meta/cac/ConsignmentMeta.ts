import { FieldMeta } from '../FieldMeta'

export enum ConsignmentField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  CarrierAssignedID = 'CarrierAssignedID',
  ConsigneeAssignedID = 'ConsigneeAssignedID',
  ConsignorAssignedID = 'ConsignorAssignedID',
  FreightForwarderAssignedID = 'FreightForwarderAssignedID',
  BrokerAssignedID = 'BrokerAssignedID',
  ContractedCarrierAssignedID = 'ContractedCarrierAssignedID',
  PerformingCarrierAssignedID = 'PerformingCarrierAssignedID',
  SummaryDescription = 'SummaryDescription',
  TotalInvoiceAmount = 'TotalInvoiceAmount',
  DeclaredCustomsValueAmount = 'DeclaredCustomsValueAmount',
  TariffDescription = 'TariffDescription',
  TariffCode = 'TariffCode',
  InsurancePremiumAmount = 'InsurancePremiumAmount',
  GrossWeightMeasure = 'GrossWeightMeasure',
  NetWeightMeasure = 'NetWeightMeasure',
  NetNetWeightMeasure = 'NetNetWeightMeasure',
  ChargeableWeightMeasure = 'ChargeableWeightMeasure',
  GrossVolumeMeasure = 'GrossVolumeMeasure',
  NetVolumeMeasure = 'NetVolumeMeasure',
  LoadingLengthMeasure = 'LoadingLengthMeasure',
  Remarks = 'Remarks',
  HazardousRiskIndicator = 'HazardousRiskIndicator',
  AnimalFoodIndicator = 'AnimalFoodIndicator',
  HumanFoodIndicator = 'HumanFoodIndicator',
  LivestockIndicator = 'LivestockIndicator',
  BulkCargoIndicator = 'BulkCargoIndicator',
  ContainerizedIndicator = 'ContainerizedIndicator',
  GeneralCargoIndicator = 'GeneralCargoIndicator',
  SpecialSecurityIndicator = 'SpecialSecurityIndicator',
  ThirdPartyPayerIndicator = 'ThirdPartyPayerIndicator',
  CarrierServiceInstructions = 'CarrierServiceInstructions',
  CustomsClearanceServiceInstructions = 'CustomsClearanceServiceInstructions',
  ForwarderServiceInstructions = 'ForwarderServiceInstructions',
  SpecialServiceInstructions = 'SpecialServiceInstructions',
  SequenceID = 'SequenceID',
  ShippingPriorityLevelCode = 'ShippingPriorityLevelCode',
  HandlingCode = 'HandlingCode',
  HandlingInstructions = 'HandlingInstructions',
  Information = 'Information',
  TotalGoodsItemQuantity = 'TotalGoodsItemQuantity',
  TotalTransportHandlingUnitQuantity = 'TotalTransportHandlingUnitQuantity',
  InsuranceValueAmount = 'InsuranceValueAmount',
  DeclaredForCarriageValueAmount = 'DeclaredForCarriageValueAmount',
  DeclaredStatisticsValueAmount = 'DeclaredStatisticsValueAmount',
  FreeOnBoardValueAmount = 'FreeOnBoardValueAmount',
  SpecialInstructions = 'SpecialInstructions',
  SplitConsignmentIndicator = 'SplitConsignmentIndicator',
  DeliveryInstructions = 'DeliveryInstructions',
  ConsignmentQuantity = 'ConsignmentQuantity',
  ConsolidatableIndicator = 'ConsolidatableIndicator',
  HaulageInstructions = 'HaulageInstructions',
  LoadingSequenceID = 'LoadingSequenceID',
  ChildConsignmentQuantity = 'ChildConsignmentQuantity',
  TotalPackagesQuantity = 'TotalPackagesQuantity',
  ConsolidatedShipment = 'ConsolidatedShipment',
  CustomsDeclaration = 'CustomsDeclaration',
  RequestedPickupTransportEvent = 'RequestedPickupTransportEvent',
  RequestedDeliveryTransportEvent = 'RequestedDeliveryTransportEvent',
  PlannedPickupTransportEvent = 'PlannedPickupTransportEvent',
  PlannedDeliveryTransportEvent = 'PlannedDeliveryTransportEvent',
  ActualPickupTransportEvent = 'ActualPickupTransportEvent',
  ActualDeliveryTransportEvent = 'ActualDeliveryTransportEvent',
  Status = 'Status',
  ChildConsignment = 'ChildConsignment',
  ConsigneeParty = 'ConsigneeParty',
  ExporterParty = 'ExporterParty',
  ConsignorParty = 'ConsignorParty',
  ImporterParty = 'ImporterParty',
  CarrierParty = 'CarrierParty',
  FreightForwarderParty = 'FreightForwarderParty',
  NotifyParty = 'NotifyParty',
  OriginalDespatchParty = 'OriginalDespatchParty',
  FinalDeliveryParty = 'FinalDeliveryParty',
  PerformingCarrierParty = 'PerformingCarrierParty',
  SubstituteCarrierParty = 'SubstituteCarrierParty',
  LogisticsOperatorParty = 'LogisticsOperatorParty',
  TransportAdvisorParty = 'TransportAdvisorParty',
  HazardousItemNotificationParty = 'HazardousItemNotificationParty',
  InsuranceParty = 'InsuranceParty',
  MortgageHolderParty = 'MortgageHolderParty',
  BillOfLadingHolderParty = 'BillOfLadingHolderParty',
  OriginalDepartureCountry = 'OriginalDepartureCountry',
  FinalDestinationCountry = 'FinalDestinationCountry',
  TransitCountry = 'TransitCountry',
  TransportContract = 'TransportContract',
  TransportEvent = 'TransportEvent',
  OriginalDespatchTransportationService = 'OriginalDespatchTransportationService',
  FinalDeliveryTransportationService = 'FinalDeliveryTransportationService',
  DeliveryTerms = 'DeliveryTerms',
  PaymentTerms = 'PaymentTerms',
  CollectPaymentTerms = 'CollectPaymentTerms',
  DisbursementPaymentTerms = 'DisbursementPaymentTerms',
  PrepaidPaymentTerms = 'PrepaidPaymentTerms',
  FreightAllowanceCharge = 'FreightAllowanceCharge',
  ExtraAllowanceCharge = 'ExtraAllowanceCharge',
  MainCarriageShipmentStage = 'MainCarriageShipmentStage',
  PreCarriageShipmentStage = 'PreCarriageShipmentStage',
  OnCarriageShipmentStage = 'OnCarriageShipmentStage',
  TransportHandlingUnit = 'TransportHandlingUnit',
  FirstArrivalPortLocation = 'FirstArrivalPortLocation',
  LastExitPortLocation = 'LastExitPortLocation'
}

export const ConsignmentFieldMetaUBLExtensions = new FieldMeta<ConsignmentField>(
  ConsignmentField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ConsignmentFieldMetaID = new FieldMeta<ConsignmentField>(
  ConsignmentField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier assigned to a collection of goods for both import and export.',
  '1',
  'cbc',
  'Unique consignment reference number (UCR)',
  undefined
)

export const ConsignmentFieldMetaCarrierAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.CarrierAssignedID,
  'CarrierAssignedID',
  'Carrier Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the carrier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaConsigneeAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsigneeAssignedID,
  'ConsigneeAssignedID',
  'Consignee Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the consignee.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaConsignorAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsignorAssignedID,
  'ConsignorAssignedID',
  'Consignor Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the consignor.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaFreightForwarderAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.FreightForwarderAssignedID,
  'FreightForwarderAssignedID',
  'Freight Forwarder Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the freight forwarder.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaBrokerAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.BrokerAssignedID,
  'BrokerAssignedID',
  'Broker Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the broker.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaContractedCarrierAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.ContractedCarrierAssignedID,
  'ContractedCarrierAssignedID',
  'Contracted Carrier Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the contracted carrier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaPerformingCarrierAssignedID = new FieldMeta<ConsignmentField>(
  ConsignmentField.PerformingCarrierAssignedID,
  'PerformingCarrierAssignedID',
  'Performing Carrier Assigned Identifier',
  'Identifier',
  'An identifier for this consignment, assigned by the performing carrier.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaSummaryDescription = new FieldMeta<ConsignmentField>(
  ConsignmentField.SummaryDescription,
  'SummaryDescription',
  'Summary Description',
  'Text',
  'A textual summary description of the consignment.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTotalInvoiceAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.TotalInvoiceAmount,
  'TotalInvoiceAmount',
  'Total Invoice Amount',
  'Amount',
  'The total of all invoice amounts declared in this consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaDeclaredCustomsValueAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.DeclaredCustomsValueAmount,
  'DeclaredCustomsValueAmount',
  'Declared Customs Value',
  'Amount',
  'The total declared value for customs purposes of all the goods in this consignment, regardless of whether they are subject to the same customs procedure, tariff/statistical categorization, country information, or duty regime.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTariffDescription = new FieldMeta<ConsignmentField>(
  ConsignmentField.TariffDescription,
  'TariffDescription',
  'Tariff Description',
  'Text',
  'Text describing the tariff applied to this consignment.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTariffCode = new FieldMeta<ConsignmentField>(
  ConsignmentField.TariffCode,
  'TariffCode',
  'Tariff Code',
  'Code',
  'A code signifying the tariff applied to this consignment.',
  '0..1',
  'cbc',
  'Tariff code number (WCO ID 145)',
  undefined
)

export const ConsignmentFieldMetaInsurancePremiumAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.InsurancePremiumAmount,
  'InsurancePremiumAmount',
  'Insurance Premium Amount',
  'Amount',
  'The amount of the premium payable to an insurance company for insuring the goods contained in this consignment.',
  '0..1',
  'cbc',
  'Insurance Cost',
  undefined
)

export const ConsignmentFieldMetaGrossWeightMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  'Measure',
  'The total declared weight of the goods in this consignment, including packaging but excluding the carrier\'s equipment.',
  '0..1',
  'cbc',
  'Total gross weight (WCO ID 131)',
  'Total cube of all goods items referred to as one consignment.'
)

export const ConsignmentFieldMetaNetWeightMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  'Measure',
  'The total net weight of all the goods items referred to as one consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaNetNetWeightMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Net Net Weight',
  'Measure',
  'The total net weight of the goods in this consignment, exclusive of packaging.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaChargeableWeightMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.ChargeableWeightMeasure,
  'ChargeableWeightMeasure',
  'Chargeable Weight',
  'Measure',
  'The weight upon which a charge is to be based.',
  '0..1',
  'cbc',
  'Chargeable Weight. Basis.Measure',
  undefined
)

export const ConsignmentFieldMetaGrossVolumeMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  'Measure',
  'The total volume of the goods referred to as one consignment.',
  '0..1',
  'cbc',
  'Cube',
  undefined
)

export const ConsignmentFieldMetaNetVolumeMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  'Measure',
  'The total net volume of all goods items referred to as one consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaLoadingLengthMeasure = new FieldMeta<ConsignmentField>(
  ConsignmentField.LoadingLengthMeasure,
  'LoadingLengthMeasure',
  'Loading Length',
  'Measure',
  'The total length in a means of transport or a piece of transport equipment which, given the width and height of the transport means, will accommodate all of the consignments in a single consolidation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaRemarks = new FieldMeta<ConsignmentField>(
  ConsignmentField.Remarks,
  'Remarks',
  'Remarks',
  'Text',
  'Remarks concerning the complete consignment, to be printed on the transport document.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaHazardousRiskIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  'cbc',
  'Dangerous Goods RID Indicator',
  'default is negative'
)

export const ConsignmentFieldMetaAnimalFoodIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.AnimalFoodIndicator,
  'AnimalFoodIndicator',
  'Animal Food Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment are animal foodstuffs (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaHumanFoodIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.HumanFoodIndicator,
  'HumanFoodIndicator',
  'Human Food Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment are for human consumption (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaLivestockIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.LivestockIndicator,
  'LivestockIndicator',
  'Livestock Indicator',
  'Indicator',
  'An indication that the transported goods are livestock (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaBulkCargoIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.BulkCargoIndicator,
  'BulkCargoIndicator',
  'Bulk Cargo Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment are bulk cargoes (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaContainerizedIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.ContainerizedIndicator,
  'ContainerizedIndicator',
  'Containerized Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment are containerized cargoes (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaGeneralCargoIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.GeneralCargoIndicator,
  'GeneralCargoIndicator',
  'General Cargo Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment are general cargoes (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaSpecialSecurityIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.SpecialSecurityIndicator,
  'SpecialSecurityIndicator',
  'Special Security Indicator',
  'Indicator',
  'An indication that the transported goods in this consignment require special security (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaThirdPartyPayerIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.ThirdPartyPayerIndicator,
  'ThirdPartyPayerIndicator',
  'Third Party Payer Indicator',
  'Indicator',
  'An indication that this consignment will be paid for by a third party (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaCarrierServiceInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.CarrierServiceInstructions,
  'CarrierServiceInstructions',
  'Carrier Service Instructions',
  'Text',
  'Service instructions to the carrier, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaCustomsClearanceServiceInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.CustomsClearanceServiceInstructions,
  'CustomsClearanceServiceInstructions',
  'Customs Clearance Service Instructions',
  'Text',
  'Service instructions for customs clearance, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaForwarderServiceInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.ForwarderServiceInstructions,
  'ForwarderServiceInstructions',
  'Forwarder Service Instructions',
  'Text',
  'Service instructions for the forwarder, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaSpecialServiceInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.SpecialServiceInstructions,
  'SpecialServiceInstructions',
  'Special Service Instructions',
  'Text',
  'Special service instructions, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaSequenceID = new FieldMeta<ConsignmentField>(
  ConsignmentField.SequenceID,
  'SequenceID',
  'Sequence Identifier',
  'Identifier',
  'A sequence identifier for this consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaShippingPriorityLevelCode = new FieldMeta<ConsignmentField>(
  ConsignmentField.ShippingPriorityLevelCode,
  'ShippingPriorityLevelCode',
  'Shipping Priority Level Code',
  'Code',
  'A code signifying the priority or level of service required for this consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaHandlingCode = new FieldMeta<ConsignmentField>(
  ConsignmentField.HandlingCode,
  'HandlingCode',
  'Handling Code',
  'Code',
  'The handling required for this consignment, expressed as a code.',
  '0..1',
  'cbc',
  'Special Handling',
  undefined
)

export const ConsignmentFieldMetaHandlingInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.HandlingInstructions,
  'HandlingInstructions',
  'Handling Instructions',
  'Text',
  'The handling required for this consignment, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaInformation = new FieldMeta<ConsignmentField>(
  ConsignmentField.Information,
  'Information',
  'Information',
  'Text',
  'Free-form text pertinent to this consignment, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTotalGoodsItemQuantity = new FieldMeta<ConsignmentField>(
  ConsignmentField.TotalGoodsItemQuantity,
  'TotalGoodsItemQuantity',
  'Total Goods Item Quantity',
  'Quantity',
  'The total number of goods items in this consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTotalTransportHandlingUnitQuantity = new FieldMeta<ConsignmentField>(
  ConsignmentField.TotalTransportHandlingUnitQuantity,
  'TotalTransportHandlingUnitQuantity',
  'Total Transport Handling Unit Quantity',
  'Quantity',
  'The number of pieces of transport handling equipment (pallets, boxes, cases, etc.) in this consignment.',
  '0..1',
  'cbc',
  'Number of THUs',
  undefined
)

export const ConsignmentFieldMetaInsuranceValueAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.InsuranceValueAmount,
  'InsuranceValueAmount',
  'Insurance Value',
  'Amount',
  'The amount covered by insurance for this consignment.',
  '0..1',
  'cbc',
  'Value Insured',
  undefined
)

export const ConsignmentFieldMetaDeclaredForCarriageValueAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.DeclaredForCarriageValueAmount,
  'DeclaredForCarriageValueAmount',
  'Declared For Carriage Value',
  'Amount',
  'The value of this consignment, declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed delivery.',
  '0..1',
  'cbc',
  'Declared value for carriage, Interest in delivery',
  undefined
)

export const ConsignmentFieldMetaDeclaredStatisticsValueAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.DeclaredStatisticsValueAmount,
  'DeclaredStatisticsValueAmount',
  'Declared Statistics Value',
  'Amount',
  'The value, declared for statistical purposes, of those goods in this consignment that have the same statistical heading.',
  '0..1',
  'cbc',
  'Statistical Value',
  undefined
)

export const ConsignmentFieldMetaFreeOnBoardValueAmount = new FieldMeta<ConsignmentField>(
  ConsignmentField.FreeOnBoardValueAmount,
  'FreeOnBoardValueAmount',
  'Free On Board Value',
  'Amount',
  'The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.',
  '0..1',
  'cbc',
  'FOB Value',
  undefined
)

export const ConsignmentFieldMetaSpecialInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.SpecialInstructions,
  'SpecialInstructions',
  'Special Instructions',
  'Text',
  'Special instructions relating to this consignment.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaSplitConsignmentIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.SplitConsignmentIndicator,
  'SplitConsignmentIndicator',
  'Split Consignment Indicator',
  'Indicator',
  'An indicator that this consignment has been split in transit (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaDeliveryInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.DeliveryInstructions,
  'DeliveryInstructions',
  'Delivery Instructions',
  'Text',
  'A set of delivery instructions relating to this consignment.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaConsignmentQuantity = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsignmentQuantity,
  'ConsignmentQuantity',
  'Consignment Quantity',
  'Quantity',
  'The count in this consignment considering goods items, child consignments, shipments',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaConsolidatableIndicator = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsolidatableIndicator,
  'ConsolidatableIndicator',
  'Consolidatable Indicator',
  'Indicator',
  'An indicator that this consignment can be consolidated (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const ConsignmentFieldMetaHaulageInstructions = new FieldMeta<ConsignmentField>(
  ConsignmentField.HaulageInstructions,
  'HaulageInstructions',
  'Haulage Instructions',
  'Text',
  'Instructions regarding haulage of this consignment, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaLoadingSequenceID = new FieldMeta<ConsignmentField>(
  ConsignmentField.LoadingSequenceID,
  'LoadingSequenceID',
  'Loading Sequence Identifier',
  'Identifier',
  'An identifier for the loading sequence of this consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaChildConsignmentQuantity = new FieldMeta<ConsignmentField>(
  ConsignmentField.ChildConsignmentQuantity,
  'ChildConsignmentQuantity',
  'Child Consignment Quantity',
  'Quantity',
  'The quantity of (consolidated) child consignments',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTotalPackagesQuantity = new FieldMeta<ConsignmentField>(
  ConsignmentField.TotalPackagesQuantity,
  'TotalPackagesQuantity',
  'Total Packages Quantity',
  'Quantity',
  'The total number of packages associated with a Consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsignmentFieldMetaConsolidatedShipment = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsolidatedShipment,
  'ConsolidatedShipment',
  'Consolidated Shipment',
  'Shipment',
  'A consolidated shipment (a shipment created by an act of consolidation).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaCustomsDeclaration = new FieldMeta<ConsignmentField>(
  ConsignmentField.CustomsDeclaration,
  'CustomsDeclaration',
  'Customs Declaration',
  'CustomsDeclaration',
  'A class describing identifiers or references relating to customs procedures.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaRequestedPickupTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.RequestedPickupTransportEvent,
  'RequestedPickupTransportEvent',
  'Requested Pickup Transport Event',
  'TransportEvent',
  'The pickup of this consignment requested by the party requesting a transportation service (the transport user).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaRequestedDeliveryTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.RequestedDeliveryTransportEvent,
  'RequestedDeliveryTransportEvent',
  'Requested Delivery Transport Event',
  'TransportEvent',
  'The delivery of this consignment requested by the party requesting a transportation service (the transport user).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaPlannedPickupTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.PlannedPickupTransportEvent,
  'PlannedPickupTransportEvent',
  'Planned Pickup Transport Event',
  'TransportEvent',
  'The pickup of this consignment planned by the party responsible for providing the transportation service (the transport service provider).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaPlannedDeliveryTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.PlannedDeliveryTransportEvent,
  'PlannedDeliveryTransportEvent',
  'Planned Delivery Transport Event',
  'TransportEvent',
  'The delivery of this consignment planned by the party responsible for providing the transportation service (the transport service provider).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaActualPickupTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.ActualPickupTransportEvent,
  'ActualPickupTransportEvent',
  'Actual Pickup Transport Event',
  'TransportEvent',
  'The actual pickup of this consignment by the party responsible for providing the transportation service (the transport service provider).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaActualDeliveryTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.ActualDeliveryTransportEvent,
  'ActualDeliveryTransportEvent',
  'Actual Delivery Transport Event',
  'TransportEvent',
  'The actual delivery of this consignment by the party responsible for providing the transportation service (the transport service provider).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaStatus = new FieldMeta<ConsignmentField>(
  ConsignmentField.Status,
  'Status',
  'Status',
  'Status',
  'The status of a particular condition associated with this consignment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaChildConsignment = new FieldMeta<ConsignmentField>(
  ConsignmentField.ChildConsignment,
  'ChildConsignment',
  'Child Consignment',
  'Consignment',
  'One of the child consignments of which a consolidated consignment is composed.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaConsigneeParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsigneeParty,
  'ConsigneeParty',
  'Consignee Party',
  'Party',
  'A party to which goods are consigned.',
  '0..1',
  'cac',
  'Consignee (WCO ID 51 and 52)',
  undefined
)

export const ConsignmentFieldMetaExporterParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  'Party',
  'The party that makes the export declaration, or on behalf of which the export declaration is made, and that is the owner of the goods in this consignment or has similar right of disposal over them at the time when the declaration is accepted.',
  '0..1',
  'cac',
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const ConsignmentFieldMetaConsignorParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.ConsignorParty,
  'ConsignorParty',
  'Consignor Party',
  'Party',
  'The party consigning goods, as stipulated in the transport contract by the party ordering transport.',
  '0..1',
  'cac',
  'Consignor (WCO ID 71 and 72)',
  undefined
)

export const ConsignmentFieldMetaImporterParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.ImporterParty,
  'ImporterParty',
  'Importer Party',
  'Party',
  'The party that makes an import declaration regarding this consignment, or on behalf of which a customs clearing agent or other authorized person makes an import declaration regarding this consignment. This may include a person who has possession of the goods or to whom the goods are consigned.',
  '0..1',
  'cac',
  'Importer (WCO ID 39 and 40)',
  undefined
)

export const ConsignmentFieldMetaCarrierParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  'Party',
  'The party providing the transport of goods in this consignment between named points.',
  '0..1',
  'cac',
  'Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49 and 50)',
  undefined
)

export const ConsignmentFieldMetaFreightForwarderParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  'Party',
  'The party combining individual smaller consignments into a single larger shipment (the consolidated shipment), which is sent to a counterpart that mirrors the consolidator\'s activity by dividing the consolidated consignment into its original components.',
  '0..1',
  'cac',
  'Consolidator (WCO ID 192 AND 193)',
  undefined
)

export const ConsignmentFieldMetaNotifyParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.NotifyParty,
  'NotifyParty',
  'Notify Party',
  'Party',
  'The party to be notified upon arrival of goods and when special occurrences (usually pre-defined) take place during a transportation service.',
  '0..1',
  'cac',
  'WCO ID 57 and 58',
  undefined
)

export const ConsignmentFieldMetaOriginalDespatchParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.OriginalDespatchParty,
  'OriginalDespatchParty',
  'Original Despatch Party',
  'Party',
  'The original despatch (sender) party for this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaFinalDeliveryParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.FinalDeliveryParty,
  'FinalDeliveryParty',
  'Final Delivery Party',
  'Party',
  'The final delivery party for this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaPerformingCarrierParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.PerformingCarrierParty,
  'PerformingCarrierParty',
  'Performing Carrier Party',
  'Party',
  'The party performing the carriage of this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaSubstituteCarrierParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.SubstituteCarrierParty,
  'SubstituteCarrierParty',
  'Substitute Carrier Party',
  'Party',
  'A substitute party performing the carriage of this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaLogisticsOperatorParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.LogisticsOperatorParty,
  'LogisticsOperatorParty',
  'Logistics Operator Party',
  'Party',
  'The logistics operator party for this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTransportAdvisorParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.TransportAdvisorParty,
  'TransportAdvisorParty',
  'Transport Advisor Party',
  'Party',
  'The party providing transport advice this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaHazardousItemNotificationParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.HazardousItemNotificationParty,
  'HazardousItemNotificationParty',
  'Hazardous Item Notification Party',
  'Party',
  'The party that would be notified of a hazardous item in this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaInsuranceParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.InsuranceParty,
  'InsuranceParty',
  'Insurance Party',
  'Party',
  'The party holding the insurance for this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaMortgageHolderParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.MortgageHolderParty,
  'MortgageHolderParty',
  'Mortgage Holder Party',
  'Party',
  'The party holding the mortgage for this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaBillOfLadingHolderParty = new FieldMeta<ConsignmentField>(
  ConsignmentField.BillOfLadingHolderParty,
  'BillOfLadingHolderParty',
  'Bill Of Lading Holder Party',
  'Party',
  'The party holding the bill of lading for this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaOriginalDepartureCountry = new FieldMeta<ConsignmentField>(
  ConsignmentField.OriginalDepartureCountry,
  'OriginalDepartureCountry',
  'Original Departure Country',
  'Country',
  'The country from which the goods in this consignment were originally exported, without any commercial transaction taking place in intermediate countries.',
  '0..1',
  'cac',
  'Country of origin (WCO ID 062)',
  undefined
)

export const ConsignmentFieldMetaFinalDestinationCountry = new FieldMeta<ConsignmentField>(
  ConsignmentField.FinalDestinationCountry,
  'FinalDestinationCountry',
  'Final Destination Country',
  'Country',
  'The country in which the goods in this consignment are to be delivered to the final consignee or buyer.',
  '0..1',
  'cac',
  'Ultimate Destination Country, Country of Final Arrival, Country of Destination',
  undefined
)

export const ConsignmentFieldMetaTransitCountry = new FieldMeta<ConsignmentField>(
  ConsignmentField.TransitCountry,
  'TransitCountry',
  'Transit Country',
  'Country',
  'One of the countries through which goods or passengers in this consignment are routed between the country of original departure and the country of final destination.',
  '0..n',
  'cac',
  'Country(ies) of routing (WCO ID 064)',
  undefined
)

export const ConsignmentFieldMetaTransportContract = new FieldMeta<ConsignmentField>(
  ConsignmentField.TransportContract,
  'TransportContract',
  'Transport Contract',
  'Contract',
  'A transport contract relating to this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTransportEvent = new FieldMeta<ConsignmentField>(
  ConsignmentField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  'TransportEvent',
  'A class describing a significant occurrence or happening related to the transportation of goods.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaOriginalDespatchTransportationService = new FieldMeta<ConsignmentField>(
  ConsignmentField.OriginalDespatchTransportationService,
  'OriginalDespatchTransportationService',
  'Original Despatch Transportation Service',
  'TransportationService',
  'The service for pickup from the consignor under the transport contract for this consignment.',
  '0..1',
  'cac',
  undefined,
  'Door-to-door , Pier-to-door'
)

export const ConsignmentFieldMetaFinalDeliveryTransportationService = new FieldMeta<ConsignmentField>(
  ConsignmentField.FinalDeliveryTransportationService,
  'FinalDeliveryTransportationService',
  'Final Delivery Transportation Service',
  'TransportationService',
  'The service for delivery to the consignee under the transport contract for this consignment.',
  '0..1',
  'cac',
  undefined,
  'Door-to-door , Pier-to-door'
)

export const ConsignmentFieldMetaDeliveryTerms = new FieldMeta<ConsignmentField>(
  ConsignmentField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'The conditions agreed upon between a seller and a buyer with regard to the delivery of goods and/or services (e.g., CIF, FOB, or EXW from the INCOTERMS Terms of Delivery).',
  '0..1',
  'cac',
  'Trade Terms, INCOTERMS',
  undefined
)

export const ConsignmentFieldMetaPaymentTerms = new FieldMeta<ConsignmentField>(
  ConsignmentField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'The terms of payment between the parties (such as logistics service client, logistics service provider) in a transaction.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaCollectPaymentTerms = new FieldMeta<ConsignmentField>(
  ConsignmentField.CollectPaymentTerms,
  'CollectPaymentTerms',
  'Collect Payment Terms',
  'PaymentTerms',
  'The terms of payment that apply to the collection of this consignment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaDisbursementPaymentTerms = new FieldMeta<ConsignmentField>(
  ConsignmentField.DisbursementPaymentTerms,
  'DisbursementPaymentTerms',
  'Disbursement Payment Terms',
  'PaymentTerms',
  'The terms of payment for disbursement.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaPrepaidPaymentTerms = new FieldMeta<ConsignmentField>(
  ConsignmentField.PrepaidPaymentTerms,
  'PrepaidPaymentTerms',
  'Prepaid Payment Terms',
  'PaymentTerms',
  'The terms of payment for prepayment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaFreightAllowanceCharge = new FieldMeta<ConsignmentField>(
  ConsignmentField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  'AllowanceCharge',
  'A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the contract of carriage for this consignment. In addition to transport costs, this may include such elements as packing, documentation, loading, unloading, and insurance to the extent that they relate to the freight costs.',
  '0..n',
  'cac',
  'Freight Costs',
  undefined
)

export const ConsignmentFieldMetaExtraAllowanceCharge = new FieldMeta<ConsignmentField>(
  ConsignmentField.ExtraAllowanceCharge,
  'ExtraAllowanceCharge',
  'Extra Allowance Charge',
  'AllowanceCharge',
  'A charge for extra allowance.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaMainCarriageShipmentStage = new FieldMeta<ConsignmentField>(
  ConsignmentField.MainCarriageShipmentStage,
  'MainCarriageShipmentStage',
  'Main Carriage Shipment Stage',
  'ShipmentStage',
  'A shipment stage during main carriage.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaPreCarriageShipmentStage = new FieldMeta<ConsignmentField>(
  ConsignmentField.PreCarriageShipmentStage,
  'PreCarriageShipmentStage',
  'Pre Carriage Shipment Stage',
  'ShipmentStage',
  'A shipment stage during precarriage (usually refers to movement activity that takes place prior to the container being loaded at a port of loading).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaOnCarriageShipmentStage = new FieldMeta<ConsignmentField>(
  ConsignmentField.OnCarriageShipmentStage,
  'OnCarriageShipmentStage',
  'On Carriage Shipment Stage',
  'ShipmentStage',
  'A shipment stage during on-carriage (usually refers to movement activity that takes place after the container is discharged at a port of discharge).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaTransportHandlingUnit = new FieldMeta<ConsignmentField>(
  ConsignmentField.TransportHandlingUnit,
  'TransportHandlingUnit',
  'Transport Handling Unit',
  'TransportHandlingUnit',
  'A transport handling unit used for loose and containerized goods.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaFirstArrivalPortLocation = new FieldMeta<ConsignmentField>(
  ConsignmentField.FirstArrivalPortLocation,
  'FirstArrivalPortLocation',
  'First Arrival Port Location',
  'Location',
  'The first arrival location in a transport. This would be a port for sea, an airport for air, a terminal for rail, or a border post for land crossing.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsignmentFieldMetaLastExitPortLocation = new FieldMeta<ConsignmentField>(
  ConsignmentField.LastExitPortLocation,
  'LastExitPortLocation',
  'Last Exit Port Location',
  'Location',
  'The final exporting location in a transport. This would be a port for sea, an airport for air, a terminal for rail, or a border post for land crossing.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ConsignmentFieldMeta {
  public static readonly UBLExtensions = ConsignmentFieldMetaUBLExtensions
  public static readonly ID = ConsignmentFieldMetaID
  public static readonly CarrierAssignedID = ConsignmentFieldMetaCarrierAssignedID
  public static readonly ConsigneeAssignedID = ConsignmentFieldMetaConsigneeAssignedID
  public static readonly ConsignorAssignedID = ConsignmentFieldMetaConsignorAssignedID
  public static readonly FreightForwarderAssignedID = ConsignmentFieldMetaFreightForwarderAssignedID
  public static readonly BrokerAssignedID = ConsignmentFieldMetaBrokerAssignedID
  public static readonly ContractedCarrierAssignedID = ConsignmentFieldMetaContractedCarrierAssignedID
  public static readonly PerformingCarrierAssignedID = ConsignmentFieldMetaPerformingCarrierAssignedID
  public static readonly SummaryDescription = ConsignmentFieldMetaSummaryDescription
  public static readonly TotalInvoiceAmount = ConsignmentFieldMetaTotalInvoiceAmount
  public static readonly DeclaredCustomsValueAmount = ConsignmentFieldMetaDeclaredCustomsValueAmount
  public static readonly TariffDescription = ConsignmentFieldMetaTariffDescription
  public static readonly TariffCode = ConsignmentFieldMetaTariffCode
  public static readonly InsurancePremiumAmount = ConsignmentFieldMetaInsurancePremiumAmount
  public static readonly GrossWeightMeasure = ConsignmentFieldMetaGrossWeightMeasure
  public static readonly NetWeightMeasure = ConsignmentFieldMetaNetWeightMeasure
  public static readonly NetNetWeightMeasure = ConsignmentFieldMetaNetNetWeightMeasure
  public static readonly ChargeableWeightMeasure = ConsignmentFieldMetaChargeableWeightMeasure
  public static readonly GrossVolumeMeasure = ConsignmentFieldMetaGrossVolumeMeasure
  public static readonly NetVolumeMeasure = ConsignmentFieldMetaNetVolumeMeasure
  public static readonly LoadingLengthMeasure = ConsignmentFieldMetaLoadingLengthMeasure
  public static readonly Remarks = ConsignmentFieldMetaRemarks
  public static readonly HazardousRiskIndicator = ConsignmentFieldMetaHazardousRiskIndicator
  public static readonly AnimalFoodIndicator = ConsignmentFieldMetaAnimalFoodIndicator
  public static readonly HumanFoodIndicator = ConsignmentFieldMetaHumanFoodIndicator
  public static readonly LivestockIndicator = ConsignmentFieldMetaLivestockIndicator
  public static readonly BulkCargoIndicator = ConsignmentFieldMetaBulkCargoIndicator
  public static readonly ContainerizedIndicator = ConsignmentFieldMetaContainerizedIndicator
  public static readonly GeneralCargoIndicator = ConsignmentFieldMetaGeneralCargoIndicator
  public static readonly SpecialSecurityIndicator = ConsignmentFieldMetaSpecialSecurityIndicator
  public static readonly ThirdPartyPayerIndicator = ConsignmentFieldMetaThirdPartyPayerIndicator
  public static readonly CarrierServiceInstructions = ConsignmentFieldMetaCarrierServiceInstructions
  public static readonly CustomsClearanceServiceInstructions = ConsignmentFieldMetaCustomsClearanceServiceInstructions
  public static readonly ForwarderServiceInstructions = ConsignmentFieldMetaForwarderServiceInstructions
  public static readonly SpecialServiceInstructions = ConsignmentFieldMetaSpecialServiceInstructions
  public static readonly SequenceID = ConsignmentFieldMetaSequenceID
  public static readonly ShippingPriorityLevelCode = ConsignmentFieldMetaShippingPriorityLevelCode
  public static readonly HandlingCode = ConsignmentFieldMetaHandlingCode
  public static readonly HandlingInstructions = ConsignmentFieldMetaHandlingInstructions
  public static readonly Information = ConsignmentFieldMetaInformation
  public static readonly TotalGoodsItemQuantity = ConsignmentFieldMetaTotalGoodsItemQuantity
  public static readonly TotalTransportHandlingUnitQuantity = ConsignmentFieldMetaTotalTransportHandlingUnitQuantity
  public static readonly InsuranceValueAmount = ConsignmentFieldMetaInsuranceValueAmount
  public static readonly DeclaredForCarriageValueAmount = ConsignmentFieldMetaDeclaredForCarriageValueAmount
  public static readonly DeclaredStatisticsValueAmount = ConsignmentFieldMetaDeclaredStatisticsValueAmount
  public static readonly FreeOnBoardValueAmount = ConsignmentFieldMetaFreeOnBoardValueAmount
  public static readonly SpecialInstructions = ConsignmentFieldMetaSpecialInstructions
  public static readonly SplitConsignmentIndicator = ConsignmentFieldMetaSplitConsignmentIndicator
  public static readonly DeliveryInstructions = ConsignmentFieldMetaDeliveryInstructions
  public static readonly ConsignmentQuantity = ConsignmentFieldMetaConsignmentQuantity
  public static readonly ConsolidatableIndicator = ConsignmentFieldMetaConsolidatableIndicator
  public static readonly HaulageInstructions = ConsignmentFieldMetaHaulageInstructions
  public static readonly LoadingSequenceID = ConsignmentFieldMetaLoadingSequenceID
  public static readonly ChildConsignmentQuantity = ConsignmentFieldMetaChildConsignmentQuantity
  public static readonly TotalPackagesQuantity = ConsignmentFieldMetaTotalPackagesQuantity
  public static readonly ConsolidatedShipment = ConsignmentFieldMetaConsolidatedShipment
  public static readonly CustomsDeclaration = ConsignmentFieldMetaCustomsDeclaration
  public static readonly RequestedPickupTransportEvent = ConsignmentFieldMetaRequestedPickupTransportEvent
  public static readonly RequestedDeliveryTransportEvent = ConsignmentFieldMetaRequestedDeliveryTransportEvent
  public static readonly PlannedPickupTransportEvent = ConsignmentFieldMetaPlannedPickupTransportEvent
  public static readonly PlannedDeliveryTransportEvent = ConsignmentFieldMetaPlannedDeliveryTransportEvent
  public static readonly ActualPickupTransportEvent = ConsignmentFieldMetaActualPickupTransportEvent
  public static readonly ActualDeliveryTransportEvent = ConsignmentFieldMetaActualDeliveryTransportEvent
  public static readonly Status = ConsignmentFieldMetaStatus
  public static readonly ChildConsignment = ConsignmentFieldMetaChildConsignment
  public static readonly ConsigneeParty = ConsignmentFieldMetaConsigneeParty
  public static readonly ExporterParty = ConsignmentFieldMetaExporterParty
  public static readonly ConsignorParty = ConsignmentFieldMetaConsignorParty
  public static readonly ImporterParty = ConsignmentFieldMetaImporterParty
  public static readonly CarrierParty = ConsignmentFieldMetaCarrierParty
  public static readonly FreightForwarderParty = ConsignmentFieldMetaFreightForwarderParty
  public static readonly NotifyParty = ConsignmentFieldMetaNotifyParty
  public static readonly OriginalDespatchParty = ConsignmentFieldMetaOriginalDespatchParty
  public static readonly FinalDeliveryParty = ConsignmentFieldMetaFinalDeliveryParty
  public static readonly PerformingCarrierParty = ConsignmentFieldMetaPerformingCarrierParty
  public static readonly SubstituteCarrierParty = ConsignmentFieldMetaSubstituteCarrierParty
  public static readonly LogisticsOperatorParty = ConsignmentFieldMetaLogisticsOperatorParty
  public static readonly TransportAdvisorParty = ConsignmentFieldMetaTransportAdvisorParty
  public static readonly HazardousItemNotificationParty = ConsignmentFieldMetaHazardousItemNotificationParty
  public static readonly InsuranceParty = ConsignmentFieldMetaInsuranceParty
  public static readonly MortgageHolderParty = ConsignmentFieldMetaMortgageHolderParty
  public static readonly BillOfLadingHolderParty = ConsignmentFieldMetaBillOfLadingHolderParty
  public static readonly OriginalDepartureCountry = ConsignmentFieldMetaOriginalDepartureCountry
  public static readonly FinalDestinationCountry = ConsignmentFieldMetaFinalDestinationCountry
  public static readonly TransitCountry = ConsignmentFieldMetaTransitCountry
  public static readonly TransportContract = ConsignmentFieldMetaTransportContract
  public static readonly TransportEvent = ConsignmentFieldMetaTransportEvent
  public static readonly OriginalDespatchTransportationService = ConsignmentFieldMetaOriginalDespatchTransportationService
  public static readonly FinalDeliveryTransportationService = ConsignmentFieldMetaFinalDeliveryTransportationService
  public static readonly DeliveryTerms = ConsignmentFieldMetaDeliveryTerms
  public static readonly PaymentTerms = ConsignmentFieldMetaPaymentTerms
  public static readonly CollectPaymentTerms = ConsignmentFieldMetaCollectPaymentTerms
  public static readonly DisbursementPaymentTerms = ConsignmentFieldMetaDisbursementPaymentTerms
  public static readonly PrepaidPaymentTerms = ConsignmentFieldMetaPrepaidPaymentTerms
  public static readonly FreightAllowanceCharge = ConsignmentFieldMetaFreightAllowanceCharge
  public static readonly ExtraAllowanceCharge = ConsignmentFieldMetaExtraAllowanceCharge
  public static readonly MainCarriageShipmentStage = ConsignmentFieldMetaMainCarriageShipmentStage
  public static readonly PreCarriageShipmentStage = ConsignmentFieldMetaPreCarriageShipmentStage
  public static readonly OnCarriageShipmentStage = ConsignmentFieldMetaOnCarriageShipmentStage
  public static readonly TransportHandlingUnit = ConsignmentFieldMetaTransportHandlingUnit
  public static readonly FirstArrivalPortLocation = ConsignmentFieldMetaFirstArrivalPortLocation
  public static readonly LastExitPortLocation = ConsignmentFieldMetaLastExitPortLocation
}

export const ConsignmentFieldMap = new Map([
  [ConsignmentField.UBLExtensions, ConsignmentFieldMetaUBLExtensions],
  [ConsignmentField.ID, ConsignmentFieldMetaID],
  [ConsignmentField.CarrierAssignedID, ConsignmentFieldMetaCarrierAssignedID],
  [ConsignmentField.ConsigneeAssignedID, ConsignmentFieldMetaConsigneeAssignedID],
  [ConsignmentField.ConsignorAssignedID, ConsignmentFieldMetaConsignorAssignedID],
  [ConsignmentField.FreightForwarderAssignedID, ConsignmentFieldMetaFreightForwarderAssignedID],
  [ConsignmentField.BrokerAssignedID, ConsignmentFieldMetaBrokerAssignedID],
  [ConsignmentField.ContractedCarrierAssignedID, ConsignmentFieldMetaContractedCarrierAssignedID],
  [ConsignmentField.PerformingCarrierAssignedID, ConsignmentFieldMetaPerformingCarrierAssignedID],
  [ConsignmentField.SummaryDescription, ConsignmentFieldMetaSummaryDescription],
  [ConsignmentField.TotalInvoiceAmount, ConsignmentFieldMetaTotalInvoiceAmount],
  [ConsignmentField.DeclaredCustomsValueAmount, ConsignmentFieldMetaDeclaredCustomsValueAmount],
  [ConsignmentField.TariffDescription, ConsignmentFieldMetaTariffDescription],
  [ConsignmentField.TariffCode, ConsignmentFieldMetaTariffCode],
  [ConsignmentField.InsurancePremiumAmount, ConsignmentFieldMetaInsurancePremiumAmount],
  [ConsignmentField.GrossWeightMeasure, ConsignmentFieldMetaGrossWeightMeasure],
  [ConsignmentField.NetWeightMeasure, ConsignmentFieldMetaNetWeightMeasure],
  [ConsignmentField.NetNetWeightMeasure, ConsignmentFieldMetaNetNetWeightMeasure],
  [ConsignmentField.ChargeableWeightMeasure, ConsignmentFieldMetaChargeableWeightMeasure],
  [ConsignmentField.GrossVolumeMeasure, ConsignmentFieldMetaGrossVolumeMeasure],
  [ConsignmentField.NetVolumeMeasure, ConsignmentFieldMetaNetVolumeMeasure],
  [ConsignmentField.LoadingLengthMeasure, ConsignmentFieldMetaLoadingLengthMeasure],
  [ConsignmentField.Remarks, ConsignmentFieldMetaRemarks],
  [ConsignmentField.HazardousRiskIndicator, ConsignmentFieldMetaHazardousRiskIndicator],
  [ConsignmentField.AnimalFoodIndicator, ConsignmentFieldMetaAnimalFoodIndicator],
  [ConsignmentField.HumanFoodIndicator, ConsignmentFieldMetaHumanFoodIndicator],
  [ConsignmentField.LivestockIndicator, ConsignmentFieldMetaLivestockIndicator],
  [ConsignmentField.BulkCargoIndicator, ConsignmentFieldMetaBulkCargoIndicator],
  [ConsignmentField.ContainerizedIndicator, ConsignmentFieldMetaContainerizedIndicator],
  [ConsignmentField.GeneralCargoIndicator, ConsignmentFieldMetaGeneralCargoIndicator],
  [ConsignmentField.SpecialSecurityIndicator, ConsignmentFieldMetaSpecialSecurityIndicator],
  [ConsignmentField.ThirdPartyPayerIndicator, ConsignmentFieldMetaThirdPartyPayerIndicator],
  [ConsignmentField.CarrierServiceInstructions, ConsignmentFieldMetaCarrierServiceInstructions],
  [ConsignmentField.CustomsClearanceServiceInstructions, ConsignmentFieldMetaCustomsClearanceServiceInstructions],
  [ConsignmentField.ForwarderServiceInstructions, ConsignmentFieldMetaForwarderServiceInstructions],
  [ConsignmentField.SpecialServiceInstructions, ConsignmentFieldMetaSpecialServiceInstructions],
  [ConsignmentField.SequenceID, ConsignmentFieldMetaSequenceID],
  [ConsignmentField.ShippingPriorityLevelCode, ConsignmentFieldMetaShippingPriorityLevelCode],
  [ConsignmentField.HandlingCode, ConsignmentFieldMetaHandlingCode],
  [ConsignmentField.HandlingInstructions, ConsignmentFieldMetaHandlingInstructions],
  [ConsignmentField.Information, ConsignmentFieldMetaInformation],
  [ConsignmentField.TotalGoodsItemQuantity, ConsignmentFieldMetaTotalGoodsItemQuantity],
  [ConsignmentField.TotalTransportHandlingUnitQuantity, ConsignmentFieldMetaTotalTransportHandlingUnitQuantity],
  [ConsignmentField.InsuranceValueAmount, ConsignmentFieldMetaInsuranceValueAmount],
  [ConsignmentField.DeclaredForCarriageValueAmount, ConsignmentFieldMetaDeclaredForCarriageValueAmount],
  [ConsignmentField.DeclaredStatisticsValueAmount, ConsignmentFieldMetaDeclaredStatisticsValueAmount],
  [ConsignmentField.FreeOnBoardValueAmount, ConsignmentFieldMetaFreeOnBoardValueAmount],
  [ConsignmentField.SpecialInstructions, ConsignmentFieldMetaSpecialInstructions],
  [ConsignmentField.SplitConsignmentIndicator, ConsignmentFieldMetaSplitConsignmentIndicator],
  [ConsignmentField.DeliveryInstructions, ConsignmentFieldMetaDeliveryInstructions],
  [ConsignmentField.ConsignmentQuantity, ConsignmentFieldMetaConsignmentQuantity],
  [ConsignmentField.ConsolidatableIndicator, ConsignmentFieldMetaConsolidatableIndicator],
  [ConsignmentField.HaulageInstructions, ConsignmentFieldMetaHaulageInstructions],
  [ConsignmentField.LoadingSequenceID, ConsignmentFieldMetaLoadingSequenceID],
  [ConsignmentField.ChildConsignmentQuantity, ConsignmentFieldMetaChildConsignmentQuantity],
  [ConsignmentField.TotalPackagesQuantity, ConsignmentFieldMetaTotalPackagesQuantity],
  [ConsignmentField.ConsolidatedShipment, ConsignmentFieldMetaConsolidatedShipment],
  [ConsignmentField.CustomsDeclaration, ConsignmentFieldMetaCustomsDeclaration],
  [ConsignmentField.RequestedPickupTransportEvent, ConsignmentFieldMetaRequestedPickupTransportEvent],
  [ConsignmentField.RequestedDeliveryTransportEvent, ConsignmentFieldMetaRequestedDeliveryTransportEvent],
  [ConsignmentField.PlannedPickupTransportEvent, ConsignmentFieldMetaPlannedPickupTransportEvent],
  [ConsignmentField.PlannedDeliveryTransportEvent, ConsignmentFieldMetaPlannedDeliveryTransportEvent],
  [ConsignmentField.ActualPickupTransportEvent, ConsignmentFieldMetaActualPickupTransportEvent],
  [ConsignmentField.ActualDeliveryTransportEvent, ConsignmentFieldMetaActualDeliveryTransportEvent],
  [ConsignmentField.Status, ConsignmentFieldMetaStatus],
  [ConsignmentField.ChildConsignment, ConsignmentFieldMetaChildConsignment],
  [ConsignmentField.ConsigneeParty, ConsignmentFieldMetaConsigneeParty],
  [ConsignmentField.ExporterParty, ConsignmentFieldMetaExporterParty],
  [ConsignmentField.ConsignorParty, ConsignmentFieldMetaConsignorParty],
  [ConsignmentField.ImporterParty, ConsignmentFieldMetaImporterParty],
  [ConsignmentField.CarrierParty, ConsignmentFieldMetaCarrierParty],
  [ConsignmentField.FreightForwarderParty, ConsignmentFieldMetaFreightForwarderParty],
  [ConsignmentField.NotifyParty, ConsignmentFieldMetaNotifyParty],
  [ConsignmentField.OriginalDespatchParty, ConsignmentFieldMetaOriginalDespatchParty],
  [ConsignmentField.FinalDeliveryParty, ConsignmentFieldMetaFinalDeliveryParty],
  [ConsignmentField.PerformingCarrierParty, ConsignmentFieldMetaPerformingCarrierParty],
  [ConsignmentField.SubstituteCarrierParty, ConsignmentFieldMetaSubstituteCarrierParty],
  [ConsignmentField.LogisticsOperatorParty, ConsignmentFieldMetaLogisticsOperatorParty],
  [ConsignmentField.TransportAdvisorParty, ConsignmentFieldMetaTransportAdvisorParty],
  [ConsignmentField.HazardousItemNotificationParty, ConsignmentFieldMetaHazardousItemNotificationParty],
  [ConsignmentField.InsuranceParty, ConsignmentFieldMetaInsuranceParty],
  [ConsignmentField.MortgageHolderParty, ConsignmentFieldMetaMortgageHolderParty],
  [ConsignmentField.BillOfLadingHolderParty, ConsignmentFieldMetaBillOfLadingHolderParty],
  [ConsignmentField.OriginalDepartureCountry, ConsignmentFieldMetaOriginalDepartureCountry],
  [ConsignmentField.FinalDestinationCountry, ConsignmentFieldMetaFinalDestinationCountry],
  [ConsignmentField.TransitCountry, ConsignmentFieldMetaTransitCountry],
  [ConsignmentField.TransportContract, ConsignmentFieldMetaTransportContract],
  [ConsignmentField.TransportEvent, ConsignmentFieldMetaTransportEvent],
  [ConsignmentField.OriginalDespatchTransportationService, ConsignmentFieldMetaOriginalDespatchTransportationService],
  [ConsignmentField.FinalDeliveryTransportationService, ConsignmentFieldMetaFinalDeliveryTransportationService],
  [ConsignmentField.DeliveryTerms, ConsignmentFieldMetaDeliveryTerms],
  [ConsignmentField.PaymentTerms, ConsignmentFieldMetaPaymentTerms],
  [ConsignmentField.CollectPaymentTerms, ConsignmentFieldMetaCollectPaymentTerms],
  [ConsignmentField.DisbursementPaymentTerms, ConsignmentFieldMetaDisbursementPaymentTerms],
  [ConsignmentField.PrepaidPaymentTerms, ConsignmentFieldMetaPrepaidPaymentTerms],
  [ConsignmentField.FreightAllowanceCharge, ConsignmentFieldMetaFreightAllowanceCharge],
  [ConsignmentField.ExtraAllowanceCharge, ConsignmentFieldMetaExtraAllowanceCharge],
  [ConsignmentField.MainCarriageShipmentStage, ConsignmentFieldMetaMainCarriageShipmentStage],
  [ConsignmentField.PreCarriageShipmentStage, ConsignmentFieldMetaPreCarriageShipmentStage],
  [ConsignmentField.OnCarriageShipmentStage, ConsignmentFieldMetaOnCarriageShipmentStage],
  [ConsignmentField.TransportHandlingUnit, ConsignmentFieldMetaTransportHandlingUnit],
  [ConsignmentField.FirstArrivalPortLocation, ConsignmentFieldMetaFirstArrivalPortLocation],
  [ConsignmentField.LastExitPortLocation, ConsignmentFieldMetaLastExitPortLocation]
])

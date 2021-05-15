import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Consignment } from  '../../model/cac/Consignment'
import { ConsignmentFieldMeta } from  '../../meta/cac/ConsignmentMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractDisplay from './ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import CustomsDeclarationDisplay from './CustomsDeclarationDisplay'
import { CustomsDeclaration } from '../../model/cac/CustomsDeclaration'
import DeliveryTermsDisplay from './DeliveryTermsDisplay'
import { DeliveryTerms } from '../../model/cac/DeliveryTerms'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import ShipmentStageDisplay from './ShipmentStageDisplay'
import { ShipmentStage } from '../../model/cac/ShipmentStage'
import StatusDisplay from './StatusDisplay'
import { Status } from '../../model/cac/Status'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TransportationServiceDisplay from './TransportationServiceDisplay'
import { TransportationService } from '../../model/cac/TransportationService'
import TransportEventDisplay from './TransportEventDisplay'
import { TransportEvent } from '../../model/cac/TransportEvent'
import TransportHandlingUnitDisplay from './TransportHandlingUnitDisplay'
import { TransportHandlingUnit } from '../../model/cac/TransportHandlingUnit'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Consignment | undefined
  meta: FieldMeta<T>
}

export default function ConsignmentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Consignment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsignmentFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ConsignmentFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Carrier Assigned Identifier"
            value={value.CarrierAssignedID?.[0]}
            meta={ConsignmentFieldMeta.CarrierAssignedID}
          />

          <IdentifierDisplay
            label="Consignee Assigned Identifier"
            value={value.ConsigneeAssignedID?.[0]}
            meta={ConsignmentFieldMeta.ConsigneeAssignedID}
          />

          <IdentifierDisplay
            label="Consignor Assigned Identifier"
            value={value.ConsignorAssignedID?.[0]}
            meta={ConsignmentFieldMeta.ConsignorAssignedID}
          />

          <IdentifierDisplay
            label="Freight Forwarder Assigned Identifier"
            value={value.FreightForwarderAssignedID?.[0]}
            meta={ConsignmentFieldMeta.FreightForwarderAssignedID}
          />

          <IdentifierDisplay
            label="Broker Assigned Identifier"
            value={value.BrokerAssignedID?.[0]}
            meta={ConsignmentFieldMeta.BrokerAssignedID}
          />

          <IdentifierDisplay
            label="Contracted Carrier Assigned Identifier"
            value={value.ContractedCarrierAssignedID?.[0]}
            meta={ConsignmentFieldMeta.ContractedCarrierAssignedID}
          />

          <IdentifierDisplay
            label="Performing Carrier Assigned Identifier"
            value={value.PerformingCarrierAssignedID?.[0]}
            meta={ConsignmentFieldMeta.PerformingCarrierAssignedID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-SummaryDescription"
            label="Summary Description"
            items={value.SummaryDescription}
            meta={ConsignmentFieldMeta.SummaryDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Summary Description"
                value={itemValue}
                meta={ConsignmentFieldMeta.SummaryDescription}
              />
            }
          />

          <AmountDisplay
            label="Total Invoice Amount"
            value={value.TotalInvoiceAmount?.[0]}
            meta={ConsignmentFieldMeta.TotalInvoiceAmount}
          />

          <AmountDisplay
            label="Declared Customs Value"
            value={value.DeclaredCustomsValueAmount?.[0]}
            meta={ConsignmentFieldMeta.DeclaredCustomsValueAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TariffDescription"
            label="Tariff Description"
            items={value.TariffDescription}
            meta={ConsignmentFieldMeta.TariffDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Tariff Description"
                value={itemValue}
                meta={ConsignmentFieldMeta.TariffDescription}
              />
            }
          />

          <CodeDisplay
            label="Tariff Code"
            value={value.TariffCode?.[0]}
            meta={ConsignmentFieldMeta.TariffCode}
          />

          <AmountDisplay
            label="Insurance Premium Amount"
            value={value.InsurancePremiumAmount?.[0]}
            meta={ConsignmentFieldMeta.InsurancePremiumAmount}
          />

          <MeasureDisplay
            label="Gross Weight"
            value={value.GrossWeightMeasure?.[0]}
            meta={ConsignmentFieldMeta.GrossWeightMeasure}
          />

          <MeasureDisplay
            label="Net Weight"
            value={value.NetWeightMeasure?.[0]}
            meta={ConsignmentFieldMeta.NetWeightMeasure}
          />

          <MeasureDisplay
            label="Net Net Weight"
            value={value.NetNetWeightMeasure?.[0]}
            meta={ConsignmentFieldMeta.NetNetWeightMeasure}
          />

          <MeasureDisplay
            label="Chargeable Weight"
            value={value.ChargeableWeightMeasure?.[0]}
            meta={ConsignmentFieldMeta.ChargeableWeightMeasure}
          />

          <MeasureDisplay
            label="Gross Volume"
            value={value.GrossVolumeMeasure?.[0]}
            meta={ConsignmentFieldMeta.GrossVolumeMeasure}
          />

          <MeasureDisplay
            label="Net Volume"
            value={value.NetVolumeMeasure?.[0]}
            meta={ConsignmentFieldMeta.NetVolumeMeasure}
          />

          <MeasureDisplay
            label="Loading Length"
            value={value.LoadingLengthMeasure?.[0]}
            meta={ConsignmentFieldMeta.LoadingLengthMeasure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Remarks"
            label="Remarks"
            items={value.Remarks}
            meta={ConsignmentFieldMeta.Remarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Remarks"
                value={itemValue}
                meta={ConsignmentFieldMeta.Remarks}
              />
            }
          />

          <IndicatorDisplay
            label="Hazardous Risk Indicator"
            value={value.HazardousRiskIndicator?.[0]}
            meta={ConsignmentFieldMeta.HazardousRiskIndicator}
          />

          <IndicatorDisplay
            label="Animal Food Indicator"
            value={value.AnimalFoodIndicator?.[0]}
            meta={ConsignmentFieldMeta.AnimalFoodIndicator}
          />

          <IndicatorDisplay
            label="Human Food Indicator"
            value={value.HumanFoodIndicator?.[0]}
            meta={ConsignmentFieldMeta.HumanFoodIndicator}
          />

          <IndicatorDisplay
            label="Livestock Indicator"
            value={value.LivestockIndicator?.[0]}
            meta={ConsignmentFieldMeta.LivestockIndicator}
          />

          <IndicatorDisplay
            label="Bulk Cargo Indicator"
            value={value.BulkCargoIndicator?.[0]}
            meta={ConsignmentFieldMeta.BulkCargoIndicator}
          />

          <IndicatorDisplay
            label="Containerized Indicator"
            value={value.ContainerizedIndicator?.[0]}
            meta={ConsignmentFieldMeta.ContainerizedIndicator}
          />

          <IndicatorDisplay
            label="General Cargo Indicator"
            value={value.GeneralCargoIndicator?.[0]}
            meta={ConsignmentFieldMeta.GeneralCargoIndicator}
          />

          <IndicatorDisplay
            label="Special Security Indicator"
            value={value.SpecialSecurityIndicator?.[0]}
            meta={ConsignmentFieldMeta.SpecialSecurityIndicator}
          />

          <IndicatorDisplay
            label="Third Party Payer Indicator"
            value={value.ThirdPartyPayerIndicator?.[0]}
            meta={ConsignmentFieldMeta.ThirdPartyPayerIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-CarrierServiceInstructions"
            label="Carrier Service Instructions"
            items={value.CarrierServiceInstructions}
            meta={ConsignmentFieldMeta.CarrierServiceInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Carrier Service Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.CarrierServiceInstructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-CustomsClearanceServiceInstructions"
            label="Customs Clearance Service Instructions"
            items={value.CustomsClearanceServiceInstructions}
            meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Customs Clearance Service Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ForwarderServiceInstructions"
            label="Forwarder Service Instructions"
            items={value.ForwarderServiceInstructions}
            meta={ConsignmentFieldMeta.ForwarderServiceInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Forwarder Service Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.ForwarderServiceInstructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-SpecialServiceInstructions"
            label="Special Service Instructions"
            items={value.SpecialServiceInstructions}
            meta={ConsignmentFieldMeta.SpecialServiceInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Special Service Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.SpecialServiceInstructions}
              />
            }
          />

          <IdentifierDisplay
            label="Sequence Identifier"
            value={value.SequenceID?.[0]}
            meta={ConsignmentFieldMeta.SequenceID}
          />

          <CodeDisplay
            label="Shipping Priority Level Code"
            value={value.ShippingPriorityLevelCode?.[0]}
            meta={ConsignmentFieldMeta.ShippingPriorityLevelCode}
          />

          <CodeDisplay
            label="Handling Code"
            value={value.HandlingCode?.[0]}
            meta={ConsignmentFieldMeta.HandlingCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-HandlingInstructions"
            label="Handling Instructions"
            items={value.HandlingInstructions}
            meta={ConsignmentFieldMeta.HandlingInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Handling Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.HandlingInstructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Information"
            label="Information"
            items={value.Information}
            meta={ConsignmentFieldMeta.Information} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Information"
                value={itemValue}
                meta={ConsignmentFieldMeta.Information}
              />
            }
          />

          <QuantityDisplay
            label="Total Goods Item Quantity"
            value={value.TotalGoodsItemQuantity?.[0]}
            meta={ConsignmentFieldMeta.TotalGoodsItemQuantity}
          />

          <QuantityDisplay
            label="Total Transport Handling Unit Quantity"
            value={value.TotalTransportHandlingUnitQuantity?.[0]}
            meta={ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity}
          />

          <AmountDisplay
            label="Insurance Value"
            value={value.InsuranceValueAmount?.[0]}
            meta={ConsignmentFieldMeta.InsuranceValueAmount}
          />

          <AmountDisplay
            label="Declared For Carriage Value"
            value={value.DeclaredForCarriageValueAmount?.[0]}
            meta={ConsignmentFieldMeta.DeclaredForCarriageValueAmount}
          />

          <AmountDisplay
            label="Declared Statistics Value"
            value={value.DeclaredStatisticsValueAmount?.[0]}
            meta={ConsignmentFieldMeta.DeclaredStatisticsValueAmount}
          />

          <AmountDisplay
            label="Free On Board Value"
            value={value.FreeOnBoardValueAmount?.[0]}
            meta={ConsignmentFieldMeta.FreeOnBoardValueAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-SpecialInstructions"
            label="Special Instructions"
            items={value.SpecialInstructions}
            meta={ConsignmentFieldMeta.SpecialInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Special Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.SpecialInstructions}
              />
            }
          />

          <IndicatorDisplay
            label="Split Consignment Indicator"
            value={value.SplitConsignmentIndicator?.[0]}
            meta={ConsignmentFieldMeta.SplitConsignmentIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-DeliveryInstructions"
            label="Delivery Instructions"
            items={value.DeliveryInstructions}
            meta={ConsignmentFieldMeta.DeliveryInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Delivery Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.DeliveryInstructions}
              />
            }
          />

          <QuantityDisplay
            label="Consignment Quantity"
            value={value.ConsignmentQuantity?.[0]}
            meta={ConsignmentFieldMeta.ConsignmentQuantity}
          />

          <IndicatorDisplay
            label="Consolidatable Indicator"
            value={value.ConsolidatableIndicator?.[0]}
            meta={ConsignmentFieldMeta.ConsolidatableIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-HaulageInstructions"
            label="Haulage Instructions"
            items={value.HaulageInstructions}
            meta={ConsignmentFieldMeta.HaulageInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Haulage Instructions"
                value={itemValue}
                meta={ConsignmentFieldMeta.HaulageInstructions}
              />
            }
          />

          <IdentifierDisplay
            label="Loading Sequence Identifier"
            value={value.LoadingSequenceID?.[0]}
            meta={ConsignmentFieldMeta.LoadingSequenceID}
          />

          <QuantityDisplay
            label="Child Consignment Quantity"
            value={value.ChildConsignmentQuantity?.[0]}
            meta={ConsignmentFieldMeta.ChildConsignmentQuantity}
          />

          <QuantityDisplay
            label="Total Packages Quantity"
            value={value.TotalPackagesQuantity?.[0]}
            meta={ConsignmentFieldMeta.TotalPackagesQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Shipment ubl-ConsolidatedShipment"
            label="Consolidated Shipment"
            items={value.ConsolidatedShipment}
            meta={ConsignmentFieldMeta.ConsolidatedShipment} 
            itemDisplay={ (itemValue: Shipment, key: string | number) =>
              <ShipmentDisplay
                key={key}
                label="Consolidated Shipment"
                value={itemValue}
                meta={ConsignmentFieldMeta.ConsolidatedShipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CustomsDeclaration"
            label="Customs Declaration"
            items={value.CustomsDeclaration}
            meta={ConsignmentFieldMeta.CustomsDeclaration} 
            itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
              <CustomsDeclarationDisplay
                key={key}
                label="Customs Declaration"
                value={itemValue}
                meta={ConsignmentFieldMeta.CustomsDeclaration}
              />
            }
          />

          <TransportEventDisplay
            label="Requested Pickup Transport Event"
            value={value.RequestedPickupTransportEvent?.[0]}
            meta={ConsignmentFieldMeta.RequestedPickupTransportEvent}
          />

          <TransportEventDisplay
            label="Requested Delivery Transport Event"
            value={value.RequestedDeliveryTransportEvent?.[0]}
            meta={ConsignmentFieldMeta.RequestedDeliveryTransportEvent}
          />

          <TransportEventDisplay
            label="Planned Pickup Transport Event"
            value={value.PlannedPickupTransportEvent?.[0]}
            meta={ConsignmentFieldMeta.PlannedPickupTransportEvent}
          />

          <TransportEventDisplay
            label="Planned Delivery Transport Event"
            value={value.PlannedDeliveryTransportEvent?.[0]}
            meta={ConsignmentFieldMeta.PlannedDeliveryTransportEvent}
          />

          <TransportEventDisplay
            label="Actual Pickup Transport Event"
            value={value.ActualPickupTransportEvent?.[0]}
            meta={ConsignmentFieldMeta.ActualPickupTransportEvent}
          />

          <TransportEventDisplay
            label="Actual Delivery Transport Event"
            value={value.ActualDeliveryTransportEvent?.[0]}
            meta={ConsignmentFieldMeta.ActualDeliveryTransportEvent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Status"
            label="Status"
            items={value.Status}
            meta={ConsignmentFieldMeta.Status} 
            itemDisplay={ (itemValue: Status, key: string | number) =>
              <StatusDisplay
                key={key}
                label="Status"
                value={itemValue}
                meta={ConsignmentFieldMeta.Status}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Consignment ubl-ChildConsignment"
            label="Child Consignment"
            items={value.ChildConsignment}
            meta={ConsignmentFieldMeta.ChildConsignment} 
            itemDisplay={ (itemValue: Consignment, key: string | number) =>
              <ConsignmentDisplay
                key={key}
                label="Child Consignment"
                value={itemValue}
                meta={ConsignmentFieldMeta.ChildConsignment}
              />
            }
          />

          <PartyDisplay
            label="Consignee Party"
            value={value.ConsigneeParty?.[0]}
            meta={ConsignmentFieldMeta.ConsigneeParty}
          />

          <PartyDisplay
            label="Exporter Party"
            value={value.ExporterParty?.[0]}
            meta={ConsignmentFieldMeta.ExporterParty}
          />

          <PartyDisplay
            label="Consignor Party"
            value={value.ConsignorParty?.[0]}
            meta={ConsignmentFieldMeta.ConsignorParty}
          />

          <PartyDisplay
            label="Importer Party"
            value={value.ImporterParty?.[0]}
            meta={ConsignmentFieldMeta.ImporterParty}
          />

          <PartyDisplay
            label="Carrier Party"
            value={value.CarrierParty?.[0]}
            meta={ConsignmentFieldMeta.CarrierParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={ConsignmentFieldMeta.FreightForwarderParty}
          />

          <PartyDisplay
            label="Notify Party"
            value={value.NotifyParty?.[0]}
            meta={ConsignmentFieldMeta.NotifyParty}
          />

          <PartyDisplay
            label="Original Despatch Party"
            value={value.OriginalDespatchParty?.[0]}
            meta={ConsignmentFieldMeta.OriginalDespatchParty}
          />

          <PartyDisplay
            label="Final Delivery Party"
            value={value.FinalDeliveryParty?.[0]}
            meta={ConsignmentFieldMeta.FinalDeliveryParty}
          />

          <PartyDisplay
            label="Performing Carrier Party"
            value={value.PerformingCarrierParty?.[0]}
            meta={ConsignmentFieldMeta.PerformingCarrierParty}
          />

          <PartyDisplay
            label="Substitute Carrier Party"
            value={value.SubstituteCarrierParty?.[0]}
            meta={ConsignmentFieldMeta.SubstituteCarrierParty}
          />

          <PartyDisplay
            label="Logistics Operator Party"
            value={value.LogisticsOperatorParty?.[0]}
            meta={ConsignmentFieldMeta.LogisticsOperatorParty}
          />

          <PartyDisplay
            label="Transport Advisor Party"
            value={value.TransportAdvisorParty?.[0]}
            meta={ConsignmentFieldMeta.TransportAdvisorParty}
          />

          <PartyDisplay
            label="Hazardous Item Notification Party"
            value={value.HazardousItemNotificationParty?.[0]}
            meta={ConsignmentFieldMeta.HazardousItemNotificationParty}
          />

          <PartyDisplay
            label="Insurance Party"
            value={value.InsuranceParty?.[0]}
            meta={ConsignmentFieldMeta.InsuranceParty}
          />

          <PartyDisplay
            label="Mortgage Holder Party"
            value={value.MortgageHolderParty?.[0]}
            meta={ConsignmentFieldMeta.MortgageHolderParty}
          />

          <PartyDisplay
            label="Bill Of Lading Holder Party"
            value={value.BillOfLadingHolderParty?.[0]}
            meta={ConsignmentFieldMeta.BillOfLadingHolderParty}
          />

          <CountryDisplay
            label="Original Departure Country"
            value={value.OriginalDepartureCountry?.[0]}
            meta={ConsignmentFieldMeta.OriginalDepartureCountry}
          />

          <CountryDisplay
            label="Final Destination Country"
            value={value.FinalDestinationCountry?.[0]}
            meta={ConsignmentFieldMeta.FinalDestinationCountry}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Country ubl-TransitCountry"
            label="Transit Country"
            items={value.TransitCountry}
            meta={ConsignmentFieldMeta.TransitCountry} 
            itemDisplay={ (itemValue: Country, key: string | number) =>
              <CountryDisplay
                key={key}
                label="Transit Country"
                value={itemValue}
                meta={ConsignmentFieldMeta.TransitCountry}
              />
            }
          />

          <ContractDisplay
            label="Transport Contract"
            value={value.TransportContract?.[0]}
            meta={ConsignmentFieldMeta.TransportContract}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent"
            label="Transport Event"
            items={value.TransportEvent}
            meta={ConsignmentFieldMeta.TransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Transport Event"
                value={itemValue}
                meta={ConsignmentFieldMeta.TransportEvent}
              />
            }
          />

          <TransportationServiceDisplay
            label="Original Despatch Transportation Service"
            value={value.OriginalDespatchTransportationService?.[0]}
            meta={ConsignmentFieldMeta.OriginalDespatchTransportationService}
          />

          <TransportationServiceDisplay
            label="Final Delivery Transportation Service"
            value={value.FinalDeliveryTransportationService?.[0]}
            meta={ConsignmentFieldMeta.FinalDeliveryTransportationService}
          />

          <DeliveryTermsDisplay
            label="Delivery Terms"
            value={value.DeliveryTerms?.[0]}
            meta={ConsignmentFieldMeta.DeliveryTerms}
          />

          <PaymentTermsDisplay
            label="Payment Terms"
            value={value.PaymentTerms?.[0]}
            meta={ConsignmentFieldMeta.PaymentTerms}
          />

          <PaymentTermsDisplay
            label="Collect Payment Terms"
            value={value.CollectPaymentTerms?.[0]}
            meta={ConsignmentFieldMeta.CollectPaymentTerms}
          />

          <PaymentTermsDisplay
            label="Disbursement Payment Terms"
            value={value.DisbursementPaymentTerms?.[0]}
            meta={ConsignmentFieldMeta.DisbursementPaymentTerms}
          />

          <PaymentTermsDisplay
            label="Prepaid Payment Terms"
            value={value.PrepaidPaymentTerms?.[0]}
            meta={ConsignmentFieldMeta.PrepaidPaymentTerms}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-FreightAllowanceCharge"
            label="Freight Allowance Charge"
            items={value.FreightAllowanceCharge}
            meta={ConsignmentFieldMeta.FreightAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Freight Allowance Charge"
                value={itemValue}
                meta={ConsignmentFieldMeta.FreightAllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-ExtraAllowanceCharge"
            label="Extra Allowance Charge"
            items={value.ExtraAllowanceCharge}
            meta={ConsignmentFieldMeta.ExtraAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Extra Allowance Charge"
                value={itemValue}
                meta={ConsignmentFieldMeta.ExtraAllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShipmentStage ubl-MainCarriageShipmentStage"
            label="Main Carriage Shipment Stage"
            items={value.MainCarriageShipmentStage}
            meta={ConsignmentFieldMeta.MainCarriageShipmentStage} 
            itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
              <ShipmentStageDisplay
                key={key}
                label="Main Carriage Shipment Stage"
                value={itemValue}
                meta={ConsignmentFieldMeta.MainCarriageShipmentStage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShipmentStage ubl-PreCarriageShipmentStage"
            label="Pre Carriage Shipment Stage"
            items={value.PreCarriageShipmentStage}
            meta={ConsignmentFieldMeta.PreCarriageShipmentStage} 
            itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
              <ShipmentStageDisplay
                key={key}
                label="Pre Carriage Shipment Stage"
                value={itemValue}
                meta={ConsignmentFieldMeta.PreCarriageShipmentStage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShipmentStage ubl-OnCarriageShipmentStage"
            label="On Carriage Shipment Stage"
            items={value.OnCarriageShipmentStage}
            meta={ConsignmentFieldMeta.OnCarriageShipmentStage} 
            itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
              <ShipmentStageDisplay
                key={key}
                label="On Carriage Shipment Stage"
                value={itemValue}
                meta={ConsignmentFieldMeta.OnCarriageShipmentStage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportHandlingUnit"
            label="Transport Handling Unit"
            items={value.TransportHandlingUnit}
            meta={ConsignmentFieldMeta.TransportHandlingUnit} 
            itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
              <TransportHandlingUnitDisplay
                key={key}
                label="Transport Handling Unit"
                value={itemValue}
                meta={ConsignmentFieldMeta.TransportHandlingUnit}
              />
            }
          />

          <LocationDisplay
            label="First Arrival Port Location"
            value={value.FirstArrivalPortLocation?.[0]}
            meta={ConsignmentFieldMeta.FirstArrivalPortLocation}
          />

          <LocationDisplay
            label="Last Exit Port Location"
            value={value.LastExitPortLocation?.[0]}
            meta={ConsignmentFieldMeta.LastExitPortLocation}
          />
        </div>
    </div>
  )
}

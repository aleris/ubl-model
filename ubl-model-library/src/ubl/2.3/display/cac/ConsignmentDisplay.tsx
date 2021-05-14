import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Consignment
  meta: FieldMeta<T>
}

export default function ConsignmentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Consignment ubl-ConsignmentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Consignment ubl-UBLExtensions"
          meta={ConsignmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsignmentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-ID"
          meta={ConsignmentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-CarrierAssignedID"
          meta={ConsignmentFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Carrier Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.CarrierAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-ConsigneeAssignedID"
          meta={ConsignmentFieldMeta.ConsigneeAssignedID} 
          value={value.ConsigneeAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Consignee Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsigneeAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-ConsignorAssignedID"
          meta={ConsignmentFieldMeta.ConsignorAssignedID} 
          value={value.ConsignorAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Consignor Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsignorAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-FreightForwarderAssignedID"
          meta={ConsignmentFieldMeta.FreightForwarderAssignedID} 
          value={value.FreightForwarderAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Freight Forwarder Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.FreightForwarderAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-BrokerAssignedID"
          meta={ConsignmentFieldMeta.BrokerAssignedID} 
          value={value.BrokerAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Broker Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.BrokerAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-ContractedCarrierAssignedID"
          meta={ConsignmentFieldMeta.ContractedCarrierAssignedID} 
          value={value.ContractedCarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contracted Carrier Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.ContractedCarrierAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-PerformingCarrierAssignedID"
          meta={ConsignmentFieldMeta.PerformingCarrierAssignedID} 
          value={value.PerformingCarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Performing Carrier Assigned Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.PerformingCarrierAssignedID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-SummaryDescription"
          meta={ConsignmentFieldMeta.SummaryDescription} 
          value={value.SummaryDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Summary Description"
              value={itemValue}
              meta={ConsignmentFieldMeta.SummaryDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-TotalInvoiceAmount"
          meta={ConsignmentFieldMeta.TotalInvoiceAmount} 
          value={value.TotalInvoiceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Invoice Amount"
              value={itemValue}
              meta={ConsignmentFieldMeta.TotalInvoiceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-DeclaredCustomsValueAmount"
          meta={ConsignmentFieldMeta.DeclaredCustomsValueAmount} 
          value={value.DeclaredCustomsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Customs Value"
              value={itemValue}
              meta={ConsignmentFieldMeta.DeclaredCustomsValueAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-TariffDescription"
          meta={ConsignmentFieldMeta.TariffDescription} 
          value={value.TariffDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Tariff Description"
              value={itemValue}
              meta={ConsignmentFieldMeta.TariffDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Code ubl-TariffCode"
          meta={ConsignmentFieldMeta.TariffCode} 
          value={value.TariffCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tariff Code"
              value={itemValue}
              meta={ConsignmentFieldMeta.TariffCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-InsurancePremiumAmount"
          meta={ConsignmentFieldMeta.InsurancePremiumAmount} 
          value={value.InsurancePremiumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Insurance Premium Amount"
              value={itemValue}
              meta={ConsignmentFieldMeta.InsurancePremiumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-GrossWeightMeasure"
          meta={ConsignmentFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Weight"
              value={itemValue}
              meta={ConsignmentFieldMeta.GrossWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-NetWeightMeasure"
          meta={ConsignmentFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Weight"
              value={itemValue}
              meta={ConsignmentFieldMeta.NetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-NetNetWeightMeasure"
          meta={ConsignmentFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Net Weight"
              value={itemValue}
              meta={ConsignmentFieldMeta.NetNetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-ChargeableWeightMeasure"
          meta={ConsignmentFieldMeta.ChargeableWeightMeasure} 
          value={value.ChargeableWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Chargeable Weight"
              value={itemValue}
              meta={ConsignmentFieldMeta.ChargeableWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-GrossVolumeMeasure"
          meta={ConsignmentFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Volume"
              value={itemValue}
              meta={ConsignmentFieldMeta.GrossVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-NetVolumeMeasure"
          meta={ConsignmentFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Volume"
              value={itemValue}
              meta={ConsignmentFieldMeta.NetVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Measure ubl-LoadingLengthMeasure"
          meta={ConsignmentFieldMeta.LoadingLengthMeasure} 
          value={value.LoadingLengthMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Loading Length"
              value={itemValue}
              meta={ConsignmentFieldMeta.LoadingLengthMeasure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-Remarks"
          meta={ConsignmentFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Remarks"
              value={itemValue}
              meta={ConsignmentFieldMeta.Remarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-HazardousRiskIndicator"
          meta={ConsignmentFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Hazardous Risk Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.HazardousRiskIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-AnimalFoodIndicator"
          meta={ConsignmentFieldMeta.AnimalFoodIndicator} 
          value={value.AnimalFoodIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Animal Food Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.AnimalFoodIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-HumanFoodIndicator"
          meta={ConsignmentFieldMeta.HumanFoodIndicator} 
          value={value.HumanFoodIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Human Food Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.HumanFoodIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-LivestockIndicator"
          meta={ConsignmentFieldMeta.LivestockIndicator} 
          value={value.LivestockIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Livestock Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.LivestockIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-BulkCargoIndicator"
          meta={ConsignmentFieldMeta.BulkCargoIndicator} 
          value={value.BulkCargoIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Bulk Cargo Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.BulkCargoIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-ContainerizedIndicator"
          meta={ConsignmentFieldMeta.ContainerizedIndicator} 
          value={value.ContainerizedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Containerized Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.ContainerizedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-GeneralCargoIndicator"
          meta={ConsignmentFieldMeta.GeneralCargoIndicator} 
          value={value.GeneralCargoIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="General Cargo Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.GeneralCargoIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-SpecialSecurityIndicator"
          meta={ConsignmentFieldMeta.SpecialSecurityIndicator} 
          value={value.SpecialSecurityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Special Security Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.SpecialSecurityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-ThirdPartyPayerIndicator"
          meta={ConsignmentFieldMeta.ThirdPartyPayerIndicator} 
          value={value.ThirdPartyPayerIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Third Party Payer Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.ThirdPartyPayerIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-CarrierServiceInstructions"
          meta={ConsignmentFieldMeta.CarrierServiceInstructions} 
          value={value.CarrierServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Carrier Service Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.CarrierServiceInstructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-CustomsClearanceServiceInstructions"
          meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions} 
          value={value.CustomsClearanceServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Customs Clearance Service Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-ForwarderServiceInstructions"
          meta={ConsignmentFieldMeta.ForwarderServiceInstructions} 
          value={value.ForwarderServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Forwarder Service Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.ForwarderServiceInstructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-SpecialServiceInstructions"
          meta={ConsignmentFieldMeta.SpecialServiceInstructions} 
          value={value.SpecialServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Special Service Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.SpecialServiceInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-SequenceID"
          meta={ConsignmentFieldMeta.SequenceID} 
          value={value.SequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sequence Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.SequenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Code ubl-ShippingPriorityLevelCode"
          meta={ConsignmentFieldMeta.ShippingPriorityLevelCode} 
          value={value.ShippingPriorityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Shipping Priority Level Code"
              value={itemValue}
              meta={ConsignmentFieldMeta.ShippingPriorityLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Code ubl-HandlingCode"
          meta={ConsignmentFieldMeta.HandlingCode} 
          value={value.HandlingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Handling Code"
              value={itemValue}
              meta={ConsignmentFieldMeta.HandlingCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-HandlingInstructions"
          meta={ConsignmentFieldMeta.HandlingInstructions} 
          value={value.HandlingInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Handling Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.HandlingInstructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-Information"
          meta={ConsignmentFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Information"
              value={itemValue}
              meta={ConsignmentFieldMeta.Information}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Quantity ubl-TotalGoodsItemQuantity"
          meta={ConsignmentFieldMeta.TotalGoodsItemQuantity} 
          value={value.TotalGoodsItemQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Goods Item Quantity"
              value={itemValue}
              meta={ConsignmentFieldMeta.TotalGoodsItemQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Quantity ubl-TotalTransportHandlingUnitQuantity"
          meta={ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity} 
          value={value.TotalTransportHandlingUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Transport Handling Unit Quantity"
              value={itemValue}
              meta={ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-InsuranceValueAmount"
          meta={ConsignmentFieldMeta.InsuranceValueAmount} 
          value={value.InsuranceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Insurance Value"
              value={itemValue}
              meta={ConsignmentFieldMeta.InsuranceValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-DeclaredForCarriageValueAmount"
          meta={ConsignmentFieldMeta.DeclaredForCarriageValueAmount} 
          value={value.DeclaredForCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared For Carriage Value"
              value={itemValue}
              meta={ConsignmentFieldMeta.DeclaredForCarriageValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-DeclaredStatisticsValueAmount"
          meta={ConsignmentFieldMeta.DeclaredStatisticsValueAmount} 
          value={value.DeclaredStatisticsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Statistics Value"
              value={itemValue}
              meta={ConsignmentFieldMeta.DeclaredStatisticsValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Amount ubl-FreeOnBoardValueAmount"
          meta={ConsignmentFieldMeta.FreeOnBoardValueAmount} 
          value={value.FreeOnBoardValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Free On Board Value"
              value={itemValue}
              meta={ConsignmentFieldMeta.FreeOnBoardValueAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-SpecialInstructions"
          meta={ConsignmentFieldMeta.SpecialInstructions} 
          value={value.SpecialInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Special Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.SpecialInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-SplitConsignmentIndicator"
          meta={ConsignmentFieldMeta.SplitConsignmentIndicator} 
          value={value.SplitConsignmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Split Consignment Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.SplitConsignmentIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-DeliveryInstructions"
          meta={ConsignmentFieldMeta.DeliveryInstructions} 
          value={value.DeliveryInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Delivery Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.DeliveryInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Quantity ubl-ConsignmentQuantity"
          meta={ConsignmentFieldMeta.ConsignmentQuantity} 
          value={value.ConsignmentQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Consignment Quantity"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsignmentQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Indicator ubl-ConsolidatableIndicator"
          meta={ConsignmentFieldMeta.ConsolidatableIndicator} 
          value={value.ConsolidatableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Consolidatable Indicator"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsolidatableIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Consignment ubl-Text ubl-HaulageInstructions"
          meta={ConsignmentFieldMeta.HaulageInstructions} 
          value={value.HaulageInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Haulage Instructions"
              value={itemValue}
              meta={ConsignmentFieldMeta.HaulageInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Identifier ubl-LoadingSequenceID"
          meta={ConsignmentFieldMeta.LoadingSequenceID} 
          value={value.LoadingSequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Loading Sequence Identifier"
              value={itemValue}
              meta={ConsignmentFieldMeta.LoadingSequenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Quantity ubl-ChildConsignmentQuantity"
          meta={ConsignmentFieldMeta.ChildConsignmentQuantity} 
          value={value.ChildConsignmentQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Child Consignment Quantity"
              value={itemValue}
              meta={ConsignmentFieldMeta.ChildConsignmentQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consignment ubl-Quantity ubl-TotalPackagesQuantity"
          meta={ConsignmentFieldMeta.TotalPackagesQuantity} 
          value={value.TotalPackagesQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Packages Quantity"
              value={itemValue}
              meta={ConsignmentFieldMeta.TotalPackagesQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-Shipment ubl-ConsolidatedShipment"
          meta={ConsignmentFieldMeta.ConsolidatedShipment} 
          value={value.ConsolidatedShipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Consolidated Shipment"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsolidatedShipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-CustomsDeclaration"
          meta={ConsignmentFieldMeta.CustomsDeclaration} 
          value={value.CustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay
              key={key}
              label="Customs Declaration"
              value={itemValue}
              meta={ConsignmentFieldMeta.CustomsDeclaration}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent ubl-RequestedPickupTransportEvent"
          meta={ConsignmentFieldMeta.RequestedPickupTransportEvent} 
          value={value.RequestedPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Requested Pickup Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.RequestedPickupTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent ubl-RequestedDeliveryTransportEvent"
          meta={ConsignmentFieldMeta.RequestedDeliveryTransportEvent} 
          value={value.RequestedDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Requested Delivery Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.RequestedDeliveryTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent ubl-PlannedPickupTransportEvent"
          meta={ConsignmentFieldMeta.PlannedPickupTransportEvent} 
          value={value.PlannedPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Pickup Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.PlannedPickupTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent ubl-PlannedDeliveryTransportEvent"
          meta={ConsignmentFieldMeta.PlannedDeliveryTransportEvent} 
          value={value.PlannedDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Delivery Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.PlannedDeliveryTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent ubl-ActualPickupTransportEvent"
          meta={ConsignmentFieldMeta.ActualPickupTransportEvent} 
          value={value.ActualPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Pickup Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.ActualPickupTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent ubl-ActualDeliveryTransportEvent"
          meta={ConsignmentFieldMeta.ActualDeliveryTransportEvent} 
          value={value.ActualDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Delivery Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.ActualDeliveryTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-Status"
          meta={ConsignmentFieldMeta.Status} 
          value={value.Status}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay
              key={key}
              label="Status"
              value={itemValue}
              meta={ConsignmentFieldMeta.Status}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-ChildConsignment"
          meta={ConsignmentFieldMeta.ChildConsignment} 
          value={value.ChildConsignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Child Consignment"
              value={itemValue}
              meta={ConsignmentFieldMeta.ChildConsignment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-ConsigneeParty"
          meta={ConsignmentFieldMeta.ConsigneeParty} 
          value={value.ConsigneeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignee Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsigneeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-ExporterParty"
          meta={ConsignmentFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporter Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.ExporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-ConsignorParty"
          meta={ConsignmentFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignor Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.ConsignorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-ImporterParty"
          meta={ConsignmentFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Importer Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.ImporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-CarrierParty"
          meta={ConsignmentFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Carrier Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.CarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-FreightForwarderParty"
          meta={ConsignmentFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-NotifyParty"
          meta={ConsignmentFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Notify Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.NotifyParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-OriginalDespatchParty"
          meta={ConsignmentFieldMeta.OriginalDespatchParty} 
          value={value.OriginalDespatchParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Original Despatch Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.OriginalDespatchParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-FinalDeliveryParty"
          meta={ConsignmentFieldMeta.FinalDeliveryParty} 
          value={value.FinalDeliveryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Final Delivery Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.FinalDeliveryParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-PerformingCarrierParty"
          meta={ConsignmentFieldMeta.PerformingCarrierParty} 
          value={value.PerformingCarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Performing Carrier Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.PerformingCarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-SubstituteCarrierParty"
          meta={ConsignmentFieldMeta.SubstituteCarrierParty} 
          value={value.SubstituteCarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Substitute Carrier Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.SubstituteCarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-LogisticsOperatorParty"
          meta={ConsignmentFieldMeta.LogisticsOperatorParty} 
          value={value.LogisticsOperatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Logistics Operator Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.LogisticsOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-TransportAdvisorParty"
          meta={ConsignmentFieldMeta.TransportAdvisorParty} 
          value={value.TransportAdvisorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport Advisor Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.TransportAdvisorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-HazardousItemNotificationParty"
          meta={ConsignmentFieldMeta.HazardousItemNotificationParty} 
          value={value.HazardousItemNotificationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Hazardous Item Notification Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.HazardousItemNotificationParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-InsuranceParty"
          meta={ConsignmentFieldMeta.InsuranceParty} 
          value={value.InsuranceParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Insurance Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.InsuranceParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-MortgageHolderParty"
          meta={ConsignmentFieldMeta.MortgageHolderParty} 
          value={value.MortgageHolderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Mortgage Holder Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.MortgageHolderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Party ubl-BillOfLadingHolderParty"
          meta={ConsignmentFieldMeta.BillOfLadingHolderParty} 
          value={value.BillOfLadingHolderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Bill Of Lading Holder Party"
              value={itemValue}
              meta={ConsignmentFieldMeta.BillOfLadingHolderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Country ubl-OriginalDepartureCountry"
          meta={ConsignmentFieldMeta.OriginalDepartureCountry} 
          value={value.OriginalDepartureCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Original Departure Country"
              value={itemValue}
              meta={ConsignmentFieldMeta.OriginalDepartureCountry}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Country ubl-FinalDestinationCountry"
          meta={ConsignmentFieldMeta.FinalDestinationCountry} 
          value={value.FinalDestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Final Destination Country"
              value={itemValue}
              meta={ConsignmentFieldMeta.FinalDestinationCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-Country ubl-TransitCountry"
          meta={ConsignmentFieldMeta.TransitCountry} 
          value={value.TransitCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Transit Country"
              value={itemValue}
              meta={ConsignmentFieldMeta.TransitCountry}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Contract ubl-TransportContract"
          meta={ConsignmentFieldMeta.TransportContract} 
          value={value.TransportContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Transport Contract"
              value={itemValue}
              meta={ConsignmentFieldMeta.TransportContract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-TransportEvent"
          meta={ConsignmentFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Transport Event"
              value={itemValue}
              meta={ConsignmentFieldMeta.TransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportationService ubl-OriginalDespatchTransportationService"
          meta={ConsignmentFieldMeta.OriginalDespatchTransportationService} 
          value={value.OriginalDespatchTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Original Despatch Transportation Service"
              value={itemValue}
              meta={ConsignmentFieldMeta.OriginalDespatchTransportationService}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-TransportationService ubl-FinalDeliveryTransportationService"
          meta={ConsignmentFieldMeta.FinalDeliveryTransportationService} 
          value={value.FinalDeliveryTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Final Delivery Transportation Service"
              value={itemValue}
              meta={ConsignmentFieldMeta.FinalDeliveryTransportationService}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-DeliveryTerms"
          meta={ConsignmentFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={ConsignmentFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-PaymentTerms"
          meta={ConsignmentFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={ConsignmentFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-PaymentTerms ubl-CollectPaymentTerms"
          meta={ConsignmentFieldMeta.CollectPaymentTerms} 
          value={value.CollectPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Collect Payment Terms"
              value={itemValue}
              meta={ConsignmentFieldMeta.CollectPaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-PaymentTerms ubl-DisbursementPaymentTerms"
          meta={ConsignmentFieldMeta.DisbursementPaymentTerms} 
          value={value.DisbursementPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Disbursement Payment Terms"
              value={itemValue}
              meta={ConsignmentFieldMeta.DisbursementPaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-PaymentTerms ubl-PrepaidPaymentTerms"
          meta={ConsignmentFieldMeta.PrepaidPaymentTerms} 
          value={value.PrepaidPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Prepaid Payment Terms"
              value={itemValue}
              meta={ConsignmentFieldMeta.PrepaidPaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-AllowanceCharge ubl-FreightAllowanceCharge"
          meta={ConsignmentFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Freight Allowance Charge"
              value={itemValue}
              meta={ConsignmentFieldMeta.FreightAllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-AllowanceCharge ubl-ExtraAllowanceCharge"
          meta={ConsignmentFieldMeta.ExtraAllowanceCharge} 
          value={value.ExtraAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Extra Allowance Charge"
              value={itemValue}
              meta={ConsignmentFieldMeta.ExtraAllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-ShipmentStage ubl-MainCarriageShipmentStage"
          meta={ConsignmentFieldMeta.MainCarriageShipmentStage} 
          value={value.MainCarriageShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay
              key={key}
              label="Main Carriage Shipment Stage"
              value={itemValue}
              meta={ConsignmentFieldMeta.MainCarriageShipmentStage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-ShipmentStage ubl-PreCarriageShipmentStage"
          meta={ConsignmentFieldMeta.PreCarriageShipmentStage} 
          value={value.PreCarriageShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay
              key={key}
              label="Pre Carriage Shipment Stage"
              value={itemValue}
              meta={ConsignmentFieldMeta.PreCarriageShipmentStage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-ShipmentStage ubl-OnCarriageShipmentStage"
          meta={ConsignmentFieldMeta.OnCarriageShipmentStage} 
          value={value.OnCarriageShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay
              key={key}
              label="On Carriage Shipment Stage"
              value={itemValue}
              meta={ConsignmentFieldMeta.OnCarriageShipmentStage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consignment ubl-TransportHandlingUnit"
          meta={ConsignmentFieldMeta.TransportHandlingUnit} 
          value={value.TransportHandlingUnit}
          itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
            <TransportHandlingUnitDisplay
              key={key}
              label="Transport Handling Unit"
              value={itemValue}
              meta={ConsignmentFieldMeta.TransportHandlingUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Location ubl-FirstArrivalPortLocation"
          meta={ConsignmentFieldMeta.FirstArrivalPortLocation} 
          value={value.FirstArrivalPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="First Arrival Port Location"
              value={itemValue}
              meta={ConsignmentFieldMeta.FirstArrivalPortLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consignment ubl-Location ubl-LastExitPortLocation"
          meta={ConsignmentFieldMeta.LastExitPortLocation} 
          value={value.LastExitPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Last Exit Port Location"
              value={itemValue}
              meta={ConsignmentFieldMeta.LastExitPortLocation}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Consignment
  meta: FieldMeta<T>
}

export default function ConsignmentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsignmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsignmentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.CarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsigneeAssignedID} 
          value={value.ConsigneeAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.ConsigneeAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsignorAssignedID} 
          value={value.ConsignorAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.ConsignorAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FreightForwarderAssignedID} 
          value={value.FreightForwarderAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.FreightForwarderAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.BrokerAssignedID} 
          value={value.BrokerAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.BrokerAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ContractedCarrierAssignedID} 
          value={value.ContractedCarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.ContractedCarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PerformingCarrierAssignedID} 
          value={value.PerformingCarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.PerformingCarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SummaryDescription} 
          value={value.SummaryDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.SummaryDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TotalInvoiceAmount} 
          value={value.TotalInvoiceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.TotalInvoiceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.DeclaredCustomsValueAmount} 
          value={value.DeclaredCustomsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.DeclaredCustomsValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TariffDescription} 
          value={value.TariffDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.TariffDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TariffCode} 
          value={value.TariffCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsignmentFieldMeta.TariffCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.InsurancePremiumAmount} 
          value={value.InsurancePremiumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.InsurancePremiumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.GrossWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.NetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.NetNetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ChargeableWeightMeasure} 
          value={value.ChargeableWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.ChargeableWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.GrossVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.NetVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.LoadingLengthMeasure} 
          value={value.LoadingLengthMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConsignmentFieldMeta.LoadingLengthMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.Remarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.HazardousRiskIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.AnimalFoodIndicator} 
          value={value.AnimalFoodIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.AnimalFoodIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.HumanFoodIndicator} 
          value={value.HumanFoodIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.HumanFoodIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.LivestockIndicator} 
          value={value.LivestockIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.LivestockIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.BulkCargoIndicator} 
          value={value.BulkCargoIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.BulkCargoIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ContainerizedIndicator} 
          value={value.ContainerizedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.ContainerizedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.GeneralCargoIndicator} 
          value={value.GeneralCargoIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.GeneralCargoIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SpecialSecurityIndicator} 
          value={value.SpecialSecurityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.SpecialSecurityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ThirdPartyPayerIndicator} 
          value={value.ThirdPartyPayerIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.ThirdPartyPayerIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.CarrierServiceInstructions} 
          value={value.CarrierServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.CarrierServiceInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions} 
          value={value.CustomsClearanceServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ForwarderServiceInstructions} 
          value={value.ForwarderServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.ForwarderServiceInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SpecialServiceInstructions} 
          value={value.SpecialServiceInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.SpecialServiceInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SequenceID} 
          value={value.SequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.SequenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ShippingPriorityLevelCode} 
          value={value.ShippingPriorityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsignmentFieldMeta.ShippingPriorityLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.HandlingCode} 
          value={value.HandlingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsignmentFieldMeta.HandlingCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.HandlingInstructions} 
          value={value.HandlingInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.HandlingInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.Information} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TotalGoodsItemQuantity} 
          value={value.TotalGoodsItemQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsignmentFieldMeta.TotalGoodsItemQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity} 
          value={value.TotalTransportHandlingUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.InsuranceValueAmount} 
          value={value.InsuranceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.InsuranceValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.DeclaredForCarriageValueAmount} 
          value={value.DeclaredForCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.DeclaredForCarriageValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.DeclaredStatisticsValueAmount} 
          value={value.DeclaredStatisticsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.DeclaredStatisticsValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FreeOnBoardValueAmount} 
          value={value.FreeOnBoardValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsignmentFieldMeta.FreeOnBoardValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SpecialInstructions} 
          value={value.SpecialInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.SpecialInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SplitConsignmentIndicator} 
          value={value.SplitConsignmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.SplitConsignmentIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.DeliveryInstructions} 
          value={value.DeliveryInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.DeliveryInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsignmentQuantity} 
          value={value.ConsignmentQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsignmentFieldMeta.ConsignmentQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsolidatableIndicator} 
          value={value.ConsolidatableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ConsignmentFieldMeta.ConsolidatableIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.HaulageInstructions} 
          value={value.HaulageInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsignmentFieldMeta.HaulageInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.LoadingSequenceID} 
          value={value.LoadingSequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsignmentFieldMeta.LoadingSequenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ChildConsignmentQuantity} 
          value={value.ChildConsignmentQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsignmentFieldMeta.ChildConsignmentQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TotalPackagesQuantity} 
          value={value.TotalPackagesQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsignmentFieldMeta.TotalPackagesQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsolidatedShipment} 
          value={value.ConsolidatedShipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={ConsignmentFieldMeta.ConsolidatedShipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.CustomsDeclaration} 
          value={value.CustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay key={key} meta={ConsignmentFieldMeta.CustomsDeclaration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.RequestedPickupTransportEvent} 
          value={value.RequestedPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.RequestedPickupTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.RequestedDeliveryTransportEvent} 
          value={value.RequestedDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.RequestedDeliveryTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PlannedPickupTransportEvent} 
          value={value.PlannedPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.PlannedPickupTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PlannedDeliveryTransportEvent} 
          value={value.PlannedDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.PlannedDeliveryTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ActualPickupTransportEvent} 
          value={value.ActualPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.ActualPickupTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ActualDeliveryTransportEvent} 
          value={value.ActualDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.ActualDeliveryTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.Status} 
          value={value.Status}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay key={key} meta={ConsignmentFieldMeta.Status} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ChildConsignment} 
          value={value.ChildConsignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={ConsignmentFieldMeta.ChildConsignment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsigneeParty} 
          value={value.ConsigneeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.ConsigneeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.ExporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ImporterParty} 
          value={value.ImporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.ImporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.NotifyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.OriginalDespatchParty} 
          value={value.OriginalDespatchParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.OriginalDespatchParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FinalDeliveryParty} 
          value={value.FinalDeliveryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.FinalDeliveryParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PerformingCarrierParty} 
          value={value.PerformingCarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.PerformingCarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.SubstituteCarrierParty} 
          value={value.SubstituteCarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.SubstituteCarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.LogisticsOperatorParty} 
          value={value.LogisticsOperatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.LogisticsOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TransportAdvisorParty} 
          value={value.TransportAdvisorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.TransportAdvisorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.HazardousItemNotificationParty} 
          value={value.HazardousItemNotificationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.HazardousItemNotificationParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.InsuranceParty} 
          value={value.InsuranceParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.InsuranceParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.MortgageHolderParty} 
          value={value.MortgageHolderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.MortgageHolderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.BillOfLadingHolderParty} 
          value={value.BillOfLadingHolderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ConsignmentFieldMeta.BillOfLadingHolderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.OriginalDepartureCountry} 
          value={value.OriginalDepartureCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={ConsignmentFieldMeta.OriginalDepartureCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FinalDestinationCountry} 
          value={value.FinalDestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={ConsignmentFieldMeta.FinalDestinationCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TransitCountry} 
          value={value.TransitCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={ConsignmentFieldMeta.TransitCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TransportContract} 
          value={value.TransportContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={ConsignmentFieldMeta.TransportContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ConsignmentFieldMeta.TransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.OriginalDespatchTransportationService} 
          value={value.OriginalDespatchTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={ConsignmentFieldMeta.OriginalDespatchTransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FinalDeliveryTransportationService} 
          value={value.FinalDeliveryTransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={ConsignmentFieldMeta.FinalDeliveryTransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={ConsignmentFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={ConsignmentFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.CollectPaymentTerms} 
          value={value.CollectPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={ConsignmentFieldMeta.CollectPaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.DisbursementPaymentTerms} 
          value={value.DisbursementPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={ConsignmentFieldMeta.DisbursementPaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PrepaidPaymentTerms} 
          value={value.PrepaidPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={ConsignmentFieldMeta.PrepaidPaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ConsignmentFieldMeta.FreightAllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.ExtraAllowanceCharge} 
          value={value.ExtraAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ConsignmentFieldMeta.ExtraAllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.MainCarriageShipmentStage} 
          value={value.MainCarriageShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay key={key} meta={ConsignmentFieldMeta.MainCarriageShipmentStage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.PreCarriageShipmentStage} 
          value={value.PreCarriageShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay key={key} meta={ConsignmentFieldMeta.PreCarriageShipmentStage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.OnCarriageShipmentStage} 
          value={value.OnCarriageShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay key={key} meta={ConsignmentFieldMeta.OnCarriageShipmentStage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.TransportHandlingUnit} 
          value={value.TransportHandlingUnit}
          itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
            <TransportHandlingUnitDisplay key={key} meta={ConsignmentFieldMeta.TransportHandlingUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.FirstArrivalPortLocation} 
          value={value.FirstArrivalPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ConsignmentFieldMeta.FirstArrivalPortLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsignmentFieldMeta.LastExitPortLocation} 
          value={value.LastExitPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ConsignmentFieldMeta.LastExitPortLocation} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

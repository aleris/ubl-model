import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportEquipment } from  '../../model/cac/TransportEquipment'
import { TransportEquipmentFieldMeta } from  '../../meta/cac/TransportEquipmentMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DespatchDisplay from './DespatchDisplay'
import { Despatch } from '../../model/cac/Despatch'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import GoodsItemDisplay from './GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import HazardousGoodsTransitDisplay from './HazardousGoodsTransitDisplay'
import { HazardousGoodsTransit } from '../../model/cac/HazardousGoodsTransit'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PickupDisplay from './PickupDisplay'
import { Pickup } from '../../model/cac/Pickup'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TradingTermsDisplay from './TradingTermsDisplay'
import { TradingTerms } from '../../model/cac/TradingTerms'
import TransportEquipmentSealDisplay from './TransportEquipmentSealDisplay'
import { TransportEquipmentSeal } from '../../model/cac/TransportEquipmentSeal'
import TransportEventDisplay from './TransportEventDisplay'
import { TransportEvent } from '../../model/cac/TransportEvent'
import TransportHandlingUnitDisplay from './TransportHandlingUnitDisplay'
import { TransportHandlingUnit } from '../../model/cac/TransportHandlingUnit'
import TransportMeansDisplay from './TransportMeansDisplay'
import { TransportMeans } from '../../model/cac/TransportMeans'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import VerifiedGrossMassDisplay from './VerifiedGrossMassDisplay'
import { VerifiedGrossMass } from '../../model/cac/VerifiedGrossMass'

type Props<T> = {
  label: string
  value: TransportEquipment
  meta: FieldMeta<T>
}

export default function TransportEquipmentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportEquipment ubl-TransportEquipmentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportEquipment ubl-UBLExtensions"
          meta={TransportEquipmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Identifier ubl-ID"
          meta={TransportEquipmentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Identifier ubl-ReferencedConsignmentID"
          meta={TransportEquipmentFieldMeta.ReferencedConsignmentID} 
          value={value.ReferencedConsignmentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Referenced Consignment Identifier"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ReferencedConsignmentID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-TransportEquipmentTypeCode"
          meta={TransportEquipmentFieldMeta.TransportEquipmentTypeCode} 
          value={value.TransportEquipmentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Equipment Type Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.TransportEquipmentTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-ProviderTypeCode"
          meta={TransportEquipmentFieldMeta.ProviderTypeCode} 
          value={value.ProviderTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Provider Type Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ProviderTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-OwnerTypeCode"
          meta={TransportEquipmentFieldMeta.OwnerTypeCode} 
          value={value.OwnerTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Owner Type Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.OwnerTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-SizeTypeCode"
          meta={TransportEquipmentFieldMeta.SizeTypeCode} 
          value={value.SizeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Size Type Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.SizeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-DispositionCode"
          meta={TransportEquipmentFieldMeta.DispositionCode} 
          value={value.DispositionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Disposition Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.DispositionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-FullnessIndicationCode"
          meta={TransportEquipmentFieldMeta.FullnessIndicationCode} 
          value={value.FullnessIndicationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Fullness Indication Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.FullnessIndicationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-RefrigerationOnIndicator"
          meta={TransportEquipmentFieldMeta.RefrigerationOnIndicator} 
          value={value.RefrigerationOnIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Refrigeration On Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.RefrigerationOnIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Text ubl-Information"
          meta={TransportEquipmentFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Information"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Information}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-ReturnabilityIndicator"
          meta={TransportEquipmentFieldMeta.ReturnabilityIndicator} 
          value={value.ReturnabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Returnability Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ReturnabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-LegalStatusIndicator"
          meta={TransportEquipmentFieldMeta.LegalStatusIndicator} 
          value={value.LegalStatusIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Legal Status Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.LegalStatusIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Numeric ubl-AirFlowPercent"
          meta={TransportEquipmentFieldMeta.AirFlowPercent} 
          value={value.AirFlowPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Air Flow Percent"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.AirFlowPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Numeric ubl-HumidityPercent"
          meta={TransportEquipmentFieldMeta.HumidityPercent} 
          value={value.HumidityPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Humidity Percent"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.HumidityPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-AnimalFoodApprovedIndicator"
          meta={TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator} 
          value={value.AnimalFoodApprovedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Animal Food Approved Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-HumanFoodApprovedIndicator"
          meta={TransportEquipmentFieldMeta.HumanFoodApprovedIndicator} 
          value={value.HumanFoodApprovedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Human Food Approved Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.HumanFoodApprovedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-DangerousGoodsApprovedIndicator"
          meta={TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator} 
          value={value.DangerousGoodsApprovedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Dangerous Goods Approved Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-RefrigeratedIndicator"
          meta={TransportEquipmentFieldMeta.RefrigeratedIndicator} 
          value={value.RefrigeratedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Refrigerated Indicator"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.RefrigeratedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Text ubl-Characteristics"
          meta={TransportEquipmentFieldMeta.Characteristics} 
          value={value.Characteristics}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Characteristics"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Characteristics}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Text ubl-DamageRemarks"
          meta={TransportEquipmentFieldMeta.DamageRemarks} 
          value={value.DamageRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Damage Remarks"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.DamageRemarks}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Text ubl-Description"
          meta={TransportEquipmentFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Text ubl-SpecialTransportRequirements"
          meta={TransportEquipmentFieldMeta.SpecialTransportRequirements} 
          value={value.SpecialTransportRequirements}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Special Transport Requirements"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.SpecialTransportRequirements}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Measure ubl-GrossWeightMeasure"
          meta={TransportEquipmentFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Weight"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.GrossWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Measure ubl-GrossVolumeMeasure"
          meta={TransportEquipmentFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Volume"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.GrossVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Measure ubl-TareWeightMeasure"
          meta={TransportEquipmentFieldMeta.TareWeightMeasure} 
          value={value.TareWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Tare Weight"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.TareWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Code ubl-TrackingDeviceCode"
          meta={TransportEquipmentFieldMeta.TrackingDeviceCode} 
          value={value.TrackingDeviceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tracking Device Code"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.TrackingDeviceCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Indicator ubl-PowerIndicator"
          meta={TransportEquipmentFieldMeta.PowerIndicator} 
          value={value.PowerIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Power"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.PowerIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEquipment ubl-Identifier ubl-TraceID"
          meta={TransportEquipmentFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Trace Identifier"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.TraceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Dimension ubl-MeasurementDimension"
          meta={TransportEquipmentFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Measurement Dimension"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.MeasurementDimension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEquipmentSeal"
          meta={TransportEquipmentFieldMeta.TransportEquipmentSeal} 
          value={value.TransportEquipmentSeal}
          itemDisplay={ (itemValue: TransportEquipmentSeal, key: string | number) =>
            <TransportEquipmentSealDisplay
              key={key}
              label="Transport Equipment Seal"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.TransportEquipmentSeal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Temperature ubl-MinimumTemperature"
          meta={TransportEquipmentFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Minimum Temperature"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.MinimumTemperature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Temperature ubl-MaximumTemperature"
          meta={TransportEquipmentFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Maximum Temperature"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.MaximumTemperature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Party ubl-ProviderParty"
          meta={TransportEquipmentFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Provider Party"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Party ubl-LoadingProofParty"
          meta={TransportEquipmentFieldMeta.LoadingProofParty} 
          value={value.LoadingProofParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Loading Proof Party"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.LoadingProofParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-SupplierParty"
          meta={TransportEquipmentFieldMeta.SupplierParty} 
          value={value.SupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Supplier Party"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.SupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Party ubl-OwnerParty"
          meta={TransportEquipmentFieldMeta.OwnerParty} 
          value={value.OwnerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Owner Party"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.OwnerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Party ubl-OperatingParty"
          meta={TransportEquipmentFieldMeta.OperatingParty} 
          value={value.OperatingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Operating Party"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.OperatingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Location ubl-LoadingLocation"
          meta={TransportEquipmentFieldMeta.LoadingLocation} 
          value={value.LoadingLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Loading Location"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.LoadingLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Location ubl-UnloadingLocation"
          meta={TransportEquipmentFieldMeta.UnloadingLocation} 
          value={value.UnloadingLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Unloading Location"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.UnloadingLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Location ubl-StorageLocation"
          meta={TransportEquipmentFieldMeta.StorageLocation} 
          value={value.StorageLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Storage Location"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.StorageLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent ubl-PositioningTransportEvent"
          meta={TransportEquipmentFieldMeta.PositioningTransportEvent} 
          value={value.PositioningTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Positioning Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.PositioningTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent ubl-QuarantineTransportEvent"
          meta={TransportEquipmentFieldMeta.QuarantineTransportEvent} 
          value={value.QuarantineTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Quarantine Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.QuarantineTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent ubl-DeliveryTransportEvent"
          meta={TransportEquipmentFieldMeta.DeliveryTransportEvent} 
          value={value.DeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Delivery Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.DeliveryTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent ubl-PickupTransportEvent"
          meta={TransportEquipmentFieldMeta.PickupTransportEvent} 
          value={value.PickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Pickup Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.PickupTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent ubl-HandlingTransportEvent"
          meta={TransportEquipmentFieldMeta.HandlingTransportEvent} 
          value={value.HandlingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Handling Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.HandlingTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent ubl-LoadingTransportEvent"
          meta={TransportEquipmentFieldMeta.LoadingTransportEvent} 
          value={value.LoadingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Loading Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.LoadingTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportEvent"
          meta={TransportEquipmentFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Transport Event"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.TransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportMeans ubl-ApplicableTransportMeans"
          meta={TransportEquipmentFieldMeta.ApplicableTransportMeans} 
          value={value.ApplicableTransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay
              key={key}
              label="Applicable Transport Means"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ApplicableTransportMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TradingTerms ubl-HaulageTradingTerms"
          meta={TransportEquipmentFieldMeta.HaulageTradingTerms} 
          value={value.HaulageTradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay
              key={key}
              label="Haulage Trading Terms"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.HaulageTradingTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-HazardousGoodsTransit"
          meta={TransportEquipmentFieldMeta.HazardousGoodsTransit} 
          value={value.HazardousGoodsTransit}
          itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
            <HazardousGoodsTransitDisplay
              key={key}
              label="Hazardous Goods Transit"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.HazardousGoodsTransit}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-TransportHandlingUnit ubl-PackagedTransportHandlingUnit"
          meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit} 
          value={value.PackagedTransportHandlingUnit}
          itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
            <TransportHandlingUnitDisplay
              key={key}
              label="Packaged Transport Handling Unit"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-AllowanceCharge ubl-ServiceAllowanceCharge"
          meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge} 
          value={value.ServiceAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Service Allowance Charge"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-AllowanceCharge ubl-FreightAllowanceCharge"
          meta={TransportEquipmentFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Freight Allowance Charge"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.FreightAllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-AttachedTransportEquipment"
          meta={TransportEquipmentFieldMeta.AttachedTransportEquipment} 
          value={value.AttachedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Attached Transport Equipment"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.AttachedTransportEquipment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Delivery"
          meta={TransportEquipmentFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Delivery}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Pickup"
          meta={TransportEquipmentFieldMeta.Pickup} 
          value={value.Pickup}
          itemDisplay={ (itemValue: Pickup, key: string | number) =>
            <PickupDisplay
              key={key}
              label="Pickup"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Pickup}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Despatch"
          meta={TransportEquipmentFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay
              key={key}
              label="Despatch"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Despatch}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-DocumentReference ubl-ShipmentDocumentReference"
          meta={TransportEquipmentFieldMeta.ShipmentDocumentReference} 
          value={value.ShipmentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Shipment Document Reference"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ShipmentDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-ContainedInTransportEquipment"
          meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment} 
          value={value.ContainedInTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Contained In Transport Equipment"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-Package"
          meta={TransportEquipmentFieldMeta.Package} 
          value={value.Package}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay
              key={key}
              label="Package"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.Package}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEquipment ubl-GoodsItem"
          meta={TransportEquipmentFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Goods Item"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.GoodsItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEquipment ubl-VerifiedGrossMass"
          meta={TransportEquipmentFieldMeta.VerifiedGrossMass} 
          value={value.VerifiedGrossMass}
          itemDisplay={ (itemValue: VerifiedGrossMass, key: string | number) =>
            <VerifiedGrossMassDisplay
              key={key}
              label="Verified Gross Mass"
              value={itemValue}
              meta={TransportEquipmentFieldMeta.VerifiedGrossMass}
            />
          }
        />
        </div>
    </div>
  )
}

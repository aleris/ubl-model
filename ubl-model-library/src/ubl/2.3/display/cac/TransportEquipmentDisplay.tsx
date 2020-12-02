import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportEquipment
  meta: FieldMeta<T>
}

export default function TransportEquipmentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportEquipmentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportEquipmentFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ReferencedConsignmentID} 
          value={value.ReferencedConsignmentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportEquipmentFieldMeta.ReferencedConsignmentID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.TransportEquipmentTypeCode} 
          value={value.TransportEquipmentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.TransportEquipmentTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ProviderTypeCode} 
          value={value.ProviderTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.ProviderTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.OwnerTypeCode} 
          value={value.OwnerTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.OwnerTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.SizeTypeCode} 
          value={value.SizeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.SizeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.DispositionCode} 
          value={value.DispositionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.DispositionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.FullnessIndicationCode} 
          value={value.FullnessIndicationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.FullnessIndicationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.RefrigerationOnIndicator} 
          value={value.RefrigerationOnIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.RefrigerationOnIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentFieldMeta.Information} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ReturnabilityIndicator} 
          value={value.ReturnabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.ReturnabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.LegalStatusIndicator} 
          value={value.LegalStatusIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.LegalStatusIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.AirFlowPercent} 
          value={value.AirFlowPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TransportEquipmentFieldMeta.AirFlowPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.HumidityPercent} 
          value={value.HumidityPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TransportEquipmentFieldMeta.HumidityPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator} 
          value={value.AnimalFoodApprovedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.HumanFoodApprovedIndicator} 
          value={value.HumanFoodApprovedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.HumanFoodApprovedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator} 
          value={value.DangerousGoodsApprovedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.RefrigeratedIndicator} 
          value={value.RefrigeratedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.RefrigeratedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Characteristics} 
          value={value.Characteristics}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentFieldMeta.Characteristics} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.DamageRemarks} 
          value={value.DamageRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentFieldMeta.DamageRemarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.SpecialTransportRequirements} 
          value={value.SpecialTransportRequirements}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEquipmentFieldMeta.SpecialTransportRequirements} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={TransportEquipmentFieldMeta.GrossWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={TransportEquipmentFieldMeta.GrossVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.TareWeightMeasure} 
          value={value.TareWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={TransportEquipmentFieldMeta.TareWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.TrackingDeviceCode} 
          value={value.TrackingDeviceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEquipmentFieldMeta.TrackingDeviceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.PowerIndicator} 
          value={value.PowerIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEquipmentFieldMeta.PowerIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportEquipmentFieldMeta.TraceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={TransportEquipmentFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.TransportEquipmentSeal} 
          value={value.TransportEquipmentSeal}
          itemDisplay={ (itemValue: TransportEquipmentSeal, key: string | number) =>
            <TransportEquipmentSealDisplay key={key} meta={TransportEquipmentFieldMeta.TransportEquipmentSeal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={TransportEquipmentFieldMeta.MinimumTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={TransportEquipmentFieldMeta.MaximumTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportEquipmentFieldMeta.ProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.LoadingProofParty} 
          value={value.LoadingProofParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportEquipmentFieldMeta.LoadingProofParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.SupplierParty} 
          value={value.SupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={TransportEquipmentFieldMeta.SupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.OwnerParty} 
          value={value.OwnerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportEquipmentFieldMeta.OwnerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.OperatingParty} 
          value={value.OperatingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportEquipmentFieldMeta.OperatingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.LoadingLocation} 
          value={value.LoadingLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportEquipmentFieldMeta.LoadingLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.UnloadingLocation} 
          value={value.UnloadingLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportEquipmentFieldMeta.UnloadingLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.StorageLocation} 
          value={value.StorageLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportEquipmentFieldMeta.StorageLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.PositioningTransportEvent} 
          value={value.PositioningTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.PositioningTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.QuarantineTransportEvent} 
          value={value.QuarantineTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.QuarantineTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.DeliveryTransportEvent} 
          value={value.DeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.DeliveryTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.PickupTransportEvent} 
          value={value.PickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.PickupTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.HandlingTransportEvent} 
          value={value.HandlingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.HandlingTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.LoadingTransportEvent} 
          value={value.LoadingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.LoadingTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportEquipmentFieldMeta.TransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ApplicableTransportMeans} 
          value={value.ApplicableTransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay key={key} meta={TransportEquipmentFieldMeta.ApplicableTransportMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.HaulageTradingTerms} 
          value={value.HaulageTradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay key={key} meta={TransportEquipmentFieldMeta.HaulageTradingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.HazardousGoodsTransit} 
          value={value.HazardousGoodsTransit}
          itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
            <HazardousGoodsTransitDisplay key={key} meta={TransportEquipmentFieldMeta.HazardousGoodsTransit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit} 
          value={value.PackagedTransportHandlingUnit}
          itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
            <TransportHandlingUnitDisplay key={key} meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge} 
          value={value.ServiceAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={TransportEquipmentFieldMeta.FreightAllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.AttachedTransportEquipment} 
          value={value.AttachedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={TransportEquipmentFieldMeta.AttachedTransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={TransportEquipmentFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Pickup} 
          value={value.Pickup}
          itemDisplay={ (itemValue: Pickup, key: string | number) =>
            <PickupDisplay key={key} meta={TransportEquipmentFieldMeta.Pickup} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay key={key} meta={TransportEquipmentFieldMeta.Despatch} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ShipmentDocumentReference} 
          value={value.ShipmentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportEquipmentFieldMeta.ShipmentDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment} 
          value={value.ContainedInTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.Package} 
          value={value.Package}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={TransportEquipmentFieldMeta.Package} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={TransportEquipmentFieldMeta.GoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEquipmentFieldMeta.VerifiedGrossMass} 
          value={value.VerifiedGrossMass}
          itemDisplay={ (itemValue: VerifiedGrossMass, key: string | number) =>
            <VerifiedGrossMassDisplay key={key} meta={TransportEquipmentFieldMeta.VerifiedGrossMass} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

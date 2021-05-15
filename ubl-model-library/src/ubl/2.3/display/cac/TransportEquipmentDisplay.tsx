import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportEquipment | undefined
  meta: FieldMeta<T>
}

export default function TransportEquipmentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportEquipment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportEquipmentFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportEquipmentFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Identifier ubl-ReferencedConsignmentID"
            label="Referenced Consignment Identifier"
            items={value.ReferencedConsignmentID}
            meta={TransportEquipmentFieldMeta.ReferencedConsignmentID} 
            itemDisplay={ (itemValue: Identifier, key: string | number) =>
              <IdentifierDisplay
                key={key}
                label="Referenced Consignment Identifier"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.ReferencedConsignmentID}
              />
            }
          />

          <CodeDisplay
            label="Transport Equipment Type Code"
            value={value.TransportEquipmentTypeCode?.[0]}
            meta={TransportEquipmentFieldMeta.TransportEquipmentTypeCode}
          />

          <CodeDisplay
            label="Provider Type Code"
            value={value.ProviderTypeCode?.[0]}
            meta={TransportEquipmentFieldMeta.ProviderTypeCode}
          />

          <CodeDisplay
            label="Owner Type Code"
            value={value.OwnerTypeCode?.[0]}
            meta={TransportEquipmentFieldMeta.OwnerTypeCode}
          />

          <CodeDisplay
            label="Size Type Code"
            value={value.SizeTypeCode?.[0]}
            meta={TransportEquipmentFieldMeta.SizeTypeCode}
          />

          <CodeDisplay
            label="Disposition Code"
            value={value.DispositionCode?.[0]}
            meta={TransportEquipmentFieldMeta.DispositionCode}
          />

          <CodeDisplay
            label="Fullness Indication Code"
            value={value.FullnessIndicationCode?.[0]}
            meta={TransportEquipmentFieldMeta.FullnessIndicationCode}
          />

          <IndicatorDisplay
            label="Refrigeration On Indicator"
            value={value.RefrigerationOnIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.RefrigerationOnIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Information"
            label="Information"
            items={value.Information}
            meta={TransportEquipmentFieldMeta.Information} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Information"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.Information}
              />
            }
          />

          <IndicatorDisplay
            label="Returnability Indicator"
            value={value.ReturnabilityIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.ReturnabilityIndicator}
          />

          <IndicatorDisplay
            label="Legal Status Indicator"
            value={value.LegalStatusIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.LegalStatusIndicator}
          />

          <NumericDisplay
            label="Air Flow Percent"
            value={value.AirFlowPercent?.[0]}
            meta={TransportEquipmentFieldMeta.AirFlowPercent}
          />

          <NumericDisplay
            label="Humidity Percent"
            value={value.HumidityPercent?.[0]}
            meta={TransportEquipmentFieldMeta.HumidityPercent}
          />

          <IndicatorDisplay
            label="Animal Food Approved Indicator"
            value={value.AnimalFoodApprovedIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator}
          />

          <IndicatorDisplay
            label="Human Food Approved Indicator"
            value={value.HumanFoodApprovedIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.HumanFoodApprovedIndicator}
          />

          <IndicatorDisplay
            label="Dangerous Goods Approved Indicator"
            value={value.DangerousGoodsApprovedIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator}
          />

          <IndicatorDisplay
            label="Refrigerated Indicator"
            value={value.RefrigeratedIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.RefrigeratedIndicator}
          />

          <TextDisplay
            label="Characteristics"
            value={value.Characteristics?.[0]}
            meta={TransportEquipmentFieldMeta.Characteristics}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-DamageRemarks"
            label="Damage Remarks"
            items={value.DamageRemarks}
            meta={TransportEquipmentFieldMeta.DamageRemarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Damage Remarks"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.DamageRemarks}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TransportEquipmentFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-SpecialTransportRequirements"
            label="Special Transport Requirements"
            items={value.SpecialTransportRequirements}
            meta={TransportEquipmentFieldMeta.SpecialTransportRequirements} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Special Transport Requirements"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.SpecialTransportRequirements}
              />
            }
          />

          <MeasureDisplay
            label="Gross Weight"
            value={value.GrossWeightMeasure?.[0]}
            meta={TransportEquipmentFieldMeta.GrossWeightMeasure}
          />

          <MeasureDisplay
            label="Gross Volume"
            value={value.GrossVolumeMeasure?.[0]}
            meta={TransportEquipmentFieldMeta.GrossVolumeMeasure}
          />

          <MeasureDisplay
            label="Tare Weight"
            value={value.TareWeightMeasure?.[0]}
            meta={TransportEquipmentFieldMeta.TareWeightMeasure}
          />

          <CodeDisplay
            label="Tracking Device Code"
            value={value.TrackingDeviceCode?.[0]}
            meta={TransportEquipmentFieldMeta.TrackingDeviceCode}
          />

          <IndicatorDisplay
            label="Power"
            value={value.PowerIndicator?.[0]}
            meta={TransportEquipmentFieldMeta.PowerIndicator}
          />

          <IdentifierDisplay
            label="Trace Identifier"
            value={value.TraceID?.[0]}
            meta={TransportEquipmentFieldMeta.TraceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={TransportEquipmentFieldMeta.MeasurementDimension} 
            itemDisplay={ (itemValue: Dimension, key: string | number) =>
              <DimensionDisplay
                key={key}
                label="Measurement Dimension"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.MeasurementDimension}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipmentSeal"
            label="Transport Equipment Seal"
            items={value.TransportEquipmentSeal}
            meta={TransportEquipmentFieldMeta.TransportEquipmentSeal} 
            itemDisplay={ (itemValue: TransportEquipmentSeal, key: string | number) =>
              <TransportEquipmentSealDisplay
                key={key}
                label="Transport Equipment Seal"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.TransportEquipmentSeal}
              />
            }
          />

          <TemperatureDisplay
            label="Minimum Temperature"
            value={value.MinimumTemperature?.[0]}
            meta={TransportEquipmentFieldMeta.MinimumTemperature}
          />

          <TemperatureDisplay
            label="Maximum Temperature"
            value={value.MaximumTemperature?.[0]}
            meta={TransportEquipmentFieldMeta.MaximumTemperature}
          />

          <PartyDisplay
            label="Provider Party"
            value={value.ProviderParty?.[0]}
            meta={TransportEquipmentFieldMeta.ProviderParty}
          />

          <PartyDisplay
            label="Loading Proof Party"
            value={value.LoadingProofParty?.[0]}
            meta={TransportEquipmentFieldMeta.LoadingProofParty}
          />

          <SupplierPartyDisplay
            label="Supplier Party"
            value={value.SupplierParty?.[0]}
            meta={TransportEquipmentFieldMeta.SupplierParty}
          />

          <PartyDisplay
            label="Owner Party"
            value={value.OwnerParty?.[0]}
            meta={TransportEquipmentFieldMeta.OwnerParty}
          />

          <PartyDisplay
            label="Operating Party"
            value={value.OperatingParty?.[0]}
            meta={TransportEquipmentFieldMeta.OperatingParty}
          />

          <LocationDisplay
            label="Loading Location"
            value={value.LoadingLocation?.[0]}
            meta={TransportEquipmentFieldMeta.LoadingLocation}
          />

          <LocationDisplay
            label="Unloading Location"
            value={value.UnloadingLocation?.[0]}
            meta={TransportEquipmentFieldMeta.UnloadingLocation}
          />

          <LocationDisplay
            label="Storage Location"
            value={value.StorageLocation?.[0]}
            meta={TransportEquipmentFieldMeta.StorageLocation}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-PositioningTransportEvent"
            label="Positioning Transport Event"
            items={value.PositioningTransportEvent}
            meta={TransportEquipmentFieldMeta.PositioningTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Positioning Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.PositioningTransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-QuarantineTransportEvent"
            label="Quarantine Transport Event"
            items={value.QuarantineTransportEvent}
            meta={TransportEquipmentFieldMeta.QuarantineTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Quarantine Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.QuarantineTransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-DeliveryTransportEvent"
            label="Delivery Transport Event"
            items={value.DeliveryTransportEvent}
            meta={TransportEquipmentFieldMeta.DeliveryTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Delivery Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.DeliveryTransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-PickupTransportEvent"
            label="Pickup Transport Event"
            items={value.PickupTransportEvent}
            meta={TransportEquipmentFieldMeta.PickupTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Pickup Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.PickupTransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-HandlingTransportEvent"
            label="Handling Transport Event"
            items={value.HandlingTransportEvent}
            meta={TransportEquipmentFieldMeta.HandlingTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Handling Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.HandlingTransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-LoadingTransportEvent"
            label="Loading Transport Event"
            items={value.LoadingTransportEvent}
            meta={TransportEquipmentFieldMeta.LoadingTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Loading Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.LoadingTransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent"
            label="Transport Event"
            items={value.TransportEvent}
            meta={TransportEquipmentFieldMeta.TransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Transport Event"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.TransportEvent}
              />
            }
          />

          <TransportMeansDisplay
            label="Applicable Transport Means"
            value={value.ApplicableTransportMeans?.[0]}
            meta={TransportEquipmentFieldMeta.ApplicableTransportMeans}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TradingTerms ubl-HaulageTradingTerms"
            label="Haulage Trading Terms"
            items={value.HaulageTradingTerms}
            meta={TransportEquipmentFieldMeta.HaulageTradingTerms} 
            itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
              <TradingTermsDisplay
                key={key}
                label="Haulage Trading Terms"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.HaulageTradingTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-HazardousGoodsTransit"
            label="Hazardous Goods Transit"
            items={value.HazardousGoodsTransit}
            meta={TransportEquipmentFieldMeta.HazardousGoodsTransit} 
            itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
              <HazardousGoodsTransitDisplay
                key={key}
                label="Hazardous Goods Transit"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.HazardousGoodsTransit}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportHandlingUnit ubl-PackagedTransportHandlingUnit"
            label="Packaged Transport Handling Unit"
            items={value.PackagedTransportHandlingUnit}
            meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit} 
            itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
              <TransportHandlingUnitDisplay
                key={key}
                label="Packaged Transport Handling Unit"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-ServiceAllowanceCharge"
            label="Service Allowance Charge"
            items={value.ServiceAllowanceCharge}
            meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Service Allowance Charge"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-FreightAllowanceCharge"
            label="Freight Allowance Charge"
            items={value.FreightAllowanceCharge}
            meta={TransportEquipmentFieldMeta.FreightAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Freight Allowance Charge"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.FreightAllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment ubl-AttachedTransportEquipment"
            label="Attached Transport Equipment"
            items={value.AttachedTransportEquipment}
            meta={TransportEquipmentFieldMeta.AttachedTransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Attached Transport Equipment"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.AttachedTransportEquipment}
              />
            }
          />

          <DeliveryDisplay
            label="Delivery"
            value={value.Delivery?.[0]}
            meta={TransportEquipmentFieldMeta.Delivery}
          />

          <PickupDisplay
            label="Pickup"
            value={value.Pickup?.[0]}
            meta={TransportEquipmentFieldMeta.Pickup}
          />

          <DespatchDisplay
            label="Despatch"
            value={value.Despatch?.[0]}
            meta={TransportEquipmentFieldMeta.Despatch}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ShipmentDocumentReference"
            label="Shipment Document Reference"
            items={value.ShipmentDocumentReference}
            meta={TransportEquipmentFieldMeta.ShipmentDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Shipment Document Reference"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.ShipmentDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment ubl-ContainedInTransportEquipment"
            label="Contained In Transport Equipment"
            items={value.ContainedInTransportEquipment}
            meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Contained In Transport Equipment"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Package"
            label="Package"
            items={value.Package}
            meta={TransportEquipmentFieldMeta.Package} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Package"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.Package}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsItem"
            label="Goods Item"
            items={value.GoodsItem}
            meta={TransportEquipmentFieldMeta.GoodsItem} 
            itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
              <GoodsItemDisplay
                key={key}
                label="Goods Item"
                value={itemValue}
                meta={TransportEquipmentFieldMeta.GoodsItem}
              />
            }
          />

          <VerifiedGrossMassDisplay
            label="Verified Gross Mass"
            value={value.VerifiedGrossMass?.[0]}
            meta={TransportEquipmentFieldMeta.VerifiedGrossMass}
          />
        </div>
    </div>
  )
}

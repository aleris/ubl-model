import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItem } from  '../../model/cac/GoodsItem'
import { GoodsItemFieldMeta } from  '../../meta/cac/GoodsItemMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
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
import GoodsItemContainerDisplay from './GoodsItemContainerDisplay'
import { GoodsItemContainer } from '../../model/cac/GoodsItemContainer'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import InvoiceLineDisplay from './InvoiceLineDisplay'
import { InvoiceLine } from '../../model/cac/InvoiceLine'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import PickupDisplay from './PickupDisplay'
import { Pickup } from '../../model/cac/Pickup'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: GoodsItem | undefined
  meta: FieldMeta<T>
}

export default function GoodsItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-GoodsItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsItemFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsItemFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Sequence Number"
            value={value.SequenceNumberID?.[0]}
            meta={GoodsItemFieldMeta.SequenceNumberID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={GoodsItemFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={GoodsItemFieldMeta.Description}
              />
            }
          />

          <IndicatorDisplay
            label="Hazardous Risk Indicator"
            value={value.HazardousRiskIndicator?.[0]}
            meta={GoodsItemFieldMeta.HazardousRiskIndicator}
          />

          <AmountDisplay
            label="Declared Customs Value"
            value={value.DeclaredCustomsValueAmount?.[0]}
            meta={GoodsItemFieldMeta.DeclaredCustomsValueAmount}
          />

          <AmountDisplay
            label="Declared For Carriage Value"
            value={value.DeclaredForCarriageValueAmount?.[0]}
            meta={GoodsItemFieldMeta.DeclaredForCarriageValueAmount}
          />

          <AmountDisplay
            label="Declared Statistics Value"
            value={value.DeclaredStatisticsValueAmount?.[0]}
            meta={GoodsItemFieldMeta.DeclaredStatisticsValueAmount}
          />

          <AmountDisplay
            label="Free On Board Value"
            value={value.FreeOnBoardValueAmount?.[0]}
            meta={GoodsItemFieldMeta.FreeOnBoardValueAmount}
          />

          <AmountDisplay
            label="Insurance Value"
            value={value.InsuranceValueAmount?.[0]}
            meta={GoodsItemFieldMeta.InsuranceValueAmount}
          />

          <AmountDisplay
            label="Value"
            value={value.ValueAmount?.[0]}
            meta={GoodsItemFieldMeta.ValueAmount}
          />

          <MeasureDisplay
            label="Gross Weight"
            value={value.GrossWeightMeasure?.[0]}
            meta={GoodsItemFieldMeta.GrossWeightMeasure}
          />

          <MeasureDisplay
            label="Net Weight"
            value={value.NetWeightMeasure?.[0]}
            meta={GoodsItemFieldMeta.NetWeightMeasure}
          />

          <MeasureDisplay
            label="Net Net Weight"
            value={value.NetNetWeightMeasure?.[0]}
            meta={GoodsItemFieldMeta.NetNetWeightMeasure}
          />

          <MeasureDisplay
            label="Chargeable Weight"
            value={value.ChargeableWeightMeasure?.[0]}
            meta={GoodsItemFieldMeta.ChargeableWeightMeasure}
          />

          <MeasureDisplay
            label="Gross Volume"
            value={value.GrossVolumeMeasure?.[0]}
            meta={GoodsItemFieldMeta.GrossVolumeMeasure}
          />

          <MeasureDisplay
            label="Net Volume"
            value={value.NetVolumeMeasure?.[0]}
            meta={GoodsItemFieldMeta.NetVolumeMeasure}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={GoodsItemFieldMeta.Quantity}
          />

          <CodeDisplay
            label="Preference Criterion Code"
            value={value.PreferenceCriterionCode?.[0]}
            meta={GoodsItemFieldMeta.PreferenceCriterionCode}
          />

          <IdentifierDisplay
            label="Required Customs Identifier"
            value={value.RequiredCustomsID?.[0]}
            meta={GoodsItemFieldMeta.RequiredCustomsID}
          />

          <CodeDisplay
            label="Customs Status Code"
            value={value.CustomsStatusCode?.[0]}
            meta={GoodsItemFieldMeta.CustomsStatusCode}
          />

          <QuantityDisplay
            label="Customs Tariff Quantity"
            value={value.CustomsTariffQuantity?.[0]}
            meta={GoodsItemFieldMeta.CustomsTariffQuantity}
          />

          <IndicatorDisplay
            label="Customs Import Classified Indicator"
            value={value.CustomsImportClassifiedIndicator?.[0]}
            meta={GoodsItemFieldMeta.CustomsImportClassifiedIndicator}
          />

          <QuantityDisplay
            label="Chargeable Quantity"
            value={value.ChargeableQuantity?.[0]}
            meta={GoodsItemFieldMeta.ChargeableQuantity}
          />

          <QuantityDisplay
            label="Returnable Quantity"
            value={value.ReturnableQuantity?.[0]}
            meta={GoodsItemFieldMeta.ReturnableQuantity}
          />

          <IdentifierDisplay
            label="Trace Identifier"
            value={value.TraceID?.[0]}
            meta={GoodsItemFieldMeta.TraceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Item"
            label="Item"
            items={value.Item}
            meta={GoodsItemFieldMeta.Item} 
            itemDisplay={ (itemValue: Item, key: string | number) =>
              <ItemDisplay
                key={key}
                label="Item"
                value={itemValue}
                meta={GoodsItemFieldMeta.Item}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsItemContainer"
            label="Goods Item Container"
            items={value.GoodsItemContainer}
            meta={GoodsItemFieldMeta.GoodsItemContainer} 
            itemDisplay={ (itemValue: GoodsItemContainer, key: string | number) =>
              <GoodsItemContainerDisplay
                key={key}
                label="Goods Item Container"
                value={itemValue}
                meta={GoodsItemFieldMeta.GoodsItemContainer}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-FreightAllowanceCharge"
            label="Freight Allowance Charge"
            items={value.FreightAllowanceCharge}
            meta={GoodsItemFieldMeta.FreightAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Freight Allowance Charge"
                value={itemValue}
                meta={GoodsItemFieldMeta.FreightAllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-InvoiceLine"
            label="Invoice Line"
            items={value.InvoiceLine}
            meta={GoodsItemFieldMeta.InvoiceLine} 
            itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
              <InvoiceLineDisplay
                key={key}
                label="Invoice Line"
                value={itemValue}
                meta={GoodsItemFieldMeta.InvoiceLine}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Temperature"
            label="Temperature"
            items={value.Temperature}
            meta={GoodsItemFieldMeta.Temperature} 
            itemDisplay={ (itemValue: Temperature, key: string | number) =>
              <TemperatureDisplay
                key={key}
                label="Temperature"
                value={itemValue}
                meta={GoodsItemFieldMeta.Temperature}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsItem ubl-ContainedGoodsItem"
            label="Contained Goods Item"
            items={value.ContainedGoodsItem}
            meta={GoodsItemFieldMeta.ContainedGoodsItem} 
            itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
              <GoodsItemDisplay
                key={key}
                label="Contained Goods Item"
                value={itemValue}
                meta={GoodsItemFieldMeta.ContainedGoodsItem}
              />
            }
          />

          <AddressDisplay
            label="Origin Address"
            value={value.OriginAddress?.[0]}
            meta={GoodsItemFieldMeta.OriginAddress}
          />

          <DeliveryDisplay
            label="Delivery"
            value={value.Delivery?.[0]}
            meta={GoodsItemFieldMeta.Delivery}
          />

          <PickupDisplay
            label="Pickup"
            value={value.Pickup?.[0]}
            meta={GoodsItemFieldMeta.Pickup}
          />

          <DespatchDisplay
            label="Despatch"
            value={value.Despatch?.[0]}
            meta={GoodsItemFieldMeta.Despatch}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={GoodsItemFieldMeta.MeasurementDimension} 
            itemDisplay={ (itemValue: Dimension, key: string | number) =>
              <DimensionDisplay
                key={key}
                label="Measurement Dimension"
                value={itemValue}
                meta={GoodsItemFieldMeta.MeasurementDimension}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Package ubl-ContainingPackage"
            label="Containing Package"
            items={value.ContainingPackage}
            meta={GoodsItemFieldMeta.ContainingPackage} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Containing Package"
                value={itemValue}
                meta={GoodsItemFieldMeta.ContainingPackage}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Shipment Document Reference"
            value={value.ShipmentDocumentReference?.[0]}
            meta={GoodsItemFieldMeta.ShipmentDocumentReference}
          />

          <TemperatureDisplay
            label="Minimum Temperature"
            value={value.MinimumTemperature?.[0]}
            meta={GoodsItemFieldMeta.MinimumTemperature}
          />

          <TemperatureDisplay
            label="Maximum Temperature"
            value={value.MaximumTemperature?.[0]}
            meta={GoodsItemFieldMeta.MaximumTemperature}
          />
        </div>
    </div>
  )
}

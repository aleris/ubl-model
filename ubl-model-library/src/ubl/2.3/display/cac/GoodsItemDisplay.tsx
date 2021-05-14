import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: GoodsItem
  meta: FieldMeta<T>
}

export default function GoodsItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-GoodsItem ubl-GoodsItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsItem ubl-UBLExtensions"
          meta={GoodsItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Identifier ubl-ID"
          meta={GoodsItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsItemFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Identifier ubl-SequenceNumberID"
          meta={GoodsItemFieldMeta.SequenceNumberID} 
          value={value.SequenceNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sequence Number"
              value={itemValue}
              meta={GoodsItemFieldMeta.SequenceNumberID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Text ubl-Description"
          meta={GoodsItemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={GoodsItemFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Indicator ubl-HazardousRiskIndicator"
          meta={GoodsItemFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Hazardous Risk Indicator"
              value={itemValue}
              meta={GoodsItemFieldMeta.HazardousRiskIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Amount ubl-DeclaredCustomsValueAmount"
          meta={GoodsItemFieldMeta.DeclaredCustomsValueAmount} 
          value={value.DeclaredCustomsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Customs Value"
              value={itemValue}
              meta={GoodsItemFieldMeta.DeclaredCustomsValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Amount ubl-DeclaredForCarriageValueAmount"
          meta={GoodsItemFieldMeta.DeclaredForCarriageValueAmount} 
          value={value.DeclaredForCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared For Carriage Value"
              value={itemValue}
              meta={GoodsItemFieldMeta.DeclaredForCarriageValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Amount ubl-DeclaredStatisticsValueAmount"
          meta={GoodsItemFieldMeta.DeclaredStatisticsValueAmount} 
          value={value.DeclaredStatisticsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Statistics Value"
              value={itemValue}
              meta={GoodsItemFieldMeta.DeclaredStatisticsValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Amount ubl-FreeOnBoardValueAmount"
          meta={GoodsItemFieldMeta.FreeOnBoardValueAmount} 
          value={value.FreeOnBoardValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Free On Board Value"
              value={itemValue}
              meta={GoodsItemFieldMeta.FreeOnBoardValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Amount ubl-InsuranceValueAmount"
          meta={GoodsItemFieldMeta.InsuranceValueAmount} 
          value={value.InsuranceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Insurance Value"
              value={itemValue}
              meta={GoodsItemFieldMeta.InsuranceValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Amount ubl-ValueAmount"
          meta={GoodsItemFieldMeta.ValueAmount} 
          value={value.ValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={GoodsItemFieldMeta.ValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Measure ubl-GrossWeightMeasure"
          meta={GoodsItemFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Weight"
              value={itemValue}
              meta={GoodsItemFieldMeta.GrossWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Measure ubl-NetWeightMeasure"
          meta={GoodsItemFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Weight"
              value={itemValue}
              meta={GoodsItemFieldMeta.NetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Measure ubl-NetNetWeightMeasure"
          meta={GoodsItemFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Net Weight"
              value={itemValue}
              meta={GoodsItemFieldMeta.NetNetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Measure ubl-ChargeableWeightMeasure"
          meta={GoodsItemFieldMeta.ChargeableWeightMeasure} 
          value={value.ChargeableWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Chargeable Weight"
              value={itemValue}
              meta={GoodsItemFieldMeta.ChargeableWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Measure ubl-GrossVolumeMeasure"
          meta={GoodsItemFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Volume"
              value={itemValue}
              meta={GoodsItemFieldMeta.GrossVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Measure ubl-NetVolumeMeasure"
          meta={GoodsItemFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Volume"
              value={itemValue}
              meta={GoodsItemFieldMeta.NetVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Quantity"
          meta={GoodsItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={GoodsItemFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Code ubl-PreferenceCriterionCode"
          meta={GoodsItemFieldMeta.PreferenceCriterionCode} 
          value={value.PreferenceCriterionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Preference Criterion Code"
              value={itemValue}
              meta={GoodsItemFieldMeta.PreferenceCriterionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Identifier ubl-RequiredCustomsID"
          meta={GoodsItemFieldMeta.RequiredCustomsID} 
          value={value.RequiredCustomsID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Required Customs Identifier"
              value={itemValue}
              meta={GoodsItemFieldMeta.RequiredCustomsID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Code ubl-CustomsStatusCode"
          meta={GoodsItemFieldMeta.CustomsStatusCode} 
          value={value.CustomsStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Customs Status Code"
              value={itemValue}
              meta={GoodsItemFieldMeta.CustomsStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Quantity ubl-CustomsTariffQuantity"
          meta={GoodsItemFieldMeta.CustomsTariffQuantity} 
          value={value.CustomsTariffQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Customs Tariff Quantity"
              value={itemValue}
              meta={GoodsItemFieldMeta.CustomsTariffQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Indicator ubl-CustomsImportClassifiedIndicator"
          meta={GoodsItemFieldMeta.CustomsImportClassifiedIndicator} 
          value={value.CustomsImportClassifiedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Customs Import Classified Indicator"
              value={itemValue}
              meta={GoodsItemFieldMeta.CustomsImportClassifiedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Quantity ubl-ChargeableQuantity"
          meta={GoodsItemFieldMeta.ChargeableQuantity} 
          value={value.ChargeableQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Chargeable Quantity"
              value={itemValue}
              meta={GoodsItemFieldMeta.ChargeableQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Quantity ubl-ReturnableQuantity"
          meta={GoodsItemFieldMeta.ReturnableQuantity} 
          value={value.ReturnableQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Returnable Quantity"
              value={itemValue}
              meta={GoodsItemFieldMeta.ReturnableQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItem ubl-Identifier ubl-TraceID"
          meta={GoodsItemFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Trace Identifier"
              value={itemValue}
              meta={GoodsItemFieldMeta.TraceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-Item"
          meta={GoodsItemFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={GoodsItemFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-GoodsItemContainer"
          meta={GoodsItemFieldMeta.GoodsItemContainer} 
          value={value.GoodsItemContainer}
          itemDisplay={ (itemValue: GoodsItemContainer, key: string | number) =>
            <GoodsItemContainerDisplay
              key={key}
              label="Goods Item Container"
              value={itemValue}
              meta={GoodsItemFieldMeta.GoodsItemContainer}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-AllowanceCharge ubl-FreightAllowanceCharge"
          meta={GoodsItemFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Freight Allowance Charge"
              value={itemValue}
              meta={GoodsItemFieldMeta.FreightAllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-InvoiceLine"
          meta={GoodsItemFieldMeta.InvoiceLine} 
          value={value.InvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay
              key={key}
              label="Invoice Line"
              value={itemValue}
              meta={GoodsItemFieldMeta.InvoiceLine}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-Temperature"
          meta={GoodsItemFieldMeta.Temperature} 
          value={value.Temperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Temperature"
              value={itemValue}
              meta={GoodsItemFieldMeta.Temperature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-ContainedGoodsItem"
          meta={GoodsItemFieldMeta.ContainedGoodsItem} 
          value={value.ContainedGoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Contained Goods Item"
              value={itemValue}
              meta={GoodsItemFieldMeta.ContainedGoodsItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-Address ubl-OriginAddress"
          meta={GoodsItemFieldMeta.OriginAddress} 
          value={value.OriginAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Origin Address"
              value={itemValue}
              meta={GoodsItemFieldMeta.OriginAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-Delivery"
          meta={GoodsItemFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={GoodsItemFieldMeta.Delivery}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-Pickup"
          meta={GoodsItemFieldMeta.Pickup} 
          value={value.Pickup}
          itemDisplay={ (itemValue: Pickup, key: string | number) =>
            <PickupDisplay
              key={key}
              label="Pickup"
              value={itemValue}
              meta={GoodsItemFieldMeta.Pickup}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-Despatch"
          meta={GoodsItemFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay
              key={key}
              label="Despatch"
              value={itemValue}
              meta={GoodsItemFieldMeta.Despatch}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-Dimension ubl-MeasurementDimension"
          meta={GoodsItemFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Measurement Dimension"
              value={itemValue}
              meta={GoodsItemFieldMeta.MeasurementDimension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItem ubl-Package ubl-ContainingPackage"
          meta={GoodsItemFieldMeta.ContainingPackage} 
          value={value.ContainingPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay
              key={key}
              label="Containing Package"
              value={itemValue}
              meta={GoodsItemFieldMeta.ContainingPackage}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-DocumentReference ubl-ShipmentDocumentReference"
          meta={GoodsItemFieldMeta.ShipmentDocumentReference} 
          value={value.ShipmentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Shipment Document Reference"
              value={itemValue}
              meta={GoodsItemFieldMeta.ShipmentDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-Temperature ubl-MinimumTemperature"
          meta={GoodsItemFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Minimum Temperature"
              value={itemValue}
              meta={GoodsItemFieldMeta.MinimumTemperature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItem ubl-Temperature ubl-MaximumTemperature"
          meta={GoodsItemFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Maximum Temperature"
              value={itemValue}
              meta={GoodsItemFieldMeta.MaximumTemperature}
            />
          }
        />
        </div>
    </div>
  )
}

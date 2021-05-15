import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Package } from  '../../model/cac/Package'
import { PackageFieldMeta } from  '../../meta/cac/PackageMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DeliveryUnitDisplay from './DeliveryUnitDisplay'
import { DeliveryUnit } from '../../model/cac/DeliveryUnit'
import DespatchDisplay from './DespatchDisplay'
import { Despatch } from '../../model/cac/Despatch'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import GoodsItemDisplay from './GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PickupDisplay from './PickupDisplay'
import { Pickup } from '../../model/cac/Pickup'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TransportEquipmentDisplay from './TransportEquipmentDisplay'
import { TransportEquipment } from '../../model/cac/TransportEquipment'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Package | undefined
  meta: FieldMeta<T>
}

export default function PackageDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Package">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PackageFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PackageFieldMeta.ID}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={PackageFieldMeta.Quantity}
          />

          <IndicatorDisplay
            label="Returnable Material Indicator"
            value={value.ReturnableMaterialIndicator?.[0]}
            meta={PackageFieldMeta.ReturnableMaterialIndicator}
          />

          <CodeDisplay
            label="Package Level Code"
            value={value.PackageLevelCode?.[0]}
            meta={PackageFieldMeta.PackageLevelCode}
          />

          <CodeDisplay
            label="Packaging Type Code"
            value={value.PackagingTypeCode?.[0]}
            meta={PackageFieldMeta.PackagingTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PackingMaterial"
            label="Packing Material"
            items={value.PackingMaterial}
            meta={PackageFieldMeta.PackingMaterial} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Packing Material"
                value={itemValue}
                meta={PackageFieldMeta.PackingMaterial}
              />
            }
          />

          <IdentifierDisplay
            label="Trace Identifier"
            value={value.TraceID?.[0]}
            meta={PackageFieldMeta.TraceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Package ubl-ContainedPackage"
            label="Contained Package"
            items={value.ContainedPackage}
            meta={PackageFieldMeta.ContainedPackage} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Contained Package"
                value={itemValue}
                meta={PackageFieldMeta.ContainedPackage}
              />
            }
          />

          <TransportEquipmentDisplay
            label="Containing Transport Equipment"
            value={value.ContainingTransportEquipment?.[0]}
            meta={PackageFieldMeta.ContainingTransportEquipment}
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsItem"
            label="Goods Item"
            items={value.GoodsItem}
            meta={PackageFieldMeta.GoodsItem} 
            itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
              <GoodsItemDisplay
                key={key}
                label="Goods Item"
                value={itemValue}
                meta={PackageFieldMeta.GoodsItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={PackageFieldMeta.MeasurementDimension} 
            itemDisplay={ (itemValue: Dimension, key: string | number) =>
              <DimensionDisplay
                key={key}
                label="Measurement Dimension"
                value={itemValue}
                meta={PackageFieldMeta.MeasurementDimension}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DeliveryUnit"
            label="Delivery Unit"
            items={value.DeliveryUnit}
            meta={PackageFieldMeta.DeliveryUnit} 
            itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
              <DeliveryUnitDisplay
                key={key}
                label="Delivery Unit"
                value={itemValue}
                meta={PackageFieldMeta.DeliveryUnit}
              />
            }
          />

          <DeliveryDisplay
            label="Delivery"
            value={value.Delivery?.[0]}
            meta={PackageFieldMeta.Delivery}
          />

          <PickupDisplay
            label="Pickup"
            value={value.Pickup?.[0]}
            meta={PackageFieldMeta.Pickup}
          />

          <DespatchDisplay
            label="Despatch"
            value={value.Despatch?.[0]}
            meta={PackageFieldMeta.Despatch}
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Package
  meta: FieldMeta<T>
}

export default function PackageDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Package ubl-PackageType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Package ubl-UBLExtensions"
          meta={PackageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PackageFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Package ubl-Identifier ubl-ID"
          meta={PackageFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PackageFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Package ubl-Quantity"
          meta={PackageFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={PackageFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Package ubl-Indicator ubl-ReturnableMaterialIndicator"
          meta={PackageFieldMeta.ReturnableMaterialIndicator} 
          value={value.ReturnableMaterialIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Returnable Material Indicator"
              value={itemValue}
              meta={PackageFieldMeta.ReturnableMaterialIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Package ubl-Code ubl-PackageLevelCode"
          meta={PackageFieldMeta.PackageLevelCode} 
          value={value.PackageLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Package Level Code"
              value={itemValue}
              meta={PackageFieldMeta.PackageLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Package ubl-Code ubl-PackagingTypeCode"
          meta={PackageFieldMeta.PackagingTypeCode} 
          value={value.PackagingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Packaging Type Code"
              value={itemValue}
              meta={PackageFieldMeta.PackagingTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Package ubl-Text ubl-PackingMaterial"
          meta={PackageFieldMeta.PackingMaterial} 
          value={value.PackingMaterial}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Packing Material"
              value={itemValue}
              meta={PackageFieldMeta.PackingMaterial}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Package ubl-Identifier ubl-TraceID"
          meta={PackageFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Trace Identifier"
              value={itemValue}
              meta={PackageFieldMeta.TraceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Package ubl-ContainedPackage"
          meta={PackageFieldMeta.ContainedPackage} 
          value={value.ContainedPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay
              key={key}
              label="Contained Package"
              value={itemValue}
              meta={PackageFieldMeta.ContainedPackage}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Package ubl-TransportEquipment ubl-ContainingTransportEquipment"
          meta={PackageFieldMeta.ContainingTransportEquipment} 
          value={value.ContainingTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Containing Transport Equipment"
              value={itemValue}
              meta={PackageFieldMeta.ContainingTransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Package ubl-GoodsItem"
          meta={PackageFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Goods Item"
              value={itemValue}
              meta={PackageFieldMeta.GoodsItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Package ubl-Dimension ubl-MeasurementDimension"
          meta={PackageFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Measurement Dimension"
              value={itemValue}
              meta={PackageFieldMeta.MeasurementDimension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Package ubl-DeliveryUnit"
          meta={PackageFieldMeta.DeliveryUnit} 
          value={value.DeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay
              key={key}
              label="Delivery Unit"
              value={itemValue}
              meta={PackageFieldMeta.DeliveryUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Package ubl-Delivery"
          meta={PackageFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={PackageFieldMeta.Delivery}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Package ubl-Pickup"
          meta={PackageFieldMeta.Pickup} 
          value={value.Pickup}
          itemDisplay={ (itemValue: Pickup, key: string | number) =>
            <PickupDisplay
              key={key}
              label="Pickup"
              value={itemValue}
              meta={PackageFieldMeta.Pickup}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Package ubl-Despatch"
          meta={PackageFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay
              key={key}
              label="Despatch"
              value={itemValue}
              meta={PackageFieldMeta.Despatch}
            />
          }
        />
        </div>
    </div>
  )
}

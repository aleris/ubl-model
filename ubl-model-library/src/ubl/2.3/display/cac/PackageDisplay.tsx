import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Package
  meta: FieldMeta<T>
}

export default function PackageDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PackageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PackageFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackageFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={PackageFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.ReturnableMaterialIndicator} 
          value={value.ReturnableMaterialIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PackageFieldMeta.ReturnableMaterialIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.PackageLevelCode} 
          value={value.PackageLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PackageFieldMeta.PackageLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.PackagingTypeCode} 
          value={value.PackagingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PackageFieldMeta.PackagingTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.PackingMaterial} 
          value={value.PackingMaterial}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PackageFieldMeta.PackingMaterial} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackageFieldMeta.TraceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.ContainedPackage} 
          value={value.ContainedPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={PackageFieldMeta.ContainedPackage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.ContainingTransportEquipment} 
          value={value.ContainingTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={PackageFieldMeta.ContainingTransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={PackageFieldMeta.GoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={PackageFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.DeliveryUnit} 
          value={value.DeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay key={key} meta={PackageFieldMeta.DeliveryUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={PackageFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.Pickup} 
          value={value.Pickup}
          itemDisplay={ (itemValue: Pickup, key: string | number) =>
            <PickupDisplay key={key} meta={PackageFieldMeta.Pickup} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackageFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay key={key} meta={PackageFieldMeta.Despatch} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

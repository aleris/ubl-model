import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderedShipment } from  '../../model/cac/OrderedShipment'
import { OrderedShipmentFieldMeta } from  '../../meta/cac/OrderedShipmentMeta'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: OrderedShipment
  meta: FieldMeta<T>
}

export default function OrderedShipmentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderedShipmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderedShipmentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderedShipmentFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={OrderedShipmentFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderedShipmentFieldMeta.Package} 
          value={value.Package}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={OrderedShipmentFieldMeta.Package} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

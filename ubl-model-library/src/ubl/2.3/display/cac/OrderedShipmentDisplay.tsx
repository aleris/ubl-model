import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderedShipment } from  '../../model/cac/OrderedShipment'
import { OrderedShipmentFieldMeta } from  '../../meta/cac/OrderedShipmentMeta'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: OrderedShipment | undefined
  meta: FieldMeta<T>
}

export default function OrderedShipmentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-OrderedShipment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderedShipmentFieldMeta.UBLExtensions}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={OrderedShipmentFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Package"
            label="Package"
            items={value.Package}
            meta={OrderedShipmentFieldMeta.Package} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Package"
                value={itemValue}
                meta={OrderedShipmentFieldMeta.Package}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OrderedShipment
  meta: FieldMeta<T>
}

export default function OrderedShipmentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-OrderedShipment ubl-OrderedShipmentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderedShipment ubl-UBLExtensions"
          meta={OrderedShipmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderedShipmentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderedShipment ubl-Shipment"
          meta={OrderedShipmentFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={OrderedShipmentFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderedShipment ubl-Package"
          meta={OrderedShipmentFieldMeta.Package} 
          value={value.Package}
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

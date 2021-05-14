import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemContainer } from  '../../model/cac/GoodsItemContainer'
import { GoodsItemContainerFieldMeta } from  '../../meta/cac/GoodsItemContainerMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TransportEquipmentDisplay from './TransportEquipmentDisplay'
import { TransportEquipment } from '../../model/cac/TransportEquipment'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: GoodsItemContainer
  meta: FieldMeta<T>
}

export default function GoodsItemContainerDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-GoodsItemContainer ubl-GoodsItemContainerType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsItemContainer ubl-UBLExtensions"
          meta={GoodsItemContainerFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsItemContainerFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemContainer ubl-Identifier ubl-ID"
          meta={GoodsItemContainerFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsItemContainerFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemContainer ubl-Quantity"
          meta={GoodsItemContainerFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={GoodsItemContainerFieldMeta.Quantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemContainer ubl-TransportEquipment"
          meta={GoodsItemContainerFieldMeta.TransportEquipment} 
          value={value.TransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Transport Equipment"
              value={itemValue}
              meta={GoodsItemContainerFieldMeta.TransportEquipment}
            />
          }
        />
        </div>
    </div>
  )
}

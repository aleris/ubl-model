import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: GoodsItemContainer | undefined
  meta: FieldMeta<T>
}

export default function GoodsItemContainerDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-GoodsItemContainer">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsItemContainerFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsItemContainerFieldMeta.ID}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={GoodsItemContainerFieldMeta.Quantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment"
            label="Transport Equipment"
            items={value.TransportEquipment}
            meta={GoodsItemContainerFieldMeta.TransportEquipment} 
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

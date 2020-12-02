import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: GoodsItemContainer
  meta: FieldMeta<T>
}

export default function GoodsItemContainerDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsItemContainerFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsItemContainerFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemContainerFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemContainerFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemContainerFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={GoodsItemContainerFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemContainerFieldMeta.TransportEquipment} 
          value={value.TransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={GoodsItemContainerFieldMeta.TransportEquipment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

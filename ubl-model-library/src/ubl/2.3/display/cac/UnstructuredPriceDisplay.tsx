import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnstructuredPrice } from  '../../model/cac/UnstructuredPrice'
import { UnstructuredPriceFieldMeta } from  '../../meta/cac/UnstructuredPriceMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: UnstructuredPrice
  meta: FieldMeta<T>
}

export default function UnstructuredPriceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UnstructuredPriceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={UnstructuredPriceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnstructuredPriceFieldMeta.PriceAmount} 
          value={value.PriceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={UnstructuredPriceFieldMeta.PriceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnstructuredPriceFieldMeta.TimeAmount} 
          value={value.TimeAmount}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UnstructuredPriceFieldMeta.TimeAmount} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

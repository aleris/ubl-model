import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnstructuredPrice } from  '../../model/cac/UnstructuredPrice'
import { UnstructuredPriceFieldMeta } from  '../../meta/cac/UnstructuredPriceMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: UnstructuredPrice
  meta: FieldMeta<T>
}

export default function UnstructuredPriceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-UnstructuredPrice ubl-UnstructuredPriceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-UnstructuredPrice ubl-UBLExtensions"
          meta={UnstructuredPriceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UnstructuredPriceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnstructuredPrice ubl-Amount ubl-PriceAmount"
          meta={UnstructuredPriceFieldMeta.PriceAmount} 
          value={value.PriceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Price Amount"
              value={itemValue}
              meta={UnstructuredPriceFieldMeta.PriceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnstructuredPrice ubl-Text ubl-TimeAmount"
          meta={UnstructuredPriceFieldMeta.TimeAmount} 
          value={value.TimeAmount}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Time Amount"
              value={itemValue}
              meta={UnstructuredPriceFieldMeta.TimeAmount}
            />
          }
        />
        </div>
    </div>
  )
}

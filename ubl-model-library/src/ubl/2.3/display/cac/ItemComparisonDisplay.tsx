import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemComparison } from  '../../model/cac/ItemComparison'
import { ItemComparisonFieldMeta } from  '../../meta/cac/ItemComparisonMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemComparison
  meta: FieldMeta<T>
}

export default function ItemComparisonDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemComparison ubl-ItemComparisonType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemComparison ubl-UBLExtensions"
          meta={ItemComparisonFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemComparisonFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemComparison ubl-Amount ubl-PriceAmount"
          meta={ItemComparisonFieldMeta.PriceAmount} 
          value={value.PriceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Price Amount"
              value={itemValue}
              meta={ItemComparisonFieldMeta.PriceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemComparison ubl-Quantity"
          meta={ItemComparisonFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={ItemComparisonFieldMeta.Quantity}
            />
          }
        />
        </div>
    </div>
  )
}

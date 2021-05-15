import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ItemComparison | undefined
  meta: FieldMeta<T>
}

export default function ItemComparisonDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemComparison">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemComparisonFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Price Amount"
            value={value.PriceAmount?.[0]}
            meta={ItemComparisonFieldMeta.PriceAmount}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={ItemComparisonFieldMeta.Quantity}
          />
        </div>
    </div>
  )
}

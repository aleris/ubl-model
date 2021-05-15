import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: UnstructuredPrice | undefined
  meta: FieldMeta<T>
}

export default function UnstructuredPriceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-UnstructuredPrice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={UnstructuredPriceFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Price Amount"
            value={value.PriceAmount?.[0]}
            meta={UnstructuredPriceFieldMeta.PriceAmount}
          />

          <TextDisplay
            label="Time Amount"
            value={value.TimeAmount?.[0]}
            meta={UnstructuredPriceFieldMeta.TimeAmount}
          />
        </div>
    </div>
  )
}

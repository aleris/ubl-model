import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriceExtension } from  '../../model/cac/PriceExtension'
import { PriceExtensionFieldMeta } from  '../../meta/cac/PriceExtensionMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PriceExtension | undefined
  meta: FieldMeta<T>
}

export default function PriceExtensionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PriceExtension">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PriceExtensionFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={PriceExtensionFieldMeta.Amount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={PriceExtensionFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={PriceExtensionFieldMeta.TaxTotal}
              />
            }
          />
        </div>
    </div>
  )
}

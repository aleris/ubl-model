import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriceExtension } from  '../../model/cac/PriceExtension'
import { PriceExtensionFieldMeta } from  '../../meta/cac/PriceExtensionMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PriceExtension
  meta: FieldMeta<T>
}

export default function PriceExtensionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PriceExtensionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PriceExtensionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceExtensionFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PriceExtensionFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriceExtensionFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={PriceExtensionFieldMeta.TaxTotal} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

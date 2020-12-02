import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Renewal } from  '../../model/cac/Renewal'
import { RenewalFieldMeta } from  '../../meta/cac/RenewalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Renewal
  meta: FieldMeta<T>
}

export default function RenewalDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RenewalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RenewalFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RenewalFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RenewalFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RenewalFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RenewalFieldMeta.Period} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

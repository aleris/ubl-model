import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Renewal } from  '../../model/cac/Renewal'
import { RenewalFieldMeta } from  '../../meta/cac/RenewalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Renewal | undefined
  meta: FieldMeta<T>
}

export default function RenewalDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Renewal">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RenewalFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={RenewalFieldMeta.Amount}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={RenewalFieldMeta.Period}
          />
        </div>
    </div>
  )
}

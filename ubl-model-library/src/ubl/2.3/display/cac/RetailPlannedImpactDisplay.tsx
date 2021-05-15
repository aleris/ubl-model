import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RetailPlannedImpact } from  '../../model/cac/RetailPlannedImpact'
import { RetailPlannedImpactFieldMeta } from  '../../meta/cac/RetailPlannedImpactMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RetailPlannedImpact | undefined
  meta: FieldMeta<T>
}

export default function RetailPlannedImpactDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RetailPlannedImpact">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RetailPlannedImpactFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={RetailPlannedImpactFieldMeta.Amount}
          />

          <CodeDisplay
            label="Forecast Purpose Code"
            value={value.ForecastPurposeCode?.[0]}
            meta={RetailPlannedImpactFieldMeta.ForecastPurposeCode}
          />

          <CodeDisplay
            label="Forecast Type Code"
            value={value.ForecastTypeCode?.[0]}
            meta={RetailPlannedImpactFieldMeta.ForecastTypeCode}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={RetailPlannedImpactFieldMeta.Period}
          />
        </div>
    </div>
  )
}

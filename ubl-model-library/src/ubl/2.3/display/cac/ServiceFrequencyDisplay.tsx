import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceFrequency } from  '../../model/cac/ServiceFrequency'
import { ServiceFrequencyFieldMeta } from  '../../meta/cac/ServiceFrequencyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ServiceFrequency | undefined
  meta: FieldMeta<T>
}

export default function ServiceFrequencyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ServiceFrequency">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ServiceFrequencyFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Week Day"
            value={value.WeekDayCode?.[0]}
            meta={ServiceFrequencyFieldMeta.WeekDayCode}
          />
        </div>
    </div>
  )
}

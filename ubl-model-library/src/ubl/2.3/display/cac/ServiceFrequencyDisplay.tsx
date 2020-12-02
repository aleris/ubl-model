import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceFrequency } from  '../../model/cac/ServiceFrequency'
import { ServiceFrequencyFieldMeta } from  '../../meta/cac/ServiceFrequencyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ServiceFrequency
  meta: FieldMeta<T>
}

export default function ServiceFrequencyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ServiceFrequencyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ServiceFrequencyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceFrequencyFieldMeta.WeekDayCode} 
          value={value.WeekDayCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ServiceFrequencyFieldMeta.WeekDayCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

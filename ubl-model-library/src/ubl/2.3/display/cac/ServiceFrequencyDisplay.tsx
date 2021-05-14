import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceFrequency } from  '../../model/cac/ServiceFrequency'
import { ServiceFrequencyFieldMeta } from  '../../meta/cac/ServiceFrequencyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ServiceFrequency
  meta: FieldMeta<T>
}

export default function ServiceFrequencyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ServiceFrequency ubl-ServiceFrequencyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ServiceFrequency ubl-UBLExtensions"
          meta={ServiceFrequencyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ServiceFrequencyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceFrequency ubl-Code ubl-WeekDayCode"
          meta={ServiceFrequencyFieldMeta.WeekDayCode} 
          value={value.WeekDayCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Week Day"
              value={itemValue}
              meta={ServiceFrequencyFieldMeta.WeekDayCode}
            />
          }
        />
        </div>
    </div>
  )
}

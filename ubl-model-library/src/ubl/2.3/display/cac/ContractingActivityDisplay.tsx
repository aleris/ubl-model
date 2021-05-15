import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingActivity } from  '../../model/cac/ContractingActivity'
import { ContractingActivityFieldMeta } from  '../../meta/cac/ContractingActivityMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractingActivity | undefined
  meta: FieldMeta<T>
}

export default function ContractingActivityDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ContractingActivity">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractingActivityFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Activity Type Code"
            value={value.ActivityTypeCode?.[0]}
            meta={ContractingActivityFieldMeta.ActivityTypeCode}
          />

          <TextDisplay
            label="Activity Type"
            value={value.ActivityType?.[0]}
            meta={ContractingActivityFieldMeta.ActivityType}
          />
        </div>
    </div>
  )
}

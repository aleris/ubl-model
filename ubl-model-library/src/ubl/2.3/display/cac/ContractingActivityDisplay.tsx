import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingActivity } from  '../../model/cac/ContractingActivity'
import { ContractingActivityFieldMeta } from  '../../meta/cac/ContractingActivityMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ContractingActivity
  meta: FieldMeta<T>
}

export default function ContractingActivityDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractingActivityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractingActivityFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingActivityFieldMeta.ActivityTypeCode} 
          value={value.ActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractingActivityFieldMeta.ActivityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingActivityFieldMeta.ActivityType} 
          value={value.ActivityType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractingActivityFieldMeta.ActivityType} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

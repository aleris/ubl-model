import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ContractingActivity
  meta: FieldMeta<T>
}

export default function ContractingActivityDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractingActivity ubl-ContractingActivityType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractingActivity ubl-UBLExtensions"
          meta={ContractingActivityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractingActivityFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingActivity ubl-Code ubl-ActivityTypeCode"
          meta={ContractingActivityFieldMeta.ActivityTypeCode} 
          value={value.ActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Activity Type Code"
              value={itemValue}
              meta={ContractingActivityFieldMeta.ActivityTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingActivity ubl-Text ubl-ActivityType"
          meta={ContractingActivityFieldMeta.ActivityType} 
          value={value.ActivityType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Activity Type"
              value={itemValue}
              meta={ContractingActivityFieldMeta.ActivityType}
            />
          }
        />
        </div>
    </div>
  )
}

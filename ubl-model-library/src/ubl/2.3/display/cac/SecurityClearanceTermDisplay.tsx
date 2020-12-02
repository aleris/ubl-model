import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SecurityClearanceTerm } from  '../../model/cac/SecurityClearanceTerm'
import { SecurityClearanceTermFieldMeta } from  '../../meta/cac/SecurityClearanceTermMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: SecurityClearanceTerm
  meta: FieldMeta<T>
}

export default function SecurityClearanceTermDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SecurityClearanceTermFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SecurityClearanceTermFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecurityClearanceTermFieldMeta.Code} 
          value={value.Code}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SecurityClearanceTermFieldMeta.Code} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SecurityClearanceTermFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SecurityClearanceTermFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SecurityClearanceTerm } from  '../../model/cac/SecurityClearanceTerm'
import { SecurityClearanceTermFieldMeta } from  '../../meta/cac/SecurityClearanceTermMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: SecurityClearanceTerm | undefined
  meta: FieldMeta<T>
}

export default function SecurityClearanceTermDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SecurityClearanceTerm">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SecurityClearanceTermFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Code"
            value={value.Code?.[0]}
            meta={SecurityClearanceTermFieldMeta.Code}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={SecurityClearanceTermFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={SecurityClearanceTermFieldMeta.Description}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SecurityClearanceTerm
  meta: FieldMeta<T>
}

export default function SecurityClearanceTermDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SecurityClearanceTerm ubl-SecurityClearanceTermType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SecurityClearanceTerm ubl-UBLExtensions"
          meta={SecurityClearanceTermFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SecurityClearanceTermFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SecurityClearanceTerm ubl-Code"
          meta={SecurityClearanceTermFieldMeta.Code} 
          value={value.Code}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Code"
              value={itemValue}
              meta={SecurityClearanceTermFieldMeta.Code}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SecurityClearanceTerm ubl-Text ubl-Description"
          meta={SecurityClearanceTermFieldMeta.Description} 
          value={value.Description}
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

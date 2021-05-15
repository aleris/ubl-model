import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorRole } from  '../../model/cac/EconomicOperatorRole'
import { EconomicOperatorRoleFieldMeta } from  '../../meta/cac/EconomicOperatorRoleMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EconomicOperatorRole | undefined
  meta: FieldMeta<T>
}

export default function EconomicOperatorRoleDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EconomicOperatorRole">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EconomicOperatorRoleFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Role Code"
            value={value.RoleCode?.[0]}
            meta={EconomicOperatorRoleFieldMeta.RoleCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-RoleDescription"
            label="Role Description"
            items={value.RoleDescription}
            meta={EconomicOperatorRoleFieldMeta.RoleDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Role Description"
                value={itemValue}
                meta={EconomicOperatorRoleFieldMeta.RoleDescription}
              />
            }
          />
        </div>
    </div>
  )
}

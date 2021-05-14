import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EconomicOperatorRole
  meta: FieldMeta<T>
}

export default function EconomicOperatorRoleDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EconomicOperatorRole ubl-EconomicOperatorRoleType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EconomicOperatorRole ubl-UBLExtensions"
          meta={EconomicOperatorRoleFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EconomicOperatorRoleFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EconomicOperatorRole ubl-Code ubl-RoleCode"
          meta={EconomicOperatorRoleFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Role Code"
              value={itemValue}
              meta={EconomicOperatorRoleFieldMeta.RoleCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-EconomicOperatorRole ubl-Text ubl-RoleDescription"
          meta={EconomicOperatorRoleFieldMeta.RoleDescription} 
          value={value.RoleDescription}
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

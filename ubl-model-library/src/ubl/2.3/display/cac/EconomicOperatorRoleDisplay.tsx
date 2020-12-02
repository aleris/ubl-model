import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorRole } from  '../../model/cac/EconomicOperatorRole'
import { EconomicOperatorRoleFieldMeta } from  '../../meta/cac/EconomicOperatorRoleMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EconomicOperatorRole
  meta: FieldMeta<T>
}

export default function EconomicOperatorRoleDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EconomicOperatorRoleFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EconomicOperatorRoleFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorRoleFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EconomicOperatorRoleFieldMeta.RoleCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorRoleFieldMeta.RoleDescription} 
          value={value.RoleDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EconomicOperatorRoleFieldMeta.RoleDescription} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

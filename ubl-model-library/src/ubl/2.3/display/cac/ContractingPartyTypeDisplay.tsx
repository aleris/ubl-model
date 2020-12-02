import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingPartyType } from  '../../model/cac/ContractingPartyType'
import { ContractingPartyTypeFieldMeta } from  '../../meta/cac/ContractingPartyTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ContractingPartyType
  meta: FieldMeta<T>
}

export default function ContractingPartyTypeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractingPartyTypeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractingPartyTypeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyTypeFieldMeta.PartyTypeCode} 
          value={value.PartyTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractingPartyTypeFieldMeta.PartyTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyTypeFieldMeta.PartyType} 
          value={value.PartyType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractingPartyTypeFieldMeta.PartyType} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

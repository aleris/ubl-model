import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingPartyType } from  '../../model/cac/ContractingPartyType'
import { ContractingPartyTypeFieldMeta } from  '../../meta/cac/ContractingPartyTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractingPartyType
  meta: FieldMeta<T>
}

export default function ContractingPartyTypeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractingPartyType ubl-ContractingPartyTypeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractingPartyType ubl-UBLExtensions"
          meta={ContractingPartyTypeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractingPartyTypeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingPartyType ubl-Code ubl-PartyTypeCode"
          meta={ContractingPartyTypeFieldMeta.PartyTypeCode} 
          value={value.PartyTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Party Type Code"
              value={itemValue}
              meta={ContractingPartyTypeFieldMeta.PartyTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingPartyType ubl-Text ubl-PartyType"
          meta={ContractingPartyTypeFieldMeta.PartyType} 
          value={value.PartyType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Party Type"
              value={itemValue}
              meta={ContractingPartyTypeFieldMeta.PartyType}
            />
          }
        />
        </div>
    </div>
  )
}

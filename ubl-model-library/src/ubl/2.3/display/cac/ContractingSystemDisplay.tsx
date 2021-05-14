import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingSystem } from  '../../model/cac/ContractingSystem'
import { ContractingSystemFieldMeta } from  '../../meta/cac/ContractingSystemMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractingSystem
  meta: FieldMeta<T>
}

export default function ContractingSystemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractingSystem ubl-ContractingSystemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractingSystem ubl-UBLExtensions"
          meta={ContractingSystemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractingSystemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingSystem ubl-Identifier ubl-ID"
          meta={ContractingSystemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ContractingSystemFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingSystem ubl-Code ubl-ContractingSystemTypeCode"
          meta={ContractingSystemFieldMeta.ContractingSystemTypeCode} 
          value={value.ContractingSystemTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Contracting System Type"
              value={itemValue}
              meta={ContractingSystemFieldMeta.ContractingSystemTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ContractingSystem ubl-Text ubl-Description"
          meta={ContractingSystemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ContractingSystemFieldMeta.Description}
            />
          }
        />
        </div>
    </div>
  )
}

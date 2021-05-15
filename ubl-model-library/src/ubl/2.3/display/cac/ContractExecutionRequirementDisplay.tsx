import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractExecutionRequirement } from  '../../model/cac/ContractExecutionRequirement'
import { ContractExecutionRequirementFieldMeta } from  '../../meta/cac/ContractExecutionRequirementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractExecutionRequirement | undefined
  meta: FieldMeta<T>
}

export default function ContractExecutionRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ContractExecutionRequirement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractExecutionRequirementFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Name"
            label="Name"
            items={value.Name}
            meta={ContractExecutionRequirementFieldMeta.Name} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Name"
                value={itemValue}
                meta={ContractExecutionRequirementFieldMeta.Name}
              />
            }
          />

          <CodeDisplay
            label="Execution Requirement Code"
            value={value.ExecutionRequirementCode?.[0]}
            meta={ContractExecutionRequirementFieldMeta.ExecutionRequirementCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ContractExecutionRequirementFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ContractExecutionRequirementFieldMeta.Description}
              />
            }
          />
        </div>
    </div>
  )
}

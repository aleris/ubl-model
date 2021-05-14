import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ContractExecutionRequirement
  meta: FieldMeta<T>
}

export default function ContractExecutionRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractExecutionRequirement ubl-ContractExecutionRequirementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractExecutionRequirement ubl-UBLExtensions"
          meta={ContractExecutionRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractExecutionRequirementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ContractExecutionRequirement ubl-Text ubl-Name"
          meta={ContractExecutionRequirementFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ContractExecutionRequirementFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractExecutionRequirement ubl-Code ubl-ExecutionRequirementCode"
          meta={ContractExecutionRequirementFieldMeta.ExecutionRequirementCode} 
          value={value.ExecutionRequirementCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Execution Requirement Code"
              value={itemValue}
              meta={ContractExecutionRequirementFieldMeta.ExecutionRequirementCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ContractExecutionRequirement ubl-Text ubl-Description"
          meta={ContractExecutionRequirementFieldMeta.Description} 
          value={value.Description}
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

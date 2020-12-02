import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractExecutionRequirement } from  '../../model/cac/ContractExecutionRequirement'
import { ContractExecutionRequirementFieldMeta } from  '../../meta/cac/ContractExecutionRequirementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ContractExecutionRequirement
  meta: FieldMeta<T>
}

export default function ContractExecutionRequirementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractExecutionRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractExecutionRequirementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExecutionRequirementFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractExecutionRequirementFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExecutionRequirementFieldMeta.ExecutionRequirementCode} 
          value={value.ExecutionRequirementCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractExecutionRequirementFieldMeta.ExecutionRequirementCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExecutionRequirementFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractExecutionRequirementFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

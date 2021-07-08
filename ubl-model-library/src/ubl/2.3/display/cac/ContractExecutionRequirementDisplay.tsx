import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractExecutionRequirement } from  '../../model/cac/ContractExecutionRequirement'
import { ContractExecutionRequirementField, ContractExecutionRequirementFieldMeta, ContractExecutionRequirementTypeName } from  '../../meta/cac/ContractExecutionRequirementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractExecutionRequirement, void>
  contractExecutionRequirement: ContractExecutionRequirement[] | undefined
  renderContext: RenderContext
}

export const ContractExecutionRequirementSubElementsMap: SubElementsTemplatesMap<ContractExecutionRequirementField, ContractExecutionRequirement, void> = new Map([
    [
      ContractExecutionRequirementField.UBLExtensions,
      { meta: ContractExecutionRequirementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractExecutionRequirementField.UBLExtensions}
          meta={ContractExecutionRequirementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExecutionRequirementField.Name,
      { meta: ContractExecutionRequirementFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractExecutionRequirementField.Name}
          meta={ContractExecutionRequirementFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExecutionRequirementField.ExecutionRequirementCode,
      { meta: ContractExecutionRequirementFieldMeta.ExecutionRequirementCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractExecutionRequirementField.ExecutionRequirementCode}
          meta={ContractExecutionRequirementFieldMeta.ExecutionRequirementCode}
          fieldConfig={fieldConfig}
          code={value?.ExecutionRequirementCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractExecutionRequirementField.Description,
      { meta: ContractExecutionRequirementFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractExecutionRequirementField.Description}
          meta={ContractExecutionRequirementFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractExecutionRequirementDisplay<TFieldMeta>({ meta, fieldConfig, contractExecutionRequirement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractExecutionRequirementTypeName,
    meta,
    fieldConfig,
    contractExecutionRequirement,
    renderContext,
    ContractExecutionRequirementSubElementsMap,
  )
}

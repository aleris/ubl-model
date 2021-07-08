import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingActivity } from  '../../model/cac/ContractingActivity'
import { ContractingActivityField, ContractingActivityFieldMeta, ContractingActivityTypeName } from  '../../meta/cac/ContractingActivityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractingActivity, void>
  contractingActivity: ContractingActivity[] | undefined
  renderContext: RenderContext
}

export const ContractingActivitySubElementsMap: SubElementsTemplatesMap<ContractingActivityField, ContractingActivity, void> = new Map([
    [
      ContractingActivityField.UBLExtensions,
      { meta: ContractingActivityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractingActivityField.UBLExtensions}
          meta={ContractingActivityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingActivityField.ActivityTypeCode,
      { meta: ContractingActivityFieldMeta.ActivityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractingActivityField.ActivityTypeCode}
          meta={ContractingActivityFieldMeta.ActivityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ActivityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingActivityField.ActivityType,
      { meta: ContractingActivityFieldMeta.ActivityType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractingActivityField.ActivityType}
          meta={ContractingActivityFieldMeta.ActivityType}
          fieldConfig={fieldConfig}
          text={value?.ActivityType}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractingActivityDisplay<TFieldMeta>({ meta, fieldConfig, contractingActivity, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractingActivityTypeName,
    meta,
    fieldConfig,
    contractingActivity,
    renderContext,
    ContractingActivitySubElementsMap,
  )
}

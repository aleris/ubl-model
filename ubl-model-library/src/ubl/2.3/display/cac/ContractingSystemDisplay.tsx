import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingSystem } from  '../../model/cac/ContractingSystem'
import { ContractingSystemField, ContractingSystemFieldMeta, ContractingSystemTypeName } from  '../../meta/cac/ContractingSystemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractingSystem, void>
  contractingSystem: ContractingSystem[] | undefined
  renderContext: RenderContext
}

export const ContractingSystemSubElementsMap: SubElementsTemplatesMap<ContractingSystemField, ContractingSystem, void> = new Map([
    [
      ContractingSystemField.UBLExtensions,
      { meta: ContractingSystemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractingSystemField.UBLExtensions}
          meta={ContractingSystemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingSystemField.ID,
      { meta: ContractingSystemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractingSystemField.ID}
          meta={ContractingSystemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingSystemField.ContractingSystemTypeCode,
      { meta: ContractingSystemFieldMeta.ContractingSystemTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractingSystemField.ContractingSystemTypeCode}
          meta={ContractingSystemFieldMeta.ContractingSystemTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ContractingSystemTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingSystemField.Description,
      { meta: ContractingSystemFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractingSystemField.Description}
          meta={ContractingSystemFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractingSystemDisplay<TFieldMeta>({ meta, fieldConfig, contractingSystem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractingSystemTypeName,
    meta,
    fieldConfig,
    contractingSystem,
    renderContext,
    ContractingSystemSubElementsMap,
  )
}

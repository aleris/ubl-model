import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingRepresentationType } from  '../../model/cac/ContractingRepresentationType'
import { ContractingRepresentationTypeField, ContractingRepresentationTypeFieldMeta, ContractingRepresentationTypeTypeName } from  '../../meta/cac/ContractingRepresentationTypeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractingRepresentationType, void>
  contractingRepresentationType: ContractingRepresentationType[] | undefined
  renderContext: RenderContext
}

export const ContractingRepresentationTypeSubElementsMap: SubElementsTemplatesMap<ContractingRepresentationTypeField, ContractingRepresentationType, void> = new Map([
    [
      ContractingRepresentationTypeField.UBLExtensions,
      { meta: ContractingRepresentationTypeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractingRepresentationTypeField.UBLExtensions}
          meta={ContractingRepresentationTypeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingRepresentationTypeField.RepresentationTypeCode,
      { meta: ContractingRepresentationTypeFieldMeta.RepresentationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractingRepresentationTypeField.RepresentationTypeCode}
          meta={ContractingRepresentationTypeFieldMeta.RepresentationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.RepresentationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingRepresentationTypeField.RepresentationType,
      { meta: ContractingRepresentationTypeFieldMeta.RepresentationType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractingRepresentationTypeField.RepresentationType}
          meta={ContractingRepresentationTypeFieldMeta.RepresentationType}
          fieldConfig={fieldConfig}
          text={value?.RepresentationType}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractingRepresentationTypeDisplay<TFieldMeta>({ meta, fieldConfig, contractingRepresentationType, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractingRepresentationTypeTypeName,
    meta,
    fieldConfig,
    contractingRepresentationType,
    renderContext,
    ContractingRepresentationTypeSubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingPartyType } from  '../../model/cac/ContractingPartyType'
import { ContractingPartyTypeField, ContractingPartyTypeFieldMeta, ContractingPartyTypeTypeName } from  '../../meta/cac/ContractingPartyTypeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractingPartyType, void>
  contractingPartyType: ContractingPartyType[] | undefined
  renderContext: RenderContext
}

export const ContractingPartyTypeSubElementsMap: SubElementsTemplatesMap<ContractingPartyTypeField, ContractingPartyType, void> = new Map([
    [
      ContractingPartyTypeField.UBLExtensions,
      { meta: ContractingPartyTypeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractingPartyTypeField.UBLExtensions}
          meta={ContractingPartyTypeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyTypeField.PartyTypeCode,
      { meta: ContractingPartyTypeFieldMeta.PartyTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractingPartyTypeField.PartyTypeCode}
          meta={ContractingPartyTypeFieldMeta.PartyTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PartyTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyTypeField.PartyType,
      { meta: ContractingPartyTypeFieldMeta.PartyType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractingPartyTypeField.PartyType}
          meta={ContractingPartyTypeFieldMeta.PartyType}
          fieldConfig={fieldConfig}
          text={value?.PartyType}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractingPartyTypeDisplay<TFieldMeta>({ meta, fieldConfig, contractingPartyType, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractingPartyTypeTypeName,
    meta,
    fieldConfig,
    contractingPartyType,
    renderContext,
    ContractingPartyTypeSubElementsMap,
  )
}

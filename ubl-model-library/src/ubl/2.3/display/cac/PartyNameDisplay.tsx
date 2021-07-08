import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyName } from  '../../model/cac/PartyName'
import { PartyNameField, PartyNameFieldMeta, PartyNameTypeName } from  '../../meta/cac/PartyNameMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PartyName, void>
  partyName: PartyName[] | undefined
  renderContext: RenderContext
}

export const PartyNameSubElementsMap: SubElementsTemplatesMap<PartyNameField, PartyName, void> = new Map([
    [
      PartyNameField.UBLExtensions,
      { meta: PartyNameFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PartyNameField.UBLExtensions}
          meta={PartyNameFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PartyNameField.Name,
      { meta: PartyNameFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PartyNameField.Name}
          meta={PartyNameFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ]
]) 

export function PartyNameDisplay<TFieldMeta>({ meta, fieldConfig, partyName, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PartyNameTypeName,
    meta,
    fieldConfig,
    partyName,
    renderContext,
    PartyNameSubElementsMap,
  )
}

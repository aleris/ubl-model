import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyIdentification } from  '../../model/cac/PartyIdentification'
import { PartyIdentificationField, PartyIdentificationFieldMeta, PartyIdentificationTypeName } from  '../../meta/cac/PartyIdentificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PartyIdentification, void>
  partyIdentification: PartyIdentification[] | undefined
  renderContext: RenderContext
}

export const PartyIdentificationSubElementsMap: SubElementsTemplatesMap<PartyIdentificationField, PartyIdentification, void> = new Map([
    [
      PartyIdentificationField.UBLExtensions,
      { meta: PartyIdentificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PartyIdentificationField.UBLExtensions}
          meta={PartyIdentificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PartyIdentificationField.ID,
      { meta: PartyIdentificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PartyIdentificationField.ID}
          meta={PartyIdentificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ]
]) 

export function PartyIdentificationDisplay<TFieldMeta>({ meta, fieldConfig, partyIdentification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PartyIdentificationTypeName,
    meta,
    fieldConfig,
    partyIdentification,
    renderContext,
    PartyIdentificationSubElementsMap,
  )
}

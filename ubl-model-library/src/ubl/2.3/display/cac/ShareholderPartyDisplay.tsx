import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ShareholderParty } from  '../../model/cac/ShareholderParty'
import { ShareholderPartyField, ShareholderPartyFieldMeta, ShareholderPartyTypeName } from  '../../meta/cac/ShareholderPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ShareholderParty, void>
  shareholderParty: ShareholderParty[] | undefined
  renderContext: RenderContext
}

export const ShareholderPartySubElementsMap: SubElementsTemplatesMap<ShareholderPartyField, ShareholderParty, void> = new Map([
    [
      ShareholderPartyField.UBLExtensions,
      { meta: ShareholderPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ShareholderPartyField.UBLExtensions}
          meta={ShareholderPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ShareholderPartyField.PartecipationPercent,
      { meta: ShareholderPartyFieldMeta.PartecipationPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ShareholderPartyField.PartecipationPercent}
          meta={ShareholderPartyFieldMeta.PartecipationPercent}
          fieldConfig={fieldConfig}
          numeric={value?.PartecipationPercent}
          renderContext={renderContext}
        />}
    ],

    [
      ShareholderPartyField.Party,
      { meta: ShareholderPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ShareholderPartyField.Party}
          meta={ShareholderPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ]
]) 

export function ShareholderPartyDisplay<TFieldMeta>({ meta, fieldConfig, shareholderParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ShareholderPartyTypeName,
    meta,
    fieldConfig,
    shareholderParty,
    renderContext,
    ShareholderPartySubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { WinningParty } from  '../../model/cac/WinningParty'
import { WinningPartyField, WinningPartyFieldMeta, WinningPartyTypeName } from  '../../meta/cac/WinningPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<WinningParty, void>
  winningParty: WinningParty[] | undefined
  renderContext: RenderContext
}

export const WinningPartySubElementsMap: SubElementsTemplatesMap<WinningPartyField, WinningParty, void> = new Map([
    [
      WinningPartyField.UBLExtensions,
      { meta: WinningPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={WinningPartyField.UBLExtensions}
          meta={WinningPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      WinningPartyField.Rank,
      { meta: WinningPartyFieldMeta.Rank,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WinningPartyField.Rank}
          meta={WinningPartyFieldMeta.Rank}
          fieldConfig={fieldConfig}
          text={value?.Rank}
          renderContext={renderContext}
        />}
    ],

    [
      WinningPartyField.Party,
      { meta: WinningPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WinningPartyField.Party}
          meta={WinningPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ]
]) 

export function WinningPartyDisplay<TFieldMeta>({ meta, fieldConfig, winningParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    WinningPartyTypeName,
    meta,
    fieldConfig,
    winningParty,
    renderContext,
    WinningPartySubElementsMap,
  )
}

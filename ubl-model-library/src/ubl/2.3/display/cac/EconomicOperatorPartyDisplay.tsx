import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorParty } from  '../../model/cac/EconomicOperatorParty'
import { EconomicOperatorPartyField, EconomicOperatorPartyFieldMeta, EconomicOperatorPartyTypeName } from  '../../meta/cac/EconomicOperatorPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { EconomicOperatorRoleDisplay } from './EconomicOperatorRoleDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QualifyingPartyDisplay } from './QualifyingPartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EconomicOperatorParty, void>
  economicOperatorParty: EconomicOperatorParty[] | undefined
  renderContext: RenderContext
}

export const EconomicOperatorPartySubElementsMap: SubElementsTemplatesMap<EconomicOperatorPartyField, EconomicOperatorParty, void> = new Map([
    [
      EconomicOperatorPartyField.UBLExtensions,
      { meta: EconomicOperatorPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EconomicOperatorPartyField.UBLExtensions}
          meta={EconomicOperatorPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorPartyField.QualifyingParty,
      { meta: EconomicOperatorPartyFieldMeta.QualifyingParty,
        template: ({value, renderContext, fieldConfig}) => <QualifyingPartyDisplay
          key={EconomicOperatorPartyField.QualifyingParty}
          meta={EconomicOperatorPartyFieldMeta.QualifyingParty}
          fieldConfig={fieldConfig}
          qualifyingParty={value?.QualifyingParty}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorPartyField.EconomicOperatorRole,
      { meta: EconomicOperatorPartyFieldMeta.EconomicOperatorRole,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorRoleDisplay
          key={EconomicOperatorPartyField.EconomicOperatorRole}
          meta={EconomicOperatorPartyFieldMeta.EconomicOperatorRole}
          fieldConfig={fieldConfig}
          economicOperatorRole={value?.EconomicOperatorRole}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorPartyField.Party,
      { meta: EconomicOperatorPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EconomicOperatorPartyField.Party}
          meta={EconomicOperatorPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ]
]) 

export function EconomicOperatorPartyDisplay<TFieldMeta>({ meta, fieldConfig, economicOperatorParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EconomicOperatorPartyTypeName,
    meta,
    fieldConfig,
    economicOperatorParty,
    renderContext,
    EconomicOperatorPartySubElementsMap,
  )
}

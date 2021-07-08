import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AppealTerms } from  '../../model/cac/AppealTerms'
import { AppealTermsField, AppealTermsFieldMeta, AppealTermsTypeName } from  '../../meta/cac/AppealTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AppealTerms, void>
  appealTerms: AppealTerms[] | undefined
  renderContext: RenderContext
}

export const AppealTermsSubElementsMap: SubElementsTemplatesMap<AppealTermsField, AppealTerms, void> = new Map([
    [
      AppealTermsField.UBLExtensions,
      { meta: AppealTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AppealTermsField.UBLExtensions}
          meta={AppealTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AppealTermsField.Description,
      { meta: AppealTermsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AppealTermsField.Description}
          meta={AppealTermsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AppealTermsField.PresentationPeriod,
      { meta: AppealTermsFieldMeta.PresentationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={AppealTermsField.PresentationPeriod}
          meta={AppealTermsFieldMeta.PresentationPeriod}
          fieldConfig={fieldConfig}
          period={value?.PresentationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      AppealTermsField.AppealInformationParty,
      { meta: AppealTermsFieldMeta.AppealInformationParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AppealTermsField.AppealInformationParty}
          meta={AppealTermsFieldMeta.AppealInformationParty}
          fieldConfig={fieldConfig}
          party={value?.AppealInformationParty}
          renderContext={renderContext}
        />}
    ],

    [
      AppealTermsField.AppealReceiverParty,
      { meta: AppealTermsFieldMeta.AppealReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AppealTermsField.AppealReceiverParty}
          meta={AppealTermsFieldMeta.AppealReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.AppealReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      AppealTermsField.MediationParty,
      { meta: AppealTermsFieldMeta.MediationParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AppealTermsField.MediationParty}
          meta={AppealTermsFieldMeta.MediationParty}
          fieldConfig={fieldConfig}
          party={value?.MediationParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function AppealTermsDisplay<TFieldMeta>({ meta, fieldConfig, appealTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AppealTermsTypeName,
    meta,
    fieldConfig,
    appealTerms,
    renderContext,
    AppealTermsSubElementsMap,
  )
}

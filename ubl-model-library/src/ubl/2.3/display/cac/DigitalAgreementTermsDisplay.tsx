import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalAgreementTerms } from  '../../model/cac/DigitalAgreementTerms'
import { DigitalAgreementTermsField, DigitalAgreementTermsFieldMeta, DigitalAgreementTermsTypeName } from  '../../meta/cac/DigitalAgreementTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { PeriodDisplay } from './PeriodDisplay'
import { ServiceLevelAgreementDisplay } from './ServiceLevelAgreementDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DigitalAgreementTerms, void>
  digitalAgreementTerms: DigitalAgreementTerms[] | undefined
  renderContext: RenderContext
}

export const DigitalAgreementTermsSubElementsMap: SubElementsTemplatesMap<DigitalAgreementTermsField, DigitalAgreementTerms, void> = new Map([
    [
      DigitalAgreementTermsField.UBLExtensions,
      { meta: DigitalAgreementTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DigitalAgreementTermsField.UBLExtensions}
          meta={DigitalAgreementTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementTermsField.Description,
      { meta: DigitalAgreementTermsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DigitalAgreementTermsField.Description}
          meta={DigitalAgreementTermsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementTermsField.ValidityPeriod,
      { meta: DigitalAgreementTermsFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DigitalAgreementTermsField.ValidityPeriod}
          meta={DigitalAgreementTermsFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementTermsField.AdoptionPeriod,
      { meta: DigitalAgreementTermsFieldMeta.AdoptionPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DigitalAgreementTermsField.AdoptionPeriod}
          meta={DigitalAgreementTermsFieldMeta.AdoptionPeriod}
          fieldConfig={fieldConfig}
          period={value?.AdoptionPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementTermsField.ServiceLevelAgreement,
      { meta: DigitalAgreementTermsFieldMeta.ServiceLevelAgreement,
        template: ({value, renderContext, fieldConfig}) => <ServiceLevelAgreementDisplay
          key={DigitalAgreementTermsField.ServiceLevelAgreement}
          meta={DigitalAgreementTermsFieldMeta.ServiceLevelAgreement}
          fieldConfig={fieldConfig}
          serviceLevelAgreement={value?.ServiceLevelAgreement}
          renderContext={renderContext}
        />}
    ]
]) 

export function DigitalAgreementTermsDisplay<TFieldMeta>({ meta, fieldConfig, digitalAgreementTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DigitalAgreementTermsTypeName,
    meta,
    fieldConfig,
    digitalAgreementTerms,
    renderContext,
    DigitalAgreementTermsSubElementsMap,
  )
}

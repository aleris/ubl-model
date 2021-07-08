import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryTerms } from  '../../model/cac/DeliveryTerms'
import { DeliveryTermsField, DeliveryTermsFieldMeta, DeliveryTermsTypeName } from  '../../meta/cac/DeliveryTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DeliveryTerms, void>
  deliveryTerms: DeliveryTerms[] | undefined
  renderContext: RenderContext
}

export const DeliveryTermsSubElementsMap: SubElementsTemplatesMap<DeliveryTermsField, DeliveryTerms, void> = new Map([
    [
      DeliveryTermsField.UBLExtensions,
      { meta: DeliveryTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DeliveryTermsField.UBLExtensions}
          meta={DeliveryTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.ID,
      { meta: DeliveryTermsFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DeliveryTermsField.ID}
          meta={DeliveryTermsFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.SpecialTerms,
      { meta: DeliveryTermsFieldMeta.SpecialTerms,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DeliveryTermsField.SpecialTerms}
          meta={DeliveryTermsFieldMeta.SpecialTerms}
          fieldConfig={fieldConfig}
          text={value?.SpecialTerms}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.LossRiskResponsibilityCode,
      { meta: DeliveryTermsFieldMeta.LossRiskResponsibilityCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DeliveryTermsField.LossRiskResponsibilityCode}
          meta={DeliveryTermsFieldMeta.LossRiskResponsibilityCode}
          fieldConfig={fieldConfig}
          code={value?.LossRiskResponsibilityCode}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.LossRisk,
      { meta: DeliveryTermsFieldMeta.LossRisk,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DeliveryTermsField.LossRisk}
          meta={DeliveryTermsFieldMeta.LossRisk}
          fieldConfig={fieldConfig}
          text={value?.LossRisk}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.Amount,
      { meta: DeliveryTermsFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={DeliveryTermsField.Amount}
          meta={DeliveryTermsFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.DeliveryLocation,
      { meta: DeliveryTermsFieldMeta.DeliveryLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={DeliveryTermsField.DeliveryLocation}
          meta={DeliveryTermsFieldMeta.DeliveryLocation}
          fieldConfig={fieldConfig}
          location={value?.DeliveryLocation}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryTermsField.AllowanceCharge,
      { meta: DeliveryTermsFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={DeliveryTermsField.AllowanceCharge}
          meta={DeliveryTermsFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ]
]) 

export function DeliveryTermsDisplay<TFieldMeta>({ meta, fieldConfig, deliveryTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DeliveryTermsTypeName,
    meta,
    fieldConfig,
    deliveryTerms,
    renderContext,
    DeliveryTermsSubElementsMap,
  )
}

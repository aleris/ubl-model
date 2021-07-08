import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { FrameworkAgreement } from  '../../model/cac/FrameworkAgreement'
import { FrameworkAgreementField, FrameworkAgreementFieldMeta, FrameworkAgreementTypeName } from  '../../meta/cac/FrameworkAgreementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TenderRequirementDisplay } from './TenderRequirementDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<FrameworkAgreement, void>
  frameworkAgreement: FrameworkAgreement[] | undefined
  renderContext: RenderContext
}

export const FrameworkAgreementSubElementsMap: SubElementsTemplatesMap<FrameworkAgreementField, FrameworkAgreement, void> = new Map([
    [
      FrameworkAgreementField.UBLExtensions,
      { meta: FrameworkAgreementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FrameworkAgreementField.UBLExtensions}
          meta={FrameworkAgreementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.ExpectedOperatorQuantity,
      { meta: FrameworkAgreementFieldMeta.ExpectedOperatorQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={FrameworkAgreementField.ExpectedOperatorQuantity}
          meta={FrameworkAgreementFieldMeta.ExpectedOperatorQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ExpectedOperatorQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.MaximumOperatorQuantity,
      { meta: FrameworkAgreementFieldMeta.MaximumOperatorQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={FrameworkAgreementField.MaximumOperatorQuantity}
          meta={FrameworkAgreementFieldMeta.MaximumOperatorQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumOperatorQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.Justification,
      { meta: FrameworkAgreementFieldMeta.Justification,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FrameworkAgreementField.Justification}
          meta={FrameworkAgreementFieldMeta.Justification}
          fieldConfig={fieldConfig}
          text={value?.Justification}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.Frequency,
      { meta: FrameworkAgreementFieldMeta.Frequency,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FrameworkAgreementField.Frequency}
          meta={FrameworkAgreementFieldMeta.Frequency}
          fieldConfig={fieldConfig}
          text={value?.Frequency}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.EstimatedMaximumValueAmount,
      { meta: FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={FrameworkAgreementField.EstimatedMaximumValueAmount}
          meta={FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.EstimatedMaximumValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.MaximumValueAmount,
      { meta: FrameworkAgreementFieldMeta.MaximumValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={FrameworkAgreementField.MaximumValueAmount}
          meta={FrameworkAgreementFieldMeta.MaximumValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.DurationPeriod,
      { meta: FrameworkAgreementFieldMeta.DurationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={FrameworkAgreementField.DurationPeriod}
          meta={FrameworkAgreementFieldMeta.DurationPeriod}
          fieldConfig={fieldConfig}
          period={value?.DurationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      FrameworkAgreementField.SubsequentProcessTenderRequirement,
      { meta: FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement,
        template: ({value, renderContext, fieldConfig}) => <TenderRequirementDisplay
          key={FrameworkAgreementField.SubsequentProcessTenderRequirement}
          meta={FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement}
          fieldConfig={fieldConfig}
          tenderRequirement={value?.SubsequentProcessTenderRequirement}
          renderContext={renderContext}
        />}
    ]
]) 

export function FrameworkAgreementDisplay<TFieldMeta>({ meta, fieldConfig, frameworkAgreement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FrameworkAgreementTypeName,
    meta,
    fieldConfig,
    frameworkAgreement,
    renderContext,
    FrameworkAgreementSubElementsMap,
  )
}

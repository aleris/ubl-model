import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SubcontractTerms } from  '../../model/cac/SubcontractTerms'
import { SubcontractTermsField, SubcontractTermsFieldMeta, SubcontractTermsTypeName } from  '../../meta/cac/SubcontractTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SubcontractTerms, void>
  subcontractTerms: SubcontractTerms[] | undefined
  renderContext: RenderContext
}

export const SubcontractTermsSubElementsMap: SubElementsTemplatesMap<SubcontractTermsField, SubcontractTerms, void> = new Map([
    [
      SubcontractTermsField.UBLExtensions,
      { meta: SubcontractTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SubcontractTermsField.UBLExtensions}
          meta={SubcontractTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.Rate,
      { meta: SubcontractTermsFieldMeta.Rate,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={SubcontractTermsField.Rate}
          meta={SubcontractTermsFieldMeta.Rate}
          fieldConfig={fieldConfig}
          numeric={value?.Rate}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.UnknownPriceIndicator,
      { meta: SubcontractTermsFieldMeta.UnknownPriceIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={SubcontractTermsField.UnknownPriceIndicator}
          meta={SubcontractTermsFieldMeta.UnknownPriceIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.UnknownPriceIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.Description,
      { meta: SubcontractTermsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SubcontractTermsField.Description}
          meta={SubcontractTermsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.Amount,
      { meta: SubcontractTermsFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={SubcontractTermsField.Amount}
          meta={SubcontractTermsFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.SubcontractingConditionsCode,
      { meta: SubcontractTermsFieldMeta.SubcontractingConditionsCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SubcontractTermsField.SubcontractingConditionsCode}
          meta={SubcontractTermsFieldMeta.SubcontractingConditionsCode}
          fieldConfig={fieldConfig}
          code={value?.SubcontractingConditionsCode}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.MaximumPercent,
      { meta: SubcontractTermsFieldMeta.MaximumPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={SubcontractTermsField.MaximumPercent}
          meta={SubcontractTermsFieldMeta.MaximumPercent}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumPercent}
          renderContext={renderContext}
        />}
    ],

    [
      SubcontractTermsField.MinimumPercent,
      { meta: SubcontractTermsFieldMeta.MinimumPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={SubcontractTermsField.MinimumPercent}
          meta={SubcontractTermsFieldMeta.MinimumPercent}
          fieldConfig={fieldConfig}
          numeric={value?.MinimumPercent}
          renderContext={renderContext}
        />}
    ]
]) 

export function SubcontractTermsDisplay<TFieldMeta>({ meta, fieldConfig, subcontractTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SubcontractTermsTypeName,
    meta,
    fieldConfig,
    subcontractTerms,
    renderContext,
    SubcontractTermsSubElementsMap,
  )
}

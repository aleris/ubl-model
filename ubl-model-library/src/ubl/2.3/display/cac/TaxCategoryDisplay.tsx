import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxCategory } from  '../../model/cac/TaxCategory'
import { TaxCategoryField, TaxCategoryFieldMeta, TaxCategoryTypeName } from  '../../meta/cac/TaxCategoryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TaxSchemeDisplay } from './TaxSchemeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TaxCategory, void>
  taxCategory: TaxCategory[] | undefined
  renderContext: RenderContext
}

export const TaxCategorySubElementsMap: SubElementsTemplatesMap<TaxCategoryField, TaxCategory, void> = new Map([
    [
      TaxCategoryField.UBLExtensions,
      { meta: TaxCategoryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TaxCategoryField.UBLExtensions}
          meta={TaxCategoryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.ID,
      { meta: TaxCategoryFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TaxCategoryField.ID}
          meta={TaxCategoryFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.Name,
      { meta: TaxCategoryFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TaxCategoryField.Name}
          meta={TaxCategoryFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.Percent,
      { meta: TaxCategoryFieldMeta.Percent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TaxCategoryField.Percent}
          meta={TaxCategoryFieldMeta.Percent}
          fieldConfig={fieldConfig}
          numeric={value?.Percent}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.BaseUnitMeasure,
      { meta: TaxCategoryFieldMeta.BaseUnitMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={TaxCategoryField.BaseUnitMeasure}
          meta={TaxCategoryFieldMeta.BaseUnitMeasure}
          fieldConfig={fieldConfig}
          measure={value?.BaseUnitMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.PerUnitAmount,
      { meta: TaxCategoryFieldMeta.PerUnitAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TaxCategoryField.PerUnitAmount}
          meta={TaxCategoryFieldMeta.PerUnitAmount}
          fieldConfig={fieldConfig}
          amount={value?.PerUnitAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.TaxExemptionReasonCode,
      { meta: TaxCategoryFieldMeta.TaxExemptionReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TaxCategoryField.TaxExemptionReasonCode}
          meta={TaxCategoryFieldMeta.TaxExemptionReasonCode}
          fieldConfig={fieldConfig}
          code={value?.TaxExemptionReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.TaxExemptionReason,
      { meta: TaxCategoryFieldMeta.TaxExemptionReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TaxCategoryField.TaxExemptionReason}
          meta={TaxCategoryFieldMeta.TaxExemptionReason}
          fieldConfig={fieldConfig}
          text={value?.TaxExemptionReason}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.TierRange,
      { meta: TaxCategoryFieldMeta.TierRange,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TaxCategoryField.TierRange}
          meta={TaxCategoryFieldMeta.TierRange}
          fieldConfig={fieldConfig}
          text={value?.TierRange}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.TierRatePercent,
      { meta: TaxCategoryFieldMeta.TierRatePercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TaxCategoryField.TierRatePercent}
          meta={TaxCategoryFieldMeta.TierRatePercent}
          fieldConfig={fieldConfig}
          numeric={value?.TierRatePercent}
          renderContext={renderContext}
        />}
    ],

    [
      TaxCategoryField.TaxScheme,
      { meta: TaxCategoryFieldMeta.TaxScheme,
        template: ({value, renderContext, fieldConfig}) => <TaxSchemeDisplay
          key={TaxCategoryField.TaxScheme}
          meta={TaxCategoryFieldMeta.TaxScheme}
          fieldConfig={fieldConfig}
          taxScheme={value?.TaxScheme}
          renderContext={renderContext}
        />}
    ]
]) 

export function TaxCategoryDisplay<TFieldMeta>({ meta, fieldConfig, taxCategory, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TaxCategoryTypeName,
    meta,
    fieldConfig,
    taxCategory,
    renderContext,
    TaxCategorySubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionProperty } from  '../../model/cac/TenderingCriterionProperty'
import { TenderingCriterionPropertyField, TenderingCriterionPropertyFieldMeta, TenderingCriterionPropertyTypeName } from  '../../meta/cac/TenderingCriterionPropertyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EvidenceDisplay } from './EvidenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderingCriterionProperty, void>
  tenderingCriterionProperty: TenderingCriterionProperty[] | undefined
  renderContext: RenderContext
}

export const TenderingCriterionPropertySubElementsMap: SubElementsTemplatesMap<TenderingCriterionPropertyField, TenderingCriterionProperty, void> = new Map([
    [
      TenderingCriterionPropertyField.UBLExtensions,
      { meta: TenderingCriterionPropertyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderingCriterionPropertyField.UBLExtensions}
          meta={TenderingCriterionPropertyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ID,
      { meta: TenderingCriterionPropertyFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionPropertyField.ID}
          meta={TenderingCriterionPropertyFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.Name,
      { meta: TenderingCriterionPropertyFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionPropertyField.Name}
          meta={TenderingCriterionPropertyFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.Description,
      { meta: TenderingCriterionPropertyFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionPropertyField.Description}
          meta={TenderingCriterionPropertyFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.TypeCode,
      { meta: TenderingCriterionPropertyFieldMeta.TypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.TypeCode}
          meta={TenderingCriterionPropertyFieldMeta.TypeCode}
          fieldConfig={fieldConfig}
          code={value?.TypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ValueDataTypeCode,
      { meta: TenderingCriterionPropertyFieldMeta.ValueDataTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.ValueDataTypeCode}
          meta={TenderingCriterionPropertyFieldMeta.ValueDataTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ValueDataTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ValueUnitCode,
      { meta: TenderingCriterionPropertyFieldMeta.ValueUnitCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.ValueUnitCode}
          meta={TenderingCriterionPropertyFieldMeta.ValueUnitCode}
          fieldConfig={fieldConfig}
          code={value?.ValueUnitCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ValueCurrencyCode,
      { meta: TenderingCriterionPropertyFieldMeta.ValueCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.ValueCurrencyCode}
          meta={TenderingCriterionPropertyFieldMeta.ValueCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.ValueCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedAmount,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderingCriterionPropertyField.ExpectedAmount}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedAmount}
          fieldConfig={fieldConfig}
          amount={value?.ExpectedAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedID,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionPropertyField.ExpectedID}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedID}
          fieldConfig={fieldConfig}
          identifier={value?.ExpectedID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedIndicator,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingCriterionPropertyField.ExpectedIndicator}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ExpectedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedCode,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.ExpectedCode}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedCode}
          fieldConfig={fieldConfig}
          code={value?.ExpectedCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedValueNumeric,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TenderingCriterionPropertyField.ExpectedValueNumeric}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.ExpectedValueNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedDescription,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionPropertyField.ExpectedDescription}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedDescription}
          fieldConfig={fieldConfig}
          text={value?.ExpectedDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ExpectedURI,
      { meta: TenderingCriterionPropertyFieldMeta.ExpectedURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingCriterionPropertyField.ExpectedURI}
          meta={TenderingCriterionPropertyFieldMeta.ExpectedURI}
          fieldConfig={fieldConfig}
          identifier={value?.ExpectedURI}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.MaximumAmount,
      { meta: TenderingCriterionPropertyFieldMeta.MaximumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderingCriterionPropertyField.MaximumAmount}
          meta={TenderingCriterionPropertyFieldMeta.MaximumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.MinimumAmount,
      { meta: TenderingCriterionPropertyFieldMeta.MinimumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderingCriterionPropertyField.MinimumAmount}
          meta={TenderingCriterionPropertyFieldMeta.MinimumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MinimumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.MaximumValueNumeric,
      { meta: TenderingCriterionPropertyFieldMeta.MaximumValueNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TenderingCriterionPropertyField.MaximumValueNumeric}
          meta={TenderingCriterionPropertyFieldMeta.MaximumValueNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumValueNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.MinimumValueNumeric,
      { meta: TenderingCriterionPropertyFieldMeta.MinimumValueNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TenderingCriterionPropertyField.MinimumValueNumeric}
          meta={TenderingCriterionPropertyFieldMeta.MinimumValueNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MinimumValueNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.MaximumQuantity,
      { meta: TenderingCriterionPropertyFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderingCriterionPropertyField.MaximumQuantity}
          meta={TenderingCriterionPropertyFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.MinimumQuantity,
      { meta: TenderingCriterionPropertyFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderingCriterionPropertyField.MinimumQuantity}
          meta={TenderingCriterionPropertyFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.TranslationTypeCode,
      { meta: TenderingCriterionPropertyFieldMeta.TranslationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.TranslationTypeCode}
          meta={TenderingCriterionPropertyFieldMeta.TranslationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TranslationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.CertificationLevelDescription,
      { meta: TenderingCriterionPropertyFieldMeta.CertificationLevelDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingCriterionPropertyField.CertificationLevelDescription}
          meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription}
          fieldConfig={fieldConfig}
          text={value?.CertificationLevelDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.CopyQualityTypeCode,
      { meta: TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingCriterionPropertyField.CopyQualityTypeCode}
          meta={TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CopyQualityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.ApplicablePeriod,
      { meta: TenderingCriterionPropertyFieldMeta.ApplicablePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingCriterionPropertyField.ApplicablePeriod}
          meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod}
          fieldConfig={fieldConfig}
          period={value?.ApplicablePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingCriterionPropertyField.TemplateEvidence,
      { meta: TenderingCriterionPropertyFieldMeta.TemplateEvidence,
        template: ({value, renderContext, fieldConfig}) => <EvidenceDisplay
          key={TenderingCriterionPropertyField.TemplateEvidence}
          meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence}
          fieldConfig={fieldConfig}
          evidence={value?.TemplateEvidence}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderingCriterionPropertyDisplay<TFieldMeta>({ meta, fieldConfig, tenderingCriterionProperty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderingCriterionPropertyTypeName,
    meta,
    fieldConfig,
    tenderingCriterionProperty,
    renderContext,
    TenderingCriterionPropertySubElementsMap,
  )
}

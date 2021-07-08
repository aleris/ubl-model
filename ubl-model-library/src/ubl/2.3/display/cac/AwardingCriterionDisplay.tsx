import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardingCriterion } from  '../../model/cac/AwardingCriterion'
import { AwardingCriterionField, AwardingCriterionFieldMeta, AwardingCriterionTypeName } from  '../../meta/cac/AwardingCriterionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AwardingCriterion, void>
  awardingCriterion: AwardingCriterion[] | undefined
  renderContext: RenderContext
}

export const AwardingCriterionSubElementsMap: SubElementsTemplatesMap<AwardingCriterionField, AwardingCriterion, void> = new Map([
    [
      AwardingCriterionField.UBLExtensions,
      { meta: AwardingCriterionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AwardingCriterionField.UBLExtensions}
          meta={AwardingCriterionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.ID,
      { meta: AwardingCriterionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardingCriterionField.ID}
          meta={AwardingCriterionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.AwardingCriterionTypeCode,
      { meta: AwardingCriterionFieldMeta.AwardingCriterionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AwardingCriterionField.AwardingCriterionTypeCode}
          meta={AwardingCriterionFieldMeta.AwardingCriterionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.AwardingCriterionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.Name,
      { meta: AwardingCriterionFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionField.Name}
          meta={AwardingCriterionFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.Description,
      { meta: AwardingCriterionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionField.Description}
          meta={AwardingCriterionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.WeightNumeric,
      { meta: AwardingCriterionFieldMeta.WeightNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={AwardingCriterionField.WeightNumeric}
          meta={AwardingCriterionFieldMeta.WeightNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.WeightNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.Weight,
      { meta: AwardingCriterionFieldMeta.Weight,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionField.Weight}
          meta={AwardingCriterionFieldMeta.Weight}
          fieldConfig={fieldConfig}
          text={value?.Weight}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.CalculationExpression,
      { meta: AwardingCriterionFieldMeta.CalculationExpression,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionField.CalculationExpression}
          meta={AwardingCriterionFieldMeta.CalculationExpression}
          fieldConfig={fieldConfig}
          text={value?.CalculationExpression}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.CalculationExpressionCode,
      { meta: AwardingCriterionFieldMeta.CalculationExpressionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AwardingCriterionField.CalculationExpressionCode}
          meta={AwardingCriterionFieldMeta.CalculationExpressionCode}
          fieldConfig={fieldConfig}
          code={value?.CalculationExpressionCode}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.MinimumQuantity,
      { meta: AwardingCriterionFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={AwardingCriterionField.MinimumQuantity}
          meta={AwardingCriterionFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.MaximumQuantity,
      { meta: AwardingCriterionFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={AwardingCriterionField.MaximumQuantity}
          meta={AwardingCriterionFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.MinimumAmount,
      { meta: AwardingCriterionFieldMeta.MinimumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={AwardingCriterionField.MinimumAmount}
          meta={AwardingCriterionFieldMeta.MinimumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MinimumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.MaximumAmount,
      { meta: AwardingCriterionFieldMeta.MaximumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={AwardingCriterionField.MaximumAmount}
          meta={AwardingCriterionFieldMeta.MaximumAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.MinimumImprovementBid,
      { meta: AwardingCriterionFieldMeta.MinimumImprovementBid,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionField.MinimumImprovementBid}
          meta={AwardingCriterionFieldMeta.MinimumImprovementBid}
          fieldConfig={fieldConfig}
          text={value?.MinimumImprovementBid}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionField.SubordinateAwardingCriterion,
      { meta: AwardingCriterionFieldMeta.SubordinateAwardingCriterion,
        template: ({value, renderContext, fieldConfig}) => <AwardingCriterionDisplay
          key={AwardingCriterionField.SubordinateAwardingCriterion}
          meta={AwardingCriterionFieldMeta.SubordinateAwardingCriterion}
          fieldConfig={fieldConfig}
          awardingCriterion={value?.SubordinateAwardingCriterion}
          renderContext={renderContext}
        />}
    ]
]) 

export function AwardingCriterionDisplay<TFieldMeta>({ meta, fieldConfig, awardingCriterion, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AwardingCriterionTypeName,
    meta,
    fieldConfig,
    awardingCriterion,
    renderContext,
    AwardingCriterionSubElementsMap,
  )
}

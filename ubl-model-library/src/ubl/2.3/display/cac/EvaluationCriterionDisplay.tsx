import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EvaluationCriterion } from  '../../model/cac/EvaluationCriterion'
import { EvaluationCriterionField, EvaluationCriterionFieldMeta, EvaluationCriterionTypeName } from  '../../meta/cac/EvaluationCriterionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EvidenceDisplay } from './EvidenceDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EvaluationCriterion, void>
  evaluationCriterion: EvaluationCriterion[] | undefined
  renderContext: RenderContext
}

export const EvaluationCriterionSubElementsMap: SubElementsTemplatesMap<EvaluationCriterionField, EvaluationCriterion, void> = new Map([
    [
      EvaluationCriterionField.UBLExtensions,
      { meta: EvaluationCriterionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EvaluationCriterionField.UBLExtensions}
          meta={EvaluationCriterionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.EvaluationCriterionTypeCode,
      { meta: EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EvaluationCriterionField.EvaluationCriterionTypeCode}
          meta={EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.EvaluationCriterionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.Description,
      { meta: EvaluationCriterionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EvaluationCriterionField.Description}
          meta={EvaluationCriterionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.ThresholdAmount,
      { meta: EvaluationCriterionFieldMeta.ThresholdAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={EvaluationCriterionField.ThresholdAmount}
          meta={EvaluationCriterionFieldMeta.ThresholdAmount}
          fieldConfig={fieldConfig}
          amount={value?.ThresholdAmount}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.ThresholdQuantity,
      { meta: EvaluationCriterionFieldMeta.ThresholdQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={EvaluationCriterionField.ThresholdQuantity}
          meta={EvaluationCriterionFieldMeta.ThresholdQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ThresholdQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.ExpressionCode,
      { meta: EvaluationCriterionFieldMeta.ExpressionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EvaluationCriterionField.ExpressionCode}
          meta={EvaluationCriterionFieldMeta.ExpressionCode}
          fieldConfig={fieldConfig}
          code={value?.ExpressionCode}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.Expression,
      { meta: EvaluationCriterionFieldMeta.Expression,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EvaluationCriterionField.Expression}
          meta={EvaluationCriterionFieldMeta.Expression}
          fieldConfig={fieldConfig}
          text={value?.Expression}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.DurationPeriod,
      { meta: EvaluationCriterionFieldMeta.DurationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={EvaluationCriterionField.DurationPeriod}
          meta={EvaluationCriterionFieldMeta.DurationPeriod}
          fieldConfig={fieldConfig}
          period={value?.DurationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      EvaluationCriterionField.SuggestedEvidence,
      { meta: EvaluationCriterionFieldMeta.SuggestedEvidence,
        template: ({value, renderContext, fieldConfig}) => <EvidenceDisplay
          key={EvaluationCriterionField.SuggestedEvidence}
          meta={EvaluationCriterionFieldMeta.SuggestedEvidence}
          fieldConfig={fieldConfig}
          evidence={value?.SuggestedEvidence}
          renderContext={renderContext}
        />}
    ]
]) 

export function EvaluationCriterionDisplay<TFieldMeta>({ meta, fieldConfig, evaluationCriterion, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EvaluationCriterionTypeName,
    meta,
    fieldConfig,
    evaluationCriterion,
    renderContext,
    EvaluationCriterionSubElementsMap,
  )
}

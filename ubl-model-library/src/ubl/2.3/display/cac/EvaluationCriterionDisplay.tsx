import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EvaluationCriterion } from  '../../model/cac/EvaluationCriterion'
import { EvaluationCriterionFieldMeta } from  '../../meta/cac/EvaluationCriterionMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceDisplay from './EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EvaluationCriterion | undefined
  meta: FieldMeta<T>
}

export default function EvaluationCriterionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EvaluationCriterion">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EvaluationCriterionFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Evaluation Criterion Type Code"
            value={value.EvaluationCriterionTypeCode?.[0]}
            meta={EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={EvaluationCriterionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={EvaluationCriterionFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Threshold Amount"
            value={value.ThresholdAmount?.[0]}
            meta={EvaluationCriterionFieldMeta.ThresholdAmount}
          />

          <QuantityDisplay
            label="Threshold Quantity"
            value={value.ThresholdQuantity?.[0]}
            meta={EvaluationCriterionFieldMeta.ThresholdQuantity}
          />

          <CodeDisplay
            label="Expression Code"
            value={value.ExpressionCode?.[0]}
            meta={EvaluationCriterionFieldMeta.ExpressionCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Expression"
            label="Expression"
            items={value.Expression}
            meta={EvaluationCriterionFieldMeta.Expression} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Expression"
                value={itemValue}
                meta={EvaluationCriterionFieldMeta.Expression}
              />
            }
          />

          <PeriodDisplay
            label="Duration Period"
            value={value.DurationPeriod?.[0]}
            meta={EvaluationCriterionFieldMeta.DurationPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Evidence ubl-SuggestedEvidence"
            label="Suggested Evidence"
            items={value.SuggestedEvidence}
            meta={EvaluationCriterionFieldMeta.SuggestedEvidence} 
            itemDisplay={ (itemValue: Evidence, key: string | number) =>
              <EvidenceDisplay
                key={key}
                label="Suggested Evidence"
                value={itemValue}
                meta={EvaluationCriterionFieldMeta.SuggestedEvidence}
              />
            }
          />
        </div>
    </div>
  )
}

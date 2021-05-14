import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EvaluationCriterion
  meta: FieldMeta<T>
}

export default function EvaluationCriterionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EvaluationCriterion ubl-EvaluationCriterionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EvaluationCriterion ubl-UBLExtensions"
          meta={EvaluationCriterionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EvaluationCriterion ubl-Code ubl-EvaluationCriterionTypeCode"
          meta={EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode} 
          value={value.EvaluationCriterionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Evaluation Criterion Type Code"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-EvaluationCriterion ubl-Text ubl-Description"
          meta={EvaluationCriterionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EvaluationCriterion ubl-Amount ubl-ThresholdAmount"
          meta={EvaluationCriterionFieldMeta.ThresholdAmount} 
          value={value.ThresholdAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Threshold Amount"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.ThresholdAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EvaluationCriterion ubl-Quantity ubl-ThresholdQuantity"
          meta={EvaluationCriterionFieldMeta.ThresholdQuantity} 
          value={value.ThresholdQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Threshold Quantity"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.ThresholdQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EvaluationCriterion ubl-Code ubl-ExpressionCode"
          meta={EvaluationCriterionFieldMeta.ExpressionCode} 
          value={value.ExpressionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Expression Code"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.ExpressionCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-EvaluationCriterion ubl-Text ubl-Expression"
          meta={EvaluationCriterionFieldMeta.Expression} 
          value={value.Expression}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Expression"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.Expression}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EvaluationCriterion ubl-Period ubl-DurationPeriod"
          meta={EvaluationCriterionFieldMeta.DurationPeriod} 
          value={value.DurationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Duration Period"
              value={itemValue}
              meta={EvaluationCriterionFieldMeta.DurationPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EvaluationCriterion ubl-Evidence ubl-SuggestedEvidence"
          meta={EvaluationCriterionFieldMeta.SuggestedEvidence} 
          value={value.SuggestedEvidence}
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

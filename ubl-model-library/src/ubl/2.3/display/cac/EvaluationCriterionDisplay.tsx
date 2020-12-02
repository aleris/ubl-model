import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: EvaluationCriterion
  meta: FieldMeta<T>
}

export default function EvaluationCriterionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EvaluationCriterionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode} 
          value={value.EvaluationCriterionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EvaluationCriterionFieldMeta.EvaluationCriterionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EvaluationCriterionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.ThresholdAmount} 
          value={value.ThresholdAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={EvaluationCriterionFieldMeta.ThresholdAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.ThresholdQuantity} 
          value={value.ThresholdQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={EvaluationCriterionFieldMeta.ThresholdQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.ExpressionCode} 
          value={value.ExpressionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EvaluationCriterionFieldMeta.ExpressionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.Expression} 
          value={value.Expression}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EvaluationCriterionFieldMeta.Expression} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.DurationPeriod} 
          value={value.DurationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={EvaluationCriterionFieldMeta.DurationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvaluationCriterionFieldMeta.SuggestedEvidence} 
          value={value.SuggestedEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay key={key} meta={EvaluationCriterionFieldMeta.SuggestedEvidence} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

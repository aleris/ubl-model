import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardingCriterion } from  '../../model/cac/AwardingCriterion'
import { AwardingCriterionFieldMeta } from  '../../meta/cac/AwardingCriterionMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AwardingCriterion | undefined
  meta: FieldMeta<T>
}

export default function AwardingCriterionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AwardingCriterion">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AwardingCriterionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AwardingCriterionFieldMeta.ID}
          />

          <CodeDisplay
            label="Awarding Criterion Type Code"
            value={value.AwardingCriterionTypeCode?.[0]}
            meta={AwardingCriterionFieldMeta.AwardingCriterionTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Name"
            label="Name"
            items={value.Name}
            meta={AwardingCriterionFieldMeta.Name} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Name"
                value={itemValue}
                meta={AwardingCriterionFieldMeta.Name}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AwardingCriterionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AwardingCriterionFieldMeta.Description}
              />
            }
          />

          <NumericDisplay
            label="Weight Numeric"
            value={value.WeightNumeric?.[0]}
            meta={AwardingCriterionFieldMeta.WeightNumeric}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Weight"
            label="Weight"
            items={value.Weight}
            meta={AwardingCriterionFieldMeta.Weight} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Weight"
                value={itemValue}
                meta={AwardingCriterionFieldMeta.Weight}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-CalculationExpression"
            label="Calculation Expression"
            items={value.CalculationExpression}
            meta={AwardingCriterionFieldMeta.CalculationExpression} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Calculation Expression"
                value={itemValue}
                meta={AwardingCriterionFieldMeta.CalculationExpression}
              />
            }
          />

          <CodeDisplay
            label="Calculation Expression Code"
            value={value.CalculationExpressionCode?.[0]}
            meta={AwardingCriterionFieldMeta.CalculationExpressionCode}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={AwardingCriterionFieldMeta.MinimumQuantity}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={AwardingCriterionFieldMeta.MaximumQuantity}
          />

          <AmountDisplay
            label="Minimum Amount"
            value={value.MinimumAmount?.[0]}
            meta={AwardingCriterionFieldMeta.MinimumAmount}
          />

          <AmountDisplay
            label="Maximum Amount"
            value={value.MaximumAmount?.[0]}
            meta={AwardingCriterionFieldMeta.MaximumAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-MinimumImprovementBid"
            label="Minimum Improvement Bid"
            items={value.MinimumImprovementBid}
            meta={AwardingCriterionFieldMeta.MinimumImprovementBid} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Minimum Improvement Bid"
                value={itemValue}
                meta={AwardingCriterionFieldMeta.MinimumImprovementBid}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AwardingCriterion ubl-SubordinateAwardingCriterion"
            label="Subordinate Awarding Criterion"
            items={value.SubordinateAwardingCriterion}
            meta={AwardingCriterionFieldMeta.SubordinateAwardingCriterion} 
            itemDisplay={ (itemValue: AwardingCriterion, key: string | number) =>
              <AwardingCriterionDisplay
                key={key}
                label="Subordinate Awarding Criterion"
                value={itemValue}
                meta={AwardingCriterionFieldMeta.SubordinateAwardingCriterion}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: AwardingCriterion
  meta: FieldMeta<T>
}

export default function AwardingCriterionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AwardingCriterion ubl-AwardingCriterionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AwardingCriterion ubl-UBLExtensions"
          meta={AwardingCriterionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Identifier ubl-ID"
          meta={AwardingCriterionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Code ubl-AwardingCriterionTypeCode"
          meta={AwardingCriterionFieldMeta.AwardingCriterionTypeCode} 
          value={value.AwardingCriterionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Awarding Criterion Type Code"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.AwardingCriterionTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Text ubl-Name"
          meta={AwardingCriterionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Text ubl-Description"
          meta={AwardingCriterionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Numeric ubl-WeightNumeric"
          meta={AwardingCriterionFieldMeta.WeightNumeric} 
          value={value.WeightNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Weight Numeric"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.WeightNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Text ubl-Weight"
          meta={AwardingCriterionFieldMeta.Weight} 
          value={value.Weight}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Weight"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.Weight}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Text ubl-CalculationExpression"
          meta={AwardingCriterionFieldMeta.CalculationExpression} 
          value={value.CalculationExpression}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Calculation Expression"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.CalculationExpression}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Code ubl-CalculationExpressionCode"
          meta={AwardingCriterionFieldMeta.CalculationExpressionCode} 
          value={value.CalculationExpressionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Calculation Expression Code"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.CalculationExpressionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Quantity ubl-MinimumQuantity"
          meta={AwardingCriterionFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Quantity ubl-MaximumQuantity"
          meta={AwardingCriterionFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Amount ubl-MinimumAmount"
          meta={AwardingCriterionFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Minimum Amount"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.MinimumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Amount ubl-MaximumAmount"
          meta={AwardingCriterionFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Amount"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.MaximumAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardingCriterion ubl-Text ubl-MinimumImprovementBid"
          meta={AwardingCriterionFieldMeta.MinimumImprovementBid} 
          value={value.MinimumImprovementBid}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Minimum Improvement Bid"
              value={itemValue}
              meta={AwardingCriterionFieldMeta.MinimumImprovementBid}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardingCriterion ubl-SubordinateAwardingCriterion"
          meta={AwardingCriterionFieldMeta.SubordinateAwardingCriterion} 
          value={value.SubordinateAwardingCriterion}
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

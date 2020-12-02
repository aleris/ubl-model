import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: AwardingCriterion
  meta: FieldMeta<T>
}

export default function AwardingCriterionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AwardingCriterionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardingCriterionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.AwardingCriterionTypeCode} 
          value={value.AwardingCriterionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AwardingCriterionFieldMeta.AwardingCriterionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.WeightNumeric} 
          value={value.WeightNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={AwardingCriterionFieldMeta.WeightNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.Weight} 
          value={value.Weight}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionFieldMeta.Weight} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.CalculationExpression} 
          value={value.CalculationExpression}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionFieldMeta.CalculationExpression} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.CalculationExpressionCode} 
          value={value.CalculationExpressionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AwardingCriterionFieldMeta.CalculationExpressionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={AwardingCriterionFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={AwardingCriterionFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={AwardingCriterionFieldMeta.MinimumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={AwardingCriterionFieldMeta.MaximumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.MinimumImprovementBid} 
          value={value.MinimumImprovementBid}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardingCriterionFieldMeta.MinimumImprovementBid} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardingCriterionFieldMeta.SubordinateAwardingCriterion} 
          value={value.SubordinateAwardingCriterion}
          itemDisplay={ (itemValue: AwardingCriterion, key: string | number) =>
            <AwardingCriterionDisplay key={key} meta={AwardingCriterionFieldMeta.SubordinateAwardingCriterion} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

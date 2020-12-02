import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxCategory } from  '../../model/cac/TaxCategory'
import { TaxCategoryFieldMeta } from  '../../meta/cac/TaxCategoryMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TaxSchemeDisplay from './TaxSchemeDisplay'
import { TaxScheme } from '../../model/cac/TaxScheme'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TaxCategory
  meta: FieldMeta<T>
}

export default function TaxCategoryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TaxCategoryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TaxCategoryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TaxCategoryFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TaxCategoryFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TaxCategoryFieldMeta.Percent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.BaseUnitMeasure} 
          value={value.BaseUnitMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={TaxCategoryFieldMeta.BaseUnitMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.PerUnitAmount} 
          value={value.PerUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxCategoryFieldMeta.PerUnitAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.TaxExemptionReasonCode} 
          value={value.TaxExemptionReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TaxCategoryFieldMeta.TaxExemptionReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.TaxExemptionReason} 
          value={value.TaxExemptionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TaxCategoryFieldMeta.TaxExemptionReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.TierRange} 
          value={value.TierRange}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TaxCategoryFieldMeta.TierRange} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.TierRatePercent} 
          value={value.TierRatePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TaxCategoryFieldMeta.TierRatePercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxCategoryFieldMeta.TaxScheme} 
          value={value.TaxScheme}
          itemDisplay={ (itemValue: TaxScheme, key: string | number) =>
            <TaxSchemeDisplay key={key} meta={TaxCategoryFieldMeta.TaxScheme} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

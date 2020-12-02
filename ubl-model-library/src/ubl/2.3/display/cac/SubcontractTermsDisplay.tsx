import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SubcontractTerms } from  '../../model/cac/SubcontractTerms'
import { SubcontractTermsFieldMeta } from  '../../meta/cac/SubcontractTermsMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: SubcontractTerms
  meta: FieldMeta<T>
}

export default function SubcontractTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SubcontractTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.Rate} 
          value={value.Rate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={SubcontractTermsFieldMeta.Rate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.UnknownPriceIndicator} 
          value={value.UnknownPriceIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={SubcontractTermsFieldMeta.UnknownPriceIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SubcontractTermsFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={SubcontractTermsFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.SubcontractingConditionsCode} 
          value={value.SubcontractingConditionsCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SubcontractTermsFieldMeta.SubcontractingConditionsCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.MaximumPercent} 
          value={value.MaximumPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={SubcontractTermsFieldMeta.MaximumPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SubcontractTermsFieldMeta.MinimumPercent} 
          value={value.MinimumPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={SubcontractTermsFieldMeta.MinimumPercent} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: SubcontractTerms | undefined
  meta: FieldMeta<T>
}

export default function SubcontractTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SubcontractTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SubcontractTermsFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Rate"
            value={value.Rate?.[0]}
            meta={SubcontractTermsFieldMeta.Rate}
          />

          <IndicatorDisplay
            label="Unknown Price"
            value={value.UnknownPriceIndicator?.[0]}
            meta={SubcontractTermsFieldMeta.UnknownPriceIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={SubcontractTermsFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={SubcontractTermsFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={SubcontractTermsFieldMeta.Amount}
          />

          <CodeDisplay
            label="Subcontracting Conditions Code"
            value={value.SubcontractingConditionsCode?.[0]}
            meta={SubcontractTermsFieldMeta.SubcontractingConditionsCode}
          />

          <NumericDisplay
            label="Maximum Percent"
            value={value.MaximumPercent?.[0]}
            meta={SubcontractTermsFieldMeta.MaximumPercent}
          />

          <NumericDisplay
            label="Minimum Percent"
            value={value.MinimumPercent?.[0]}
            meta={SubcontractTermsFieldMeta.MinimumPercent}
          />
        </div>
    </div>
  )
}

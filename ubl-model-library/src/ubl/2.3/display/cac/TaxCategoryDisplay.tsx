import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TaxCategory | undefined
  meta: FieldMeta<T>
}

export default function TaxCategoryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TaxCategory">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TaxCategoryFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TaxCategoryFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TaxCategoryFieldMeta.Name}
          />

          <NumericDisplay
            label="Percent"
            value={value.Percent?.[0]}
            meta={TaxCategoryFieldMeta.Percent}
          />

          <MeasureDisplay
            label="Base Unit Measure"
            value={value.BaseUnitMeasure?.[0]}
            meta={TaxCategoryFieldMeta.BaseUnitMeasure}
          />

          <AmountDisplay
            label="Per Unit Amount"
            value={value.PerUnitAmount?.[0]}
            meta={TaxCategoryFieldMeta.PerUnitAmount}
          />

          <CodeDisplay
            label="Tax Exemption Reason Code"
            value={value.TaxExemptionReasonCode?.[0]}
            meta={TaxCategoryFieldMeta.TaxExemptionReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TaxExemptionReason"
            label="Tax Exemption Reason"
            items={value.TaxExemptionReason}
            meta={TaxCategoryFieldMeta.TaxExemptionReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Tax Exemption Reason"
                value={itemValue}
                meta={TaxCategoryFieldMeta.TaxExemptionReason}
              />
            }
          />

          <TextDisplay
            label="Tier Range"
            value={value.TierRange?.[0]}
            meta={TaxCategoryFieldMeta.TierRange}
          />

          <NumericDisplay
            label="Tier Rate"
            value={value.TierRatePercent?.[0]}
            meta={TaxCategoryFieldMeta.TierRatePercent}
          />

          <TaxSchemeDisplay
            label="Tax Scheme"
            value={value.TaxScheme?.[0]}
            meta={TaxCategoryFieldMeta.TaxScheme}
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TaxCategory
  meta: FieldMeta<T>
}

export default function TaxCategoryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TaxCategory ubl-TaxCategoryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TaxCategory ubl-UBLExtensions"
          meta={TaxCategoryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TaxCategoryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Identifier ubl-ID"
          meta={TaxCategoryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TaxCategoryFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Text ubl-Name"
          meta={TaxCategoryFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TaxCategoryFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Numeric ubl-Percent"
          meta={TaxCategoryFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Percent"
              value={itemValue}
              meta={TaxCategoryFieldMeta.Percent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Measure ubl-BaseUnitMeasure"
          meta={TaxCategoryFieldMeta.BaseUnitMeasure} 
          value={value.BaseUnitMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Base Unit Measure"
              value={itemValue}
              meta={TaxCategoryFieldMeta.BaseUnitMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Amount ubl-PerUnitAmount"
          meta={TaxCategoryFieldMeta.PerUnitAmount} 
          value={value.PerUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Per Unit Amount"
              value={itemValue}
              meta={TaxCategoryFieldMeta.PerUnitAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Code ubl-TaxExemptionReasonCode"
          meta={TaxCategoryFieldMeta.TaxExemptionReasonCode} 
          value={value.TaxExemptionReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Exemption Reason Code"
              value={itemValue}
              meta={TaxCategoryFieldMeta.TaxExemptionReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Text ubl-TaxExemptionReason"
          meta={TaxCategoryFieldMeta.TaxExemptionReason} 
          value={value.TaxExemptionReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Tax Exemption Reason"
              value={itemValue}
              meta={TaxCategoryFieldMeta.TaxExemptionReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Text ubl-TierRange"
          meta={TaxCategoryFieldMeta.TierRange} 
          value={value.TierRange}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Tier Range"
              value={itemValue}
              meta={TaxCategoryFieldMeta.TierRange}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxCategory ubl-Numeric ubl-TierRatePercent"
          meta={TaxCategoryFieldMeta.TierRatePercent} 
          value={value.TierRatePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Tier Rate"
              value={itemValue}
              meta={TaxCategoryFieldMeta.TierRatePercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TaxCategory ubl-TaxScheme"
          meta={TaxCategoryFieldMeta.TaxScheme} 
          value={value.TaxScheme}
          itemDisplay={ (itemValue: TaxScheme, key: string | number) =>
            <TaxSchemeDisplay
              key={key}
              label="Tax Scheme"
              value={itemValue}
              meta={TaxCategoryFieldMeta.TaxScheme}
            />
          }
        />
        </div>
    </div>
  )
}

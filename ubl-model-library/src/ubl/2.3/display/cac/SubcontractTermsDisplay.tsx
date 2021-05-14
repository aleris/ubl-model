import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SubcontractTerms
  meta: FieldMeta<T>
}

export default function SubcontractTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SubcontractTerms ubl-SubcontractTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SubcontractTerms ubl-UBLExtensions"
          meta={SubcontractTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Numeric ubl-Rate"
          meta={SubcontractTermsFieldMeta.Rate} 
          value={value.Rate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Rate"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.Rate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Indicator ubl-UnknownPriceIndicator"
          meta={SubcontractTermsFieldMeta.UnknownPriceIndicator} 
          value={value.UnknownPriceIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Unknown Price"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.UnknownPriceIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Text ubl-Description"
          meta={SubcontractTermsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Amount"
          meta={SubcontractTermsFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Code ubl-SubcontractingConditionsCode"
          meta={SubcontractTermsFieldMeta.SubcontractingConditionsCode} 
          value={value.SubcontractingConditionsCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Subcontracting Conditions Code"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.SubcontractingConditionsCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Numeric ubl-MaximumPercent"
          meta={SubcontractTermsFieldMeta.MaximumPercent} 
          value={value.MaximumPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Percent"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.MaximumPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SubcontractTerms ubl-Numeric ubl-MinimumPercent"
          meta={SubcontractTermsFieldMeta.MinimumPercent} 
          value={value.MinimumPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Minimum Percent"
              value={itemValue}
              meta={SubcontractTermsFieldMeta.MinimumPercent}
            />
          }
        />
        </div>
    </div>
  )
}

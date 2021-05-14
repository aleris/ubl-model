import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RetailPlannedImpact } from  '../../model/cac/RetailPlannedImpact'
import { RetailPlannedImpactFieldMeta } from  '../../meta/cac/RetailPlannedImpactMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RetailPlannedImpact
  meta: FieldMeta<T>
}

export default function RetailPlannedImpactDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RetailPlannedImpact ubl-RetailPlannedImpactType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RetailPlannedImpact ubl-UBLExtensions"
          meta={RetailPlannedImpactFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RetailPlannedImpactFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailPlannedImpact ubl-Amount"
          meta={RetailPlannedImpactFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={RetailPlannedImpactFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailPlannedImpact ubl-Code ubl-ForecastPurposeCode"
          meta={RetailPlannedImpactFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Purpose Code"
              value={itemValue}
              meta={RetailPlannedImpactFieldMeta.ForecastPurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailPlannedImpact ubl-Code ubl-ForecastTypeCode"
          meta={RetailPlannedImpactFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Type Code"
              value={itemValue}
              meta={RetailPlannedImpactFieldMeta.ForecastTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailPlannedImpact ubl-Period"
          meta={RetailPlannedImpactFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={RetailPlannedImpactFieldMeta.Period}
            />
          }
        />
        </div>
    </div>
  )
}

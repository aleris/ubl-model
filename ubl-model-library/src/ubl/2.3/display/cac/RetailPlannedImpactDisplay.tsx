import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: RetailPlannedImpact
  meta: FieldMeta<T>
}

export default function RetailPlannedImpactDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RetailPlannedImpactFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RetailPlannedImpactFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailPlannedImpactFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RetailPlannedImpactFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailPlannedImpactFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RetailPlannedImpactFieldMeta.ForecastPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailPlannedImpactFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RetailPlannedImpactFieldMeta.ForecastTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailPlannedImpactFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RetailPlannedImpactFieldMeta.Period} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

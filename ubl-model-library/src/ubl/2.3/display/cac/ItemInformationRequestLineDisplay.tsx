import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemInformationRequestLine } from  '../../model/cac/ItemInformationRequestLine'
import { ItemInformationRequestLineFieldMeta } from  '../../meta/cac/ItemInformationRequestLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SalesItemDisplay from './SalesItemDisplay'
import { SalesItem } from '../../model/cac/SalesItem'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemInformationRequestLine | undefined
  meta: FieldMeta<T>
}

export default function ItemInformationRequestLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemInformationRequestLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemInformationRequestLineFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Time Frequency Code"
            value={value.TimeFrequencyCode?.[0]}
            meta={ItemInformationRequestLineFieldMeta.TimeFrequencyCode}
          />

          <CodeDisplay
            label="Supply Chain Activity Type Code"
            value={value.SupplyChainActivityTypeCode?.[0]}
            meta={ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode}
          />

          <CodeDisplay
            label="Forecast Type Code"
            value={value.ForecastTypeCode?.[0]}
            meta={ItemInformationRequestLineFieldMeta.ForecastTypeCode}
          />

          <CodeDisplay
            label="Performance Metric Type Code"
            value={value.PerformanceMetricTypeCode?.[0]}
            meta={ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period"
            label="Period"
            items={value.Period}
            meta={ItemInformationRequestLineFieldMeta.Period} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Period"
                value={itemValue}
                meta={ItemInformationRequestLineFieldMeta.Period}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-SalesItem"
            label="Sales Item"
            items={value.SalesItem}
            meta={ItemInformationRequestLineFieldMeta.SalesItem} 
            itemDisplay={ (itemValue: SalesItem, key: string | number) =>
              <SalesItemDisplay
                key={key}
                label="Sales Item"
                value={itemValue}
                meta={ItemInformationRequestLineFieldMeta.SalesItem}
              />
            }
          />
        </div>
    </div>
  )
}

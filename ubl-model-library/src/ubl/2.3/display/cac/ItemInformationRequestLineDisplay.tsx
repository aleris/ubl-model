import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemInformationRequestLine
  meta: FieldMeta<T>
}

export default function ItemInformationRequestLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemInformationRequestLine ubl-ItemInformationRequestLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemInformationRequestLine ubl-UBLExtensions"
          meta={ItemInformationRequestLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemInformationRequestLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInformationRequestLine ubl-Code ubl-TimeFrequencyCode"
          meta={ItemInformationRequestLineFieldMeta.TimeFrequencyCode} 
          value={value.TimeFrequencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Time Frequency Code"
              value={itemValue}
              meta={ItemInformationRequestLineFieldMeta.TimeFrequencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInformationRequestLine ubl-Code ubl-SupplyChainActivityTypeCode"
          meta={ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Supply Chain Activity Type Code"
              value={itemValue}
              meta={ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInformationRequestLine ubl-Code ubl-ForecastTypeCode"
          meta={ItemInformationRequestLineFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Type Code"
              value={itemValue}
              meta={ItemInformationRequestLineFieldMeta.ForecastTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInformationRequestLine ubl-Code ubl-PerformanceMetricTypeCode"
          meta={ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Performance Metric Type Code"
              value={itemValue}
              meta={ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemInformationRequestLine ubl-Period"
          meta={ItemInformationRequestLineFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={ItemInformationRequestLineFieldMeta.Period}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemInformationRequestLine ubl-SalesItem"
          meta={ItemInformationRequestLineFieldMeta.SalesItem} 
          value={value.SalesItem}
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

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ItemInformationRequestLine
  meta: FieldMeta<T>
}

export default function ItemInformationRequestLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemInformationRequestLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.TimeFrequencyCode} 
          value={value.TimeFrequencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemInformationRequestLineFieldMeta.TimeFrequencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemInformationRequestLineFieldMeta.SupplyChainActivityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemInformationRequestLineFieldMeta.ForecastTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemInformationRequestLineFieldMeta.PerformanceMetricTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ItemInformationRequestLineFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInformationRequestLineFieldMeta.SalesItem} 
          value={value.SalesItem}
          itemDisplay={ (itemValue: SalesItem, key: string | number) =>
            <SalesItemDisplay key={key} meta={ItemInformationRequestLineFieldMeta.SalesItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

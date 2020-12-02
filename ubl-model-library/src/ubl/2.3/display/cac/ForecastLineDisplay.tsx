import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastLine } from  '../../model/cac/ForecastLine'
import { ForecastLineFieldMeta } from  '../../meta/cac/ForecastLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SalesItemDisplay from './SalesItemDisplay'
import { SalesItem } from '../../model/cac/SalesItem'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ForecastLine
  meta: FieldMeta<T>
}

export default function ForecastLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForecastLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForecastLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForecastLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastLineFieldMeta.FrozenDocumentIndicator} 
          value={value.FrozenDocumentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ForecastLineFieldMeta.FrozenDocumentIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastLineFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastLineFieldMeta.ForecastTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastLineFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ForecastLineFieldMeta.ForecastPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastLineFieldMeta.SalesItem} 
          value={value.SalesItem}
          itemDisplay={ (itemValue: SalesItem, key: string | number) =>
            <SalesItemDisplay key={key} meta={ForecastLineFieldMeta.SalesItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

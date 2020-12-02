import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PerformanceDataLine } from  '../../model/cac/PerformanceDataLine'
import { PerformanceDataLineFieldMeta } from  '../../meta/cac/PerformanceDataLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PerformanceDataLine
  meta: FieldMeta<T>
}

export default function PerformanceDataLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PerformanceDataLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PerformanceDataLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PerformanceDataLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.PerformanceValueQuantity} 
          value={value.PerformanceValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={PerformanceDataLineFieldMeta.PerformanceValueQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PerformanceDataLineFieldMeta.PerformanceMetricTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PerformanceDataLineFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PerformanceDataLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={PerformanceDataLineFieldMeta.Item} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

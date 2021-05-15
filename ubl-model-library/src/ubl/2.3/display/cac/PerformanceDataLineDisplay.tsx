import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: PerformanceDataLine | undefined
  meta: FieldMeta<T>
}

export default function PerformanceDataLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PerformanceDataLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PerformanceDataLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PerformanceDataLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={PerformanceDataLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={PerformanceDataLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Performance Value"
            value={value.PerformanceValueQuantity?.[0]}
            meta={PerformanceDataLineFieldMeta.PerformanceValueQuantity}
          />

          <CodeDisplay
            label="Performance Metric Type Code"
            value={value.PerformanceMetricTypeCode?.[0]}
            meta={PerformanceDataLineFieldMeta.PerformanceMetricTypeCode}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={PerformanceDataLineFieldMeta.Period}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={PerformanceDataLineFieldMeta.Item}
          />
        </div>
    </div>
  )
}

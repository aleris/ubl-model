import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PerformanceDataLine
  meta: FieldMeta<T>
}

export default function PerformanceDataLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PerformanceDataLine ubl-PerformanceDataLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PerformanceDataLine ubl-UBLExtensions"
          meta={PerformanceDataLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PerformanceDataLine ubl-Identifier ubl-ID"
          meta={PerformanceDataLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PerformanceDataLine ubl-Text ubl-Note"
          meta={PerformanceDataLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PerformanceDataLine ubl-Quantity ubl-PerformanceValueQuantity"
          meta={PerformanceDataLineFieldMeta.PerformanceValueQuantity} 
          value={value.PerformanceValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Performance Value"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.PerformanceValueQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PerformanceDataLine ubl-Code ubl-PerformanceMetricTypeCode"
          meta={PerformanceDataLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Performance Metric Type Code"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.PerformanceMetricTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PerformanceDataLine ubl-Period"
          meta={PerformanceDataLineFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.Period}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PerformanceDataLine ubl-Item"
          meta={PerformanceDataLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={PerformanceDataLineFieldMeta.Item}
            />
          }
        />
        </div>
    </div>
  )
}

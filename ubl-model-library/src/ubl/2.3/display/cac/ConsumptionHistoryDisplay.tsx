import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionHistory } from  '../../model/cac/ConsumptionHistory'
import { ConsumptionHistoryFieldMeta } from  '../../meta/cac/ConsumptionHistoryMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ConsumptionHistory
  meta: FieldMeta<T>
}

export default function ConsumptionHistoryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionHistoryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.MeterNumber} 
          value={value.MeterNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionHistoryFieldMeta.MeterNumber} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionHistoryFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsumptionHistoryFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.ConsumptionLevelCode} 
          value={value.ConsumptionLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionHistoryFieldMeta.ConsumptionLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.ConsumptionLevel} 
          value={value.ConsumptionLevel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionHistoryFieldMeta.ConsumptionLevel} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionHistoryFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionHistoryFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ConsumptionHistoryFieldMeta.Period} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

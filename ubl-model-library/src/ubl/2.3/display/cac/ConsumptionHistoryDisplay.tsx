import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ConsumptionHistory | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionHistoryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionHistory">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionHistoryFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Meter Number"
            value={value.MeterNumber?.[0]}
            meta={ConsumptionHistoryFieldMeta.MeterNumber}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={ConsumptionHistoryFieldMeta.Quantity}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={ConsumptionHistoryFieldMeta.Amount}
          />

          <CodeDisplay
            label="Consumption Level Code"
            value={value.ConsumptionLevelCode?.[0]}
            meta={ConsumptionHistoryFieldMeta.ConsumptionLevelCode}
          />

          <TextDisplay
            label="Consumption Level Text"
            value={value.ConsumptionLevel?.[0]}
            meta={ConsumptionHistoryFieldMeta.ConsumptionLevel}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ConsumptionHistoryFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ConsumptionHistoryFieldMeta.Description}
              />
            }
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={ConsumptionHistoryFieldMeta.Period}
          />
        </div>
    </div>
  )
}

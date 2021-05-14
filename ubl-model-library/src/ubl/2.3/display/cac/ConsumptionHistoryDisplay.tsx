import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ConsumptionHistory
  meta: FieldMeta<T>
}

export default function ConsumptionHistoryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionHistory ubl-ConsumptionHistoryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionHistory ubl-UBLExtensions"
          meta={ConsumptionHistoryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionHistory ubl-Text ubl-MeterNumber"
          meta={ConsumptionHistoryFieldMeta.MeterNumber} 
          value={value.MeterNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Number"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.MeterNumber}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionHistory ubl-Quantity"
          meta={ConsumptionHistoryFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionHistory ubl-Amount"
          meta={ConsumptionHistoryFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionHistory ubl-Code ubl-ConsumptionLevelCode"
          meta={ConsumptionHistoryFieldMeta.ConsumptionLevelCode} 
          value={value.ConsumptionLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Consumption Level Code"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.ConsumptionLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionHistory ubl-Text ubl-ConsumptionLevel"
          meta={ConsumptionHistoryFieldMeta.ConsumptionLevel} 
          value={value.ConsumptionLevel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Consumption Level Text"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.ConsumptionLevel}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ConsumptionHistory ubl-Text ubl-Description"
          meta={ConsumptionHistoryFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionHistory ubl-Period"
          meta={ConsumptionHistoryFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={ConsumptionHistoryFieldMeta.Period}
            />
          }
        />
        </div>
    </div>
  )
}

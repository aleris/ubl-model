import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionAverage } from  '../../model/cac/ConsumptionAverage'
import { ConsumptionAverageFieldMeta } from  '../../meta/cac/ConsumptionAverageMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ConsumptionAverage
  meta: FieldMeta<T>
}

export default function ConsumptionAverageDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionAverage ubl-ConsumptionAverageType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionAverage ubl-UBLExtensions"
          meta={ConsumptionAverageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionAverageFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionAverage ubl-Amount ubl-AverageAmount"
          meta={ConsumptionAverageFieldMeta.AverageAmount} 
          value={value.AverageAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Average Amount"
              value={itemValue}
              meta={ConsumptionAverageFieldMeta.AverageAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ConsumptionAverage ubl-Text ubl-Description"
          meta={ConsumptionAverageFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ConsumptionAverageFieldMeta.Description}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ConsumptionAverage | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionAverageDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionAverage">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionAverageFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Average Amount"
            value={value.AverageAmount?.[0]}
            meta={ConsumptionAverageFieldMeta.AverageAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ConsumptionAverageFieldMeta.Description} 
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

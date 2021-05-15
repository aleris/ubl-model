import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Prize } from  '../../model/cac/Prize'
import { PrizeFieldMeta } from  '../../meta/cac/PrizeMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Prize | undefined
  meta: FieldMeta<T>
}

export default function PrizeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Prize">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PrizeFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Previous Rank Number"
            value={value.PreviousRankNumberNumeric?.[0]}
            meta={PrizeFieldMeta.PreviousRankNumberNumeric}
          />

          <AmountDisplay
            label="Previous Cancellation Reason Value"
            value={value.PreviousCancellationReasonValueAmount?.[0]}
            meta={PrizeFieldMeta.PreviousCancellationReasonValueAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PreviousCancellationReasonDescription"
            label="Previous Cancellation Reason Description"
            items={value.PreviousCancellationReasonDescription}
            meta={PrizeFieldMeta.PreviousCancellationReasonDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Previous Cancellation Reason Description"
                value={itemValue}
                meta={PrizeFieldMeta.PreviousCancellationReasonDescription}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Prize
  meta: FieldMeta<T>
}

export default function PrizeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Prize ubl-PrizeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Prize ubl-UBLExtensions"
          meta={PrizeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PrizeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Prize ubl-Numeric ubl-PreviousRankNumberNumeric"
          meta={PrizeFieldMeta.PreviousRankNumberNumeric} 
          value={value.PreviousRankNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Previous Rank Number"
              value={itemValue}
              meta={PrizeFieldMeta.PreviousRankNumberNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Prize ubl-Amount ubl-PreviousCancellationReasonValueAmount"
          meta={PrizeFieldMeta.PreviousCancellationReasonValueAmount} 
          value={value.PreviousCancellationReasonValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Previous Cancellation Reason Value"
              value={itemValue}
              meta={PrizeFieldMeta.PreviousCancellationReasonValueAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Prize ubl-Text ubl-PreviousCancellationReasonDescription"
          meta={PrizeFieldMeta.PreviousCancellationReasonDescription} 
          value={value.PreviousCancellationReasonDescription}
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

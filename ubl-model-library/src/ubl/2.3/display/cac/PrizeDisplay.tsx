import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Prize
  meta: FieldMeta<T>
}

export default function PrizeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PrizeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PrizeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PrizeFieldMeta.PreviousRankNumberNumeric} 
          value={value.PreviousRankNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={PrizeFieldMeta.PreviousRankNumberNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PrizeFieldMeta.PreviousCancellationReasonValueAmount} 
          value={value.PreviousCancellationReasonValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PrizeFieldMeta.PreviousCancellationReasonValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PrizeFieldMeta.PreviousCancellationReasonDescription} 
          value={value.PreviousCancellationReasonDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PrizeFieldMeta.PreviousCancellationReasonDescription} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

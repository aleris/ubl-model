import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LotDistribution } from  '../../model/cac/LotDistribution'
import { LotDistributionFieldMeta } from  '../../meta/cac/LotDistributionMeta'
import LotsGroupDisplay from './LotsGroupDisplay'
import { LotsGroup } from '../../model/cac/LotsGroup'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: LotDistribution
  meta: FieldMeta<T>
}

export default function LotDistributionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LotDistributionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LotDistributionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotDistributionFieldMeta.MaximumLotsAwardedNumeric} 
          value={value.MaximumLotsAwardedNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={LotDistributionFieldMeta.MaximumLotsAwardedNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotDistributionFieldMeta.MaximumLotsSubmittedNumeric} 
          value={value.MaximumLotsSubmittedNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={LotDistributionFieldMeta.MaximumLotsSubmittedNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotDistributionFieldMeta.GroupingLots} 
          value={value.GroupingLots}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LotDistributionFieldMeta.GroupingLots} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LotDistributionFieldMeta.LotsGroup} 
          value={value.LotsGroup}
          itemDisplay={ (itemValue: LotsGroup, key: string | number) =>
            <LotsGroupDisplay key={key} meta={LotDistributionFieldMeta.LotsGroup} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

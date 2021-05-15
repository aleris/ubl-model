import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: LotDistribution | undefined
  meta: FieldMeta<T>
}

export default function LotDistributionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LotDistribution">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LotDistributionFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Maximum Lots Awarded"
            value={value.MaximumLotsAwardedNumeric?.[0]}
            meta={LotDistributionFieldMeta.MaximumLotsAwardedNumeric}
          />

          <NumericDisplay
            label="Maximum Lots Submitted"
            value={value.MaximumLotsSubmittedNumeric?.[0]}
            meta={LotDistributionFieldMeta.MaximumLotsSubmittedNumeric}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-GroupingLots"
            label="Grouping Lots"
            items={value.GroupingLots}
            meta={LotDistributionFieldMeta.GroupingLots} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Grouping Lots"
                value={itemValue}
                meta={LotDistributionFieldMeta.GroupingLots}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LotsGroup"
            label="Lots Group"
            items={value.LotsGroup}
            meta={LotDistributionFieldMeta.LotsGroup} 
            itemDisplay={ (itemValue: LotsGroup, key: string | number) =>
              <LotsGroupDisplay
                key={key}
                label="Lots Group"
                value={itemValue}
                meta={LotDistributionFieldMeta.LotsGroup}
              />
            }
          />
        </div>
    </div>
  )
}

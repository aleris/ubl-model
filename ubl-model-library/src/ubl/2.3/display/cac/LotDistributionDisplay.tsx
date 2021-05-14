import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: LotDistribution
  meta: FieldMeta<T>
}

export default function LotDistributionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LotDistribution ubl-LotDistributionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LotDistribution ubl-UBLExtensions"
          meta={LotDistributionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LotDistributionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LotDistribution ubl-Numeric ubl-MaximumLotsAwardedNumeric"
          meta={LotDistributionFieldMeta.MaximumLotsAwardedNumeric} 
          value={value.MaximumLotsAwardedNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Lots Awarded"
              value={itemValue}
              meta={LotDistributionFieldMeta.MaximumLotsAwardedNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LotDistribution ubl-Numeric ubl-MaximumLotsSubmittedNumeric"
          meta={LotDistributionFieldMeta.MaximumLotsSubmittedNumeric} 
          value={value.MaximumLotsSubmittedNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Lots Submitted"
              value={itemValue}
              meta={LotDistributionFieldMeta.MaximumLotsSubmittedNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-LotDistribution ubl-Text ubl-GroupingLots"
          meta={LotDistributionFieldMeta.GroupingLots} 
          value={value.GroupingLots}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Grouping Lots"
              value={itemValue}
              meta={LotDistributionFieldMeta.GroupingLots}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LotDistribution ubl-LotsGroup"
          meta={LotDistributionFieldMeta.LotsGroup} 
          value={value.LotsGroup}
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

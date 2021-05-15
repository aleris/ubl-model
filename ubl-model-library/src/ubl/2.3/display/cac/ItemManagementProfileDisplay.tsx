import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemManagementProfile } from  '../../model/cac/ItemManagementProfile'
import { ItemManagementProfileFieldMeta } from  '../../meta/cac/ItemManagementProfileMeta'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
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
  value: ItemManagementProfile | undefined
  meta: FieldMeta<T>
}

export default function ItemManagementProfileDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemManagementProfile">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemManagementProfileFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Frozen Period Days"
            value={value.FrozenPeriodDaysNumeric?.[0]}
            meta={ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric}
          />

          <QuantityDisplay
            label="Minimum Inventory Quantity"
            value={value.MinimumInventoryQuantity?.[0]}
            meta={ItemManagementProfileFieldMeta.MinimumInventoryQuantity}
          />

          <QuantityDisplay
            label="Multiple Order Quantity"
            value={value.MultipleOrderQuantity?.[0]}
            meta={ItemManagementProfileFieldMeta.MultipleOrderQuantity}
          />

          <NumericDisplay
            label="Order Interval Days"
            value={value.OrderIntervalDaysNumeric?.[0]}
            meta={ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ReplenishmentOwnerDescription"
            label="Replenishment Owner Description"
            items={value.ReplenishmentOwnerDescription}
            meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Replenishment Owner Description"
                value={itemValue}
                meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription}
              />
            }
          />

          <NumericDisplay
            label="Target Service Percent"
            value={value.TargetServicePercent?.[0]}
            meta={ItemManagementProfileFieldMeta.TargetServicePercent}
          />

          <QuantityDisplay
            label="Target Inventory Quantity"
            value={value.TargetInventoryQuantity?.[0]}
            meta={ItemManagementProfileFieldMeta.TargetInventoryQuantity}
          />

          <PeriodDisplay
            label="Effective Period"
            value={value.EffectivePeriod?.[0]}
            meta={ItemManagementProfileFieldMeta.EffectivePeriod}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={ItemManagementProfileFieldMeta.Item}
          />

          <ItemLocationQuantityDisplay
            label="Item Location Quantity"
            value={value.ItemLocationQuantity?.[0]}
            meta={ItemManagementProfileFieldMeta.ItemLocationQuantity}
          />
        </div>
    </div>
  )
}

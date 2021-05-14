import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemManagementProfile
  meta: FieldMeta<T>
}

export default function ItemManagementProfileDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemManagementProfile ubl-ItemManagementProfileType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemManagementProfile ubl-UBLExtensions"
          meta={ItemManagementProfileFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Numeric ubl-FrozenPeriodDaysNumeric"
          meta={ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric} 
          value={value.FrozenPeriodDaysNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Frozen Period Days"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Quantity ubl-MinimumInventoryQuantity"
          meta={ItemManagementProfileFieldMeta.MinimumInventoryQuantity} 
          value={value.MinimumInventoryQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Inventory Quantity"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.MinimumInventoryQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Quantity ubl-MultipleOrderQuantity"
          meta={ItemManagementProfileFieldMeta.MultipleOrderQuantity} 
          value={value.MultipleOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Multiple Order Quantity"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.MultipleOrderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Numeric ubl-OrderIntervalDaysNumeric"
          meta={ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric} 
          value={value.OrderIntervalDaysNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Order Interval Days"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Text ubl-ReplenishmentOwnerDescription"
          meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription} 
          value={value.ReplenishmentOwnerDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Replenishment Owner Description"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Numeric ubl-TargetServicePercent"
          meta={ItemManagementProfileFieldMeta.TargetServicePercent} 
          value={value.TargetServicePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Target Service Percent"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.TargetServicePercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemManagementProfile ubl-Quantity ubl-TargetInventoryQuantity"
          meta={ItemManagementProfileFieldMeta.TargetInventoryQuantity} 
          value={value.TargetInventoryQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Target Inventory Quantity"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.TargetInventoryQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemManagementProfile ubl-Period ubl-EffectivePeriod"
          meta={ItemManagementProfileFieldMeta.EffectivePeriod} 
          value={value.EffectivePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Effective Period"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.EffectivePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemManagementProfile ubl-Item"
          meta={ItemManagementProfileFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.Item}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemManagementProfile ubl-ItemLocationQuantity"
          meta={ItemManagementProfileFieldMeta.ItemLocationQuantity} 
          value={value.ItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay
              key={key}
              label="Item Location Quantity"
              value={itemValue}
              meta={ItemManagementProfileFieldMeta.ItemLocationQuantity}
            />
          }
        />
        </div>
    </div>
  )
}

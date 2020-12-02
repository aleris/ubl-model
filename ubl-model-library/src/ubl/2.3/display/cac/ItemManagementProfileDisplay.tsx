import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ItemManagementProfile
  meta: FieldMeta<T>
}

export default function ItemManagementProfileDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemManagementProfileFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric} 
          value={value.FrozenPeriodDaysNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.MinimumInventoryQuantity} 
          value={value.MinimumInventoryQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemManagementProfileFieldMeta.MinimumInventoryQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.MultipleOrderQuantity} 
          value={value.MultipleOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemManagementProfileFieldMeta.MultipleOrderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric} 
          value={value.OrderIntervalDaysNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription} 
          value={value.ReplenishmentOwnerDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.TargetServicePercent} 
          value={value.TargetServicePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ItemManagementProfileFieldMeta.TargetServicePercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.TargetInventoryQuantity} 
          value={value.TargetInventoryQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemManagementProfileFieldMeta.TargetInventoryQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.EffectivePeriod} 
          value={value.EffectivePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ItemManagementProfileFieldMeta.EffectivePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={ItemManagementProfileFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemManagementProfileFieldMeta.ItemLocationQuantity} 
          value={value.ItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={ItemManagementProfileFieldMeta.ItemLocationQuantity} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

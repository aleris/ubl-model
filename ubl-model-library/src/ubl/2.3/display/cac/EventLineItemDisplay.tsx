import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventLineItem } from  '../../model/cac/EventLineItem'
import { EventLineItemFieldMeta } from  '../../meta/cac/EventLineItemMeta'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import RetailPlannedImpactDisplay from './RetailPlannedImpactDisplay'
import { RetailPlannedImpact } from '../../model/cac/RetailPlannedImpact'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EventLineItem
  meta: FieldMeta<T>
}

export default function EventLineItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EventLineItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EventLineItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventLineItemFieldMeta.LineNumberNumeric} 
          value={value.LineNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={EventLineItemFieldMeta.LineNumberNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventLineItemFieldMeta.ParticipatingLocationsLocation} 
          value={value.ParticipatingLocationsLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={EventLineItemFieldMeta.ParticipatingLocationsLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventLineItemFieldMeta.RetailPlannedImpact} 
          value={value.RetailPlannedImpact}
          itemDisplay={ (itemValue: RetailPlannedImpact, key: string | number) =>
            <RetailPlannedImpactDisplay key={key} meta={EventLineItemFieldMeta.RetailPlannedImpact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventLineItemFieldMeta.SupplyItem} 
          value={value.SupplyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={EventLineItemFieldMeta.SupplyItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

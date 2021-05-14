import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: EventLineItem
  meta: FieldMeta<T>
}

export default function EventLineItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EventLineItem ubl-EventLineItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EventLineItem ubl-UBLExtensions"
          meta={EventLineItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EventLineItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventLineItem ubl-Numeric ubl-LineNumberNumeric"
          meta={EventLineItemFieldMeta.LineNumberNumeric} 
          value={value.LineNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Number"
              value={itemValue}
              meta={EventLineItemFieldMeta.LineNumberNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EventLineItem ubl-Location ubl-ParticipatingLocationsLocation"
          meta={EventLineItemFieldMeta.ParticipatingLocationsLocation} 
          value={value.ParticipatingLocationsLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Participating Locations Location"
              value={itemValue}
              meta={EventLineItemFieldMeta.ParticipatingLocationsLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EventLineItem ubl-RetailPlannedImpact"
          meta={EventLineItemFieldMeta.RetailPlannedImpact} 
          value={value.RetailPlannedImpact}
          itemDisplay={ (itemValue: RetailPlannedImpact, key: string | number) =>
            <RetailPlannedImpactDisplay
              key={key}
              label="Retail Planned Impact"
              value={itemValue}
              meta={EventLineItemFieldMeta.RetailPlannedImpact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EventLineItem ubl-Item ubl-SupplyItem"
          meta={EventLineItemFieldMeta.SupplyItem} 
          value={value.SupplyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Supply Item"
              value={itemValue}
              meta={EventLineItemFieldMeta.SupplyItem}
            />
          }
        />
        </div>
    </div>
  )
}

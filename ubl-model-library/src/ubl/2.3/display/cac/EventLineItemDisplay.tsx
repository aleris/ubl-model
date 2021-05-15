import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: EventLineItem | undefined
  meta: FieldMeta<T>
}

export default function EventLineItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EventLineItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EventLineItemFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Line Number"
            value={value.LineNumberNumeric?.[0]}
            meta={EventLineItemFieldMeta.LineNumberNumeric}
          />

          <LocationDisplay
            label="Participating Locations Location"
            value={value.ParticipatingLocationsLocation?.[0]}
            meta={EventLineItemFieldMeta.ParticipatingLocationsLocation}
          />

          <ElementListDisplay
            className="ubl-cac ubl-RetailPlannedImpact"
            label="Retail Planned Impact"
            items={value.RetailPlannedImpact}
            meta={EventLineItemFieldMeta.RetailPlannedImpact} 
            itemDisplay={ (itemValue: RetailPlannedImpact, key: string | number) =>
              <RetailPlannedImpactDisplay
                key={key}
                label="Retail Planned Impact"
                value={itemValue}
                meta={EventLineItemFieldMeta.RetailPlannedImpact}
              />
            }
          />

          <ItemDisplay
            label="Supply Item"
            value={value.SupplyItem?.[0]}
            meta={EventLineItemFieldMeta.SupplyItem}
          />
        </div>
    </div>
  )
}

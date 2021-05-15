import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Pickup } from  '../../model/cac/Pickup'
import { PickupFieldMeta } from  '../../meta/cac/PickupMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Pickup | undefined
  meta: FieldMeta<T>
}

export default function PickupDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Pickup">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PickupFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PickupFieldMeta.ID}
          />

          <DateDisplay
            label="Actual Pickup Date"
            value={value.ActualPickupDate?.[0]}
            meta={PickupFieldMeta.ActualPickupDate}
          />

          <TimeDisplay
            label="Actual Pickup Time"
            value={value.ActualPickupTime?.[0]}
            meta={PickupFieldMeta.ActualPickupTime}
          />

          <DateDisplay
            label="Earliest Pickup Date"
            value={value.EarliestPickupDate?.[0]}
            meta={PickupFieldMeta.EarliestPickupDate}
          />

          <TimeDisplay
            label="Earliest Pickup Time"
            value={value.EarliestPickupTime?.[0]}
            meta={PickupFieldMeta.EarliestPickupTime}
          />

          <DateDisplay
            label="Latest Pickup Date"
            value={value.LatestPickupDate?.[0]}
            meta={PickupFieldMeta.LatestPickupDate}
          />

          <TimeDisplay
            label="Latest Pickup Time"
            value={value.LatestPickupTime?.[0]}
            meta={PickupFieldMeta.LatestPickupTime}
          />

          <LocationDisplay
            label="Pickup Location"
            value={value.PickupLocation?.[0]}
            meta={PickupFieldMeta.PickupLocation}
          />

          <PartyDisplay
            label="Pickup Party"
            value={value.PickupParty?.[0]}
            meta={PickupFieldMeta.PickupParty}
          />
        </div>
    </div>
  )
}

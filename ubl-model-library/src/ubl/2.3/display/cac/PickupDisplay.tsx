import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Pickup
  meta: FieldMeta<T>
}

export default function PickupDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Pickup ubl-PickupType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Pickup ubl-UBLExtensions"
          meta={PickupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PickupFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Identifier ubl-ID"
          meta={PickupFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PickupFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Date ubl-ActualPickupDate"
          meta={PickupFieldMeta.ActualPickupDate} 
          value={value.ActualPickupDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Actual Pickup Date"
              value={itemValue}
              meta={PickupFieldMeta.ActualPickupDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Time ubl-ActualPickupTime"
          meta={PickupFieldMeta.ActualPickupTime} 
          value={value.ActualPickupTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Actual Pickup Time"
              value={itemValue}
              meta={PickupFieldMeta.ActualPickupTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Date ubl-EarliestPickupDate"
          meta={PickupFieldMeta.EarliestPickupDate} 
          value={value.EarliestPickupDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Earliest Pickup Date"
              value={itemValue}
              meta={PickupFieldMeta.EarliestPickupDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Time ubl-EarliestPickupTime"
          meta={PickupFieldMeta.EarliestPickupTime} 
          value={value.EarliestPickupTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Earliest Pickup Time"
              value={itemValue}
              meta={PickupFieldMeta.EarliestPickupTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Date ubl-LatestPickupDate"
          meta={PickupFieldMeta.LatestPickupDate} 
          value={value.LatestPickupDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Latest Pickup Date"
              value={itemValue}
              meta={PickupFieldMeta.LatestPickupDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Pickup ubl-Time ubl-LatestPickupTime"
          meta={PickupFieldMeta.LatestPickupTime} 
          value={value.LatestPickupTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Latest Pickup Time"
              value={itemValue}
              meta={PickupFieldMeta.LatestPickupTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Pickup ubl-Location ubl-PickupLocation"
          meta={PickupFieldMeta.PickupLocation} 
          value={value.PickupLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Pickup Location"
              value={itemValue}
              meta={PickupFieldMeta.PickupLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Pickup ubl-Party ubl-PickupParty"
          meta={PickupFieldMeta.PickupParty} 
          value={value.PickupParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Pickup Party"
              value={itemValue}
              meta={PickupFieldMeta.PickupParty}
            />
          }
        />
        </div>
    </div>
  )
}

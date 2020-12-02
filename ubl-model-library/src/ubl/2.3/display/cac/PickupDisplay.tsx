import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Pickup
  meta: FieldMeta<T>
}

export default function PickupDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PickupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PickupFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PickupFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.ActualPickupDate} 
          value={value.ActualPickupDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PickupFieldMeta.ActualPickupDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.ActualPickupTime} 
          value={value.ActualPickupTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PickupFieldMeta.ActualPickupTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.EarliestPickupDate} 
          value={value.EarliestPickupDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PickupFieldMeta.EarliestPickupDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.EarliestPickupTime} 
          value={value.EarliestPickupTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PickupFieldMeta.EarliestPickupTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.LatestPickupDate} 
          value={value.LatestPickupDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PickupFieldMeta.LatestPickupDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.LatestPickupTime} 
          value={value.LatestPickupTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PickupFieldMeta.LatestPickupTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.PickupLocation} 
          value={value.PickupLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={PickupFieldMeta.PickupLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PickupFieldMeta.PickupParty} 
          value={value.PickupParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PickupFieldMeta.PickupParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

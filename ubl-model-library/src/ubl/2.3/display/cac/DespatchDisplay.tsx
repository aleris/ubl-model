import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Despatch } from  '../../model/cac/Despatch'
import { DespatchFieldMeta } from  '../../meta/cac/DespatchMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Despatch
  meta: FieldMeta<T>
}

export default function DespatchDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DespatchFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DespatchFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.RequestedDespatchDate} 
          value={value.RequestedDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DespatchFieldMeta.RequestedDespatchDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.RequestedDespatchTime} 
          value={value.RequestedDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DespatchFieldMeta.RequestedDespatchTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.EstimatedDespatchDate} 
          value={value.EstimatedDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DespatchFieldMeta.EstimatedDespatchDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.EstimatedDespatchTime} 
          value={value.EstimatedDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DespatchFieldMeta.EstimatedDespatchTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.ActualDespatchDate} 
          value={value.ActualDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DespatchFieldMeta.ActualDespatchDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.ActualDespatchTime} 
          value={value.ActualDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DespatchFieldMeta.ActualDespatchTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.GuaranteedDespatchDate} 
          value={value.GuaranteedDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DespatchFieldMeta.GuaranteedDespatchDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.GuaranteedDespatchTime} 
          value={value.GuaranteedDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DespatchFieldMeta.GuaranteedDespatchTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.ReleaseID} 
          value={value.ReleaseID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DespatchFieldMeta.ReleaseID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.Instructions} 
          value={value.Instructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DespatchFieldMeta.Instructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.DespatchAddress} 
          value={value.DespatchAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={DespatchFieldMeta.DespatchAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.DespatchLocation} 
          value={value.DespatchLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={DespatchFieldMeta.DespatchLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.DespatchParty} 
          value={value.DespatchParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DespatchFieldMeta.DespatchParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DespatchFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DespatchFieldMeta.NotifyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={DespatchFieldMeta.Contact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.EstimatedDespatchPeriod} 
          value={value.EstimatedDespatchPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DespatchFieldMeta.EstimatedDespatchPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DespatchFieldMeta.RequestedDespatchPeriod} 
          value={value.RequestedDespatchPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DespatchFieldMeta.RequestedDespatchPeriod} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: Despatch
  meta: FieldMeta<T>
}

export default function DespatchDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Despatch ubl-DespatchType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Despatch ubl-UBLExtensions"
          meta={DespatchFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DespatchFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Identifier ubl-ID"
          meta={DespatchFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DespatchFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Date ubl-RequestedDespatchDate"
          meta={DespatchFieldMeta.RequestedDespatchDate} 
          value={value.RequestedDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Requested Despatch Date"
              value={itemValue}
              meta={DespatchFieldMeta.RequestedDespatchDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Time ubl-RequestedDespatchTime"
          meta={DespatchFieldMeta.RequestedDespatchTime} 
          value={value.RequestedDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Requested Despatch Time"
              value={itemValue}
              meta={DespatchFieldMeta.RequestedDespatchTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Date ubl-EstimatedDespatchDate"
          meta={DespatchFieldMeta.EstimatedDespatchDate} 
          value={value.EstimatedDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Estimated Despatch Date"
              value={itemValue}
              meta={DespatchFieldMeta.EstimatedDespatchDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Time ubl-EstimatedDespatchTime"
          meta={DespatchFieldMeta.EstimatedDespatchTime} 
          value={value.EstimatedDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Estimated Despatch Time"
              value={itemValue}
              meta={DespatchFieldMeta.EstimatedDespatchTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Date ubl-ActualDespatchDate"
          meta={DespatchFieldMeta.ActualDespatchDate} 
          value={value.ActualDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Actual Despatch Date"
              value={itemValue}
              meta={DespatchFieldMeta.ActualDespatchDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Time ubl-ActualDespatchTime"
          meta={DespatchFieldMeta.ActualDespatchTime} 
          value={value.ActualDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Actual Despatch Time"
              value={itemValue}
              meta={DespatchFieldMeta.ActualDespatchTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Date ubl-GuaranteedDespatchDate"
          meta={DespatchFieldMeta.GuaranteedDespatchDate} 
          value={value.GuaranteedDespatchDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Guaranteed Despatch Date"
              value={itemValue}
              meta={DespatchFieldMeta.GuaranteedDespatchDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Time ubl-GuaranteedDespatchTime"
          meta={DespatchFieldMeta.GuaranteedDespatchTime} 
          value={value.GuaranteedDespatchTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Guaranteed Despatch Time"
              value={itemValue}
              meta={DespatchFieldMeta.GuaranteedDespatchTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Despatch ubl-Identifier ubl-ReleaseID"
          meta={DespatchFieldMeta.ReleaseID} 
          value={value.ReleaseID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Release"
              value={itemValue}
              meta={DespatchFieldMeta.ReleaseID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Despatch ubl-Text ubl-Instructions"
          meta={DespatchFieldMeta.Instructions} 
          value={value.Instructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Instructions"
              value={itemValue}
              meta={DespatchFieldMeta.Instructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Address ubl-DespatchAddress"
          meta={DespatchFieldMeta.DespatchAddress} 
          value={value.DespatchAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Despatch Address"
              value={itemValue}
              meta={DespatchFieldMeta.DespatchAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Location ubl-DespatchLocation"
          meta={DespatchFieldMeta.DespatchLocation} 
          value={value.DespatchLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Despatch Location"
              value={itemValue}
              meta={DespatchFieldMeta.DespatchLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Party ubl-DespatchParty"
          meta={DespatchFieldMeta.DespatchParty} 
          value={value.DespatchParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Despatch Party"
              value={itemValue}
              meta={DespatchFieldMeta.DespatchParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Party ubl-CarrierParty"
          meta={DespatchFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Carrier Party"
              value={itemValue}
              meta={DespatchFieldMeta.CarrierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Despatch ubl-Party ubl-NotifyParty"
          meta={DespatchFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Notify Party"
              value={itemValue}
              meta={DespatchFieldMeta.NotifyParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Contact"
          meta={DespatchFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Contact"
              value={itemValue}
              meta={DespatchFieldMeta.Contact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Period ubl-EstimatedDespatchPeriod"
          meta={DespatchFieldMeta.EstimatedDespatchPeriod} 
          value={value.EstimatedDespatchPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Estimated Despatch Period"
              value={itemValue}
              meta={DespatchFieldMeta.EstimatedDespatchPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Despatch ubl-Period ubl-RequestedDespatchPeriod"
          meta={DespatchFieldMeta.RequestedDespatchPeriod} 
          value={value.RequestedDespatchPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Requested Despatch Period"
              value={itemValue}
              meta={DespatchFieldMeta.RequestedDespatchPeriod}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Despatch | undefined
  meta: FieldMeta<T>
}

export default function DespatchDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Despatch">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DespatchFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DespatchFieldMeta.ID}
          />

          <DateDisplay
            label="Requested Despatch Date"
            value={value.RequestedDespatchDate?.[0]}
            meta={DespatchFieldMeta.RequestedDespatchDate}
          />

          <TimeDisplay
            label="Requested Despatch Time"
            value={value.RequestedDespatchTime?.[0]}
            meta={DespatchFieldMeta.RequestedDespatchTime}
          />

          <DateDisplay
            label="Estimated Despatch Date"
            value={value.EstimatedDespatchDate?.[0]}
            meta={DespatchFieldMeta.EstimatedDespatchDate}
          />

          <TimeDisplay
            label="Estimated Despatch Time"
            value={value.EstimatedDespatchTime?.[0]}
            meta={DespatchFieldMeta.EstimatedDespatchTime}
          />

          <DateDisplay
            label="Actual Despatch Date"
            value={value.ActualDespatchDate?.[0]}
            meta={DespatchFieldMeta.ActualDespatchDate}
          />

          <TimeDisplay
            label="Actual Despatch Time"
            value={value.ActualDespatchTime?.[0]}
            meta={DespatchFieldMeta.ActualDespatchTime}
          />

          <DateDisplay
            label="Guaranteed Despatch Date"
            value={value.GuaranteedDespatchDate?.[0]}
            meta={DespatchFieldMeta.GuaranteedDespatchDate}
          />

          <TimeDisplay
            label="Guaranteed Despatch Time"
            value={value.GuaranteedDespatchTime?.[0]}
            meta={DespatchFieldMeta.GuaranteedDespatchTime}
          />

          <IdentifierDisplay
            label="Release"
            value={value.ReleaseID?.[0]}
            meta={DespatchFieldMeta.ReleaseID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Instructions"
            label="Instructions"
            items={value.Instructions}
            meta={DespatchFieldMeta.Instructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Instructions"
                value={itemValue}
                meta={DespatchFieldMeta.Instructions}
              />
            }
          />

          <AddressDisplay
            label="Despatch Address"
            value={value.DespatchAddress?.[0]}
            meta={DespatchFieldMeta.DespatchAddress}
          />

          <LocationDisplay
            label="Despatch Location"
            value={value.DespatchLocation?.[0]}
            meta={DespatchFieldMeta.DespatchLocation}
          />

          <PartyDisplay
            label="Despatch Party"
            value={value.DespatchParty?.[0]}
            meta={DespatchFieldMeta.DespatchParty}
          />

          <PartyDisplay
            label="Carrier Party"
            value={value.CarrierParty?.[0]}
            meta={DespatchFieldMeta.CarrierParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-NotifyParty"
            label="Notify Party"
            items={value.NotifyParty}
            meta={DespatchFieldMeta.NotifyParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Notify Party"
                value={itemValue}
                meta={DespatchFieldMeta.NotifyParty}
              />
            }
          />

          <ContactDisplay
            label="Contact"
            value={value.Contact?.[0]}
            meta={DespatchFieldMeta.Contact}
          />

          <PeriodDisplay
            label="Estimated Despatch Period"
            value={value.EstimatedDespatchPeriod?.[0]}
            meta={DespatchFieldMeta.EstimatedDespatchPeriod}
          />

          <PeriodDisplay
            label="Requested Despatch Period"
            value={value.RequestedDespatchPeriod?.[0]}
            meta={DespatchFieldMeta.RequestedDespatchPeriod}
          />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Delivery } from  '../../model/cac/Delivery'
import { DeliveryFieldMeta } from  '../../meta/cac/DeliveryMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DeliveryTermsDisplay from './DeliveryTermsDisplay'
import { DeliveryTerms } from '../../model/cac/DeliveryTerms'
import DeliveryUnitDisplay from './DeliveryUnitDisplay'
import { DeliveryUnit } from '../../model/cac/DeliveryUnit'
import DespatchDisplay from './DespatchDisplay'
import { Despatch } from '../../model/cac/Despatch'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Delivery | undefined
  meta: FieldMeta<T>
}

export default function DeliveryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Delivery">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DeliveryFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DeliveryFieldMeta.ID}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={DeliveryFieldMeta.Quantity}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={DeliveryFieldMeta.MinimumQuantity}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={DeliveryFieldMeta.MaximumQuantity}
          />

          <DateDisplay
            label="Actual Delivery Date"
            value={value.ActualDeliveryDate?.[0]}
            meta={DeliveryFieldMeta.ActualDeliveryDate}
          />

          <TimeDisplay
            label="Actual Delivery Time"
            value={value.ActualDeliveryTime?.[0]}
            meta={DeliveryFieldMeta.ActualDeliveryTime}
          />

          <DateDisplay
            label="Latest Delivery Date"
            value={value.LatestDeliveryDate?.[0]}
            meta={DeliveryFieldMeta.LatestDeliveryDate}
          />

          <TimeDisplay
            label="Latest Delivery Time"
            value={value.LatestDeliveryTime?.[0]}
            meta={DeliveryFieldMeta.LatestDeliveryTime}
          />

          <IdentifierDisplay
            label="Release"
            value={value.ReleaseID?.[0]}
            meta={DeliveryFieldMeta.ReleaseID}
          />

          <IdentifierDisplay
            label="Tracking Identifier"
            value={value.TrackingID?.[0]}
            meta={DeliveryFieldMeta.TrackingID}
          />

          <AddressDisplay
            label="Delivery Address"
            value={value.DeliveryAddress?.[0]}
            meta={DeliveryFieldMeta.DeliveryAddress}
          />

          <LocationDisplay
            label="Delivery Location"
            value={value.DeliveryLocation?.[0]}
            meta={DeliveryFieldMeta.DeliveryLocation}
          />

          <LocationDisplay
            label="Alternative Delivery Location"
            value={value.AlternativeDeliveryLocation?.[0]}
            meta={DeliveryFieldMeta.AlternativeDeliveryLocation}
          />

          <PeriodDisplay
            label="Requested Delivery Period"
            value={value.RequestedDeliveryPeriod?.[0]}
            meta={DeliveryFieldMeta.RequestedDeliveryPeriod}
          />

          <PeriodDisplay
            label="Promised Delivery Period"
            value={value.PromisedDeliveryPeriod?.[0]}
            meta={DeliveryFieldMeta.PromisedDeliveryPeriod}
          />

          <PeriodDisplay
            label="Estimated Delivery Period"
            value={value.EstimatedDeliveryPeriod?.[0]}
            meta={DeliveryFieldMeta.EstimatedDeliveryPeriod}
          />

          <PartyDisplay
            label="Carrier Party"
            value={value.CarrierParty?.[0]}
            meta={DeliveryFieldMeta.CarrierParty}
          />

          <PartyDisplay
            label="Delivery Party"
            value={value.DeliveryParty?.[0]}
            meta={DeliveryFieldMeta.DeliveryParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-NotifyParty"
            label="Notify Party"
            items={value.NotifyParty}
            meta={DeliveryFieldMeta.NotifyParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Notify Party"
                value={itemValue}
                meta={DeliveryFieldMeta.NotifyParty}
              />
            }
          />

          <DespatchDisplay
            label="Despatch"
            value={value.Despatch?.[0]}
            meta={DeliveryFieldMeta.Despatch}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={DeliveryFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={DeliveryFieldMeta.DeliveryTerms}
              />
            }
          />

          <DeliveryUnitDisplay
            label="Minimum Delivery Unit"
            value={value.MinimumDeliveryUnit?.[0]}
            meta={DeliveryFieldMeta.MinimumDeliveryUnit}
          />

          <DeliveryUnitDisplay
            label="Maximum Delivery Unit"
            value={value.MaximumDeliveryUnit?.[0]}
            meta={DeliveryFieldMeta.MaximumDeliveryUnit}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={DeliveryFieldMeta.Shipment}
          />
        </div>
    </div>
  )
}

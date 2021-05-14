import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Delivery
  meta: FieldMeta<T>
}

export default function DeliveryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Delivery ubl-DeliveryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Delivery ubl-UBLExtensions"
          meta={DeliveryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DeliveryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Identifier ubl-ID"
          meta={DeliveryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DeliveryFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Quantity"
          meta={DeliveryFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={DeliveryFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Quantity ubl-MinimumQuantity"
          meta={DeliveryFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={DeliveryFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Quantity ubl-MaximumQuantity"
          meta={DeliveryFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={DeliveryFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Date ubl-ActualDeliveryDate"
          meta={DeliveryFieldMeta.ActualDeliveryDate} 
          value={value.ActualDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Actual Delivery Date"
              value={itemValue}
              meta={DeliveryFieldMeta.ActualDeliveryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Time ubl-ActualDeliveryTime"
          meta={DeliveryFieldMeta.ActualDeliveryTime} 
          value={value.ActualDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Actual Delivery Time"
              value={itemValue}
              meta={DeliveryFieldMeta.ActualDeliveryTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Date ubl-LatestDeliveryDate"
          meta={DeliveryFieldMeta.LatestDeliveryDate} 
          value={value.LatestDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Latest Delivery Date"
              value={itemValue}
              meta={DeliveryFieldMeta.LatestDeliveryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Time ubl-LatestDeliveryTime"
          meta={DeliveryFieldMeta.LatestDeliveryTime} 
          value={value.LatestDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Latest Delivery Time"
              value={itemValue}
              meta={DeliveryFieldMeta.LatestDeliveryTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Identifier ubl-ReleaseID"
          meta={DeliveryFieldMeta.ReleaseID} 
          value={value.ReleaseID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Release"
              value={itemValue}
              meta={DeliveryFieldMeta.ReleaseID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Delivery ubl-Identifier ubl-TrackingID"
          meta={DeliveryFieldMeta.TrackingID} 
          value={value.TrackingID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Tracking Identifier"
              value={itemValue}
              meta={DeliveryFieldMeta.TrackingID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Address ubl-DeliveryAddress"
          meta={DeliveryFieldMeta.DeliveryAddress} 
          value={value.DeliveryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Delivery Address"
              value={itemValue}
              meta={DeliveryFieldMeta.DeliveryAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Location ubl-DeliveryLocation"
          meta={DeliveryFieldMeta.DeliveryLocation} 
          value={value.DeliveryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Delivery Location"
              value={itemValue}
              meta={DeliveryFieldMeta.DeliveryLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Location ubl-AlternativeDeliveryLocation"
          meta={DeliveryFieldMeta.AlternativeDeliveryLocation} 
          value={value.AlternativeDeliveryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Alternative Delivery Location"
              value={itemValue}
              meta={DeliveryFieldMeta.AlternativeDeliveryLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Period ubl-RequestedDeliveryPeriod"
          meta={DeliveryFieldMeta.RequestedDeliveryPeriod} 
          value={value.RequestedDeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Requested Delivery Period"
              value={itemValue}
              meta={DeliveryFieldMeta.RequestedDeliveryPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Period ubl-PromisedDeliveryPeriod"
          meta={DeliveryFieldMeta.PromisedDeliveryPeriod} 
          value={value.PromisedDeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Promised Delivery Period"
              value={itemValue}
              meta={DeliveryFieldMeta.PromisedDeliveryPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Period ubl-EstimatedDeliveryPeriod"
          meta={DeliveryFieldMeta.EstimatedDeliveryPeriod} 
          value={value.EstimatedDeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Estimated Delivery Period"
              value={itemValue}
              meta={DeliveryFieldMeta.EstimatedDeliveryPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Party ubl-CarrierParty"
          meta={DeliveryFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Carrier Party"
              value={itemValue}
              meta={DeliveryFieldMeta.CarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Party ubl-DeliveryParty"
          meta={DeliveryFieldMeta.DeliveryParty} 
          value={value.DeliveryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Delivery Party"
              value={itemValue}
              meta={DeliveryFieldMeta.DeliveryParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Delivery ubl-Party ubl-NotifyParty"
          meta={DeliveryFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Notify Party"
              value={itemValue}
              meta={DeliveryFieldMeta.NotifyParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Despatch"
          meta={DeliveryFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay
              key={key}
              label="Despatch"
              value={itemValue}
              meta={DeliveryFieldMeta.Despatch}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Delivery ubl-DeliveryTerms"
          meta={DeliveryFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={DeliveryFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-DeliveryUnit ubl-MinimumDeliveryUnit"
          meta={DeliveryFieldMeta.MinimumDeliveryUnit} 
          value={value.MinimumDeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay
              key={key}
              label="Minimum Delivery Unit"
              value={itemValue}
              meta={DeliveryFieldMeta.MinimumDeliveryUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-DeliveryUnit ubl-MaximumDeliveryUnit"
          meta={DeliveryFieldMeta.MaximumDeliveryUnit} 
          value={value.MaximumDeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay
              key={key}
              label="Maximum Delivery Unit"
              value={itemValue}
              meta={DeliveryFieldMeta.MaximumDeliveryUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Delivery ubl-Shipment"
          meta={DeliveryFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={DeliveryFieldMeta.Shipment}
            />
          }
        />
        </div>
    </div>
  )
}

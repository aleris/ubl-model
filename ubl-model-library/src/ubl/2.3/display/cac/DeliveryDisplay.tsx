import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Delivery
  meta: FieldMeta<T>
}

export default function DeliveryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DeliveryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DeliveryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DeliveryFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DeliveryFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DeliveryFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DeliveryFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.ActualDeliveryDate} 
          value={value.ActualDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DeliveryFieldMeta.ActualDeliveryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.ActualDeliveryTime} 
          value={value.ActualDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DeliveryFieldMeta.ActualDeliveryTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.LatestDeliveryDate} 
          value={value.LatestDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DeliveryFieldMeta.LatestDeliveryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.LatestDeliveryTime} 
          value={value.LatestDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DeliveryFieldMeta.LatestDeliveryTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.ReleaseID} 
          value={value.ReleaseID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DeliveryFieldMeta.ReleaseID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.TrackingID} 
          value={value.TrackingID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DeliveryFieldMeta.TrackingID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.DeliveryAddress} 
          value={value.DeliveryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={DeliveryFieldMeta.DeliveryAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.DeliveryLocation} 
          value={value.DeliveryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={DeliveryFieldMeta.DeliveryLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.AlternativeDeliveryLocation} 
          value={value.AlternativeDeliveryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={DeliveryFieldMeta.AlternativeDeliveryLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.RequestedDeliveryPeriod} 
          value={value.RequestedDeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DeliveryFieldMeta.RequestedDeliveryPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.PromisedDeliveryPeriod} 
          value={value.PromisedDeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DeliveryFieldMeta.PromisedDeliveryPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.EstimatedDeliveryPeriod} 
          value={value.EstimatedDeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DeliveryFieldMeta.EstimatedDeliveryPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DeliveryFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.DeliveryParty} 
          value={value.DeliveryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DeliveryFieldMeta.DeliveryParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DeliveryFieldMeta.NotifyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay key={key} meta={DeliveryFieldMeta.Despatch} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={DeliveryFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.MinimumDeliveryUnit} 
          value={value.MinimumDeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay key={key} meta={DeliveryFieldMeta.MinimumDeliveryUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.MaximumDeliveryUnit} 
          value={value.MaximumDeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay key={key} meta={DeliveryFieldMeta.MaximumDeliveryUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={DeliveryFieldMeta.Shipment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

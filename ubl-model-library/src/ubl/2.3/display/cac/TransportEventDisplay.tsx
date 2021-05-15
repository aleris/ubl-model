import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportEvent } from  '../../model/cac/TransportEvent'
import { TransportEventFieldMeta } from  '../../meta/cac/TransportEventMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import SignatureDisplay from './SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import StatusDisplay from './StatusDisplay'
import { Status } from '../../model/cac/Status'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportEvent | undefined
  meta: FieldMeta<T>
}

export default function TransportEventDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportEvent">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportEventFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identification"
            value={value.IdentificationID?.[0]}
            meta={TransportEventFieldMeta.IdentificationID}
          />

          <DateDisplay
            label="Occurrence Date"
            value={value.OccurrenceDate?.[0]}
            meta={TransportEventFieldMeta.OccurrenceDate}
          />

          <TimeDisplay
            label="Occurrence Time"
            value={value.OccurrenceTime?.[0]}
            meta={TransportEventFieldMeta.OccurrenceTime}
          />

          <CodeDisplay
            label="Transport Event Type Code"
            value={value.TransportEventTypeCode?.[0]}
            meta={TransportEventFieldMeta.TransportEventTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TransportEventFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TransportEventFieldMeta.Description}
              />
            }
          />

          <IndicatorDisplay
            label="Completion Indicator"
            value={value.CompletionIndicator?.[0]}
            meta={TransportEventFieldMeta.CompletionIndicator}
          />

          <ShipmentDisplay
            label="Reported Shipment"
            value={value.ReportedShipment?.[0]}
            meta={TransportEventFieldMeta.ReportedShipment}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Status ubl-CurrentStatus"
            label="Current Status"
            items={value.CurrentStatus}
            meta={TransportEventFieldMeta.CurrentStatus} 
            itemDisplay={ (itemValue: Status, key: string | number) =>
              <StatusDisplay
                key={key}
                label="Current Status"
                value={itemValue}
                meta={TransportEventFieldMeta.CurrentStatus}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Contact"
            label="Contact"
            items={value.Contact}
            meta={TransportEventFieldMeta.Contact} 
            itemDisplay={ (itemValue: Contact, key: string | number) =>
              <ContactDisplay
                key={key}
                label="Contact"
                value={itemValue}
                meta={TransportEventFieldMeta.Contact}
              />
            }
          />

          <LocationDisplay
            label="Location"
            value={value.Location?.[0]}
            meta={TransportEventFieldMeta.Location}
          />

          <SignatureDisplay
            label="Signature"
            value={value.Signature?.[0]}
            meta={TransportEventFieldMeta.Signature}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period"
            label="Period"
            items={value.Period}
            meta={TransportEventFieldMeta.Period} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Period"
                value={itemValue}
                meta={TransportEventFieldMeta.Period}
              />
            }
          />
        </div>
    </div>
  )
}

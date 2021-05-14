import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportEvent
  meta: FieldMeta<T>
}

export default function TransportEventDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportEvent ubl-TransportEventType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportEvent ubl-UBLExtensions"
          meta={TransportEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportEventFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEvent ubl-Identifier ubl-IdentificationID"
          meta={TransportEventFieldMeta.IdentificationID} 
          value={value.IdentificationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identification"
              value={itemValue}
              meta={TransportEventFieldMeta.IdentificationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEvent ubl-Date ubl-OccurrenceDate"
          meta={TransportEventFieldMeta.OccurrenceDate} 
          value={value.OccurrenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Occurrence Date"
              value={itemValue}
              meta={TransportEventFieldMeta.OccurrenceDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEvent ubl-Time ubl-OccurrenceTime"
          meta={TransportEventFieldMeta.OccurrenceTime} 
          value={value.OccurrenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Occurrence Time"
              value={itemValue}
              meta={TransportEventFieldMeta.OccurrenceTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEvent ubl-Code ubl-TransportEventTypeCode"
          meta={TransportEventFieldMeta.TransportEventTypeCode} 
          value={value.TransportEventTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Event Type Code"
              value={itemValue}
              meta={TransportEventFieldMeta.TransportEventTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportEvent ubl-Text ubl-Description"
          meta={TransportEventFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TransportEventFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportEvent ubl-Indicator ubl-CompletionIndicator"
          meta={TransportEventFieldMeta.CompletionIndicator} 
          value={value.CompletionIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Completion Indicator"
              value={itemValue}
              meta={TransportEventFieldMeta.CompletionIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEvent ubl-Shipment ubl-ReportedShipment"
          meta={TransportEventFieldMeta.ReportedShipment} 
          value={value.ReportedShipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Reported Shipment"
              value={itemValue}
              meta={TransportEventFieldMeta.ReportedShipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEvent ubl-Status ubl-CurrentStatus"
          meta={TransportEventFieldMeta.CurrentStatus} 
          value={value.CurrentStatus}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay
              key={key}
              label="Current Status"
              value={itemValue}
              meta={TransportEventFieldMeta.CurrentStatus}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEvent ubl-Contact"
          meta={TransportEventFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Contact"
              value={itemValue}
              meta={TransportEventFieldMeta.Contact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEvent ubl-Location"
          meta={TransportEventFieldMeta.Location} 
          value={value.Location}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Location"
              value={itemValue}
              meta={TransportEventFieldMeta.Location}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportEvent ubl-Signature"
          meta={TransportEventFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportEventFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportEvent ubl-Period"
          meta={TransportEventFieldMeta.Period} 
          value={value.Period}
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

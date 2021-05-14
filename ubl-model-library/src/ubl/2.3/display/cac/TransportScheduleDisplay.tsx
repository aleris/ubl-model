import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportSchedule } from  '../../model/cac/TransportSchedule'
import { TransportScheduleFieldMeta } from  '../../meta/cac/TransportScheduleMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportEventDisplay from './TransportEventDisplay'
import { TransportEvent } from '../../model/cac/TransportEvent'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportSchedule
  meta: FieldMeta<T>
}

export default function TransportScheduleDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportSchedule ubl-TransportScheduleType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportSchedule ubl-UBLExtensions"
          meta={TransportScheduleFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportScheduleFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportSchedule ubl-Numeric ubl-SequenceNumeric"
          meta={TransportScheduleFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Sequence"
              value={itemValue}
              meta={TransportScheduleFieldMeta.SequenceNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportSchedule ubl-Date ubl-ReferenceDate"
          meta={TransportScheduleFieldMeta.ReferenceDate} 
          value={value.ReferenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Reference Date"
              value={itemValue}
              meta={TransportScheduleFieldMeta.ReferenceDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportSchedule ubl-Time ubl-ReferenceTime"
          meta={TransportScheduleFieldMeta.ReferenceTime} 
          value={value.ReferenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Reference Time"
              value={itemValue}
              meta={TransportScheduleFieldMeta.ReferenceTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportSchedule ubl-Numeric ubl-ReliabilityPercent"
          meta={TransportScheduleFieldMeta.ReliabilityPercent} 
          value={value.ReliabilityPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Reliability Percent"
              value={itemValue}
              meta={TransportScheduleFieldMeta.ReliabilityPercent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportSchedule ubl-Text ubl-Remarks"
          meta={TransportScheduleFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Remarks"
              value={itemValue}
              meta={TransportScheduleFieldMeta.Remarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-Location ubl-StatusLocation"
          meta={TransportScheduleFieldMeta.StatusLocation} 
          value={value.StatusLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Status Location"
              value={itemValue}
              meta={TransportScheduleFieldMeta.StatusLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-TransportEvent ubl-ActualArrivalTransportEvent"
          meta={TransportScheduleFieldMeta.ActualArrivalTransportEvent} 
          value={value.ActualArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Arrival Transport Event"
              value={itemValue}
              meta={TransportScheduleFieldMeta.ActualArrivalTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-TransportEvent ubl-ActualDepartureTransportEvent"
          meta={TransportScheduleFieldMeta.ActualDepartureTransportEvent} 
          value={value.ActualDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Departure Transport Event"
              value={itemValue}
              meta={TransportScheduleFieldMeta.ActualDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-TransportEvent ubl-EstimatedDepartureTransportEvent"
          meta={TransportScheduleFieldMeta.EstimatedDepartureTransportEvent} 
          value={value.EstimatedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Estimated Departure Transport Event"
              value={itemValue}
              meta={TransportScheduleFieldMeta.EstimatedDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-TransportEvent ubl-EstimatedArrivalTransportEvent"
          meta={TransportScheduleFieldMeta.EstimatedArrivalTransportEvent} 
          value={value.EstimatedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Estimated Arrival Transport Event"
              value={itemValue}
              meta={TransportScheduleFieldMeta.EstimatedArrivalTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-TransportEvent ubl-PlannedDepartureTransportEvent"
          meta={TransportScheduleFieldMeta.PlannedDepartureTransportEvent} 
          value={value.PlannedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Departure Transport Event"
              value={itemValue}
              meta={TransportScheduleFieldMeta.PlannedDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportSchedule ubl-TransportEvent ubl-PlannedArrivalTransportEvent"
          meta={TransportScheduleFieldMeta.PlannedArrivalTransportEvent} 
          value={value.PlannedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Arrival Transport Event"
              value={itemValue}
              meta={TransportScheduleFieldMeta.PlannedArrivalTransportEvent}
            />
          }
        />
        </div>
    </div>
  )
}

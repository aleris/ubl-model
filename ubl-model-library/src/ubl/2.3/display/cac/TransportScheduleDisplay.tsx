import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportSchedule | undefined
  meta: FieldMeta<T>
}

export default function TransportScheduleDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportSchedule">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportScheduleFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Sequence"
            value={value.SequenceNumeric?.[0]}
            meta={TransportScheduleFieldMeta.SequenceNumeric}
          />

          <DateDisplay
            label="Reference Date"
            value={value.ReferenceDate?.[0]}
            meta={TransportScheduleFieldMeta.ReferenceDate}
          />

          <TimeDisplay
            label="Reference Time"
            value={value.ReferenceTime?.[0]}
            meta={TransportScheduleFieldMeta.ReferenceTime}
          />

          <NumericDisplay
            label="Reliability Percent"
            value={value.ReliabilityPercent?.[0]}
            meta={TransportScheduleFieldMeta.ReliabilityPercent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Remarks"
            label="Remarks"
            items={value.Remarks}
            meta={TransportScheduleFieldMeta.Remarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Remarks"
                value={itemValue}
                meta={TransportScheduleFieldMeta.Remarks}
              />
            }
          />

          <LocationDisplay
            label="Status Location"
            value={value.StatusLocation?.[0]}
            meta={TransportScheduleFieldMeta.StatusLocation}
          />

          <TransportEventDisplay
            label="Actual Arrival Transport Event"
            value={value.ActualArrivalTransportEvent?.[0]}
            meta={TransportScheduleFieldMeta.ActualArrivalTransportEvent}
          />

          <TransportEventDisplay
            label="Actual Departure Transport Event"
            value={value.ActualDepartureTransportEvent?.[0]}
            meta={TransportScheduleFieldMeta.ActualDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Estimated Departure Transport Event"
            value={value.EstimatedDepartureTransportEvent?.[0]}
            meta={TransportScheduleFieldMeta.EstimatedDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Estimated Arrival Transport Event"
            value={value.EstimatedArrivalTransportEvent?.[0]}
            meta={TransportScheduleFieldMeta.EstimatedArrivalTransportEvent}
          />

          <TransportEventDisplay
            label="Planned Departure Transport Event"
            value={value.PlannedDepartureTransportEvent?.[0]}
            meta={TransportScheduleFieldMeta.PlannedDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Planned Arrival Transport Event"
            value={value.PlannedArrivalTransportEvent?.[0]}
            meta={TransportScheduleFieldMeta.PlannedArrivalTransportEvent}
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportSchedule
  meta: FieldMeta<T>
}

export default function TransportScheduleDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportScheduleFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportScheduleFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TransportScheduleFieldMeta.SequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.ReferenceDate} 
          value={value.ReferenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportScheduleFieldMeta.ReferenceDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.ReferenceTime} 
          value={value.ReferenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportScheduleFieldMeta.ReferenceTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.ReliabilityPercent} 
          value={value.ReliabilityPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TransportScheduleFieldMeta.ReliabilityPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportScheduleFieldMeta.Remarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.StatusLocation} 
          value={value.StatusLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportScheduleFieldMeta.StatusLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.ActualArrivalTransportEvent} 
          value={value.ActualArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportScheduleFieldMeta.ActualArrivalTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.ActualDepartureTransportEvent} 
          value={value.ActualDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportScheduleFieldMeta.ActualDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.EstimatedDepartureTransportEvent} 
          value={value.EstimatedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportScheduleFieldMeta.EstimatedDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.EstimatedArrivalTransportEvent} 
          value={value.EstimatedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportScheduleFieldMeta.EstimatedArrivalTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.PlannedDepartureTransportEvent} 
          value={value.PlannedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportScheduleFieldMeta.PlannedDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportScheduleFieldMeta.PlannedArrivalTransportEvent} 
          value={value.PlannedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportScheduleFieldMeta.PlannedArrivalTransportEvent} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

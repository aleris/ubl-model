import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportEvent
  meta: FieldMeta<T>
}

export default function TransportEventDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportEventFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.IdentificationID} 
          value={value.IdentificationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportEventFieldMeta.IdentificationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.OccurrenceDate} 
          value={value.OccurrenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportEventFieldMeta.OccurrenceDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.OccurrenceTime} 
          value={value.OccurrenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportEventFieldMeta.OccurrenceTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.TransportEventTypeCode} 
          value={value.TransportEventTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportEventFieldMeta.TransportEventTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportEventFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.CompletionIndicator} 
          value={value.CompletionIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportEventFieldMeta.CompletionIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.ReportedShipment} 
          value={value.ReportedShipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={TransportEventFieldMeta.ReportedShipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.CurrentStatus} 
          value={value.CurrentStatus}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay key={key} meta={TransportEventFieldMeta.CurrentStatus} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={TransportEventFieldMeta.Contact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.Location} 
          value={value.Location}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportEventFieldMeta.Location} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportEventFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportEventFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportEventFieldMeta.Period} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

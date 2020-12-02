import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Event } from  '../../model/cac/Event'
import { EventFieldMeta } from  '../../meta/cac/EventMeta'
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
import StatusDisplay from './StatusDisplay'
import { Status } from '../../model/cac/Status'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Event
  meta: FieldMeta<T>
}

export default function EventDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EventFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.IdentificationID} 
          value={value.IdentificationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EventFieldMeta.IdentificationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.OccurrenceDate} 
          value={value.OccurrenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={EventFieldMeta.OccurrenceDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.OccurrenceTime} 
          value={value.OccurrenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={EventFieldMeta.OccurrenceTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EventFieldMeta.TypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EventFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.CompletionIndicator} 
          value={value.CompletionIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={EventFieldMeta.CompletionIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.CurrentStatus} 
          value={value.CurrentStatus}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay key={key} meta={EventFieldMeta.CurrentStatus} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={EventFieldMeta.Contact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventFieldMeta.OccurenceLocation} 
          value={value.OccurenceLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={EventFieldMeta.OccurenceLocation} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

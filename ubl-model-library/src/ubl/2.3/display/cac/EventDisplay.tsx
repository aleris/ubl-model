import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: Event
  meta: FieldMeta<T>
}

export default function EventDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Event ubl-EventType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Event ubl-UBLExtensions"
          meta={EventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EventFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Event ubl-Identifier ubl-IdentificationID"
          meta={EventFieldMeta.IdentificationID} 
          value={value.IdentificationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identification"
              value={itemValue}
              meta={EventFieldMeta.IdentificationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Event ubl-Date ubl-OccurrenceDate"
          meta={EventFieldMeta.OccurrenceDate} 
          value={value.OccurrenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Occurrence Date"
              value={itemValue}
              meta={EventFieldMeta.OccurrenceDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Event ubl-Time ubl-OccurrenceTime"
          meta={EventFieldMeta.OccurrenceTime} 
          value={value.OccurrenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Occurrence Time"
              value={itemValue}
              meta={EventFieldMeta.OccurrenceTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Event ubl-Code ubl-TypeCode"
          meta={EventFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Type Code"
              value={itemValue}
              meta={EventFieldMeta.TypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Event ubl-Text ubl-Description"
          meta={EventFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={EventFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Event ubl-Indicator ubl-CompletionIndicator"
          meta={EventFieldMeta.CompletionIndicator} 
          value={value.CompletionIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Completion Indicator"
              value={itemValue}
              meta={EventFieldMeta.CompletionIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Event ubl-Status ubl-CurrentStatus"
          meta={EventFieldMeta.CurrentStatus} 
          value={value.CurrentStatus}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay
              key={key}
              label="Current Status"
              value={itemValue}
              meta={EventFieldMeta.CurrentStatus}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Event ubl-Contact"
          meta={EventFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Contact"
              value={itemValue}
              meta={EventFieldMeta.Contact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Event ubl-Location ubl-OccurenceLocation"
          meta={EventFieldMeta.OccurenceLocation} 
          value={value.OccurenceLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Occurence Location"
              value={itemValue}
              meta={EventFieldMeta.OccurenceLocation}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Event | undefined
  meta: FieldMeta<T>
}

export default function EventDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Event">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EventFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identification"
            value={value.IdentificationID?.[0]}
            meta={EventFieldMeta.IdentificationID}
          />

          <DateDisplay
            label="Occurrence Date"
            value={value.OccurrenceDate?.[0]}
            meta={EventFieldMeta.OccurrenceDate}
          />

          <TimeDisplay
            label="Occurrence Time"
            value={value.OccurrenceTime?.[0]}
            meta={EventFieldMeta.OccurrenceTime}
          />

          <CodeDisplay
            label="Type Code"
            value={value.TypeCode?.[0]}
            meta={EventFieldMeta.TypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={EventFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={EventFieldMeta.Description}
              />
            }
          />

          <IndicatorDisplay
            label="Completion Indicator"
            value={value.CompletionIndicator?.[0]}
            meta={EventFieldMeta.CompletionIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Status ubl-CurrentStatus"
            label="Current Status"
            items={value.CurrentStatus}
            meta={EventFieldMeta.CurrentStatus} 
            itemDisplay={ (itemValue: Status, key: string | number) =>
              <StatusDisplay
                key={key}
                label="Current Status"
                value={itemValue}
                meta={EventFieldMeta.CurrentStatus}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Contact"
            label="Contact"
            items={value.Contact}
            meta={EventFieldMeta.Contact} 
            itemDisplay={ (itemValue: Contact, key: string | number) =>
              <ContactDisplay
                key={key}
                label="Contact"
                value={itemValue}
                meta={EventFieldMeta.Contact}
              />
            }
          />

          <LocationDisplay
            label="Occurence Location"
            value={value.OccurenceLocation?.[0]}
            meta={EventFieldMeta.OccurenceLocation}
          />
        </div>
    </div>
  )
}

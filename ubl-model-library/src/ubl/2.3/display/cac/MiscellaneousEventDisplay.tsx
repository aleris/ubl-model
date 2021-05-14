import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MiscellaneousEvent } from  '../../model/cac/MiscellaneousEvent'
import { MiscellaneousEventFieldMeta } from  '../../meta/cac/MiscellaneousEventMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EventLineItemDisplay from './EventLineItemDisplay'
import { EventLineItem } from '../../model/cac/EventLineItem'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: MiscellaneousEvent
  meta: FieldMeta<T>
}

export default function MiscellaneousEventDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-MiscellaneousEvent ubl-MiscellaneousEventType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-MiscellaneousEvent ubl-UBLExtensions"
          meta={MiscellaneousEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MiscellaneousEventFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MiscellaneousEvent ubl-Code ubl-MiscellaneousEventTypeCode"
          meta={MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode} 
          value={value.MiscellaneousEventTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Miscellaneous Event Type Code"
              value={itemValue}
              meta={MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-MiscellaneousEvent ubl-EventLineItem"
          meta={MiscellaneousEventFieldMeta.EventLineItem} 
          value={value.EventLineItem}
          itemDisplay={ (itemValue: EventLineItem, key: string | number) =>
            <EventLineItemDisplay
              key={key}
              label="Event Line Item"
              value={itemValue}
              meta={MiscellaneousEventFieldMeta.EventLineItem}
            />
          }
        />
        </div>
    </div>
  )
}

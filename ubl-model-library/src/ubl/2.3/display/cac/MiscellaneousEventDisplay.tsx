import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: MiscellaneousEvent | undefined
  meta: FieldMeta<T>
}

export default function MiscellaneousEventDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-MiscellaneousEvent">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MiscellaneousEventFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Miscellaneous Event Type Code"
            value={value.MiscellaneousEventTypeCode?.[0]}
            meta={MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-EventLineItem"
            label="Event Line Item"
            items={value.EventLineItem}
            meta={MiscellaneousEventFieldMeta.EventLineItem} 
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

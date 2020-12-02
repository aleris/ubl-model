import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MiscellaneousEvent } from  '../../model/cac/MiscellaneousEvent'
import { MiscellaneousEventFieldMeta } from  '../../meta/cac/MiscellaneousEventMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EventLineItemDisplay from './EventLineItemDisplay'
import { EventLineItem } from '../../model/cac/EventLineItem'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: MiscellaneousEvent
  meta: FieldMeta<T>
}

export default function MiscellaneousEventDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MiscellaneousEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MiscellaneousEventFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode} 
          value={value.MiscellaneousEventTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MiscellaneousEventFieldMeta.EventLineItem} 
          value={value.EventLineItem}
          itemDisplay={ (itemValue: EventLineItem, key: string | number) =>
            <EventLineItemDisplay key={key} meta={MiscellaneousEventFieldMeta.EventLineItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

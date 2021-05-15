import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventTactic } from  '../../model/cac/EventTactic'
import { EventTacticFieldMeta } from  '../../meta/cac/EventTacticMeta'
import EventTacticEnumerationDisplay from './EventTacticEnumerationDisplay'
import { EventTacticEnumeration } from '../../model/cac/EventTacticEnumeration'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EventTactic | undefined
  meta: FieldMeta<T>
}

export default function EventTacticDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EventTactic">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EventTacticFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Comment"
            value={value.Comment?.[0]}
            meta={EventTacticFieldMeta.Comment}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={EventTacticFieldMeta.Quantity}
          />

          <EventTacticEnumerationDisplay
            label="Event Tactic Enumeration"
            value={value.EventTacticEnumeration?.[0]}
            meta={EventTacticFieldMeta.EventTacticEnumeration}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={EventTacticFieldMeta.Period}
          />
        </div>
    </div>
  )
}

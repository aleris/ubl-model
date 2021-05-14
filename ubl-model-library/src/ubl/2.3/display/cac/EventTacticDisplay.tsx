import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EventTactic
  meta: FieldMeta<T>
}

export default function EventTacticDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EventTactic ubl-EventTacticType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EventTactic ubl-UBLExtensions"
          meta={EventTacticFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EventTacticFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventTactic ubl-Text ubl-Comment"
          meta={EventTacticFieldMeta.Comment} 
          value={value.Comment}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Comment"
              value={itemValue}
              meta={EventTacticFieldMeta.Comment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventTactic ubl-Quantity"
          meta={EventTacticFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={EventTacticFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EventTactic ubl-EventTacticEnumeration"
          meta={EventTacticFieldMeta.EventTacticEnumeration} 
          value={value.EventTacticEnumeration}
          itemDisplay={ (itemValue: EventTacticEnumeration, key: string | number) =>
            <EventTacticEnumerationDisplay
              key={key}
              label="Event Tactic Enumeration"
              value={itemValue}
              meta={EventTacticFieldMeta.EventTacticEnumeration}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EventTactic ubl-Period"
          meta={EventTacticFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={EventTacticFieldMeta.Period}
            />
          }
        />
        </div>
    </div>
  )
}

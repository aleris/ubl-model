import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: EventTactic
  meta: FieldMeta<T>
}

export default function EventTacticDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EventTacticFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EventTacticFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticFieldMeta.Comment} 
          value={value.Comment}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EventTacticFieldMeta.Comment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={EventTacticFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticFieldMeta.EventTacticEnumeration} 
          value={value.EventTacticEnumeration}
          itemDisplay={ (itemValue: EventTacticEnumeration, key: string | number) =>
            <EventTacticEnumerationDisplay key={key} meta={EventTacticFieldMeta.EventTacticEnumeration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={EventTacticFieldMeta.Period} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

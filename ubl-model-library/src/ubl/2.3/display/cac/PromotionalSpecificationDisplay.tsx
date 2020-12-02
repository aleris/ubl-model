import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalSpecification } from  '../../model/cac/PromotionalSpecification'
import { PromotionalSpecificationFieldMeta } from  '../../meta/cac/PromotionalSpecificationMeta'
import EventTacticDisplay from './EventTacticDisplay'
import { EventTactic } from '../../model/cac/EventTactic'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PromotionalEventLineItemDisplay from './PromotionalEventLineItemDisplay'
import { PromotionalEventLineItem } from '../../model/cac/PromotionalEventLineItem'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PromotionalSpecification
  meta: FieldMeta<T>
}

export default function PromotionalSpecificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PromotionalSpecificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PromotionalSpecificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalSpecificationFieldMeta.SpecificationID} 
          value={value.SpecificationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PromotionalSpecificationFieldMeta.SpecificationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem} 
          value={value.PromotionalEventLineItem}
          itemDisplay={ (itemValue: PromotionalEventLineItem, key: string | number) =>
            <PromotionalEventLineItemDisplay key={key} meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalSpecificationFieldMeta.EventTactic} 
          value={value.EventTactic}
          itemDisplay={ (itemValue: EventTactic, key: string | number) =>
            <EventTacticDisplay key={key} meta={PromotionalSpecificationFieldMeta.EventTactic} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

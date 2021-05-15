import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: PromotionalSpecification | undefined
  meta: FieldMeta<T>
}

export default function PromotionalSpecificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PromotionalSpecification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PromotionalSpecificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Specification Identifier"
            value={value.SpecificationID?.[0]}
            meta={PromotionalSpecificationFieldMeta.SpecificationID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PromotionalEventLineItem"
            label="Promotional Event Line Item"
            items={value.PromotionalEventLineItem}
            meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem} 
            itemDisplay={ (itemValue: PromotionalEventLineItem, key: string | number) =>
              <PromotionalEventLineItemDisplay
                key={key}
                label="Promotional Event Line Item"
                value={itemValue}
                meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EventTactic"
            label="Event Tactic"
            items={value.EventTactic}
            meta={PromotionalSpecificationFieldMeta.EventTactic} 
            itemDisplay={ (itemValue: EventTactic, key: string | number) =>
              <EventTacticDisplay
                key={key}
                label="Event Tactic"
                value={itemValue}
                meta={PromotionalSpecificationFieldMeta.EventTactic}
              />
            }
          />
        </div>
    </div>
  )
}

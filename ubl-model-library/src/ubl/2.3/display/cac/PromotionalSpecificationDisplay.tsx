import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PromotionalSpecification
  meta: FieldMeta<T>
}

export default function PromotionalSpecificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PromotionalSpecification ubl-PromotionalSpecificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PromotionalSpecification ubl-UBLExtensions"
          meta={PromotionalSpecificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PromotionalSpecificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PromotionalSpecification ubl-Identifier ubl-SpecificationID"
          meta={PromotionalSpecificationFieldMeta.SpecificationID} 
          value={value.SpecificationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Specification Identifier"
              value={itemValue}
              meta={PromotionalSpecificationFieldMeta.SpecificationID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PromotionalSpecification ubl-PromotionalEventLineItem"
          meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem} 
          value={value.PromotionalEventLineItem}
          itemDisplay={ (itemValue: PromotionalEventLineItem, key: string | number) =>
            <PromotionalEventLineItemDisplay
              key={key}
              label="Promotional Event Line Item"
              value={itemValue}
              meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PromotionalSpecification ubl-EventTactic"
          meta={PromotionalSpecificationFieldMeta.EventTactic} 
          value={value.EventTactic}
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

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalEvent } from  '../../model/cac/PromotionalEvent'
import { PromotionalEventFieldMeta } from  '../../meta/cac/PromotionalEventMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import PromotionalSpecificationDisplay from './PromotionalSpecificationDisplay'
import { PromotionalSpecification } from '../../model/cac/PromotionalSpecification'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PromotionalEvent
  meta: FieldMeta<T>
}

export default function PromotionalEventDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PromotionalEvent ubl-PromotionalEventType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PromotionalEvent ubl-UBLExtensions"
          meta={PromotionalEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PromotionalEventFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PromotionalEvent ubl-Code ubl-PromotionalEventTypeCode"
          meta={PromotionalEventFieldMeta.PromotionalEventTypeCode} 
          value={value.PromotionalEventTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Promotional Event Type Code"
              value={itemValue}
              meta={PromotionalEventFieldMeta.PromotionalEventTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PromotionalEvent ubl-Date ubl-SubmissionDate"
          meta={PromotionalEventFieldMeta.SubmissionDate} 
          value={value.SubmissionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Submission"
              value={itemValue}
              meta={PromotionalEventFieldMeta.SubmissionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PromotionalEvent ubl-Date ubl-FirstShipmentAvailibilityDate"
          meta={PromotionalEventFieldMeta.FirstShipmentAvailibilityDate} 
          value={value.FirstShipmentAvailibilityDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="First Shipment Availibility Date"
              value={itemValue}
              meta={PromotionalEventFieldMeta.FirstShipmentAvailibilityDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PromotionalEvent ubl-Date ubl-LatestProposalAcceptanceDate"
          meta={PromotionalEventFieldMeta.LatestProposalAcceptanceDate} 
          value={value.LatestProposalAcceptanceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Latest Proposal Acceptance Date"
              value={itemValue}
              meta={PromotionalEventFieldMeta.LatestProposalAcceptanceDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PromotionalEvent ubl-PromotionalSpecification"
          meta={PromotionalEventFieldMeta.PromotionalSpecification} 
          value={value.PromotionalSpecification}
          itemDisplay={ (itemValue: PromotionalSpecification, key: string | number) =>
            <PromotionalSpecificationDisplay
              key={key}
              label="Promotional Specification"
              value={itemValue}
              meta={PromotionalEventFieldMeta.PromotionalSpecification}
            />
          }
        />
        </div>
    </div>
  )
}

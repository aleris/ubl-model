import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: PromotionalEvent | undefined
  meta: FieldMeta<T>
}

export default function PromotionalEventDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PromotionalEvent">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PromotionalEventFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Promotional Event Type Code"
            value={value.PromotionalEventTypeCode?.[0]}
            meta={PromotionalEventFieldMeta.PromotionalEventTypeCode}
          />

          <DateDisplay
            label="Submission"
            value={value.SubmissionDate?.[0]}
            meta={PromotionalEventFieldMeta.SubmissionDate}
          />

          <DateDisplay
            label="First Shipment Availibility Date"
            value={value.FirstShipmentAvailibilityDate?.[0]}
            meta={PromotionalEventFieldMeta.FirstShipmentAvailibilityDate}
          />

          <DateDisplay
            label="Latest Proposal Acceptance Date"
            value={value.LatestProposalAcceptanceDate?.[0]}
            meta={PromotionalEventFieldMeta.LatestProposalAcceptanceDate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PromotionalSpecification"
            label="Promotional Specification"
            items={value.PromotionalSpecification}
            meta={PromotionalEventFieldMeta.PromotionalSpecification} 
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

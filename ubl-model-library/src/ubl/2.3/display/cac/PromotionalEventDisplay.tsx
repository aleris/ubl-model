import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PromotionalEvent
  meta: FieldMeta<T>
}

export default function PromotionalEventDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PromotionalEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PromotionalEventFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventFieldMeta.PromotionalEventTypeCode} 
          value={value.PromotionalEventTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PromotionalEventFieldMeta.PromotionalEventTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventFieldMeta.SubmissionDate} 
          value={value.SubmissionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PromotionalEventFieldMeta.SubmissionDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventFieldMeta.FirstShipmentAvailibilityDate} 
          value={value.FirstShipmentAvailibilityDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PromotionalEventFieldMeta.FirstShipmentAvailibilityDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventFieldMeta.LatestProposalAcceptanceDate} 
          value={value.LatestProposalAcceptanceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PromotionalEventFieldMeta.LatestProposalAcceptanceDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PromotionalEventFieldMeta.PromotionalSpecification} 
          value={value.PromotionalSpecification}
          itemDisplay={ (itemValue: PromotionalSpecification, key: string | number) =>
            <PromotionalSpecificationDisplay key={key} meta={PromotionalEventFieldMeta.PromotionalSpecification} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

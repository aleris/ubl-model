import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalEvent } from  '../../model/cac/PromotionalEvent'
import { PromotionalEventField, PromotionalEventFieldMeta, PromotionalEventTypeName } from  '../../meta/cac/PromotionalEventMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { PromotionalSpecificationDisplay } from './PromotionalSpecificationDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PromotionalEvent, void>
  promotionalEvent: PromotionalEvent[] | undefined
  renderContext: RenderContext
}

export const PromotionalEventSubElementsMap: SubElementsTemplatesMap<PromotionalEventField, PromotionalEvent, void> = new Map([
    [
      PromotionalEventField.UBLExtensions,
      { meta: PromotionalEventFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PromotionalEventField.UBLExtensions}
          meta={PromotionalEventFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventField.PromotionalEventTypeCode,
      { meta: PromotionalEventFieldMeta.PromotionalEventTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PromotionalEventField.PromotionalEventTypeCode}
          meta={PromotionalEventFieldMeta.PromotionalEventTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PromotionalEventTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventField.SubmissionDate,
      { meta: PromotionalEventFieldMeta.SubmissionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PromotionalEventField.SubmissionDate}
          meta={PromotionalEventFieldMeta.SubmissionDate}
          fieldConfig={fieldConfig}
          date={value?.SubmissionDate}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventField.FirstShipmentAvailibilityDate,
      { meta: PromotionalEventFieldMeta.FirstShipmentAvailibilityDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PromotionalEventField.FirstShipmentAvailibilityDate}
          meta={PromotionalEventFieldMeta.FirstShipmentAvailibilityDate}
          fieldConfig={fieldConfig}
          date={value?.FirstShipmentAvailibilityDate}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventField.LatestProposalAcceptanceDate,
      { meta: PromotionalEventFieldMeta.LatestProposalAcceptanceDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PromotionalEventField.LatestProposalAcceptanceDate}
          meta={PromotionalEventFieldMeta.LatestProposalAcceptanceDate}
          fieldConfig={fieldConfig}
          date={value?.LatestProposalAcceptanceDate}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventField.PromotionalSpecification,
      { meta: PromotionalEventFieldMeta.PromotionalSpecification,
        template: ({value, renderContext, fieldConfig}) => <PromotionalSpecificationDisplay
          key={PromotionalEventField.PromotionalSpecification}
          meta={PromotionalEventFieldMeta.PromotionalSpecification}
          fieldConfig={fieldConfig}
          promotionalSpecification={value?.PromotionalSpecification}
          renderContext={renderContext}
        />}
    ]
]) 

export function PromotionalEventDisplay<TFieldMeta>({ meta, fieldConfig, promotionalEvent, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PromotionalEventTypeName,
    meta,
    fieldConfig,
    promotionalEvent,
    renderContext,
    PromotionalEventSubElementsMap,
  )
}

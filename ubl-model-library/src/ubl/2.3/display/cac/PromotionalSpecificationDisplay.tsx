import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalSpecification } from  '../../model/cac/PromotionalSpecification'
import { PromotionalSpecificationField, PromotionalSpecificationFieldMeta, PromotionalSpecificationTypeName } from  '../../meta/cac/PromotionalSpecificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { EventTacticDisplay } from './EventTacticDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PromotionalEventLineItemDisplay } from './PromotionalEventLineItemDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PromotionalSpecification, void>
  promotionalSpecification: PromotionalSpecification[] | undefined
  renderContext: RenderContext
}

export const PromotionalSpecificationSubElementsMap: SubElementsTemplatesMap<PromotionalSpecificationField, PromotionalSpecification, void> = new Map([
    [
      PromotionalSpecificationField.UBLExtensions,
      { meta: PromotionalSpecificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PromotionalSpecificationField.UBLExtensions}
          meta={PromotionalSpecificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalSpecificationField.SpecificationID,
      { meta: PromotionalSpecificationFieldMeta.SpecificationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PromotionalSpecificationField.SpecificationID}
          meta={PromotionalSpecificationFieldMeta.SpecificationID}
          fieldConfig={fieldConfig}
          identifier={value?.SpecificationID}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalSpecificationField.PromotionalEventLineItem,
      { meta: PromotionalSpecificationFieldMeta.PromotionalEventLineItem,
        template: ({value, renderContext, fieldConfig}) => <PromotionalEventLineItemDisplay
          key={PromotionalSpecificationField.PromotionalEventLineItem}
          meta={PromotionalSpecificationFieldMeta.PromotionalEventLineItem}
          fieldConfig={fieldConfig}
          promotionalEventLineItem={value?.PromotionalEventLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalSpecificationField.EventTactic,
      { meta: PromotionalSpecificationFieldMeta.EventTactic,
        template: ({value, renderContext, fieldConfig}) => <EventTacticDisplay
          key={PromotionalSpecificationField.EventTactic}
          meta={PromotionalSpecificationFieldMeta.EventTactic}
          fieldConfig={fieldConfig}
          eventTactic={value?.EventTactic}
          renderContext={renderContext}
        />}
    ]
]) 

export function PromotionalSpecificationDisplay<TFieldMeta>({ meta, fieldConfig, promotionalSpecification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PromotionalSpecificationTypeName,
    meta,
    fieldConfig,
    promotionalSpecification,
    renderContext,
    PromotionalSpecificationSubElementsMap,
  )
}

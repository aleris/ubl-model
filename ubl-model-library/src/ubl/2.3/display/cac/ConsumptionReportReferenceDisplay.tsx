import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionReportReference } from  '../../model/cac/ConsumptionReportReference'
import { ConsumptionReportReferenceField, ConsumptionReportReferenceFieldMeta, ConsumptionReportReferenceTypeName } from  '../../meta/cac/ConsumptionReportReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionReportReference, void>
  consumptionReportReference: ConsumptionReportReference[] | undefined
  renderContext: RenderContext
}

export const ConsumptionReportReferenceSubElementsMap: SubElementsTemplatesMap<ConsumptionReportReferenceField, ConsumptionReportReference, void> = new Map([
    [
      ConsumptionReportReferenceField.UBLExtensions,
      { meta: ConsumptionReportReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionReportReferenceField.UBLExtensions}
          meta={ConsumptionReportReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportReferenceField.ConsumptionReportID,
      { meta: ConsumptionReportReferenceFieldMeta.ConsumptionReportID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsumptionReportReferenceField.ConsumptionReportID}
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionReportID}
          fieldConfig={fieldConfig}
          identifier={value?.ConsumptionReportID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportReferenceField.ConsumptionType,
      { meta: ConsumptionReportReferenceFieldMeta.ConsumptionType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionReportReferenceField.ConsumptionType}
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionType}
          fieldConfig={fieldConfig}
          text={value?.ConsumptionType}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportReferenceField.ConsumptionTypeCode,
      { meta: ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionReportReferenceField.ConsumptionTypeCode}
          meta={ConsumptionReportReferenceFieldMeta.ConsumptionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ConsumptionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportReferenceField.TotalConsumedQuantity,
      { meta: ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionReportReferenceField.TotalConsumedQuantity}
          meta={ConsumptionReportReferenceFieldMeta.TotalConsumedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalConsumedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportReferenceField.Period,
      { meta: ConsumptionReportReferenceFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ConsumptionReportReferenceField.Period}
          meta={ConsumptionReportReferenceFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionReportReferenceDisplay<TFieldMeta>({ meta, fieldConfig, consumptionReportReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionReportReferenceTypeName,
    meta,
    fieldConfig,
    consumptionReportReference,
    renderContext,
    ConsumptionReportReferenceSubElementsMap,
  )
}

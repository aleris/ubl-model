import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionNotificationLine } from  '../../model/cac/ExceptionNotificationLine'
import { ExceptionNotificationLineField, ExceptionNotificationLineFieldMeta, ExceptionNotificationLineTypeName } from  '../../meta/cac/ExceptionNotificationLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { ForecastExceptionDisplay } from './ForecastExceptionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExceptionNotificationLine, void>
  exceptionNotificationLine: ExceptionNotificationLine[] | undefined
  renderContext: RenderContext
}

export const ExceptionNotificationLineSubElementsMap: SubElementsTemplatesMap<ExceptionNotificationLineField, ExceptionNotificationLine, void> = new Map([
    [
      ExceptionNotificationLineField.UBLExtensions,
      { meta: ExceptionNotificationLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExceptionNotificationLineField.UBLExtensions}
          meta={ExceptionNotificationLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.ID,
      { meta: ExceptionNotificationLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExceptionNotificationLineField.ID}
          meta={ExceptionNotificationLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.Note,
      { meta: ExceptionNotificationLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExceptionNotificationLineField.Note}
          meta={ExceptionNotificationLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.Description,
      { meta: ExceptionNotificationLineFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExceptionNotificationLineField.Description}
          meta={ExceptionNotificationLineFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.ExceptionStatusCode,
      { meta: ExceptionNotificationLineFieldMeta.ExceptionStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionNotificationLineField.ExceptionStatusCode}
          meta={ExceptionNotificationLineFieldMeta.ExceptionStatusCode}
          fieldConfig={fieldConfig}
          code={value?.ExceptionStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.CollaborationPriorityCode,
      { meta: ExceptionNotificationLineFieldMeta.CollaborationPriorityCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionNotificationLineField.CollaborationPriorityCode}
          meta={ExceptionNotificationLineFieldMeta.CollaborationPriorityCode}
          fieldConfig={fieldConfig}
          code={value?.CollaborationPriorityCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.ResolutionCode,
      { meta: ExceptionNotificationLineFieldMeta.ResolutionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionNotificationLineField.ResolutionCode}
          meta={ExceptionNotificationLineFieldMeta.ResolutionCode}
          fieldConfig={fieldConfig}
          code={value?.ResolutionCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.ComparedValueMeasure,
      { meta: ExceptionNotificationLineFieldMeta.ComparedValueMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ExceptionNotificationLineField.ComparedValueMeasure}
          meta={ExceptionNotificationLineFieldMeta.ComparedValueMeasure}
          fieldConfig={fieldConfig}
          measure={value?.ComparedValueMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.SourceValueMeasure,
      { meta: ExceptionNotificationLineFieldMeta.SourceValueMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ExceptionNotificationLineField.SourceValueMeasure}
          meta={ExceptionNotificationLineFieldMeta.SourceValueMeasure}
          fieldConfig={fieldConfig}
          measure={value?.SourceValueMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.VarianceQuantity,
      { meta: ExceptionNotificationLineFieldMeta.VarianceQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ExceptionNotificationLineField.VarianceQuantity}
          meta={ExceptionNotificationLineFieldMeta.VarianceQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.VarianceQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.SupplyChainActivityTypeCode,
      { meta: ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionNotificationLineField.SupplyChainActivityTypeCode}
          meta={ExceptionNotificationLineFieldMeta.SupplyChainActivityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SupplyChainActivityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.PerformanceMetricTypeCode,
      { meta: ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExceptionNotificationLineField.PerformanceMetricTypeCode}
          meta={ExceptionNotificationLineFieldMeta.PerformanceMetricTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PerformanceMetricTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.ExceptionObservationPeriod,
      { meta: ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ExceptionNotificationLineField.ExceptionObservationPeriod}
          meta={ExceptionNotificationLineFieldMeta.ExceptionObservationPeriod}
          fieldConfig={fieldConfig}
          period={value?.ExceptionObservationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.DocumentReference,
      { meta: ExceptionNotificationLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ExceptionNotificationLineField.DocumentReference}
          meta={ExceptionNotificationLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.ForecastException,
      { meta: ExceptionNotificationLineFieldMeta.ForecastException,
        template: ({value, renderContext, fieldConfig}) => <ForecastExceptionDisplay
          key={ExceptionNotificationLineField.ForecastException}
          meta={ExceptionNotificationLineFieldMeta.ForecastException}
          fieldConfig={fieldConfig}
          forecastException={value?.ForecastException}
          renderContext={renderContext}
        />}
    ],

    [
      ExceptionNotificationLineField.SupplyItem,
      { meta: ExceptionNotificationLineFieldMeta.SupplyItem,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={ExceptionNotificationLineField.SupplyItem}
          meta={ExceptionNotificationLineFieldMeta.SupplyItem}
          fieldConfig={fieldConfig}
          item={value?.SupplyItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExceptionNotificationLineDisplay<TFieldMeta>({ meta, fieldConfig, exceptionNotificationLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExceptionNotificationLineTypeName,
    meta,
    fieldConfig,
    exceptionNotificationLine,
    renderContext,
    ExceptionNotificationLineSubElementsMap,
  )
}

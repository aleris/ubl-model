import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionReport } from  '../../model/cac/ConsumptionReport'
import { ConsumptionReportField, ConsumptionReportFieldMeta, ConsumptionReportTypeName } from  '../../meta/cac/ConsumptionReportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConsumptionHistoryDisplay } from './ConsumptionHistoryDisplay'
import { ConsumptionReportReferenceDisplay } from './ConsumptionReportReferenceDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionReport, void>
  consumptionReport: ConsumptionReport[] | undefined
  renderContext: RenderContext
}

export const ConsumptionReportSubElementsMap: SubElementsTemplatesMap<ConsumptionReportField, ConsumptionReport, void> = new Map([
    [
      ConsumptionReportField.UBLExtensions,
      { meta: ConsumptionReportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionReportField.UBLExtensions}
          meta={ConsumptionReportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ID,
      { meta: ConsumptionReportFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsumptionReportField.ID}
          meta={ConsumptionReportFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ConsumptionType,
      { meta: ConsumptionReportFieldMeta.ConsumptionType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionReportField.ConsumptionType}
          meta={ConsumptionReportFieldMeta.ConsumptionType}
          fieldConfig={fieldConfig}
          text={value?.ConsumptionType}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ConsumptionTypeCode,
      { meta: ConsumptionReportFieldMeta.ConsumptionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionReportField.ConsumptionTypeCode}
          meta={ConsumptionReportFieldMeta.ConsumptionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ConsumptionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.Description,
      { meta: ConsumptionReportFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionReportField.Description}
          meta={ConsumptionReportFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.TotalConsumedQuantity,
      { meta: ConsumptionReportFieldMeta.TotalConsumedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionReportField.TotalConsumedQuantity}
          meta={ConsumptionReportFieldMeta.TotalConsumedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalConsumedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.BasicConsumedQuantity,
      { meta: ConsumptionReportFieldMeta.BasicConsumedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionReportField.BasicConsumedQuantity}
          meta={ConsumptionReportFieldMeta.BasicConsumedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.BasicConsumedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ResidentOccupantsNumeric,
      { meta: ConsumptionReportFieldMeta.ResidentOccupantsNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ConsumptionReportField.ResidentOccupantsNumeric}
          meta={ConsumptionReportFieldMeta.ResidentOccupantsNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.ResidentOccupantsNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ConsumersEnergyLevelCode,
      { meta: ConsumptionReportFieldMeta.ConsumersEnergyLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionReportField.ConsumersEnergyLevelCode}
          meta={ConsumptionReportFieldMeta.ConsumersEnergyLevelCode}
          fieldConfig={fieldConfig}
          code={value?.ConsumersEnergyLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ConsumersEnergyLevel,
      { meta: ConsumptionReportFieldMeta.ConsumersEnergyLevel,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionReportField.ConsumersEnergyLevel}
          meta={ConsumptionReportFieldMeta.ConsumersEnergyLevel}
          fieldConfig={fieldConfig}
          text={value?.ConsumersEnergyLevel}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ResidenceType,
      { meta: ConsumptionReportFieldMeta.ResidenceType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionReportField.ResidenceType}
          meta={ConsumptionReportFieldMeta.ResidenceType}
          fieldConfig={fieldConfig}
          text={value?.ResidenceType}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ResidenceTypeCode,
      { meta: ConsumptionReportFieldMeta.ResidenceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionReportField.ResidenceTypeCode}
          meta={ConsumptionReportFieldMeta.ResidenceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ResidenceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.HeatingType,
      { meta: ConsumptionReportFieldMeta.HeatingType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionReportField.HeatingType}
          meta={ConsumptionReportFieldMeta.HeatingType}
          fieldConfig={fieldConfig}
          text={value?.HeatingType}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.HeatingTypeCode,
      { meta: ConsumptionReportFieldMeta.HeatingTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionReportField.HeatingTypeCode}
          meta={ConsumptionReportFieldMeta.HeatingTypeCode}
          fieldConfig={fieldConfig}
          code={value?.HeatingTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.Period,
      { meta: ConsumptionReportFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ConsumptionReportField.Period}
          meta={ConsumptionReportFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.GuidanceDocumentReference,
      { meta: ConsumptionReportFieldMeta.GuidanceDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ConsumptionReportField.GuidanceDocumentReference}
          meta={ConsumptionReportFieldMeta.GuidanceDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.GuidanceDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.DocumentReference,
      { meta: ConsumptionReportFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ConsumptionReportField.DocumentReference}
          meta={ConsumptionReportFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ConsumptionReportReference,
      { meta: ConsumptionReportFieldMeta.ConsumptionReportReference,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionReportReferenceDisplay
          key={ConsumptionReportField.ConsumptionReportReference}
          meta={ConsumptionReportFieldMeta.ConsumptionReportReference}
          fieldConfig={fieldConfig}
          consumptionReportReference={value?.ConsumptionReportReference}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionReportField.ConsumptionHistory,
      { meta: ConsumptionReportFieldMeta.ConsumptionHistory,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionHistoryDisplay
          key={ConsumptionReportField.ConsumptionHistory}
          meta={ConsumptionReportFieldMeta.ConsumptionHistory}
          fieldConfig={fieldConfig}
          consumptionHistory={value?.ConsumptionHistory}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionReportDisplay<TFieldMeta>({ meta, fieldConfig, consumptionReport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionReportTypeName,
    meta,
    fieldConfig,
    consumptionReport,
    renderContext,
    ConsumptionReportSubElementsMap,
  )
}

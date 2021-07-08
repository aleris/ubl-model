import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { MeterReading } from  '../../model/cac/MeterReading'
import { MeterReadingField, MeterReadingFieldMeta, MeterReadingTypeName } from  '../../meta/cac/MeterReadingMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<MeterReading, void>
  meterReading: MeterReading[] | undefined
  renderContext: RenderContext
}

export const MeterReadingSubElementsMap: SubElementsTemplatesMap<MeterReadingField, MeterReading, void> = new Map([
    [
      MeterReadingField.UBLExtensions,
      { meta: MeterReadingFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MeterReadingField.UBLExtensions}
          meta={MeterReadingFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.ID,
      { meta: MeterReadingFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={MeterReadingField.ID}
          meta={MeterReadingFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.MeterReadingType,
      { meta: MeterReadingFieldMeta.MeterReadingType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterReadingField.MeterReadingType}
          meta={MeterReadingFieldMeta.MeterReadingType}
          fieldConfig={fieldConfig}
          text={value?.MeterReadingType}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.MeterReadingTypeCode,
      { meta: MeterReadingFieldMeta.MeterReadingTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MeterReadingField.MeterReadingTypeCode}
          meta={MeterReadingFieldMeta.MeterReadingTypeCode}
          fieldConfig={fieldConfig}
          code={value?.MeterReadingTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.PreviousMeterReadingDate,
      { meta: MeterReadingFieldMeta.PreviousMeterReadingDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={MeterReadingField.PreviousMeterReadingDate}
          meta={MeterReadingFieldMeta.PreviousMeterReadingDate}
          fieldConfig={fieldConfig}
          date={value?.PreviousMeterReadingDate}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.PreviousMeterQuantity,
      { meta: MeterReadingFieldMeta.PreviousMeterQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={MeterReadingField.PreviousMeterQuantity}
          meta={MeterReadingFieldMeta.PreviousMeterQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.PreviousMeterQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.LatestMeterReadingDate,
      { meta: MeterReadingFieldMeta.LatestMeterReadingDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={MeterReadingField.LatestMeterReadingDate}
          meta={MeterReadingFieldMeta.LatestMeterReadingDate}
          fieldConfig={fieldConfig}
          date={value?.LatestMeterReadingDate}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.LatestMeterQuantity,
      { meta: MeterReadingFieldMeta.LatestMeterQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={MeterReadingField.LatestMeterQuantity}
          meta={MeterReadingFieldMeta.LatestMeterQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.LatestMeterQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.PreviousMeterReadingMethod,
      { meta: MeterReadingFieldMeta.PreviousMeterReadingMethod,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterReadingField.PreviousMeterReadingMethod}
          meta={MeterReadingFieldMeta.PreviousMeterReadingMethod}
          fieldConfig={fieldConfig}
          text={value?.PreviousMeterReadingMethod}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.PreviousMeterReadingMethodCode,
      { meta: MeterReadingFieldMeta.PreviousMeterReadingMethodCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MeterReadingField.PreviousMeterReadingMethodCode}
          meta={MeterReadingFieldMeta.PreviousMeterReadingMethodCode}
          fieldConfig={fieldConfig}
          code={value?.PreviousMeterReadingMethodCode}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.LatestMeterReadingMethod,
      { meta: MeterReadingFieldMeta.LatestMeterReadingMethod,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterReadingField.LatestMeterReadingMethod}
          meta={MeterReadingFieldMeta.LatestMeterReadingMethod}
          fieldConfig={fieldConfig}
          text={value?.LatestMeterReadingMethod}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.LatestMeterReadingMethodCode,
      { meta: MeterReadingFieldMeta.LatestMeterReadingMethodCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MeterReadingField.LatestMeterReadingMethodCode}
          meta={MeterReadingFieldMeta.LatestMeterReadingMethodCode}
          fieldConfig={fieldConfig}
          code={value?.LatestMeterReadingMethodCode}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.MeterReadingComments,
      { meta: MeterReadingFieldMeta.MeterReadingComments,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterReadingField.MeterReadingComments}
          meta={MeterReadingFieldMeta.MeterReadingComments}
          fieldConfig={fieldConfig}
          text={value?.MeterReadingComments}
          renderContext={renderContext}
        />}
    ],

    [
      MeterReadingField.DeliveredQuantity,
      { meta: MeterReadingFieldMeta.DeliveredQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={MeterReadingField.DeliveredQuantity}
          meta={MeterReadingFieldMeta.DeliveredQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.DeliveredQuantity}
          renderContext={renderContext}
        />}
    ]
]) 

export function MeterReadingDisplay<TFieldMeta>({ meta, fieldConfig, meterReading, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MeterReadingTypeName,
    meta,
    fieldConfig,
    meterReading,
    renderContext,
    MeterReadingSubElementsMap,
  )
}

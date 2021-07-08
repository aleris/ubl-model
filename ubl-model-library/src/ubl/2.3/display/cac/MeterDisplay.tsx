import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Meter } from  '../../model/cac/Meter'
import { MeterField, MeterFieldMeta, MeterTypeName } from  '../../meta/cac/MeterMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { MeterPropertyDisplay } from './MeterPropertyDisplay'
import { MeterReadingDisplay } from './MeterReadingDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Meter, void>
  meter: Meter[] | undefined
  renderContext: RenderContext
}

export const MeterSubElementsMap: SubElementsTemplatesMap<MeterField, Meter, void> = new Map([
    [
      MeterField.UBLExtensions,
      { meta: MeterFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MeterField.UBLExtensions}
          meta={MeterFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.MeterNumber,
      { meta: MeterFieldMeta.MeterNumber,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterField.MeterNumber}
          meta={MeterFieldMeta.MeterNumber}
          fieldConfig={fieldConfig}
          text={value?.MeterNumber}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.MeterName,
      { meta: MeterFieldMeta.MeterName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterField.MeterName}
          meta={MeterFieldMeta.MeterName}
          fieldConfig={fieldConfig}
          text={value?.MeterName}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.MeterConstant,
      { meta: MeterFieldMeta.MeterConstant,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterField.MeterConstant}
          meta={MeterFieldMeta.MeterConstant}
          fieldConfig={fieldConfig}
          text={value?.MeterConstant}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.MeterConstantCode,
      { meta: MeterFieldMeta.MeterConstantCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MeterField.MeterConstantCode}
          meta={MeterFieldMeta.MeterConstantCode}
          fieldConfig={fieldConfig}
          code={value?.MeterConstantCode}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.TotalDeliveredQuantity,
      { meta: MeterFieldMeta.TotalDeliveredQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={MeterField.TotalDeliveredQuantity}
          meta={MeterFieldMeta.TotalDeliveredQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalDeliveredQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.MeterReading,
      { meta: MeterFieldMeta.MeterReading,
        template: ({value, renderContext, fieldConfig}) => <MeterReadingDisplay
          key={MeterField.MeterReading}
          meta={MeterFieldMeta.MeterReading}
          fieldConfig={fieldConfig}
          meterReading={value?.MeterReading}
          renderContext={renderContext}
        />}
    ],

    [
      MeterField.MeterProperty,
      { meta: MeterFieldMeta.MeterProperty,
        template: ({value, renderContext, fieldConfig}) => <MeterPropertyDisplay
          key={MeterField.MeterProperty}
          meta={MeterFieldMeta.MeterProperty}
          fieldConfig={fieldConfig}
          meterProperty={value?.MeterProperty}
          renderContext={renderContext}
        />}
    ]
]) 

export function MeterDisplay<TFieldMeta>({ meta, fieldConfig, meter, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MeterTypeName,
    meta,
    fieldConfig,
    meter,
    renderContext,
    MeterSubElementsMap,
  )
}

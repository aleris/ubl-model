import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { MeterProperty } from  '../../model/cac/MeterProperty'
import { MeterPropertyField, MeterPropertyFieldMeta, MeterPropertyTypeName } from  '../../meta/cac/MeterPropertyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<MeterProperty, void>
  meterProperty: MeterProperty[] | undefined
  renderContext: RenderContext
}

export const MeterPropertySubElementsMap: SubElementsTemplatesMap<MeterPropertyField, MeterProperty, void> = new Map([
    [
      MeterPropertyField.UBLExtensions,
      { meta: MeterPropertyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MeterPropertyField.UBLExtensions}
          meta={MeterPropertyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MeterPropertyField.Name,
      { meta: MeterPropertyFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterPropertyField.Name}
          meta={MeterPropertyFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      MeterPropertyField.NameCode,
      { meta: MeterPropertyFieldMeta.NameCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MeterPropertyField.NameCode}
          meta={MeterPropertyFieldMeta.NameCode}
          fieldConfig={fieldConfig}
          code={value?.NameCode}
          renderContext={renderContext}
        />}
    ],

    [
      MeterPropertyField.Value,
      { meta: MeterPropertyFieldMeta.Value,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterPropertyField.Value}
          meta={MeterPropertyFieldMeta.Value}
          fieldConfig={fieldConfig}
          text={value?.Value}
          renderContext={renderContext}
        />}
    ],

    [
      MeterPropertyField.ValueQuantity,
      { meta: MeterPropertyFieldMeta.ValueQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={MeterPropertyField.ValueQuantity}
          meta={MeterPropertyFieldMeta.ValueQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ValueQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      MeterPropertyField.ValueQualifier,
      { meta: MeterPropertyFieldMeta.ValueQualifier,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MeterPropertyField.ValueQualifier}
          meta={MeterPropertyFieldMeta.ValueQualifier}
          fieldConfig={fieldConfig}
          text={value?.ValueQualifier}
          renderContext={renderContext}
        />}
    ]
]) 

export function MeterPropertyDisplay<TFieldMeta>({ meta, fieldConfig, meterProperty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MeterPropertyTypeName,
    meta,
    fieldConfig,
    meterProperty,
    renderContext,
    MeterPropertySubElementsMap,
  )
}

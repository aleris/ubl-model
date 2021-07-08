import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Stowage } from  '../../model/cac/Stowage'
import { StowageField, StowageFieldMeta, StowageTypeName } from  '../../meta/cac/StowageMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DimensionDisplay } from './DimensionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Stowage, void>
  stowage: Stowage[] | undefined
  renderContext: RenderContext
}

export const StowageSubElementsMap: SubElementsTemplatesMap<StowageField, Stowage, void> = new Map([
    [
      StowageField.UBLExtensions,
      { meta: StowageFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={StowageField.UBLExtensions}
          meta={StowageFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      StowageField.LocationID,
      { meta: StowageFieldMeta.LocationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StowageField.LocationID}
          meta={StowageFieldMeta.LocationID}
          fieldConfig={fieldConfig}
          identifier={value?.LocationID}
          renderContext={renderContext}
        />}
    ],

    [
      StowageField.Location,
      { meta: StowageFieldMeta.Location,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StowageField.Location}
          meta={StowageFieldMeta.Location}
          fieldConfig={fieldConfig}
          text={value?.Location}
          renderContext={renderContext}
        />}
    ],

    [
      StowageField.MeasurementDimension,
      { meta: StowageFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={StowageField.MeasurementDimension}
          meta={StowageFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ]
]) 

export function StowageDisplay<TFieldMeta>({ meta, fieldConfig, stowage, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    StowageTypeName,
    meta,
    fieldConfig,
    stowage,
    renderContext,
    StowageSubElementsMap,
  )
}

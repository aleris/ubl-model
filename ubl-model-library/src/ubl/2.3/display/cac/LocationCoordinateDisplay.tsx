import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LocationCoordinate } from  '../../model/cac/LocationCoordinate'
import { LocationCoordinateField, LocationCoordinateFieldMeta, LocationCoordinateTypeName } from  '../../meta/cac/LocationCoordinateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LocationCoordinate, void>
  locationCoordinate: LocationCoordinate[] | undefined
  renderContext: RenderContext
}

export const LocationCoordinateSubElementsMap: SubElementsTemplatesMap<LocationCoordinateField, LocationCoordinate, void> = new Map([
    [
      LocationCoordinateField.UBLExtensions,
      { meta: LocationCoordinateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LocationCoordinateField.UBLExtensions}
          meta={LocationCoordinateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.CoordinateSystemCode,
      { meta: LocationCoordinateFieldMeta.CoordinateSystemCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LocationCoordinateField.CoordinateSystemCode}
          meta={LocationCoordinateFieldMeta.CoordinateSystemCode}
          fieldConfig={fieldConfig}
          code={value?.CoordinateSystemCode}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.LatitudeDegreesMeasure,
      { meta: LocationCoordinateFieldMeta.LatitudeDegreesMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={LocationCoordinateField.LatitudeDegreesMeasure}
          meta={LocationCoordinateFieldMeta.LatitudeDegreesMeasure}
          fieldConfig={fieldConfig}
          measure={value?.LatitudeDegreesMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.LatitudeMinutesMeasure,
      { meta: LocationCoordinateFieldMeta.LatitudeMinutesMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={LocationCoordinateField.LatitudeMinutesMeasure}
          meta={LocationCoordinateFieldMeta.LatitudeMinutesMeasure}
          fieldConfig={fieldConfig}
          measure={value?.LatitudeMinutesMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.LatitudeDirectionCode,
      { meta: LocationCoordinateFieldMeta.LatitudeDirectionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LocationCoordinateField.LatitudeDirectionCode}
          meta={LocationCoordinateFieldMeta.LatitudeDirectionCode}
          fieldConfig={fieldConfig}
          code={value?.LatitudeDirectionCode}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.LongitudeDegreesMeasure,
      { meta: LocationCoordinateFieldMeta.LongitudeDegreesMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={LocationCoordinateField.LongitudeDegreesMeasure}
          meta={LocationCoordinateFieldMeta.LongitudeDegreesMeasure}
          fieldConfig={fieldConfig}
          measure={value?.LongitudeDegreesMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.LongitudeMinutesMeasure,
      { meta: LocationCoordinateFieldMeta.LongitudeMinutesMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={LocationCoordinateField.LongitudeMinutesMeasure}
          meta={LocationCoordinateFieldMeta.LongitudeMinutesMeasure}
          fieldConfig={fieldConfig}
          measure={value?.LongitudeMinutesMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.LongitudeDirectionCode,
      { meta: LocationCoordinateFieldMeta.LongitudeDirectionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LocationCoordinateField.LongitudeDirectionCode}
          meta={LocationCoordinateFieldMeta.LongitudeDirectionCode}
          fieldConfig={fieldConfig}
          code={value?.LongitudeDirectionCode}
          renderContext={renderContext}
        />}
    ],

    [
      LocationCoordinateField.AltitudeMeasure,
      { meta: LocationCoordinateFieldMeta.AltitudeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={LocationCoordinateField.AltitudeMeasure}
          meta={LocationCoordinateFieldMeta.AltitudeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.AltitudeMeasure}
          renderContext={renderContext}
        />}
    ]
]) 

export function LocationCoordinateDisplay<TFieldMeta>({ meta, fieldConfig, locationCoordinate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LocationCoordinateTypeName,
    meta,
    fieldConfig,
    locationCoordinate,
    renderContext,
    LocationCoordinateSubElementsMap,
  )
}

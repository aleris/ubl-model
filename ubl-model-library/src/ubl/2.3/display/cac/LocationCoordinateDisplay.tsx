import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LocationCoordinate } from  '../../model/cac/LocationCoordinate'
import { LocationCoordinateFieldMeta } from  '../../meta/cac/LocationCoordinateMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: LocationCoordinate | undefined
  meta: FieldMeta<T>
}

export default function LocationCoordinateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LocationCoordinate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LocationCoordinateFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Coordinate System Code"
            value={value.CoordinateSystemCode?.[0]}
            meta={LocationCoordinateFieldMeta.CoordinateSystemCode}
          />

          <MeasureDisplay
            label="Latitude Degrees"
            value={value.LatitudeDegreesMeasure?.[0]}
            meta={LocationCoordinateFieldMeta.LatitudeDegreesMeasure}
          />

          <MeasureDisplay
            label="Latitude Minutes"
            value={value.LatitudeMinutesMeasure?.[0]}
            meta={LocationCoordinateFieldMeta.LatitudeMinutesMeasure}
          />

          <CodeDisplay
            label="Latitude Direction Code"
            value={value.LatitudeDirectionCode?.[0]}
            meta={LocationCoordinateFieldMeta.LatitudeDirectionCode}
          />

          <MeasureDisplay
            label="Longitude Degrees"
            value={value.LongitudeDegreesMeasure?.[0]}
            meta={LocationCoordinateFieldMeta.LongitudeDegreesMeasure}
          />

          <MeasureDisplay
            label="Longitude Minutes"
            value={value.LongitudeMinutesMeasure?.[0]}
            meta={LocationCoordinateFieldMeta.LongitudeMinutesMeasure}
          />

          <CodeDisplay
            label="Longitude Direction Code"
            value={value.LongitudeDirectionCode?.[0]}
            meta={LocationCoordinateFieldMeta.LongitudeDirectionCode}
          />

          <MeasureDisplay
            label="Altitude"
            value={value.AltitudeMeasure?.[0]}
            meta={LocationCoordinateFieldMeta.AltitudeMeasure}
          />
        </div>
    </div>
  )
}

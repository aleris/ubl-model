import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: LocationCoordinate
  meta: FieldMeta<T>
}

export default function LocationCoordinateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LocationCoordinate ubl-LocationCoordinateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LocationCoordinate ubl-UBLExtensions"
          meta={LocationCoordinateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Code ubl-CoordinateSystemCode"
          meta={LocationCoordinateFieldMeta.CoordinateSystemCode} 
          value={value.CoordinateSystemCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Coordinate System Code"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.CoordinateSystemCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Measure ubl-LatitudeDegreesMeasure"
          meta={LocationCoordinateFieldMeta.LatitudeDegreesMeasure} 
          value={value.LatitudeDegreesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Latitude Degrees"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.LatitudeDegreesMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Measure ubl-LatitudeMinutesMeasure"
          meta={LocationCoordinateFieldMeta.LatitudeMinutesMeasure} 
          value={value.LatitudeMinutesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Latitude Minutes"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.LatitudeMinutesMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Code ubl-LatitudeDirectionCode"
          meta={LocationCoordinateFieldMeta.LatitudeDirectionCode} 
          value={value.LatitudeDirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Latitude Direction Code"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.LatitudeDirectionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Measure ubl-LongitudeDegreesMeasure"
          meta={LocationCoordinateFieldMeta.LongitudeDegreesMeasure} 
          value={value.LongitudeDegreesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Longitude Degrees"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.LongitudeDegreesMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Measure ubl-LongitudeMinutesMeasure"
          meta={LocationCoordinateFieldMeta.LongitudeMinutesMeasure} 
          value={value.LongitudeMinutesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Longitude Minutes"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.LongitudeMinutesMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Code ubl-LongitudeDirectionCode"
          meta={LocationCoordinateFieldMeta.LongitudeDirectionCode} 
          value={value.LongitudeDirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Longitude Direction Code"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.LongitudeDirectionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LocationCoordinate ubl-Measure ubl-AltitudeMeasure"
          meta={LocationCoordinateFieldMeta.AltitudeMeasure} 
          value={value.AltitudeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Altitude"
              value={itemValue}
              meta={LocationCoordinateFieldMeta.AltitudeMeasure}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LocationCoordinate } from  '../../model/cac/LocationCoordinate'
import { LocationCoordinateFieldMeta } from  '../../meta/cac/LocationCoordinateMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: LocationCoordinate
  meta: FieldMeta<T>
}

export default function LocationCoordinateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LocationCoordinateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.CoordinateSystemCode} 
          value={value.CoordinateSystemCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LocationCoordinateFieldMeta.CoordinateSystemCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.LatitudeDegreesMeasure} 
          value={value.LatitudeDegreesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={LocationCoordinateFieldMeta.LatitudeDegreesMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.LatitudeMinutesMeasure} 
          value={value.LatitudeMinutesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={LocationCoordinateFieldMeta.LatitudeMinutesMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.LatitudeDirectionCode} 
          value={value.LatitudeDirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LocationCoordinateFieldMeta.LatitudeDirectionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.LongitudeDegreesMeasure} 
          value={value.LongitudeDegreesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={LocationCoordinateFieldMeta.LongitudeDegreesMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.LongitudeMinutesMeasure} 
          value={value.LongitudeMinutesMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={LocationCoordinateFieldMeta.LongitudeMinutesMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.LongitudeDirectionCode} 
          value={value.LongitudeDirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LocationCoordinateFieldMeta.LongitudeDirectionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LocationCoordinateFieldMeta.AltitudeMeasure} 
          value={value.AltitudeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={LocationCoordinateFieldMeta.AltitudeMeasure} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EmissionCalculationMethod } from  '../../model/cac/EmissionCalculationMethod'
import { EmissionCalculationMethodFieldMeta } from  '../../meta/cac/EmissionCalculationMethodMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EmissionCalculationMethod
  meta: FieldMeta<T>
}

export default function EmissionCalculationMethodDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EmissionCalculationMethodFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EmissionCalculationMethodFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EmissionCalculationMethodFieldMeta.CalculationMethodCode} 
          value={value.CalculationMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EmissionCalculationMethodFieldMeta.CalculationMethodCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EmissionCalculationMethodFieldMeta.FullnessIndicationCode} 
          value={value.FullnessIndicationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EmissionCalculationMethodFieldMeta.FullnessIndicationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EmissionCalculationMethodFieldMeta.MeasurementFromLocation} 
          value={value.MeasurementFromLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={EmissionCalculationMethodFieldMeta.MeasurementFromLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EmissionCalculationMethodFieldMeta.MeasurementToLocation} 
          value={value.MeasurementToLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={EmissionCalculationMethodFieldMeta.MeasurementToLocation} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

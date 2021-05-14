import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EmissionCalculationMethod } from  '../../model/cac/EmissionCalculationMethod'
import { EmissionCalculationMethodFieldMeta } from  '../../meta/cac/EmissionCalculationMethodMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EmissionCalculationMethod
  meta: FieldMeta<T>
}

export default function EmissionCalculationMethodDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EmissionCalculationMethod ubl-EmissionCalculationMethodType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EmissionCalculationMethod ubl-UBLExtensions"
          meta={EmissionCalculationMethodFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EmissionCalculationMethodFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EmissionCalculationMethod ubl-Code ubl-CalculationMethodCode"
          meta={EmissionCalculationMethodFieldMeta.CalculationMethodCode} 
          value={value.CalculationMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Calculation Method Code"
              value={itemValue}
              meta={EmissionCalculationMethodFieldMeta.CalculationMethodCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EmissionCalculationMethod ubl-Code ubl-FullnessIndicationCode"
          meta={EmissionCalculationMethodFieldMeta.FullnessIndicationCode} 
          value={value.FullnessIndicationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Fullness Indication Code"
              value={itemValue}
              meta={EmissionCalculationMethodFieldMeta.FullnessIndicationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EmissionCalculationMethod ubl-Location ubl-MeasurementFromLocation"
          meta={EmissionCalculationMethodFieldMeta.MeasurementFromLocation} 
          value={value.MeasurementFromLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Measurement From Location"
              value={itemValue}
              meta={EmissionCalculationMethodFieldMeta.MeasurementFromLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EmissionCalculationMethod ubl-Location ubl-MeasurementToLocation"
          meta={EmissionCalculationMethodFieldMeta.MeasurementToLocation} 
          value={value.MeasurementToLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Measurement To Location"
              value={itemValue}
              meta={EmissionCalculationMethodFieldMeta.MeasurementToLocation}
            />
          }
        />
        </div>
    </div>
  )
}

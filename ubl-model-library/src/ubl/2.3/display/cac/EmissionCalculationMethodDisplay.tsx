import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: EmissionCalculationMethod | undefined
  meta: FieldMeta<T>
}

export default function EmissionCalculationMethodDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EmissionCalculationMethod">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EmissionCalculationMethodFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Calculation Method Code"
            value={value.CalculationMethodCode?.[0]}
            meta={EmissionCalculationMethodFieldMeta.CalculationMethodCode}
          />

          <CodeDisplay
            label="Fullness Indication Code"
            value={value.FullnessIndicationCode?.[0]}
            meta={EmissionCalculationMethodFieldMeta.FullnessIndicationCode}
          />

          <LocationDisplay
            label="Measurement From Location"
            value={value.MeasurementFromLocation?.[0]}
            meta={EmissionCalculationMethodFieldMeta.MeasurementFromLocation}
          />

          <LocationDisplay
            label="Measurement To Location"
            value={value.MeasurementToLocation?.[0]}
            meta={EmissionCalculationMethodFieldMeta.MeasurementToLocation}
          />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnvironmentalEmission } from  '../../model/cac/EnvironmentalEmission'
import { EnvironmentalEmissionFieldMeta } from  '../../meta/cac/EnvironmentalEmissionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EmissionCalculationMethodDisplay from './EmissionCalculationMethodDisplay'
import { EmissionCalculationMethod } from '../../model/cac/EmissionCalculationMethod'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EnvironmentalEmission | undefined
  meta: FieldMeta<T>
}

export default function EnvironmentalEmissionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EnvironmentalEmission">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EnvironmentalEmissionFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Environmental Emission Type Code"
            value={value.EnvironmentalEmissionTypeCode?.[0]}
            meta={EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode}
          />

          <MeasureDisplay
            label="Value"
            value={value.ValueMeasure?.[0]}
            meta={EnvironmentalEmissionFieldMeta.ValueMeasure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={EnvironmentalEmissionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={EnvironmentalEmissionFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EmissionCalculationMethod"
            label="Emission Calculation Method"
            items={value.EmissionCalculationMethod}
            meta={EnvironmentalEmissionFieldMeta.EmissionCalculationMethod} 
            itemDisplay={ (itemValue: EmissionCalculationMethod, key: string | number) =>
              <EmissionCalculationMethodDisplay
                key={key}
                label="Emission Calculation Method"
                value={itemValue}
                meta={EnvironmentalEmissionFieldMeta.EmissionCalculationMethod}
              />
            }
          />
        </div>
    </div>
  )
}

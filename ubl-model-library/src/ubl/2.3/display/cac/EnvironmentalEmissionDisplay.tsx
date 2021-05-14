import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EnvironmentalEmission
  meta: FieldMeta<T>
}

export default function EnvironmentalEmissionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EnvironmentalEmission ubl-EnvironmentalEmissionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EnvironmentalEmission ubl-UBLExtensions"
          meta={EnvironmentalEmissionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EnvironmentalEmissionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnvironmentalEmission ubl-Code ubl-EnvironmentalEmissionTypeCode"
          meta={EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode} 
          value={value.EnvironmentalEmissionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Environmental Emission Type Code"
              value={itemValue}
              meta={EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnvironmentalEmission ubl-Measure ubl-ValueMeasure"
          meta={EnvironmentalEmissionFieldMeta.ValueMeasure} 
          value={value.ValueMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={EnvironmentalEmissionFieldMeta.ValueMeasure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-EnvironmentalEmission ubl-Text ubl-Description"
          meta={EnvironmentalEmissionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={EnvironmentalEmissionFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnvironmentalEmission ubl-EmissionCalculationMethod"
          meta={EnvironmentalEmissionFieldMeta.EmissionCalculationMethod} 
          value={value.EmissionCalculationMethod}
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

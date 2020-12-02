import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: EnvironmentalEmission
  meta: FieldMeta<T>
}

export default function EnvironmentalEmissionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EnvironmentalEmissionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EnvironmentalEmissionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode} 
          value={value.EnvironmentalEmissionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnvironmentalEmissionFieldMeta.ValueMeasure} 
          value={value.ValueMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={EnvironmentalEmissionFieldMeta.ValueMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnvironmentalEmissionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EnvironmentalEmissionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnvironmentalEmissionFieldMeta.EmissionCalculationMethod} 
          value={value.EmissionCalculationMethod}
          itemDisplay={ (itemValue: EmissionCalculationMethod, key: string | number) =>
            <EmissionCalculationMethodDisplay key={key} meta={EnvironmentalEmissionFieldMeta.EmissionCalculationMethod} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

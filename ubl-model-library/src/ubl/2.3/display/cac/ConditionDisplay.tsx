import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Condition } from  '../../model/cac/Condition'
import { ConditionFieldMeta } from  '../../meta/cac/ConditionMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Condition
  meta: FieldMeta<T>
}

export default function ConditionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConditionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConditionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConditionFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConditionFieldMeta.AttributeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConditionFieldMeta.Measure} 
          value={value.Measure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConditionFieldMeta.Measure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConditionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConditionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConditionFieldMeta.MinimumMeasure} 
          value={value.MinimumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConditionFieldMeta.MinimumMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConditionFieldMeta.MaximumMeasure} 
          value={value.MaximumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ConditionFieldMeta.MaximumMeasure} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

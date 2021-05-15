import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Condition | undefined
  meta: FieldMeta<T>
}

export default function ConditionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Condition">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConditionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Attribute Identifier"
            value={value.AttributeID?.[0]}
            meta={ConditionFieldMeta.AttributeID}
          />

          <MeasureDisplay
            label="Measure"
            value={value.Measure?.[0]}
            meta={ConditionFieldMeta.Measure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ConditionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ConditionFieldMeta.Description}
              />
            }
          />

          <MeasureDisplay
            label="Minimum Measure"
            value={value.MinimumMeasure?.[0]}
            meta={ConditionFieldMeta.MinimumMeasure}
          />

          <MeasureDisplay
            label="Maximum Measure"
            value={value.MaximumMeasure?.[0]}
            meta={ConditionFieldMeta.MaximumMeasure}
          />
        </div>
    </div>
  )
}

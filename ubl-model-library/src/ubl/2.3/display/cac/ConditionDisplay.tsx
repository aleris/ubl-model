import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Condition
  meta: FieldMeta<T>
}

export default function ConditionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Condition ubl-ConditionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Condition ubl-UBLExtensions"
          meta={ConditionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConditionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Condition ubl-Identifier ubl-AttributeID"
          meta={ConditionFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Attribute Identifier"
              value={itemValue}
              meta={ConditionFieldMeta.AttributeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Condition ubl-Measure"
          meta={ConditionFieldMeta.Measure} 
          value={value.Measure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Measure"
              value={itemValue}
              meta={ConditionFieldMeta.Measure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Condition ubl-Text ubl-Description"
          meta={ConditionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ConditionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Condition ubl-Measure ubl-MinimumMeasure"
          meta={ConditionFieldMeta.MinimumMeasure} 
          value={value.MinimumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Minimum Measure"
              value={itemValue}
              meta={ConditionFieldMeta.MinimumMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Condition ubl-Measure ubl-MaximumMeasure"
          meta={ConditionFieldMeta.MaximumMeasure} 
          value={value.MaximumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Maximum Measure"
              value={itemValue}
              meta={ConditionFieldMeta.MaximumMeasure}
            />
          }
        />
        </div>
    </div>
  )
}

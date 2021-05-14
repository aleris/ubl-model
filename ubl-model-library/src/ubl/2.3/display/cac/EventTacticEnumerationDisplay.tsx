import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventTacticEnumeration } from  '../../model/cac/EventTacticEnumeration'
import { EventTacticEnumerationFieldMeta } from  '../../meta/cac/EventTacticEnumerationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EventTacticEnumeration
  meta: FieldMeta<T>
}

export default function EventTacticEnumerationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EventTacticEnumeration ubl-EventTacticEnumerationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EventTacticEnumeration ubl-UBLExtensions"
          meta={EventTacticEnumerationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EventTacticEnumerationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventTacticEnumeration ubl-Code ubl-ConsumerIncentiveTacticTypeCode"
          meta={EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode} 
          value={value.ConsumerIncentiveTacticTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Consumer Incentive Tactic Type Code"
              value={itemValue}
              meta={EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventTacticEnumeration ubl-Code ubl-DisplayTacticTypeCode"
          meta={EventTacticEnumerationFieldMeta.DisplayTacticTypeCode} 
          value={value.DisplayTacticTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Display Tactic Type Code"
              value={itemValue}
              meta={EventTacticEnumerationFieldMeta.DisplayTacticTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventTacticEnumeration ubl-Code ubl-FeatureTacticTypeCode"
          meta={EventTacticEnumerationFieldMeta.FeatureTacticTypeCode} 
          value={value.FeatureTacticTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Feature Tactic Type Code"
              value={itemValue}
              meta={EventTacticEnumerationFieldMeta.FeatureTacticTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EventTacticEnumeration ubl-Code ubl-TradeItemPackingLabelingTypeCode"
          meta={EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode} 
          value={value.TradeItemPackingLabelingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Trade Item Packing Labeling Type Code"
              value={itemValue}
              meta={EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode}
            />
          }
        />
        </div>
    </div>
  )
}

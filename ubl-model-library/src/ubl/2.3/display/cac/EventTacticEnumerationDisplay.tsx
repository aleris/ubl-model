import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventTacticEnumeration } from  '../../model/cac/EventTacticEnumeration'
import { EventTacticEnumerationFieldMeta } from  '../../meta/cac/EventTacticEnumerationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EventTacticEnumeration | undefined
  meta: FieldMeta<T>
}

export default function EventTacticEnumerationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EventTacticEnumeration">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EventTacticEnumerationFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Consumer Incentive Tactic Type Code"
            value={value.ConsumerIncentiveTacticTypeCode?.[0]}
            meta={EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode}
          />

          <CodeDisplay
            label="Display Tactic Type Code"
            value={value.DisplayTacticTypeCode?.[0]}
            meta={EventTacticEnumerationFieldMeta.DisplayTacticTypeCode}
          />

          <CodeDisplay
            label="Feature Tactic Type Code"
            value={value.FeatureTacticTypeCode?.[0]}
            meta={EventTacticEnumerationFieldMeta.FeatureTacticTypeCode}
          />

          <CodeDisplay
            label="Trade Item Packing Labeling Type Code"
            value={value.TradeItemPackingLabelingTypeCode?.[0]}
            meta={EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode}
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventTacticEnumeration } from  '../../model/cac/EventTacticEnumeration'
import { EventTacticEnumerationFieldMeta } from  '../../meta/cac/EventTacticEnumerationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EventTacticEnumeration
  meta: FieldMeta<T>
}

export default function EventTacticEnumerationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EventTacticEnumerationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EventTacticEnumerationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode} 
          value={value.ConsumerIncentiveTacticTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticEnumerationFieldMeta.DisplayTacticTypeCode} 
          value={value.DisplayTacticTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EventTacticEnumerationFieldMeta.DisplayTacticTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticEnumerationFieldMeta.FeatureTacticTypeCode} 
          value={value.FeatureTacticTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EventTacticEnumerationFieldMeta.FeatureTacticTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode} 
          value={value.TradeItemPackingLabelingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

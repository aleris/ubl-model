import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionCriteriaLine } from  '../../model/cac/ExceptionCriteriaLine'
import { ExceptionCriteriaLineFieldMeta } from  '../../meta/cac/ExceptionCriteriaLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ForecastExceptionCriterionLineDisplay from './ForecastExceptionCriterionLineDisplay'
import { ForecastExceptionCriterionLine } from '../../model/cac/ForecastExceptionCriterionLine'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ExceptionCriteriaLine | undefined
  meta: FieldMeta<T>
}

export default function ExceptionCriteriaLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ExceptionCriteriaLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ExceptionCriteriaLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ExceptionCriteriaLineFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Threshold Value Comparison Code"
            value={value.ThresholdValueComparisonCode?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode}
          />

          <QuantityDisplay
            label="Threshold Quantity"
            value={value.ThresholdQuantity?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.ThresholdQuantity}
          />

          <CodeDisplay
            label="Exception Status Code"
            value={value.ExceptionStatusCode?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.ExceptionStatusCode}
          />

          <CodeDisplay
            label="Collaboration Priority Code"
            value={value.CollaborationPriorityCode?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode}
          />

          <CodeDisplay
            label="Exception Resolution Code"
            value={value.ExceptionResolutionCode?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode}
          />

          <CodeDisplay
            label="Supply Chain Activity Type Code"
            value={value.SupplyChainActivityTypeCode?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode}
          />

          <CodeDisplay
            label="Performance Metric Type Code"
            value={value.PerformanceMetricTypeCode?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode}
          />

          <PeriodDisplay
            label="Effective Period"
            value={value.EffectivePeriod?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.EffectivePeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Item ubl-SupplyItem"
            label="Supply Item"
            items={value.SupplyItem}
            meta={ExceptionCriteriaLineFieldMeta.SupplyItem} 
            itemDisplay={ (itemValue: Item, key: string | number) =>
              <ItemDisplay
                key={key}
                label="Supply Item"
                value={itemValue}
                meta={ExceptionCriteriaLineFieldMeta.SupplyItem}
              />
            }
          />

          <ForecastExceptionCriterionLineDisplay
            label="Forecast Exception Criterion Line"
            value={value.ForecastExceptionCriterionLine?.[0]}
            meta={ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine}
          />
        </div>
    </div>
  )
}

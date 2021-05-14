import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ExceptionCriteriaLine
  meta: FieldMeta<T>
}

export default function ExceptionCriteriaLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ExceptionCriteriaLine ubl-ExceptionCriteriaLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExceptionCriteriaLine ubl-UBLExtensions"
          meta={ExceptionCriteriaLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Identifier ubl-ID"
          meta={ExceptionCriteriaLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Text ubl-Note"
          meta={ExceptionCriteriaLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Code ubl-ThresholdValueComparisonCode"
          meta={ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode} 
          value={value.ThresholdValueComparisonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Threshold Value Comparison Code"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Quantity ubl-ThresholdQuantity"
          meta={ExceptionCriteriaLineFieldMeta.ThresholdQuantity} 
          value={value.ThresholdQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Threshold Quantity"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.ThresholdQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Code ubl-ExceptionStatusCode"
          meta={ExceptionCriteriaLineFieldMeta.ExceptionStatusCode} 
          value={value.ExceptionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Exception Status Code"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.ExceptionStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Code ubl-CollaborationPriorityCode"
          meta={ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode} 
          value={value.CollaborationPriorityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Collaboration Priority Code"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Code ubl-ExceptionResolutionCode"
          meta={ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode} 
          value={value.ExceptionResolutionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Exception Resolution Code"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Code ubl-SupplyChainActivityTypeCode"
          meta={ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Supply Chain Activity Type Code"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExceptionCriteriaLine ubl-Code ubl-PerformanceMetricTypeCode"
          meta={ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Performance Metric Type Code"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExceptionCriteriaLine ubl-Period ubl-EffectivePeriod"
          meta={ExceptionCriteriaLineFieldMeta.EffectivePeriod} 
          value={value.EffectivePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Effective Period"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.EffectivePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExceptionCriteriaLine ubl-Item ubl-SupplyItem"
          meta={ExceptionCriteriaLineFieldMeta.SupplyItem} 
          value={value.SupplyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Supply Item"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.SupplyItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExceptionCriteriaLine ubl-ForecastExceptionCriterionLine"
          meta={ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine} 
          value={value.ForecastExceptionCriterionLine}
          itemDisplay={ (itemValue: ForecastExceptionCriterionLine, key: string | number) =>
            <ForecastExceptionCriterionLineDisplay
              key={key}
              label="Forecast Exception Criterion Line"
              value={itemValue}
              meta={ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ExceptionCriteriaLine
  meta: FieldMeta<T>
}

export default function ExceptionCriteriaLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode} 
          value={value.ThresholdValueComparisonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.ThresholdValueComparisonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.ThresholdQuantity} 
          value={value.ThresholdQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.ThresholdQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.ExceptionStatusCode} 
          value={value.ExceptionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.ExceptionStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode} 
          value={value.CollaborationPriorityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.CollaborationPriorityCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode} 
          value={value.ExceptionResolutionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.ExceptionResolutionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.SupplyChainActivityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode} 
          value={value.PerformanceMetricTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.PerformanceMetricTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.EffectivePeriod} 
          value={value.EffectivePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.EffectivePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.SupplyItem} 
          value={value.SupplyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.SupplyItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine} 
          value={value.ForecastExceptionCriterionLine}
          itemDisplay={ (itemValue: ForecastExceptionCriterionLine, key: string | number) =>
            <ForecastExceptionCriterionLineDisplay key={key} meta={ExceptionCriteriaLineFieldMeta.ForecastExceptionCriterionLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

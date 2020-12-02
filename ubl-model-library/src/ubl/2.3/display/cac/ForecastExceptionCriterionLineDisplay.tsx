import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastExceptionCriterionLine } from  '../../model/cac/ForecastExceptionCriterionLine'
import { ForecastExceptionCriterionLineFieldMeta } from  '../../meta/cac/ForecastExceptionCriterionLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ForecastExceptionCriterionLine
  meta: FieldMeta<T>
}

export default function ForecastExceptionCriterionLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForecastExceptionCriterionLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForecastExceptionCriterionLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode} 
          value={value.ComparisonDataSourceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionCriterionLineFieldMeta.DataSourceCode} 
          value={value.DataSourceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionCriterionLineFieldMeta.DataSourceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity} 
          value={value.TimeDeltaDaysQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

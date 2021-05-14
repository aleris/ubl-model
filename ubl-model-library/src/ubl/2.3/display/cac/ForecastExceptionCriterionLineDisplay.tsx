import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastExceptionCriterionLine } from  '../../model/cac/ForecastExceptionCriterionLine'
import { ForecastExceptionCriterionLineFieldMeta } from  '../../meta/cac/ForecastExceptionCriterionLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ForecastExceptionCriterionLine
  meta: FieldMeta<T>
}

export default function ForecastExceptionCriterionLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ForecastExceptionCriterionLine ubl-ForecastExceptionCriterionLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ForecastExceptionCriterionLine ubl-UBLExtensions"
          meta={ForecastExceptionCriterionLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ForecastExceptionCriterionLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastExceptionCriterionLine ubl-Code ubl-ForecastPurposeCode"
          meta={ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Purpose Code"
              value={itemValue}
              meta={ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastExceptionCriterionLine ubl-Code ubl-ForecastTypeCode"
          meta={ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Type Code"
              value={itemValue}
              meta={ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastExceptionCriterionLine ubl-Code ubl-ComparisonDataSourceCode"
          meta={ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode} 
          value={value.ComparisonDataSourceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Comparison Data Source Code"
              value={itemValue}
              meta={ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastExceptionCriterionLine ubl-Code ubl-DataSourceCode"
          meta={ForecastExceptionCriterionLineFieldMeta.DataSourceCode} 
          value={value.DataSourceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Data Source Code"
              value={itemValue}
              meta={ForecastExceptionCriterionLineFieldMeta.DataSourceCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastExceptionCriterionLine ubl-Quantity ubl-TimeDeltaDaysQuantity"
          meta={ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity} 
          value={value.TimeDeltaDaysQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Time Delta Days Quantity"
              value={itemValue}
              meta={ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity}
            />
          }
        />
        </div>
    </div>
  )
}

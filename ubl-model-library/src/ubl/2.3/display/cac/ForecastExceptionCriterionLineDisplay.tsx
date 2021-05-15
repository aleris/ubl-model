import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ForecastExceptionCriterionLine | undefined
  meta: FieldMeta<T>
}

export default function ForecastExceptionCriterionLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ForecastExceptionCriterionLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForecastExceptionCriterionLineFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Forecast Purpose Code"
            value={value.ForecastPurposeCode?.[0]}
            meta={ForecastExceptionCriterionLineFieldMeta.ForecastPurposeCode}
          />

          <CodeDisplay
            label="Forecast Type Code"
            value={value.ForecastTypeCode?.[0]}
            meta={ForecastExceptionCriterionLineFieldMeta.ForecastTypeCode}
          />

          <CodeDisplay
            label="Comparison Data Source Code"
            value={value.ComparisonDataSourceCode?.[0]}
            meta={ForecastExceptionCriterionLineFieldMeta.ComparisonDataSourceCode}
          />

          <CodeDisplay
            label="Data Source Code"
            value={value.DataSourceCode?.[0]}
            meta={ForecastExceptionCriterionLineFieldMeta.DataSourceCode}
          />

          <QuantityDisplay
            label="Time Delta Days Quantity"
            value={value.TimeDeltaDaysQuantity?.[0]}
            meta={ForecastExceptionCriterionLineFieldMeta.TimeDeltaDaysQuantity}
          />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastException } from  '../../model/cac/ForecastException'
import { ForecastExceptionFieldMeta } from  '../../meta/cac/ForecastExceptionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ForecastException | undefined
  meta: FieldMeta<T>
}

export default function ForecastExceptionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ForecastException">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForecastExceptionFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Forecast Purpose Code"
            value={value.ForecastPurposeCode?.[0]}
            meta={ForecastExceptionFieldMeta.ForecastPurposeCode}
          />

          <CodeDisplay
            label="Forecast Type Code"
            value={value.ForecastTypeCode?.[0]}
            meta={ForecastExceptionFieldMeta.ForecastTypeCode}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ForecastExceptionFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ForecastExceptionFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Data Source Code"
            value={value.DataSourceCode?.[0]}
            meta={ForecastExceptionFieldMeta.DataSourceCode}
          />

          <CodeDisplay
            label="Comparison Data Code"
            value={value.ComparisonDataCode?.[0]}
            meta={ForecastExceptionFieldMeta.ComparisonDataCode}
          />

          <TimeDisplay
            label="Comparison Forecast Issue Time"
            value={value.ComparisonForecastIssueTime?.[0]}
            meta={ForecastExceptionFieldMeta.ComparisonForecastIssueTime}
          />

          <DateDisplay
            label="Comparison Forecast Issue Date"
            value={value.ComparisonForecastIssueDate?.[0]}
            meta={ForecastExceptionFieldMeta.ComparisonForecastIssueDate}
          />
        </div>
    </div>
  )
}

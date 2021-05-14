import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ForecastException
  meta: FieldMeta<T>
}

export default function ForecastExceptionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ForecastException ubl-ForecastExceptionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ForecastException ubl-UBLExtensions"
          meta={ForecastExceptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Code ubl-ForecastPurposeCode"
          meta={ForecastExceptionFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Purpose Code"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.ForecastPurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Code ubl-ForecastTypeCode"
          meta={ForecastExceptionFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Forecast Type Code"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.ForecastTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Date ubl-IssueDate"
          meta={ForecastExceptionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Time ubl-IssueTime"
          meta={ForecastExceptionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Code ubl-DataSourceCode"
          meta={ForecastExceptionFieldMeta.DataSourceCode} 
          value={value.DataSourceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Data Source Code"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.DataSourceCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Code ubl-ComparisonDataCode"
          meta={ForecastExceptionFieldMeta.ComparisonDataCode} 
          value={value.ComparisonDataCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Comparison Data Code"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.ComparisonDataCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Time ubl-ComparisonForecastIssueTime"
          meta={ForecastExceptionFieldMeta.ComparisonForecastIssueTime} 
          value={value.ComparisonForecastIssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Comparison Forecast Issue Time"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.ComparisonForecastIssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastException ubl-Date ubl-ComparisonForecastIssueDate"
          meta={ForecastExceptionFieldMeta.ComparisonForecastIssueDate} 
          value={value.ComparisonForecastIssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Comparison Forecast Issue Date"
              value={itemValue}
              meta={ForecastExceptionFieldMeta.ComparisonForecastIssueDate}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ForecastException
  meta: FieldMeta<T>
}

export default function ForecastExceptionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForecastExceptionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionFieldMeta.ForecastPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.ForecastTypeCode} 
          value={value.ForecastTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionFieldMeta.ForecastTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ForecastExceptionFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ForecastExceptionFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.DataSourceCode} 
          value={value.DataSourceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionFieldMeta.DataSourceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.ComparisonDataCode} 
          value={value.ComparisonDataCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastExceptionFieldMeta.ComparisonDataCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.ComparisonForecastIssueTime} 
          value={value.ComparisonForecastIssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ForecastExceptionFieldMeta.ComparisonForecastIssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastExceptionFieldMeta.ComparisonForecastIssueDate} 
          value={value.ComparisonForecastIssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ForecastExceptionFieldMeta.ComparisonForecastIssueDate} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

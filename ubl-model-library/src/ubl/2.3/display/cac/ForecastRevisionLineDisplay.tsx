import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastRevisionLine } from  '../../model/cac/ForecastRevisionLine'
import { ForecastRevisionLineFieldMeta } from  '../../meta/cac/ForecastRevisionLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SalesItemDisplay from './SalesItemDisplay'
import { SalesItem } from '../../model/cac/SalesItem'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ForecastRevisionLine
  meta: FieldMeta<T>
}

export default function ForecastRevisionLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ForecastRevisionLine ubl-ForecastRevisionLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ForecastRevisionLine ubl-UBLExtensions"
          meta={ForecastRevisionLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Identifier ubl-ID"
          meta={ForecastRevisionLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Text ubl-Note"
          meta={ForecastRevisionLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Text ubl-Description"
          meta={ForecastRevisionLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Identifier ubl-RevisedForecastLineID"
          meta={ForecastRevisionLineFieldMeta.RevisedForecastLineID} 
          value={value.RevisedForecastLineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Revised Forecast Line Identifier"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.RevisedForecastLineID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Date ubl-SourceForecastIssueDate"
          meta={ForecastRevisionLineFieldMeta.SourceForecastIssueDate} 
          value={value.SourceForecastIssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Source Forecast Issue Date"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.SourceForecastIssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Time ubl-SourceForecastIssueTime"
          meta={ForecastRevisionLineFieldMeta.SourceForecastIssueTime} 
          value={value.SourceForecastIssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Source Forecast Issue Time"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.SourceForecastIssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ForecastRevisionLine ubl-Code ubl-AdjustmentReasonCode"
          meta={ForecastRevisionLineFieldMeta.AdjustmentReasonCode} 
          value={value.AdjustmentReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Adjustment Reason Code"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.AdjustmentReasonCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevisionLine ubl-Period ubl-ForecastPeriod"
          meta={ForecastRevisionLineFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Forecast Period"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.ForecastPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ForecastRevisionLine ubl-SalesItem"
          meta={ForecastRevisionLineFieldMeta.SalesItem} 
          value={value.SalesItem}
          itemDisplay={ (itemValue: SalesItem, key: string | number) =>
            <SalesItemDisplay
              key={key}
              label="Sales Item"
              value={itemValue}
              meta={ForecastRevisionLineFieldMeta.SalesItem}
            />
          }
        />
        </div>
    </div>
  )
}

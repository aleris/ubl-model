import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ForecastRevisionLine | undefined
  meta: FieldMeta<T>
}

export default function ForecastRevisionLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ForecastRevisionLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForecastRevisionLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ForecastRevisionLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ForecastRevisionLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ForecastRevisionLineFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ForecastRevisionLineFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ForecastRevisionLineFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Revised Forecast Line Identifier"
            value={value.RevisedForecastLineID?.[0]}
            meta={ForecastRevisionLineFieldMeta.RevisedForecastLineID}
          />

          <DateDisplay
            label="Source Forecast Issue Date"
            value={value.SourceForecastIssueDate?.[0]}
            meta={ForecastRevisionLineFieldMeta.SourceForecastIssueDate}
          />

          <TimeDisplay
            label="Source Forecast Issue Time"
            value={value.SourceForecastIssueTime?.[0]}
            meta={ForecastRevisionLineFieldMeta.SourceForecastIssueTime}
          />

          <CodeDisplay
            label="Adjustment Reason Code"
            value={value.AdjustmentReasonCode?.[0]}
            meta={ForecastRevisionLineFieldMeta.AdjustmentReasonCode}
          />

          <PeriodDisplay
            label="Forecast Period"
            value={value.ForecastPeriod?.[0]}
            meta={ForecastRevisionLineFieldMeta.ForecastPeriod}
          />

          <SalesItemDisplay
            label="Sales Item"
            value={value.SalesItem?.[0]}
            meta={ForecastRevisionLineFieldMeta.SalesItem}
          />
        </div>
    </div>
  )
}

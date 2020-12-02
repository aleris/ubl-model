import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ForecastRevisionLine
  meta: FieldMeta<T>
}

export default function ForecastRevisionLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForecastRevisionLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForecastRevisionLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForecastRevisionLineFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.RevisedForecastLineID} 
          value={value.RevisedForecastLineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionLineFieldMeta.RevisedForecastLineID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.SourceForecastIssueDate} 
          value={value.SourceForecastIssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ForecastRevisionLineFieldMeta.SourceForecastIssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.SourceForecastIssueTime} 
          value={value.SourceForecastIssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ForecastRevisionLineFieldMeta.SourceForecastIssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.AdjustmentReasonCode} 
          value={value.AdjustmentReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastRevisionLineFieldMeta.AdjustmentReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ForecastRevisionLineFieldMeta.ForecastPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionLineFieldMeta.SalesItem} 
          value={value.SalesItem}
          itemDisplay={ (itemValue: SalesItem, key: string | number) =>
            <SalesItemDisplay key={key} meta={ForecastRevisionLineFieldMeta.SalesItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Period } from  '../../model/cac/Period'
import { PeriodFieldMeta } from  '../../meta/cac/PeriodMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Period
  meta: FieldMeta<T>
}

export default function PeriodDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PeriodFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PeriodFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.StartDate} 
          value={value.StartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PeriodFieldMeta.StartDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.StartTime} 
          value={value.StartTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PeriodFieldMeta.StartTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.EndDate} 
          value={value.EndDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PeriodFieldMeta.EndDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.EndTime} 
          value={value.EndTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PeriodFieldMeta.EndTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.DurationMeasure} 
          value={value.DurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={PeriodFieldMeta.DurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.DescriptionCode} 
          value={value.DescriptionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PeriodFieldMeta.DescriptionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PeriodFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PeriodFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Period | undefined
  meta: FieldMeta<T>
}

export default function PeriodDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Period">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PeriodFieldMeta.UBLExtensions}
          />

          <DateDisplay
            label="Start Date"
            value={value.StartDate?.[0]}
            meta={PeriodFieldMeta.StartDate}
          />

          <TimeDisplay
            label="Start Time"
            value={value.StartTime?.[0]}
            meta={PeriodFieldMeta.StartTime}
          />

          <DateDisplay
            label="End Date"
            value={value.EndDate?.[0]}
            meta={PeriodFieldMeta.EndDate}
          />

          <TimeDisplay
            label="End Time"
            value={value.EndTime?.[0]}
            meta={PeriodFieldMeta.EndTime}
          />

          <MeasureDisplay
            label="Duration"
            value={value.DurationMeasure?.[0]}
            meta={PeriodFieldMeta.DurationMeasure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Code ubl-DescriptionCode"
            label="Description Code"
            items={value.DescriptionCode}
            meta={PeriodFieldMeta.DescriptionCode} 
            itemDisplay={ (itemValue: Code, key: string | number) =>
              <CodeDisplay
                key={key}
                label="Description Code"
                value={itemValue}
                meta={PeriodFieldMeta.DescriptionCode}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={PeriodFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={PeriodFieldMeta.Description}
              />
            }
          />
        </div>
    </div>
  )
}

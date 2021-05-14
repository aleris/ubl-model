import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Period
  meta: FieldMeta<T>
}

export default function PeriodDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Period ubl-PeriodType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Period ubl-UBLExtensions"
          meta={PeriodFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PeriodFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Period ubl-Date ubl-StartDate"
          meta={PeriodFieldMeta.StartDate} 
          value={value.StartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Start Date"
              value={itemValue}
              meta={PeriodFieldMeta.StartDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Period ubl-Time ubl-StartTime"
          meta={PeriodFieldMeta.StartTime} 
          value={value.StartTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Start Time"
              value={itemValue}
              meta={PeriodFieldMeta.StartTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Period ubl-Date ubl-EndDate"
          meta={PeriodFieldMeta.EndDate} 
          value={value.EndDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="End Date"
              value={itemValue}
              meta={PeriodFieldMeta.EndDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Period ubl-Time ubl-EndTime"
          meta={PeriodFieldMeta.EndTime} 
          value={value.EndTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="End Time"
              value={itemValue}
              meta={PeriodFieldMeta.EndTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Period ubl-Measure ubl-DurationMeasure"
          meta={PeriodFieldMeta.DurationMeasure} 
          value={value.DurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Duration"
              value={itemValue}
              meta={PeriodFieldMeta.DurationMeasure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Period ubl-Code ubl-DescriptionCode"
          meta={PeriodFieldMeta.DescriptionCode} 
          value={value.DescriptionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Description Code"
              value={itemValue}
              meta={PeriodFieldMeta.DescriptionCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Period ubl-Text ubl-Description"
          meta={PeriodFieldMeta.Description} 
          value={value.Description}
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

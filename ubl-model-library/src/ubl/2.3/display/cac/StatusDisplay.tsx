import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Status } from  '../../model/cac/Status'
import { StatusFieldMeta } from  '../../meta/cac/StatusMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ConditionDisplay from './ConditionDisplay'
import { Condition } from '../../model/cac/Condition'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Status | undefined
  meta: FieldMeta<T>
}

export default function StatusDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Status">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={StatusFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Condition Code"
            value={value.ConditionCode?.[0]}
            meta={StatusFieldMeta.ConditionCode}
          />

          <DateDisplay
            label="Reference Date"
            value={value.ReferenceDate?.[0]}
            meta={StatusFieldMeta.ReferenceDate}
          />

          <TimeDisplay
            label="Reference Time"
            value={value.ReferenceTime?.[0]}
            meta={StatusFieldMeta.ReferenceTime}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={StatusFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={StatusFieldMeta.Description}
              />
            }
          />

          <CodeDisplay
            label="Status Reason Code"
            value={value.StatusReasonCode?.[0]}
            meta={StatusFieldMeta.StatusReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-StatusReason"
            label="Status Reason"
            items={value.StatusReason}
            meta={StatusFieldMeta.StatusReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Status Reason"
                value={itemValue}
                meta={StatusFieldMeta.StatusReason}
              />
            }
          />

          <IdentifierDisplay
            label="Sequence Identifier"
            value={value.SequenceID?.[0]}
            meta={StatusFieldMeta.SequenceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text"
            label="Text"
            items={value.Text}
            meta={StatusFieldMeta.Text} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Text"
                value={itemValue}
                meta={StatusFieldMeta.Text}
              />
            }
          />

          <IndicatorDisplay
            label="Indication Indicator"
            value={value.IndicationIndicator?.[0]}
            meta={StatusFieldMeta.IndicationIndicator}
          />

          <NumericDisplay
            label="Percent"
            value={value.Percent?.[0]}
            meta={StatusFieldMeta.Percent}
          />

          <NumericDisplay
            label="Reliability Percent"
            value={value.ReliabilityPercent?.[0]}
            meta={StatusFieldMeta.ReliabilityPercent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Status ubl-SubStatus"
            label="Sub Status"
            items={value.SubStatus}
            meta={StatusFieldMeta.SubStatus} 
            itemDisplay={ (itemValue: Status, key: string | number) =>
              <StatusDisplay
                key={key}
                label="Sub Status"
                value={itemValue}
                meta={StatusFieldMeta.SubStatus}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Condition"
            label="Condition"
            items={value.Condition}
            meta={StatusFieldMeta.Condition} 
            itemDisplay={ (itemValue: Condition, key: string | number) =>
              <ConditionDisplay
                key={key}
                label="Condition"
                value={itemValue}
                meta={StatusFieldMeta.Condition}
              />
            }
          />
        </div>
    </div>
  )
}

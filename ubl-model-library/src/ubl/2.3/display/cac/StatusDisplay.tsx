import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Status
  meta: FieldMeta<T>
}

export default function StatusDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Status ubl-StatusType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Status ubl-UBLExtensions"
          meta={StatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={StatusFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Code ubl-ConditionCode"
          meta={StatusFieldMeta.ConditionCode} 
          value={value.ConditionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Condition Code"
              value={itemValue}
              meta={StatusFieldMeta.ConditionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Date ubl-ReferenceDate"
          meta={StatusFieldMeta.ReferenceDate} 
          value={value.ReferenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Reference Date"
              value={itemValue}
              meta={StatusFieldMeta.ReferenceDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Time ubl-ReferenceTime"
          meta={StatusFieldMeta.ReferenceTime} 
          value={value.ReferenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Reference Time"
              value={itemValue}
              meta={StatusFieldMeta.ReferenceTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Status ubl-Text ubl-Description"
          meta={StatusFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={StatusFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Code ubl-StatusReasonCode"
          meta={StatusFieldMeta.StatusReasonCode} 
          value={value.StatusReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Status Reason Code"
              value={itemValue}
              meta={StatusFieldMeta.StatusReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Status ubl-Text ubl-StatusReason"
          meta={StatusFieldMeta.StatusReason} 
          value={value.StatusReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Status Reason"
              value={itemValue}
              meta={StatusFieldMeta.StatusReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Identifier ubl-SequenceID"
          meta={StatusFieldMeta.SequenceID} 
          value={value.SequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sequence Identifier"
              value={itemValue}
              meta={StatusFieldMeta.SequenceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Status ubl-Text"
          meta={StatusFieldMeta.Text} 
          value={value.Text}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Text"
              value={itemValue}
              meta={StatusFieldMeta.Text}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Indicator ubl-IndicationIndicator"
          meta={StatusFieldMeta.IndicationIndicator} 
          value={value.IndicationIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Indication Indicator"
              value={itemValue}
              meta={StatusFieldMeta.IndicationIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Numeric ubl-Percent"
          meta={StatusFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Percent"
              value={itemValue}
              meta={StatusFieldMeta.Percent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Status ubl-Numeric ubl-ReliabilityPercent"
          meta={StatusFieldMeta.ReliabilityPercent} 
          value={value.ReliabilityPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Reliability Percent"
              value={itemValue}
              meta={StatusFieldMeta.ReliabilityPercent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Status ubl-SubStatus"
          meta={StatusFieldMeta.SubStatus} 
          value={value.SubStatus}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay
              key={key}
              label="Sub Status"
              value={itemValue}
              meta={StatusFieldMeta.SubStatus}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Status ubl-Condition"
          meta={StatusFieldMeta.Condition} 
          value={value.Condition}
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

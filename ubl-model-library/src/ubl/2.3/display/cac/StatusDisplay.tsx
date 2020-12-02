import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Status
  meta: FieldMeta<T>
}

export default function StatusDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={StatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={StatusFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.ConditionCode} 
          value={value.ConditionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StatusFieldMeta.ConditionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.ReferenceDate} 
          value={value.ReferenceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={StatusFieldMeta.ReferenceDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.ReferenceTime} 
          value={value.ReferenceTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={StatusFieldMeta.ReferenceTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StatusFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.StatusReasonCode} 
          value={value.StatusReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StatusFieldMeta.StatusReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.StatusReason} 
          value={value.StatusReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StatusFieldMeta.StatusReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.SequenceID} 
          value={value.SequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatusFieldMeta.SequenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.Text} 
          value={value.Text}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StatusFieldMeta.Text} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.IndicationIndicator} 
          value={value.IndicationIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={StatusFieldMeta.IndicationIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={StatusFieldMeta.Percent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.ReliabilityPercent} 
          value={value.ReliabilityPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={StatusFieldMeta.ReliabilityPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.SubStatus} 
          value={value.SubStatus}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay key={key} meta={StatusFieldMeta.SubStatus} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatusFieldMeta.Condition} 
          value={value.Condition}
          itemDisplay={ (itemValue: Condition, key: string | number) =>
            <ConditionDisplay key={key} meta={StatusFieldMeta.Condition} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

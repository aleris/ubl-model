import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { NotificationRequirement } from  '../../model/cac/NotificationRequirement'
import { NotificationRequirementFieldMeta } from  '../../meta/cac/NotificationRequirementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: NotificationRequirement
  meta: FieldMeta<T>
}

export default function NotificationRequirementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={NotificationRequirementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.NotificationTypeCode} 
          value={value.NotificationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={NotificationRequirementFieldMeta.NotificationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure} 
          value={value.PostEventNotificationDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure} 
          value={value.PreEventNotificationDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={NotificationRequirementFieldMeta.NotifyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.NotificationPeriod} 
          value={value.NotificationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={NotificationRequirementFieldMeta.NotificationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={NotificationRequirementFieldMeta.NotificationLocation} 
          value={value.NotificationLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={NotificationRequirementFieldMeta.NotificationLocation} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

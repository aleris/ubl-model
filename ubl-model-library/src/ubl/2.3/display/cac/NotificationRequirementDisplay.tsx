import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: NotificationRequirement
  meta: FieldMeta<T>
}

export default function NotificationRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-NotificationRequirement ubl-NotificationRequirementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-NotificationRequirement ubl-UBLExtensions"
          meta={NotificationRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-NotificationRequirement ubl-Code ubl-NotificationTypeCode"
          meta={NotificationRequirementFieldMeta.NotificationTypeCode} 
          value={value.NotificationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Notification Type Code"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.NotificationTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-NotificationRequirement ubl-Measure ubl-PostEventNotificationDurationMeasure"
          meta={NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure} 
          value={value.PostEventNotificationDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Post Event Notification Duration"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-NotificationRequirement ubl-Measure ubl-PreEventNotificationDurationMeasure"
          meta={NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure} 
          value={value.PreEventNotificationDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Pre Event Notification Duration"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-NotificationRequirement ubl-Party ubl-NotifyParty"
          meta={NotificationRequirementFieldMeta.NotifyParty} 
          value={value.NotifyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Notify Party"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.NotifyParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-NotificationRequirement ubl-Period ubl-NotificationPeriod"
          meta={NotificationRequirementFieldMeta.NotificationPeriod} 
          value={value.NotificationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Notification Period"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.NotificationPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-NotificationRequirement ubl-Location ubl-NotificationLocation"
          meta={NotificationRequirementFieldMeta.NotificationLocation} 
          value={value.NotificationLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Notification Location"
              value={itemValue}
              meta={NotificationRequirementFieldMeta.NotificationLocation}
            />
          }
        />
        </div>
    </div>
  )
}

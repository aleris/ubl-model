import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: NotificationRequirement | undefined
  meta: FieldMeta<T>
}

export default function NotificationRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-NotificationRequirement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={NotificationRequirementFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Notification Type Code"
            value={value.NotificationTypeCode?.[0]}
            meta={NotificationRequirementFieldMeta.NotificationTypeCode}
          />

          <MeasureDisplay
            label="Post Event Notification Duration"
            value={value.PostEventNotificationDurationMeasure?.[0]}
            meta={NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure}
          />

          <MeasureDisplay
            label="Pre Event Notification Duration"
            value={value.PreEventNotificationDurationMeasure?.[0]}
            meta={NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-NotifyParty"
            label="Notify Party"
            items={value.NotifyParty}
            meta={NotificationRequirementFieldMeta.NotifyParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Notify Party"
                value={itemValue}
                meta={NotificationRequirementFieldMeta.NotifyParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-NotificationPeriod"
            label="Notification Period"
            items={value.NotificationPeriod}
            meta={NotificationRequirementFieldMeta.NotificationPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Notification Period"
                value={itemValue}
                meta={NotificationRequirementFieldMeta.NotificationPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Location ubl-NotificationLocation"
            label="Notification Location"
            items={value.NotificationLocation}
            meta={NotificationRequirementFieldMeta.NotificationLocation} 
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

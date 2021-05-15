import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceLevelAgreement } from  '../../model/cac/ServiceLevelAgreement'
import { ServiceLevelAgreementFieldMeta } from  '../../meta/cac/ServiceLevelAgreementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ServiceLevelAgreement | undefined
  meta: FieldMeta<T>
}

export default function ServiceLevelAgreementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ServiceLevelAgreement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ServiceLevelAgreementFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ServiceLevelAgreementFieldMeta.ID}
          />

          <CodeDisplay
            label="Service Type Code"
            value={value.ServiceTypeCode?.[0]}
            meta={ServiceLevelAgreementFieldMeta.ServiceTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ServiceType"
            label="Service Type"
            items={value.ServiceType}
            meta={ServiceLevelAgreementFieldMeta.ServiceType} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Service Type"
                value={itemValue}
                meta={ServiceLevelAgreementFieldMeta.ServiceType}
              />
            }
          />

          <NumericDisplay
            label="Availability Time Percent"
            value={value.AvailabilityTimePercent?.[0]}
            meta={ServiceLevelAgreementFieldMeta.AvailabilityTimePercent}
          />

          <IndicatorDisplay
            label="Monday Availability Indicator"
            value={value.MondayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator}
          />

          <IndicatorDisplay
            label="Tuesday Availability Indicator"
            value={value.TuesdayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator}
          />

          <IndicatorDisplay
            label="Wednesday Availability Indicator"
            value={value.WednesdayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator}
          />

          <IndicatorDisplay
            label="Thursday Availability Indicator"
            value={value.ThursdayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator}
          />

          <IndicatorDisplay
            label="Friday Availability Indicator"
            value={value.FridayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator}
          />

          <IndicatorDisplay
            label="Saturday Availability Indicator"
            value={value.SaturdayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator}
          />

          <IndicatorDisplay
            label="Sunday Availability Indicator"
            value={value.SundayAvailabilityIndicator?.[0]}
            meta={ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator}
          />

          <MeasureDisplay
            label="Minimum Response Time Duration"
            value={value.MinimumResponseTimeDurationMeasure?.[0]}
            meta={ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure}
          />

          <MeasureDisplay
            label="Minimum Down Time Schedule Duration"
            value={value.MinimumDownTimeScheduleDurationMeasure?.[0]}
            meta={ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure}
          />

          <MeasureDisplay
            label="Maximum Incident Notification Duration"
            value={value.MaximumIncidentNotificationDurationMeasure?.[0]}
            meta={ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure}
          />

          <MeasureDisplay
            label="Maximum Data Loss Duration"
            value={value.MaximumDataLossDurationMeasure?.[0]}
            meta={ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure}
          />

          <MeasureDisplay
            label="Mean Time To Recover Duration"
            value={value.MeanTimeToRecoverDurationMeasure?.[0]}
            meta={ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ServiceAvailabilityPeriod"
            label="Service Availability Period"
            items={value.ServiceAvailabilityPeriod}
            meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Service Availability Period"
                value={itemValue}
                meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ServiceMaintenancePeriod"
            label="Service Maintenance Period"
            items={value.ServiceMaintenancePeriod}
            meta={ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Service Maintenance Period"
                value={itemValue}
                meta={ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod}
              />
            }
          />
        </div>
    </div>
  )
}

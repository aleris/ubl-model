import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ServiceLevelAgreement
  meta: FieldMeta<T>
}

export default function ServiceLevelAgreementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ServiceLevelAgreement ubl-ServiceLevelAgreementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ServiceLevelAgreement ubl-UBLExtensions"
          meta={ServiceLevelAgreementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Identifier ubl-ID"
          meta={ServiceLevelAgreementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Code ubl-ServiceTypeCode"
          meta={ServiceLevelAgreementFieldMeta.ServiceTypeCode} 
          value={value.ServiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Service Type Code"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.ServiceTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Text ubl-ServiceType"
          meta={ServiceLevelAgreementFieldMeta.ServiceType} 
          value={value.ServiceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Service Type"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.ServiceType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Numeric ubl-AvailabilityTimePercent"
          meta={ServiceLevelAgreementFieldMeta.AvailabilityTimePercent} 
          value={value.AvailabilityTimePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Availability Time Percent"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.AvailabilityTimePercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-MondayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator} 
          value={value.MondayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Monday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-TuesdayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator} 
          value={value.TuesdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Tuesday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-WednesdayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator} 
          value={value.WednesdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Wednesday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-ThursdayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator} 
          value={value.ThursdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Thursday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-FridayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator} 
          value={value.FridayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Friday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-SaturdayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator} 
          value={value.SaturdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Saturday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Indicator ubl-SundayAvailabilityIndicator"
          meta={ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator} 
          value={value.SundayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Sunday Availability Indicator"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Measure ubl-MinimumResponseTimeDurationMeasure"
          meta={ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure} 
          value={value.MinimumResponseTimeDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Minimum Response Time Duration"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Measure ubl-MinimumDownTimeScheduleDurationMeasure"
          meta={ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure} 
          value={value.MinimumDownTimeScheduleDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Minimum Down Time Schedule Duration"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Measure ubl-MaximumIncidentNotificationDurationMeasure"
          meta={ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure} 
          value={value.MaximumIncidentNotificationDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Maximum Incident Notification Duration"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Measure ubl-MaximumDataLossDurationMeasure"
          meta={ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure} 
          value={value.MaximumDataLossDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Maximum Data Loss Duration"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceLevelAgreement ubl-Measure ubl-MeanTimeToRecoverDurationMeasure"
          meta={ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure} 
          value={value.MeanTimeToRecoverDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Mean Time To Recover Duration"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ServiceLevelAgreement ubl-Period ubl-ServiceAvailabilityPeriod"
          meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod} 
          value={value.ServiceAvailabilityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Service Availability Period"
              value={itemValue}
              meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ServiceLevelAgreement ubl-Period ubl-ServiceMaintenancePeriod"
          meta={ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod} 
          value={value.ServiceMaintenancePeriod}
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

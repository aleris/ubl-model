import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ServiceLevelAgreement
  meta: FieldMeta<T>
}

export default function ServiceLevelAgreementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ServiceLevelAgreementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ServiceLevelAgreementFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.ServiceTypeCode} 
          value={value.ServiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ServiceLevelAgreementFieldMeta.ServiceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.ServiceType} 
          value={value.ServiceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ServiceLevelAgreementFieldMeta.ServiceType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.AvailabilityTimePercent} 
          value={value.AvailabilityTimePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ServiceLevelAgreementFieldMeta.AvailabilityTimePercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator} 
          value={value.MondayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator} 
          value={value.TuesdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator} 
          value={value.WednesdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator} 
          value={value.ThursdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator} 
          value={value.FridayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator} 
          value={value.SaturdayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator} 
          value={value.SundayAvailabilityIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure} 
          value={value.MinimumResponseTimeDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure} 
          value={value.MinimumDownTimeScheduleDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure} 
          value={value.MaximumIncidentNotificationDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure} 
          value={value.MaximumDataLossDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure} 
          value={value.MeanTimeToRecoverDurationMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod} 
          value={value.ServiceAvailabilityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod} 
          value={value.ServiceMaintenancePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

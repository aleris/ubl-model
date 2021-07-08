import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceLevelAgreement } from  '../../model/cac/ServiceLevelAgreement'
import { ServiceLevelAgreementField, ServiceLevelAgreementFieldMeta, ServiceLevelAgreementTypeName } from  '../../meta/cac/ServiceLevelAgreementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ServiceLevelAgreement, void>
  serviceLevelAgreement: ServiceLevelAgreement[] | undefined
  renderContext: RenderContext
}

export const ServiceLevelAgreementSubElementsMap: SubElementsTemplatesMap<ServiceLevelAgreementField, ServiceLevelAgreement, void> = new Map([
    [
      ServiceLevelAgreementField.UBLExtensions,
      { meta: ServiceLevelAgreementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ServiceLevelAgreementField.UBLExtensions}
          meta={ServiceLevelAgreementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.ID,
      { meta: ServiceLevelAgreementFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ServiceLevelAgreementField.ID}
          meta={ServiceLevelAgreementFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.ServiceTypeCode,
      { meta: ServiceLevelAgreementFieldMeta.ServiceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ServiceLevelAgreementField.ServiceTypeCode}
          meta={ServiceLevelAgreementFieldMeta.ServiceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ServiceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.ServiceType,
      { meta: ServiceLevelAgreementFieldMeta.ServiceType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ServiceLevelAgreementField.ServiceType}
          meta={ServiceLevelAgreementFieldMeta.ServiceType}
          fieldConfig={fieldConfig}
          text={value?.ServiceType}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.AvailabilityTimePercent,
      { meta: ServiceLevelAgreementFieldMeta.AvailabilityTimePercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ServiceLevelAgreementField.AvailabilityTimePercent}
          meta={ServiceLevelAgreementFieldMeta.AvailabilityTimePercent}
          fieldConfig={fieldConfig}
          numeric={value?.AvailabilityTimePercent}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.MondayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.MondayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.MondayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.MondayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.TuesdayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.TuesdayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.TuesdayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TuesdayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.WednesdayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.WednesdayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.WednesdayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.WednesdayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.ThursdayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.ThursdayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.ThursdayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ThursdayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.FridayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.FridayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.FridayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FridayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.SaturdayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.SaturdayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.SaturdayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SaturdayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.SundayAvailabilityIndicator,
      { meta: ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ServiceLevelAgreementField.SundayAvailabilityIndicator}
          meta={ServiceLevelAgreementFieldMeta.SundayAvailabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SundayAvailabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.MinimumResponseTimeDurationMeasure,
      { meta: ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ServiceLevelAgreementField.MinimumResponseTimeDurationMeasure}
          meta={ServiceLevelAgreementFieldMeta.MinimumResponseTimeDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MinimumResponseTimeDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.MinimumDownTimeScheduleDurationMeasure,
      { meta: ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ServiceLevelAgreementField.MinimumDownTimeScheduleDurationMeasure}
          meta={ServiceLevelAgreementFieldMeta.MinimumDownTimeScheduleDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MinimumDownTimeScheduleDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.MaximumIncidentNotificationDurationMeasure,
      { meta: ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ServiceLevelAgreementField.MaximumIncidentNotificationDurationMeasure}
          meta={ServiceLevelAgreementFieldMeta.MaximumIncidentNotificationDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MaximumIncidentNotificationDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.MaximumDataLossDurationMeasure,
      { meta: ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ServiceLevelAgreementField.MaximumDataLossDurationMeasure}
          meta={ServiceLevelAgreementFieldMeta.MaximumDataLossDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MaximumDataLossDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.MeanTimeToRecoverDurationMeasure,
      { meta: ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ServiceLevelAgreementField.MeanTimeToRecoverDurationMeasure}
          meta={ServiceLevelAgreementFieldMeta.MeanTimeToRecoverDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MeanTimeToRecoverDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.ServiceAvailabilityPeriod,
      { meta: ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ServiceLevelAgreementField.ServiceAvailabilityPeriod}
          meta={ServiceLevelAgreementFieldMeta.ServiceAvailabilityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ServiceAvailabilityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceLevelAgreementField.ServiceMaintenancePeriod,
      { meta: ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ServiceLevelAgreementField.ServiceMaintenancePeriod}
          meta={ServiceLevelAgreementFieldMeta.ServiceMaintenancePeriod}
          fieldConfig={fieldConfig}
          period={value?.ServiceMaintenancePeriod}
          renderContext={renderContext}
        />}
    ]
]) 

export function ServiceLevelAgreementDisplay<TFieldMeta>({ meta, fieldConfig, serviceLevelAgreement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ServiceLevelAgreementTypeName,
    meta,
    fieldConfig,
    serviceLevelAgreement,
    renderContext,
    ServiceLevelAgreementSubElementsMap,
  )
}

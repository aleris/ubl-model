import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationService } from  '../../model/cac/TransportationService'
import { TransportationServiceField, TransportationServiceFieldMeta, TransportationServiceTypeName } from  '../../meta/cac/TransportationServiceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CommodityClassificationDisplay } from './CommodityClassificationDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { EnvironmentalEmissionDisplay } from './EnvironmentalEmissionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ServiceFrequencyDisplay } from './ServiceFrequencyDisplay'
import { ShipmentStageDisplay } from './ShipmentStageDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportEquipmentDisplay } from './TransportEquipmentDisplay'
import { TransportEventDisplay } from './TransportEventDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportationService, void>
  transportationService: TransportationService[] | undefined
  renderContext: RenderContext
}

export const TransportationServiceSubElementsMap: SubElementsTemplatesMap<TransportationServiceField, TransportationService, void> = new Map([
    [
      TransportationServiceField.UBLExtensions,
      { meta: TransportationServiceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportationServiceField.UBLExtensions}
          meta={TransportationServiceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TransportServiceCode,
      { meta: TransportationServiceFieldMeta.TransportServiceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportationServiceField.TransportServiceCode}
          meta={TransportationServiceFieldMeta.TransportServiceCode}
          fieldConfig={fieldConfig}
          code={value?.TransportServiceCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TariffClassCode,
      { meta: TransportationServiceFieldMeta.TariffClassCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportationServiceField.TariffClassCode}
          meta={TransportationServiceFieldMeta.TariffClassCode}
          fieldConfig={fieldConfig}
          code={value?.TariffClassCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.Priority,
      { meta: TransportationServiceFieldMeta.Priority,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationServiceField.Priority}
          meta={TransportationServiceFieldMeta.Priority}
          fieldConfig={fieldConfig}
          text={value?.Priority}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.FreightRateClassCode,
      { meta: TransportationServiceFieldMeta.FreightRateClassCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportationServiceField.FreightRateClassCode}
          meta={TransportationServiceFieldMeta.FreightRateClassCode}
          fieldConfig={fieldConfig}
          code={value?.FreightRateClassCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TransportationServiceDescription,
      { meta: TransportationServiceFieldMeta.TransportationServiceDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationServiceField.TransportationServiceDescription}
          meta={TransportationServiceFieldMeta.TransportationServiceDescription}
          fieldConfig={fieldConfig}
          text={value?.TransportationServiceDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TransportationServiceDetailsURI,
      { meta: TransportationServiceFieldMeta.TransportationServiceDetailsURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationServiceField.TransportationServiceDetailsURI}
          meta={TransportationServiceFieldMeta.TransportationServiceDetailsURI}
          fieldConfig={fieldConfig}
          identifier={value?.TransportationServiceDetailsURI}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.NominationDate,
      { meta: TransportationServiceFieldMeta.NominationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportationServiceField.NominationDate}
          meta={TransportationServiceFieldMeta.NominationDate}
          fieldConfig={fieldConfig}
          date={value?.NominationDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.NominationTime,
      { meta: TransportationServiceFieldMeta.NominationTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportationServiceField.NominationTime}
          meta={TransportationServiceFieldMeta.NominationTime}
          fieldConfig={fieldConfig}
          time={value?.NominationTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.Name,
      { meta: TransportationServiceFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationServiceField.Name}
          meta={TransportationServiceFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.SequenceNumeric,
      { meta: TransportationServiceFieldMeta.SequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TransportationServiceField.SequenceNumeric}
          meta={TransportationServiceFieldMeta.SequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.SequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TransportEquipment,
      { meta: TransportationServiceFieldMeta.TransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={TransportationServiceField.TransportEquipment}
          meta={TransportationServiceFieldMeta.TransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.TransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.SupportedTransportEquipment,
      { meta: TransportationServiceFieldMeta.SupportedTransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={TransportationServiceField.SupportedTransportEquipment}
          meta={TransportationServiceFieldMeta.SupportedTransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.SupportedTransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.UnsupportedTransportEquipment,
      { meta: TransportationServiceFieldMeta.UnsupportedTransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={TransportationServiceField.UnsupportedTransportEquipment}
          meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.UnsupportedTransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.CommodityClassification,
      { meta: TransportationServiceFieldMeta.CommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={TransportationServiceField.CommodityClassification}
          meta={TransportationServiceFieldMeta.CommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.CommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.SupportedCommodityClassification,
      { meta: TransportationServiceFieldMeta.SupportedCommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={TransportationServiceField.SupportedCommodityClassification}
          meta={TransportationServiceFieldMeta.SupportedCommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.SupportedCommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.UnsupportedCommodityClassification,
      { meta: TransportationServiceFieldMeta.UnsupportedCommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={TransportationServiceField.UnsupportedCommodityClassification}
          meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.UnsupportedCommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TotalCapacityDimension,
      { meta: TransportationServiceFieldMeta.TotalCapacityDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={TransportationServiceField.TotalCapacityDimension}
          meta={TransportationServiceFieldMeta.TotalCapacityDimension}
          fieldConfig={fieldConfig}
          dimension={value?.TotalCapacityDimension}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.ShipmentStage,
      { meta: TransportationServiceFieldMeta.ShipmentStage,
        template: ({value, renderContext, fieldConfig}) => <ShipmentStageDisplay
          key={TransportationServiceField.ShipmentStage}
          meta={TransportationServiceFieldMeta.ShipmentStage}
          fieldConfig={fieldConfig}
          shipmentStage={value?.ShipmentStage}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.TransportEvent,
      { meta: TransportationServiceFieldMeta.TransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportationServiceField.TransportEvent}
          meta={TransportationServiceFieldMeta.TransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.TransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.ResponsibleTransportServiceProviderParty,
      { meta: TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportationServiceField.ResponsibleTransportServiceProviderParty}
          meta={TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ResponsibleTransportServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.EnvironmentalEmission,
      { meta: TransportationServiceFieldMeta.EnvironmentalEmission,
        template: ({value, renderContext, fieldConfig}) => <EnvironmentalEmissionDisplay
          key={TransportationServiceField.EnvironmentalEmission}
          meta={TransportationServiceFieldMeta.EnvironmentalEmission}
          fieldConfig={fieldConfig}
          environmentalEmission={value?.EnvironmentalEmission}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.EstimatedDurationPeriod,
      { meta: TransportationServiceFieldMeta.EstimatedDurationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportationServiceField.EstimatedDurationPeriod}
          meta={TransportationServiceFieldMeta.EstimatedDurationPeriod}
          fieldConfig={fieldConfig}
          period={value?.EstimatedDurationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationServiceField.ScheduledServiceFrequency,
      { meta: TransportationServiceFieldMeta.ScheduledServiceFrequency,
        template: ({value, renderContext, fieldConfig}) => <ServiceFrequencyDisplay
          key={TransportationServiceField.ScheduledServiceFrequency}
          meta={TransportationServiceFieldMeta.ScheduledServiceFrequency}
          fieldConfig={fieldConfig}
          serviceFrequency={value?.ScheduledServiceFrequency}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportationServiceDisplay<TFieldMeta>({ meta, fieldConfig, transportationService, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportationServiceTypeName,
    meta,
    fieldConfig,
    transportationService,
    renderContext,
    TransportationServiceSubElementsMap,
  )
}

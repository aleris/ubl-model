import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportMeans } from  '../../model/cac/TransportMeans'
import { TransportMeansField, TransportMeansFieldMeta, TransportMeansTypeName } from  '../../meta/cac/TransportMeansMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AirTransportDisplay } from './AirTransportDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MaritimeTransportDisplay } from './MaritimeTransportDisplay'
import { PartyDisplay } from './PartyDisplay'
import { RailTransportDisplay } from './RailTransportDisplay'
import { RoadTransportDisplay } from './RoadTransportDisplay'
import { StowageDisplay } from './StowageDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportMeans, void>
  transportMeans: TransportMeans[] | undefined
  renderContext: RenderContext
}

export const TransportMeansSubElementsMap: SubElementsTemplatesMap<TransportMeansField, TransportMeans, void> = new Map([
    [
      TransportMeansField.UBLExtensions,
      { meta: TransportMeansFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportMeansField.UBLExtensions}
          meta={TransportMeansFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.JourneyID,
      { meta: TransportMeansFieldMeta.JourneyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportMeansField.JourneyID}
          meta={TransportMeansFieldMeta.JourneyID}
          fieldConfig={fieldConfig}
          identifier={value?.JourneyID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.RegistrationNationalityID,
      { meta: TransportMeansFieldMeta.RegistrationNationalityID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportMeansField.RegistrationNationalityID}
          meta={TransportMeansFieldMeta.RegistrationNationalityID}
          fieldConfig={fieldConfig}
          identifier={value?.RegistrationNationalityID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.RegistrationNationality,
      { meta: TransportMeansFieldMeta.RegistrationNationality,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportMeansField.RegistrationNationality}
          meta={TransportMeansFieldMeta.RegistrationNationality}
          fieldConfig={fieldConfig}
          text={value?.RegistrationNationality}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.DirectionCode,
      { meta: TransportMeansFieldMeta.DirectionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportMeansField.DirectionCode}
          meta={TransportMeansFieldMeta.DirectionCode}
          fieldConfig={fieldConfig}
          code={value?.DirectionCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.TransportMeansTypeCode,
      { meta: TransportMeansFieldMeta.TransportMeansTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportMeansField.TransportMeansTypeCode}
          meta={TransportMeansFieldMeta.TransportMeansTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportMeansTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.TradeServiceCode,
      { meta: TransportMeansFieldMeta.TradeServiceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportMeansField.TradeServiceCode}
          meta={TransportMeansFieldMeta.TradeServiceCode}
          fieldConfig={fieldConfig}
          code={value?.TradeServiceCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.Stowage,
      { meta: TransportMeansFieldMeta.Stowage,
        template: ({value, renderContext, fieldConfig}) => <StowageDisplay
          key={TransportMeansField.Stowage}
          meta={TransportMeansFieldMeta.Stowage}
          fieldConfig={fieldConfig}
          stowage={value?.Stowage}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.AirTransport,
      { meta: TransportMeansFieldMeta.AirTransport,
        template: ({value, renderContext, fieldConfig}) => <AirTransportDisplay
          key={TransportMeansField.AirTransport}
          meta={TransportMeansFieldMeta.AirTransport}
          fieldConfig={fieldConfig}
          airTransport={value?.AirTransport}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.RoadTransport,
      { meta: TransportMeansFieldMeta.RoadTransport,
        template: ({value, renderContext, fieldConfig}) => <RoadTransportDisplay
          key={TransportMeansField.RoadTransport}
          meta={TransportMeansFieldMeta.RoadTransport}
          fieldConfig={fieldConfig}
          roadTransport={value?.RoadTransport}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.RailTransport,
      { meta: TransportMeansFieldMeta.RailTransport,
        template: ({value, renderContext, fieldConfig}) => <RailTransportDisplay
          key={TransportMeansField.RailTransport}
          meta={TransportMeansFieldMeta.RailTransport}
          fieldConfig={fieldConfig}
          railTransport={value?.RailTransport}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.MaritimeTransport,
      { meta: TransportMeansFieldMeta.MaritimeTransport,
        template: ({value, renderContext, fieldConfig}) => <MaritimeTransportDisplay
          key={TransportMeansField.MaritimeTransport}
          meta={TransportMeansFieldMeta.MaritimeTransport}
          fieldConfig={fieldConfig}
          maritimeTransport={value?.MaritimeTransport}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.OwnerParty,
      { meta: TransportMeansFieldMeta.OwnerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportMeansField.OwnerParty}
          meta={TransportMeansFieldMeta.OwnerParty}
          fieldConfig={fieldConfig}
          party={value?.OwnerParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportMeansField.MeasurementDimension,
      { meta: TransportMeansFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={TransportMeansField.MeasurementDimension}
          meta={TransportMeansFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportMeansDisplay<TFieldMeta>({ meta, fieldConfig, transportMeans, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportMeansTypeName,
    meta,
    fieldConfig,
    transportMeans,
    renderContext,
    TransportMeansSubElementsMap,
  )
}

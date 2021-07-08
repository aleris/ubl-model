import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Delivery } from  '../../model/cac/Delivery'
import { DeliveryField, DeliveryFieldMeta, DeliveryTypeName } from  '../../meta/cac/DeliveryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DeliveryTermsDisplay } from './DeliveryTermsDisplay'
import { DeliveryUnitDisplay } from './DeliveryUnitDisplay'
import { DespatchDisplay } from './DespatchDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Delivery, void>
  delivery: Delivery[] | undefined
  renderContext: RenderContext
}

export const DeliverySubElementsMap: SubElementsTemplatesMap<DeliveryField, Delivery, void> = new Map([
    [
      DeliveryField.UBLExtensions,
      { meta: DeliveryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DeliveryField.UBLExtensions}
          meta={DeliveryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.ID,
      { meta: DeliveryFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DeliveryField.ID}
          meta={DeliveryFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.Quantity,
      { meta: DeliveryFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DeliveryField.Quantity}
          meta={DeliveryFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.MinimumQuantity,
      { meta: DeliveryFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DeliveryField.MinimumQuantity}
          meta={DeliveryFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.MaximumQuantity,
      { meta: DeliveryFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DeliveryField.MaximumQuantity}
          meta={DeliveryFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.ActualDeliveryDate,
      { meta: DeliveryFieldMeta.ActualDeliveryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DeliveryField.ActualDeliveryDate}
          meta={DeliveryFieldMeta.ActualDeliveryDate}
          fieldConfig={fieldConfig}
          date={value?.ActualDeliveryDate}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.ActualDeliveryTime,
      { meta: DeliveryFieldMeta.ActualDeliveryTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DeliveryField.ActualDeliveryTime}
          meta={DeliveryFieldMeta.ActualDeliveryTime}
          fieldConfig={fieldConfig}
          time={value?.ActualDeliveryTime}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.LatestDeliveryDate,
      { meta: DeliveryFieldMeta.LatestDeliveryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DeliveryField.LatestDeliveryDate}
          meta={DeliveryFieldMeta.LatestDeliveryDate}
          fieldConfig={fieldConfig}
          date={value?.LatestDeliveryDate}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.LatestDeliveryTime,
      { meta: DeliveryFieldMeta.LatestDeliveryTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DeliveryField.LatestDeliveryTime}
          meta={DeliveryFieldMeta.LatestDeliveryTime}
          fieldConfig={fieldConfig}
          time={value?.LatestDeliveryTime}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.ReleaseID,
      { meta: DeliveryFieldMeta.ReleaseID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DeliveryField.ReleaseID}
          meta={DeliveryFieldMeta.ReleaseID}
          fieldConfig={fieldConfig}
          identifier={value?.ReleaseID}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.TrackingID,
      { meta: DeliveryFieldMeta.TrackingID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DeliveryField.TrackingID}
          meta={DeliveryFieldMeta.TrackingID}
          fieldConfig={fieldConfig}
          identifier={value?.TrackingID}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.DeliveryAddress,
      { meta: DeliveryFieldMeta.DeliveryAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={DeliveryField.DeliveryAddress}
          meta={DeliveryFieldMeta.DeliveryAddress}
          fieldConfig={fieldConfig}
          address={value?.DeliveryAddress}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.DeliveryLocation,
      { meta: DeliveryFieldMeta.DeliveryLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={DeliveryField.DeliveryLocation}
          meta={DeliveryFieldMeta.DeliveryLocation}
          fieldConfig={fieldConfig}
          location={value?.DeliveryLocation}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.AlternativeDeliveryLocation,
      { meta: DeliveryFieldMeta.AlternativeDeliveryLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={DeliveryField.AlternativeDeliveryLocation}
          meta={DeliveryFieldMeta.AlternativeDeliveryLocation}
          fieldConfig={fieldConfig}
          location={value?.AlternativeDeliveryLocation}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.RequestedDeliveryPeriod,
      { meta: DeliveryFieldMeta.RequestedDeliveryPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DeliveryField.RequestedDeliveryPeriod}
          meta={DeliveryFieldMeta.RequestedDeliveryPeriod}
          fieldConfig={fieldConfig}
          period={value?.RequestedDeliveryPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.PromisedDeliveryPeriod,
      { meta: DeliveryFieldMeta.PromisedDeliveryPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DeliveryField.PromisedDeliveryPeriod}
          meta={DeliveryFieldMeta.PromisedDeliveryPeriod}
          fieldConfig={fieldConfig}
          period={value?.PromisedDeliveryPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.EstimatedDeliveryPeriod,
      { meta: DeliveryFieldMeta.EstimatedDeliveryPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DeliveryField.EstimatedDeliveryPeriod}
          meta={DeliveryFieldMeta.EstimatedDeliveryPeriod}
          fieldConfig={fieldConfig}
          period={value?.EstimatedDeliveryPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.CarrierParty,
      { meta: DeliveryFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DeliveryField.CarrierParty}
          meta={DeliveryFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.DeliveryParty,
      { meta: DeliveryFieldMeta.DeliveryParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DeliveryField.DeliveryParty}
          meta={DeliveryFieldMeta.DeliveryParty}
          fieldConfig={fieldConfig}
          party={value?.DeliveryParty}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.NotifyParty,
      { meta: DeliveryFieldMeta.NotifyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DeliveryField.NotifyParty}
          meta={DeliveryFieldMeta.NotifyParty}
          fieldConfig={fieldConfig}
          party={value?.NotifyParty}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.Despatch,
      { meta: DeliveryFieldMeta.Despatch,
        template: ({value, renderContext, fieldConfig}) => <DespatchDisplay
          key={DeliveryField.Despatch}
          meta={DeliveryFieldMeta.Despatch}
          fieldConfig={fieldConfig}
          despatch={value?.Despatch}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.DeliveryTerms,
      { meta: DeliveryFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={DeliveryField.DeliveryTerms}
          meta={DeliveryFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.MinimumDeliveryUnit,
      { meta: DeliveryFieldMeta.MinimumDeliveryUnit,
        template: ({value, renderContext, fieldConfig}) => <DeliveryUnitDisplay
          key={DeliveryField.MinimumDeliveryUnit}
          meta={DeliveryFieldMeta.MinimumDeliveryUnit}
          fieldConfig={fieldConfig}
          deliveryUnit={value?.MinimumDeliveryUnit}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.MaximumDeliveryUnit,
      { meta: DeliveryFieldMeta.MaximumDeliveryUnit,
        template: ({value, renderContext, fieldConfig}) => <DeliveryUnitDisplay
          key={DeliveryField.MaximumDeliveryUnit}
          meta={DeliveryFieldMeta.MaximumDeliveryUnit}
          fieldConfig={fieldConfig}
          deliveryUnit={value?.MaximumDeliveryUnit}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryField.Shipment,
      { meta: DeliveryFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={DeliveryField.Shipment}
          meta={DeliveryFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ]
]) 

export function DeliveryDisplay<TFieldMeta>({ meta, fieldConfig, delivery, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DeliveryTypeName,
    meta,
    fieldConfig,
    delivery,
    renderContext,
    DeliverySubElementsMap,
  )
}

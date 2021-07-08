import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SubscriberConsumption } from  '../../model/cac/SubscriberConsumption'
import { SubscriberConsumptionField, SubscriberConsumptionFieldMeta, SubscriberConsumptionTypeName } from  '../../meta/cac/SubscriberConsumptionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConsumptionDisplay } from './ConsumptionDisplay'
import { ConsumptionPointDisplay } from './ConsumptionPointDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { OnAccountPaymentDisplay } from './OnAccountPaymentDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { SupplierConsumptionDisplay } from './SupplierConsumptionDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SubscriberConsumption, void>
  subscriberConsumption: SubscriberConsumption[] | undefined
  renderContext: RenderContext
}

export const SubscriberConsumptionSubElementsMap: SubElementsTemplatesMap<SubscriberConsumptionField, SubscriberConsumption, void> = new Map([
    [
      SubscriberConsumptionField.UBLExtensions,
      { meta: SubscriberConsumptionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SubscriberConsumptionField.UBLExtensions}
          meta={SubscriberConsumptionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.ConsumptionID,
      { meta: SubscriberConsumptionFieldMeta.ConsumptionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SubscriberConsumptionField.ConsumptionID}
          meta={SubscriberConsumptionFieldMeta.ConsumptionID}
          fieldConfig={fieldConfig}
          identifier={value?.ConsumptionID}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.SpecificationTypeCode,
      { meta: SubscriberConsumptionFieldMeta.SpecificationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SubscriberConsumptionField.SpecificationTypeCode}
          meta={SubscriberConsumptionFieldMeta.SpecificationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SpecificationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.Note,
      { meta: SubscriberConsumptionFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SubscriberConsumptionField.Note}
          meta={SubscriberConsumptionFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.TotalMeteredQuantity,
      { meta: SubscriberConsumptionFieldMeta.TotalMeteredQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={SubscriberConsumptionField.TotalMeteredQuantity}
          meta={SubscriberConsumptionFieldMeta.TotalMeteredQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalMeteredQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.SubscriberParty,
      { meta: SubscriberConsumptionFieldMeta.SubscriberParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SubscriberConsumptionField.SubscriberParty}
          meta={SubscriberConsumptionFieldMeta.SubscriberParty}
          fieldConfig={fieldConfig}
          party={value?.SubscriberParty}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.UtilityConsumptionPoint,
      { meta: SubscriberConsumptionFieldMeta.UtilityConsumptionPoint,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionPointDisplay
          key={SubscriberConsumptionField.UtilityConsumptionPoint}
          meta={SubscriberConsumptionFieldMeta.UtilityConsumptionPoint}
          fieldConfig={fieldConfig}
          consumptionPoint={value?.UtilityConsumptionPoint}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.OnAccountPayment,
      { meta: SubscriberConsumptionFieldMeta.OnAccountPayment,
        template: ({value, renderContext, fieldConfig}) => <OnAccountPaymentDisplay
          key={SubscriberConsumptionField.OnAccountPayment}
          meta={SubscriberConsumptionFieldMeta.OnAccountPayment}
          fieldConfig={fieldConfig}
          onAccountPayment={value?.OnAccountPayment}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.Consumption,
      { meta: SubscriberConsumptionFieldMeta.Consumption,
        template: ({value, renderContext, fieldConfig}) => <ConsumptionDisplay
          key={SubscriberConsumptionField.Consumption}
          meta={SubscriberConsumptionFieldMeta.Consumption}
          fieldConfig={fieldConfig}
          consumption={value?.Consumption}
          renderContext={renderContext}
        />}
    ],

    [
      SubscriberConsumptionField.SupplierConsumption,
      { meta: SubscriberConsumptionFieldMeta.SupplierConsumption,
        template: ({value, renderContext, fieldConfig}) => <SupplierConsumptionDisplay
          key={SubscriberConsumptionField.SupplierConsumption}
          meta={SubscriberConsumptionFieldMeta.SupplierConsumption}
          fieldConfig={fieldConfig}
          supplierConsumption={value?.SupplierConsumption}
          renderContext={renderContext}
        />}
    ]
]) 

export function SubscriberConsumptionDisplay<TFieldMeta>({ meta, fieldConfig, subscriberConsumption, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SubscriberConsumptionTypeName,
    meta,
    fieldConfig,
    subscriberConsumption,
    renderContext,
    SubscriberConsumptionSubElementsMap,
  )
}

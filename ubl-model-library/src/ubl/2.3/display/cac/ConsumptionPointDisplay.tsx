import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionPoint } from  '../../model/cac/ConsumptionPoint'
import { ConsumptionPointField, ConsumptionPointFieldMeta, ConsumptionPointTypeName } from  '../../meta/cac/ConsumptionPointMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeterDisplay } from './MeterDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { WebSiteAccessDisplay } from './WebSiteAccessDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionPoint, void>
  consumptionPoint: ConsumptionPoint[] | undefined
  renderContext: RenderContext
}

export const ConsumptionPointSubElementsMap: SubElementsTemplatesMap<ConsumptionPointField, ConsumptionPoint, void> = new Map([
    [
      ConsumptionPointField.UBLExtensions,
      { meta: ConsumptionPointFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionPointField.UBLExtensions}
          meta={ConsumptionPointFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.ID,
      { meta: ConsumptionPointFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsumptionPointField.ID}
          meta={ConsumptionPointFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.Description,
      { meta: ConsumptionPointFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionPointField.Description}
          meta={ConsumptionPointFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.SubscriberID,
      { meta: ConsumptionPointFieldMeta.SubscriberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsumptionPointField.SubscriberID}
          meta={ConsumptionPointFieldMeta.SubscriberID}
          fieldConfig={fieldConfig}
          identifier={value?.SubscriberID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.SubscriberType,
      { meta: ConsumptionPointFieldMeta.SubscriberType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsumptionPointField.SubscriberType}
          meta={ConsumptionPointFieldMeta.SubscriberType}
          fieldConfig={fieldConfig}
          text={value?.SubscriberType}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.SubscriberTypeCode,
      { meta: ConsumptionPointFieldMeta.SubscriberTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsumptionPointField.SubscriberTypeCode}
          meta={ConsumptionPointFieldMeta.SubscriberTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SubscriberTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.TotalDeliveredQuantity,
      { meta: ConsumptionPointFieldMeta.TotalDeliveredQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionPointField.TotalDeliveredQuantity}
          meta={ConsumptionPointFieldMeta.TotalDeliveredQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalDeliveredQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.Address,
      { meta: ConsumptionPointFieldMeta.Address,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={ConsumptionPointField.Address}
          meta={ConsumptionPointFieldMeta.Address}
          fieldConfig={fieldConfig}
          address={value?.Address}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.WebSiteAccess,
      { meta: ConsumptionPointFieldMeta.WebSiteAccess,
        template: ({value, renderContext, fieldConfig}) => <WebSiteAccessDisplay
          key={ConsumptionPointField.WebSiteAccess}
          meta={ConsumptionPointFieldMeta.WebSiteAccess}
          fieldConfig={fieldConfig}
          webSiteAccess={value?.WebSiteAccess}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionPointField.UtilityMeter,
      { meta: ConsumptionPointFieldMeta.UtilityMeter,
        template: ({value, renderContext, fieldConfig}) => <MeterDisplay
          key={ConsumptionPointField.UtilityMeter}
          meta={ConsumptionPointFieldMeta.UtilityMeter}
          fieldConfig={fieldConfig}
          meter={value?.UtilityMeter}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionPointDisplay<TFieldMeta>({ meta, fieldConfig, consumptionPoint, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionPointTypeName,
    meta,
    fieldConfig,
    consumptionPoint,
    renderContext,
    ConsumptionPointSubElementsMap,
  )
}

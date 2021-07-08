import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ActivityDataLine } from  '../../model/cac/ActivityDataLine'
import { ActivityDataLineField, ActivityDataLineFieldMeta, ActivityDataLineTypeName } from  '../../meta/cac/ActivityDataLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { SalesItemDisplay } from './SalesItemDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ActivityDataLine, void>
  activityDataLine: ActivityDataLine[] | undefined
  renderContext: RenderContext
}

export const ActivityDataLineSubElementsMap: SubElementsTemplatesMap<ActivityDataLineField, ActivityDataLine, void> = new Map([
    [
      ActivityDataLineField.UBLExtensions,
      { meta: ActivityDataLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ActivityDataLineField.UBLExtensions}
          meta={ActivityDataLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.ID,
      { meta: ActivityDataLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ActivityDataLineField.ID}
          meta={ActivityDataLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.SupplyChainActivityTypeCode,
      { meta: ActivityDataLineFieldMeta.SupplyChainActivityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ActivityDataLineField.SupplyChainActivityTypeCode}
          meta={ActivityDataLineFieldMeta.SupplyChainActivityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SupplyChainActivityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.BuyerCustomerParty,
      { meta: ActivityDataLineFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ActivityDataLineField.BuyerCustomerParty}
          meta={ActivityDataLineFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.SellerSupplierParty,
      { meta: ActivityDataLineFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ActivityDataLineField.SellerSupplierParty}
          meta={ActivityDataLineFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.ActivityPeriod,
      { meta: ActivityDataLineFieldMeta.ActivityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ActivityDataLineField.ActivityPeriod}
          meta={ActivityDataLineFieldMeta.ActivityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ActivityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.ActivityOriginLocation,
      { meta: ActivityDataLineFieldMeta.ActivityOriginLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ActivityDataLineField.ActivityOriginLocation}
          meta={ActivityDataLineFieldMeta.ActivityOriginLocation}
          fieldConfig={fieldConfig}
          location={value?.ActivityOriginLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.ActivityFinalLocation,
      { meta: ActivityDataLineFieldMeta.ActivityFinalLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ActivityDataLineField.ActivityFinalLocation}
          meta={ActivityDataLineFieldMeta.ActivityFinalLocation}
          fieldConfig={fieldConfig}
          location={value?.ActivityFinalLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityDataLineField.SalesItem,
      { meta: ActivityDataLineFieldMeta.SalesItem,
        template: ({value, renderContext, fieldConfig}) => <SalesItemDisplay
          key={ActivityDataLineField.SalesItem}
          meta={ActivityDataLineFieldMeta.SalesItem}
          fieldConfig={fieldConfig}
          salesItem={value?.SalesItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function ActivityDataLineDisplay<TFieldMeta>({ meta, fieldConfig, activityDataLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ActivityDataLineTypeName,
    meta,
    fieldConfig,
    activityDataLine,
    renderContext,
    ActivityDataLineSubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionLine } from  '../../model/cac/ConsumptionLine'
import { ConsumptionLineField, ConsumptionLineFieldMeta, ConsumptionLineTypeName } from  '../../meta/cac/ConsumptionLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { PriceDisplay } from './PriceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { UnstructuredPriceDisplay } from './UnstructuredPriceDisplay'
import { UtilityItemDisplay } from './UtilityItemDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ConsumptionLine, void>
  consumptionLine: ConsumptionLine[] | undefined
  renderContext: RenderContext
}

export const ConsumptionLineSubElementsMap: SubElementsTemplatesMap<ConsumptionLineField, ConsumptionLine, void> = new Map([
    [
      ConsumptionLineField.UBLExtensions,
      { meta: ConsumptionLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsumptionLineField.UBLExtensions}
          meta={ConsumptionLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.ID,
      { meta: ConsumptionLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsumptionLineField.ID}
          meta={ConsumptionLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.ParentDocumentLineReferenceID,
      { meta: ConsumptionLineFieldMeta.ParentDocumentLineReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsumptionLineField.ParentDocumentLineReferenceID}
          meta={ConsumptionLineFieldMeta.ParentDocumentLineReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.ParentDocumentLineReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.InvoicedQuantity,
      { meta: ConsumptionLineFieldMeta.InvoicedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsumptionLineField.InvoicedQuantity}
          meta={ConsumptionLineFieldMeta.InvoicedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.InvoicedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.LineExtensionAmount,
      { meta: ConsumptionLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsumptionLineField.LineExtensionAmount}
          meta={ConsumptionLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.TaxInclusiveLineExtensionAmount,
      { meta: ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsumptionLineField.TaxInclusiveLineExtensionAmount}
          meta={ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.Period,
      { meta: ConsumptionLineFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ConsumptionLineField.Period}
          meta={ConsumptionLineFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.Delivery,
      { meta: ConsumptionLineFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={ConsumptionLineField.Delivery}
          meta={ConsumptionLineFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.AllowanceCharge,
      { meta: ConsumptionLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ConsumptionLineField.AllowanceCharge}
          meta={ConsumptionLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.TaxTotal,
      { meta: ConsumptionLineFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={ConsumptionLineField.TaxTotal}
          meta={ConsumptionLineFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.UtilityItem,
      { meta: ConsumptionLineFieldMeta.UtilityItem,
        template: ({value, renderContext, fieldConfig}) => <UtilityItemDisplay
          key={ConsumptionLineField.UtilityItem}
          meta={ConsumptionLineFieldMeta.UtilityItem}
          fieldConfig={fieldConfig}
          utilityItem={value?.UtilityItem}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.Price,
      { meta: ConsumptionLineFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={ConsumptionLineField.Price}
          meta={ConsumptionLineFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      ConsumptionLineField.UnstructuredPrice,
      { meta: ConsumptionLineFieldMeta.UnstructuredPrice,
        template: ({value, renderContext, fieldConfig}) => <UnstructuredPriceDisplay
          key={ConsumptionLineField.UnstructuredPrice}
          meta={ConsumptionLineFieldMeta.UnstructuredPrice}
          fieldConfig={fieldConfig}
          unstructuredPrice={value?.UnstructuredPrice}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsumptionLineDisplay<TFieldMeta>({ meta, fieldConfig, consumptionLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsumptionLineTypeName,
    meta,
    fieldConfig,
    consumptionLine,
    renderContext,
    ConsumptionLineSubElementsMap,
  )
}

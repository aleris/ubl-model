import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineItem } from  '../../model/cac/LineItem'
import { LineItemField, LineItemFieldMeta, LineItemTypeName } from  '../../meta/cac/LineItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DeliveryTermsDisplay } from './DeliveryTermsDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemDisplay } from './ItemDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { OrderedShipmentDisplay } from './OrderedShipmentDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { PriceDisplay } from './PriceDisplay'
import { PriceExtensionDisplay } from './PriceExtensionDisplay'
import { PricingReferenceDisplay } from './PricingReferenceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LineItem, void>
  lineItem: LineItem[] | undefined
  renderContext: RenderContext
}

export const LineItemSubElementsMap: SubElementsTemplatesMap<LineItemField, LineItem, void> = new Map([
    [
      LineItemField.UBLExtensions,
      { meta: LineItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LineItemField.UBLExtensions}
          meta={LineItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.ID,
      { meta: LineItemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LineItemField.ID}
          meta={LineItemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.SalesOrderID,
      { meta: LineItemFieldMeta.SalesOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LineItemField.SalesOrderID}
          meta={LineItemFieldMeta.SalesOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.SalesOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.UUID,
      { meta: LineItemFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LineItemField.UUID}
          meta={LineItemFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.Note,
      { meta: LineItemFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LineItemField.Note}
          meta={LineItemFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.LineStatusCode,
      { meta: LineItemFieldMeta.LineStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LineItemField.LineStatusCode}
          meta={LineItemFieldMeta.LineStatusCode}
          fieldConfig={fieldConfig}
          code={value?.LineStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.Quantity,
      { meta: LineItemFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={LineItemField.Quantity}
          meta={LineItemFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.LineExtensionAmount,
      { meta: LineItemFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={LineItemField.LineExtensionAmount}
          meta={LineItemFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.TaxInclusiveLineExtensionAmount,
      { meta: LineItemFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={LineItemField.TaxInclusiveLineExtensionAmount}
          meta={LineItemFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.TotalTaxAmount,
      { meta: LineItemFieldMeta.TotalTaxAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={LineItemField.TotalTaxAmount}
          meta={LineItemFieldMeta.TotalTaxAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalTaxAmount}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.MinimumQuantity,
      { meta: LineItemFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={LineItemField.MinimumQuantity}
          meta={LineItemFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.MaximumQuantity,
      { meta: LineItemFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={LineItemField.MaximumQuantity}
          meta={LineItemFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.MinimumBackorderQuantity,
      { meta: LineItemFieldMeta.MinimumBackorderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={LineItemField.MinimumBackorderQuantity}
          meta={LineItemFieldMeta.MinimumBackorderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumBackorderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.MaximumBackorderQuantity,
      { meta: LineItemFieldMeta.MaximumBackorderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={LineItemField.MaximumBackorderQuantity}
          meta={LineItemFieldMeta.MaximumBackorderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumBackorderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.InspectionMethodCode,
      { meta: LineItemFieldMeta.InspectionMethodCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LineItemField.InspectionMethodCode}
          meta={LineItemFieldMeta.InspectionMethodCode}
          fieldConfig={fieldConfig}
          code={value?.InspectionMethodCode}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.PartialDeliveryIndicator,
      { meta: LineItemFieldMeta.PartialDeliveryIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={LineItemField.PartialDeliveryIndicator}
          meta={LineItemFieldMeta.PartialDeliveryIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PartialDeliveryIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.BackOrderAllowedIndicator,
      { meta: LineItemFieldMeta.BackOrderAllowedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={LineItemField.BackOrderAllowedIndicator}
          meta={LineItemFieldMeta.BackOrderAllowedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.BackOrderAllowedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.AccountingCostCode,
      { meta: LineItemFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LineItemField.AccountingCostCode}
          meta={LineItemFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.AccountingCost,
      { meta: LineItemFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LineItemField.AccountingCost}
          meta={LineItemFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.WarrantyInformation,
      { meta: LineItemFieldMeta.WarrantyInformation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LineItemField.WarrantyInformation}
          meta={LineItemFieldMeta.WarrantyInformation}
          fieldConfig={fieldConfig}
          text={value?.WarrantyInformation}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.Delivery,
      { meta: LineItemFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={LineItemField.Delivery}
          meta={LineItemFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.DeliveryTerms,
      { meta: LineItemFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={LineItemField.DeliveryTerms}
          meta={LineItemFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.OriginatorParty,
      { meta: LineItemFieldMeta.OriginatorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={LineItemField.OriginatorParty}
          meta={LineItemFieldMeta.OriginatorParty}
          fieldConfig={fieldConfig}
          party={value?.OriginatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.OrderedShipment,
      { meta: LineItemFieldMeta.OrderedShipment,
        template: ({value, renderContext, fieldConfig}) => <OrderedShipmentDisplay
          key={LineItemField.OrderedShipment}
          meta={LineItemFieldMeta.OrderedShipment}
          fieldConfig={fieldConfig}
          orderedShipment={value?.OrderedShipment}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.PricingReference,
      { meta: LineItemFieldMeta.PricingReference,
        template: ({value, renderContext, fieldConfig}) => <PricingReferenceDisplay
          key={LineItemField.PricingReference}
          meta={LineItemFieldMeta.PricingReference}
          fieldConfig={fieldConfig}
          pricingReference={value?.PricingReference}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.AllowanceCharge,
      { meta: LineItemFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={LineItemField.AllowanceCharge}
          meta={LineItemFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.Price,
      { meta: LineItemFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={LineItemField.Price}
          meta={LineItemFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.Item,
      { meta: LineItemFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={LineItemField.Item}
          meta={LineItemFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.SubLineItem,
      { meta: LineItemFieldMeta.SubLineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={LineItemField.SubLineItem}
          meta={LineItemFieldMeta.SubLineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.SubLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.WarrantyValidityPeriod,
      { meta: LineItemFieldMeta.WarrantyValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={LineItemField.WarrantyValidityPeriod}
          meta={LineItemFieldMeta.WarrantyValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.WarrantyValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.WarrantyParty,
      { meta: LineItemFieldMeta.WarrantyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={LineItemField.WarrantyParty}
          meta={LineItemFieldMeta.WarrantyParty}
          fieldConfig={fieldConfig}
          party={value?.WarrantyParty}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.TaxTotal,
      { meta: LineItemFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={LineItemField.TaxTotal}
          meta={LineItemFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.ItemPriceExtension,
      { meta: LineItemFieldMeta.ItemPriceExtension,
        template: ({value, renderContext, fieldConfig}) => <PriceExtensionDisplay
          key={LineItemField.ItemPriceExtension}
          meta={LineItemFieldMeta.ItemPriceExtension}
          fieldConfig={fieldConfig}
          priceExtension={value?.ItemPriceExtension}
          renderContext={renderContext}
        />}
    ],

    [
      LineItemField.LineReference,
      { meta: LineItemFieldMeta.LineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={LineItemField.LineReference}
          meta={LineItemFieldMeta.LineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.LineReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function LineItemDisplay<TFieldMeta>({ meta, fieldConfig, lineItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LineItemTypeName,
    meta,
    fieldConfig,
    lineItem,
    renderContext,
    LineItemSubElementsMap,
  )
}

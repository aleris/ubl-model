import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { InvoiceLine } from  '../../model/cac/InvoiceLine'
import { InvoiceLineField, InvoiceLineFieldMeta, InvoiceLineTypeName } from  '../../meta/cac/InvoiceLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BillingReferenceDisplay } from './BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DeliveryTermsDisplay } from './DeliveryTermsDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemDisplay } from './ItemDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { OrderLineReferenceDisplay } from './OrderLineReferenceDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PaymentTermsDisplay } from './PaymentTermsDisplay'
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
  fieldConfig?: FieldConfig<InvoiceLine, void>
  invoiceLine: InvoiceLine[] | undefined
  renderContext: RenderContext
}

export const InvoiceLineSubElementsMap: SubElementsTemplatesMap<InvoiceLineField, InvoiceLine, void> = new Map([
    [
      InvoiceLineField.UBLExtensions,
      { meta: InvoiceLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={InvoiceLineField.UBLExtensions}
          meta={InvoiceLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.ID,
      { meta: InvoiceLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceLineField.ID}
          meta={InvoiceLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.UUID,
      { meta: InvoiceLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceLineField.UUID}
          meta={InvoiceLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.Note,
      { meta: InvoiceLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InvoiceLineField.Note}
          meta={InvoiceLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.InvoicedQuantity,
      { meta: InvoiceLineFieldMeta.InvoicedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={InvoiceLineField.InvoicedQuantity}
          meta={InvoiceLineFieldMeta.InvoicedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.InvoicedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.LineExtensionAmount,
      { meta: InvoiceLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={InvoiceLineField.LineExtensionAmount}
          meta={InvoiceLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.TaxInclusiveLineExtensionAmount,
      { meta: InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={InvoiceLineField.TaxInclusiveLineExtensionAmount}
          meta={InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.TaxPointDate,
      { meta: InvoiceLineFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InvoiceLineField.TaxPointDate}
          meta={InvoiceLineFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.AccountingCostCode,
      { meta: InvoiceLineFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceLineField.AccountingCostCode}
          meta={InvoiceLineFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.AccountingCost,
      { meta: InvoiceLineFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InvoiceLineField.AccountingCost}
          meta={InvoiceLineFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.PaymentPurposeCode,
      { meta: InvoiceLineFieldMeta.PaymentPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceLineField.PaymentPurposeCode}
          meta={InvoiceLineFieldMeta.PaymentPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.FreeOfChargeIndicator,
      { meta: InvoiceLineFieldMeta.FreeOfChargeIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={InvoiceLineField.FreeOfChargeIndicator}
          meta={InvoiceLineFieldMeta.FreeOfChargeIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FreeOfChargeIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.InvoicePeriod,
      { meta: InvoiceLineFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={InvoiceLineField.InvoicePeriod}
          meta={InvoiceLineFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.OrderLineReference,
      { meta: InvoiceLineFieldMeta.OrderLineReference,
        template: ({value, renderContext, fieldConfig}) => <OrderLineReferenceDisplay
          key={InvoiceLineField.OrderLineReference}
          meta={InvoiceLineFieldMeta.OrderLineReference}
          fieldConfig={fieldConfig}
          orderLineReference={value?.OrderLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.DespatchLineReference,
      { meta: InvoiceLineFieldMeta.DespatchLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={InvoiceLineField.DespatchLineReference}
          meta={InvoiceLineFieldMeta.DespatchLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.DespatchLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.ReceiptLineReference,
      { meta: InvoiceLineFieldMeta.ReceiptLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={InvoiceLineField.ReceiptLineReference}
          meta={InvoiceLineFieldMeta.ReceiptLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.ReceiptLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.BillingReference,
      { meta: InvoiceLineFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={InvoiceLineField.BillingReference}
          meta={InvoiceLineFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.DocumentReference,
      { meta: InvoiceLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceLineField.DocumentReference}
          meta={InvoiceLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.PricingReference,
      { meta: InvoiceLineFieldMeta.PricingReference,
        template: ({value, renderContext, fieldConfig}) => <PricingReferenceDisplay
          key={InvoiceLineField.PricingReference}
          meta={InvoiceLineFieldMeta.PricingReference}
          fieldConfig={fieldConfig}
          pricingReference={value?.PricingReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.OriginatorParty,
      { meta: InvoiceLineFieldMeta.OriginatorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={InvoiceLineField.OriginatorParty}
          meta={InvoiceLineFieldMeta.OriginatorParty}
          fieldConfig={fieldConfig}
          party={value?.OriginatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.Delivery,
      { meta: InvoiceLineFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={InvoiceLineField.Delivery}
          meta={InvoiceLineFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.PaymentTerms,
      { meta: InvoiceLineFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={InvoiceLineField.PaymentTerms}
          meta={InvoiceLineFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.AllowanceCharge,
      { meta: InvoiceLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={InvoiceLineField.AllowanceCharge}
          meta={InvoiceLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.TaxTotal,
      { meta: InvoiceLineFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={InvoiceLineField.TaxTotal}
          meta={InvoiceLineFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.WithholdingTaxTotal,
      { meta: InvoiceLineFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={InvoiceLineField.WithholdingTaxTotal}
          meta={InvoiceLineFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.Item,
      { meta: InvoiceLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={InvoiceLineField.Item}
          meta={InvoiceLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.Price,
      { meta: InvoiceLineFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={InvoiceLineField.Price}
          meta={InvoiceLineFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.DeliveryTerms,
      { meta: InvoiceLineFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={InvoiceLineField.DeliveryTerms}
          meta={InvoiceLineFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.SubInvoiceLine,
      { meta: InvoiceLineFieldMeta.SubInvoiceLine,
        template: ({value, renderContext, fieldConfig}) => <InvoiceLineDisplay
          key={InvoiceLineField.SubInvoiceLine}
          meta={InvoiceLineFieldMeta.SubInvoiceLine}
          fieldConfig={fieldConfig}
          invoiceLine={value?.SubInvoiceLine}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceLineField.ItemPriceExtension,
      { meta: InvoiceLineFieldMeta.ItemPriceExtension,
        template: ({value, renderContext, fieldConfig}) => <PriceExtensionDisplay
          key={InvoiceLineField.ItemPriceExtension}
          meta={InvoiceLineFieldMeta.ItemPriceExtension}
          fieldConfig={fieldConfig}
          priceExtension={value?.ItemPriceExtension}
          renderContext={renderContext}
        />}
    ]
]) 

export function InvoiceLineDisplay<TFieldMeta>({ meta, fieldConfig, invoiceLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    InvoiceLineTypeName,
    meta,
    fieldConfig,
    invoiceLine,
    renderContext,
    InvoiceLineSubElementsMap,
  )
}

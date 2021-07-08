import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditNoteLine } from  '../../model/cac/CreditNoteLine'
import { CreditNoteLineField, CreditNoteLineFieldMeta, CreditNoteLineTypeName } from  '../../meta/cac/CreditNoteLineMeta'
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
import { ResponseDisplay } from './ResponseDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CreditNoteLine, void>
  creditNoteLine: CreditNoteLine[] | undefined
  renderContext: RenderContext
}

export const CreditNoteLineSubElementsMap: SubElementsTemplatesMap<CreditNoteLineField, CreditNoteLine, void> = new Map([
    [
      CreditNoteLineField.UBLExtensions,
      { meta: CreditNoteLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CreditNoteLineField.UBLExtensions}
          meta={CreditNoteLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.ID,
      { meta: CreditNoteLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteLineField.ID}
          meta={CreditNoteLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.UUID,
      { meta: CreditNoteLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteLineField.UUID}
          meta={CreditNoteLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.Note,
      { meta: CreditNoteLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CreditNoteLineField.Note}
          meta={CreditNoteLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.CreditedQuantity,
      { meta: CreditNoteLineFieldMeta.CreditedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={CreditNoteLineField.CreditedQuantity}
          meta={CreditNoteLineFieldMeta.CreditedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.CreditedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.LineExtensionAmount,
      { meta: CreditNoteLineFieldMeta.LineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={CreditNoteLineField.LineExtensionAmount}
          meta={CreditNoteLineFieldMeta.LineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.LineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.TaxInclusiveLineExtensionAmount,
      { meta: CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={CreditNoteLineField.TaxInclusiveLineExtensionAmount}
          meta={CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount}
          fieldConfig={fieldConfig}
          amount={value?.TaxInclusiveLineExtensionAmount}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.TaxPointDate,
      { meta: CreditNoteLineFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CreditNoteLineField.TaxPointDate}
          meta={CreditNoteLineFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.AccountingCostCode,
      { meta: CreditNoteLineFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteLineField.AccountingCostCode}
          meta={CreditNoteLineFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.AccountingCost,
      { meta: CreditNoteLineFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CreditNoteLineField.AccountingCost}
          meta={CreditNoteLineFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.PaymentPurposeCode,
      { meta: CreditNoteLineFieldMeta.PaymentPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteLineField.PaymentPurposeCode}
          meta={CreditNoteLineFieldMeta.PaymentPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.FreeOfChargeIndicator,
      { meta: CreditNoteLineFieldMeta.FreeOfChargeIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={CreditNoteLineField.FreeOfChargeIndicator}
          meta={CreditNoteLineFieldMeta.FreeOfChargeIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FreeOfChargeIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.InvoicePeriod,
      { meta: CreditNoteLineFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CreditNoteLineField.InvoicePeriod}
          meta={CreditNoteLineFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.OrderLineReference,
      { meta: CreditNoteLineFieldMeta.OrderLineReference,
        template: ({value, renderContext, fieldConfig}) => <OrderLineReferenceDisplay
          key={CreditNoteLineField.OrderLineReference}
          meta={CreditNoteLineFieldMeta.OrderLineReference}
          fieldConfig={fieldConfig}
          orderLineReference={value?.OrderLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.DiscrepancyResponse,
      { meta: CreditNoteLineFieldMeta.DiscrepancyResponse,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={CreditNoteLineField.DiscrepancyResponse}
          meta={CreditNoteLineFieldMeta.DiscrepancyResponse}
          fieldConfig={fieldConfig}
          response={value?.DiscrepancyResponse}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.DespatchLineReference,
      { meta: CreditNoteLineFieldMeta.DespatchLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={CreditNoteLineField.DespatchLineReference}
          meta={CreditNoteLineFieldMeta.DespatchLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.DespatchLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.ReceiptLineReference,
      { meta: CreditNoteLineFieldMeta.ReceiptLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={CreditNoteLineField.ReceiptLineReference}
          meta={CreditNoteLineFieldMeta.ReceiptLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.ReceiptLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.BillingReference,
      { meta: CreditNoteLineFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={CreditNoteLineField.BillingReference}
          meta={CreditNoteLineFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.DocumentReference,
      { meta: CreditNoteLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteLineField.DocumentReference}
          meta={CreditNoteLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.PricingReference,
      { meta: CreditNoteLineFieldMeta.PricingReference,
        template: ({value, renderContext, fieldConfig}) => <PricingReferenceDisplay
          key={CreditNoteLineField.PricingReference}
          meta={CreditNoteLineFieldMeta.PricingReference}
          fieldConfig={fieldConfig}
          pricingReference={value?.PricingReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.OriginatorParty,
      { meta: CreditNoteLineFieldMeta.OriginatorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CreditNoteLineField.OriginatorParty}
          meta={CreditNoteLineFieldMeta.OriginatorParty}
          fieldConfig={fieldConfig}
          party={value?.OriginatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.Delivery,
      { meta: CreditNoteLineFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={CreditNoteLineField.Delivery}
          meta={CreditNoteLineFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.PaymentTerms,
      { meta: CreditNoteLineFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={CreditNoteLineField.PaymentTerms}
          meta={CreditNoteLineFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.TaxTotal,
      { meta: CreditNoteLineFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={CreditNoteLineField.TaxTotal}
          meta={CreditNoteLineFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.AllowanceCharge,
      { meta: CreditNoteLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={CreditNoteLineField.AllowanceCharge}
          meta={CreditNoteLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.Item,
      { meta: CreditNoteLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={CreditNoteLineField.Item}
          meta={CreditNoteLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.Price,
      { meta: CreditNoteLineFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={CreditNoteLineField.Price}
          meta={CreditNoteLineFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.DeliveryTerms,
      { meta: CreditNoteLineFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={CreditNoteLineField.DeliveryTerms}
          meta={CreditNoteLineFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.SubCreditNoteLine,
      { meta: CreditNoteLineFieldMeta.SubCreditNoteLine,
        template: ({value, renderContext, fieldConfig}) => <CreditNoteLineDisplay
          key={CreditNoteLineField.SubCreditNoteLine}
          meta={CreditNoteLineFieldMeta.SubCreditNoteLine}
          fieldConfig={fieldConfig}
          creditNoteLine={value?.SubCreditNoteLine}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteLineField.ItemPriceExtension,
      { meta: CreditNoteLineFieldMeta.ItemPriceExtension,
        template: ({value, renderContext, fieldConfig}) => <PriceExtensionDisplay
          key={CreditNoteLineField.ItemPriceExtension}
          meta={CreditNoteLineFieldMeta.ItemPriceExtension}
          fieldConfig={fieldConfig}
          priceExtension={value?.ItemPriceExtension}
          renderContext={renderContext}
        />}
    ]
]) 

export function CreditNoteLineDisplay<TFieldMeta>({ meta, fieldConfig, creditNoteLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CreditNoteLineTypeName,
    meta,
    fieldConfig,
    creditNoteLine,
    renderContext,
    CreditNoteLineSubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Invoice } from  '../../model/doc/Invoice'
import { InvoiceField, InvoiceFieldMeta, InvoiceTypeName } from  '../../meta/doc/InvoiceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { BillingReferenceDisplay } from '../cac/BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DeliveryDisplay } from '../cac/DeliveryDisplay'
import { DeliveryTermsDisplay } from '../cac/DeliveryTermsDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExchangeRateDisplay } from '../cac/ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { InvoiceLineDisplay } from '../cac/InvoiceLineDisplay'
import { MonetaryTotalDisplay } from '../cac/MonetaryTotalDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentDisplay } from '../cac/PaymentDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ProjectReferenceDisplay } from '../cac/ProjectReferenceDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Invoice, void>
  invoice: Invoice[] | undefined
  renderContext: RenderContext
}

export const InvoiceSubElementsMap: SubElementsTemplatesMap<InvoiceField, Invoice, void> = new Map([
    [
      InvoiceField.UBLExtensions,
      { meta: InvoiceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={InvoiceField.UBLExtensions}
          meta={InvoiceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.UBLVersionID,
      { meta: InvoiceFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceField.UBLVersionID}
          meta={InvoiceFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.CustomizationID,
      { meta: InvoiceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceField.CustomizationID}
          meta={InvoiceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.ProfileID,
      { meta: InvoiceFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceField.ProfileID}
          meta={InvoiceFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.ProfileExecutionID,
      { meta: InvoiceFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceField.ProfileExecutionID}
          meta={InvoiceFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.ID,
      { meta: InvoiceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceField.ID}
          meta={InvoiceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.CopyIndicator,
      { meta: InvoiceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={InvoiceField.CopyIndicator}
          meta={InvoiceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.UUID,
      { meta: InvoiceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InvoiceField.UUID}
          meta={InvoiceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.IssueDate,
      { meta: InvoiceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InvoiceField.IssueDate}
          meta={InvoiceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.IssueTime,
      { meta: InvoiceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={InvoiceField.IssueTime}
          meta={InvoiceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.DueDate,
      { meta: InvoiceFieldMeta.DueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InvoiceField.DueDate}
          meta={InvoiceFieldMeta.DueDate}
          fieldConfig={fieldConfig}
          date={value?.DueDate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.InvoiceTypeCode,
      { meta: InvoiceFieldMeta.InvoiceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.InvoiceTypeCode}
          meta={InvoiceFieldMeta.InvoiceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.InvoiceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.Note,
      { meta: InvoiceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InvoiceField.Note}
          meta={InvoiceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.TaxPointDate,
      { meta: InvoiceFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InvoiceField.TaxPointDate}
          meta={InvoiceFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.DocumentCurrencyCode,
      { meta: InvoiceFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.DocumentCurrencyCode}
          meta={InvoiceFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.TaxCurrencyCode,
      { meta: InvoiceFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.TaxCurrencyCode}
          meta={InvoiceFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PricingCurrencyCode,
      { meta: InvoiceFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.PricingCurrencyCode}
          meta={InvoiceFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PaymentCurrencyCode,
      { meta: InvoiceFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.PaymentCurrencyCode}
          meta={InvoiceFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PaymentAlternativeCurrencyCode,
      { meta: InvoiceFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.PaymentAlternativeCurrencyCode}
          meta={InvoiceFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.AccountingCostCode,
      { meta: InvoiceFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InvoiceField.AccountingCostCode}
          meta={InvoiceFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.AccountingCost,
      { meta: InvoiceFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InvoiceField.AccountingCost}
          meta={InvoiceFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.LineCountNumeric,
      { meta: InvoiceFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={InvoiceField.LineCountNumeric}
          meta={InvoiceFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.BuyerReference,
      { meta: InvoiceFieldMeta.BuyerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InvoiceField.BuyerReference}
          meta={InvoiceFieldMeta.BuyerReference}
          fieldConfig={fieldConfig}
          text={value?.BuyerReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.InvoicePeriod,
      { meta: InvoiceFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={InvoiceField.InvoicePeriod}
          meta={InvoiceFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.OrderReference,
      { meta: InvoiceFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={InvoiceField.OrderReference}
          meta={InvoiceFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.BillingReference,
      { meta: InvoiceFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={InvoiceField.BillingReference}
          meta={InvoiceFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.DespatchDocumentReference,
      { meta: InvoiceFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceField.DespatchDocumentReference}
          meta={InvoiceFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.ReceiptDocumentReference,
      { meta: InvoiceFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceField.ReceiptDocumentReference}
          meta={InvoiceFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.StatementDocumentReference,
      { meta: InvoiceFieldMeta.StatementDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceField.StatementDocumentReference}
          meta={InvoiceFieldMeta.StatementDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.StatementDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.OriginatorDocumentReference,
      { meta: InvoiceFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceField.OriginatorDocumentReference}
          meta={InvoiceFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.ContractDocumentReference,
      { meta: InvoiceFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceField.ContractDocumentReference}
          meta={InvoiceFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.AdditionalDocumentReference,
      { meta: InvoiceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={InvoiceField.AdditionalDocumentReference}
          meta={InvoiceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.ProjectReference,
      { meta: InvoiceFieldMeta.ProjectReference,
        template: ({value, renderContext, fieldConfig}) => <ProjectReferenceDisplay
          key={InvoiceField.ProjectReference}
          meta={InvoiceFieldMeta.ProjectReference}
          fieldConfig={fieldConfig}
          projectReference={value?.ProjectReference}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.Signature,
      { meta: InvoiceFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={InvoiceField.Signature}
          meta={InvoiceFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.AccountingSupplierParty,
      { meta: InvoiceFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={InvoiceField.AccountingSupplierParty}
          meta={InvoiceFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.AccountingCustomerParty,
      { meta: InvoiceFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={InvoiceField.AccountingCustomerParty}
          meta={InvoiceFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PayeeParty,
      { meta: InvoiceFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={InvoiceField.PayeeParty}
          meta={InvoiceFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.BuyerCustomerParty,
      { meta: InvoiceFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={InvoiceField.BuyerCustomerParty}
          meta={InvoiceFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.SellerSupplierParty,
      { meta: InvoiceFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={InvoiceField.SellerSupplierParty}
          meta={InvoiceFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.TaxRepresentativeParty,
      { meta: InvoiceFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={InvoiceField.TaxRepresentativeParty}
          meta={InvoiceFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.Delivery,
      { meta: InvoiceFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={InvoiceField.Delivery}
          meta={InvoiceFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.DeliveryTerms,
      { meta: InvoiceFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={InvoiceField.DeliveryTerms}
          meta={InvoiceFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PaymentMeans,
      { meta: InvoiceFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={InvoiceField.PaymentMeans}
          meta={InvoiceFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PaymentTerms,
      { meta: InvoiceFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={InvoiceField.PaymentTerms}
          meta={InvoiceFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PrepaidPayment,
      { meta: InvoiceFieldMeta.PrepaidPayment,
        template: ({value, renderContext, fieldConfig}) => <PaymentDisplay
          key={InvoiceField.PrepaidPayment}
          meta={InvoiceFieldMeta.PrepaidPayment}
          fieldConfig={fieldConfig}
          payment={value?.PrepaidPayment}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.AllowanceCharge,
      { meta: InvoiceFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={InvoiceField.AllowanceCharge}
          meta={InvoiceFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.TaxExchangeRate,
      { meta: InvoiceFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={InvoiceField.TaxExchangeRate}
          meta={InvoiceFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PricingExchangeRate,
      { meta: InvoiceFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={InvoiceField.PricingExchangeRate}
          meta={InvoiceFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PaymentExchangeRate,
      { meta: InvoiceFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={InvoiceField.PaymentExchangeRate}
          meta={InvoiceFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.PaymentAlternativeExchangeRate,
      { meta: InvoiceFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={InvoiceField.PaymentAlternativeExchangeRate}
          meta={InvoiceFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.TaxTotal,
      { meta: InvoiceFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={InvoiceField.TaxTotal}
          meta={InvoiceFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.WithholdingTaxTotal,
      { meta: InvoiceFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={InvoiceField.WithholdingTaxTotal}
          meta={InvoiceFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.LegalMonetaryTotal,
      { meta: InvoiceFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={InvoiceField.LegalMonetaryTotal}
          meta={InvoiceFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      InvoiceField.InvoiceLine,
      { meta: InvoiceFieldMeta.InvoiceLine,
        template: ({value, renderContext, fieldConfig}) => <InvoiceLineDisplay
          key={InvoiceField.InvoiceLine}
          meta={InvoiceFieldMeta.InvoiceLine}
          fieldConfig={fieldConfig}
          invoiceLine={value?.InvoiceLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function InvoiceDisplay<TFieldMeta>({ meta, fieldConfig, invoice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    InvoiceTypeName,
    meta,
    fieldConfig,
    invoice,
    renderContext,
    InvoiceSubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { FreightInvoice } from  '../../model/doc/FreightInvoice'
import { FreightInvoiceField, FreightInvoiceFieldMeta, FreightInvoiceTypeName } from  '../../meta/doc/FreightInvoiceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { BillingReferenceDisplay } from '../cac/BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
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
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<FreightInvoice, void>
  freightInvoice: FreightInvoice[] | undefined
  renderContext: RenderContext
}

export const FreightInvoiceSubElementsMap: SubElementsTemplatesMap<FreightInvoiceField, FreightInvoice, void> = new Map([
    [
      FreightInvoiceField.UBLExtensions,
      { meta: FreightInvoiceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FreightInvoiceField.UBLExtensions}
          meta={FreightInvoiceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.UBLVersionID,
      { meta: FreightInvoiceFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FreightInvoiceField.UBLVersionID}
          meta={FreightInvoiceFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.CustomizationID,
      { meta: FreightInvoiceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FreightInvoiceField.CustomizationID}
          meta={FreightInvoiceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.ProfileID,
      { meta: FreightInvoiceFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FreightInvoiceField.ProfileID}
          meta={FreightInvoiceFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.ProfileExecutionID,
      { meta: FreightInvoiceFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FreightInvoiceField.ProfileExecutionID}
          meta={FreightInvoiceFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.ID,
      { meta: FreightInvoiceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FreightInvoiceField.ID}
          meta={FreightInvoiceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.CopyIndicator,
      { meta: FreightInvoiceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={FreightInvoiceField.CopyIndicator}
          meta={FreightInvoiceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.UUID,
      { meta: FreightInvoiceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={FreightInvoiceField.UUID}
          meta={FreightInvoiceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.IssueDate,
      { meta: FreightInvoiceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={FreightInvoiceField.IssueDate}
          meta={FreightInvoiceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.IssueTime,
      { meta: FreightInvoiceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={FreightInvoiceField.IssueTime}
          meta={FreightInvoiceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.DueDate,
      { meta: FreightInvoiceFieldMeta.DueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={FreightInvoiceField.DueDate}
          meta={FreightInvoiceFieldMeta.DueDate}
          fieldConfig={fieldConfig}
          date={value?.DueDate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.InvoiceTypeCode,
      { meta: FreightInvoiceFieldMeta.InvoiceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.InvoiceTypeCode}
          meta={FreightInvoiceFieldMeta.InvoiceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.InvoiceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.Note,
      { meta: FreightInvoiceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FreightInvoiceField.Note}
          meta={FreightInvoiceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.TaxPointDate,
      { meta: FreightInvoiceFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={FreightInvoiceField.TaxPointDate}
          meta={FreightInvoiceFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.DocumentCurrencyCode,
      { meta: FreightInvoiceFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.DocumentCurrencyCode}
          meta={FreightInvoiceFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.TaxCurrencyCode,
      { meta: FreightInvoiceFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.TaxCurrencyCode}
          meta={FreightInvoiceFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PricingCurrencyCode,
      { meta: FreightInvoiceFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.PricingCurrencyCode}
          meta={FreightInvoiceFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PaymentCurrencyCode,
      { meta: FreightInvoiceFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.PaymentCurrencyCode}
          meta={FreightInvoiceFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PaymentAlternativeCurrencyCode,
      { meta: FreightInvoiceFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.PaymentAlternativeCurrencyCode}
          meta={FreightInvoiceFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.AccountingCostCode,
      { meta: FreightInvoiceFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FreightInvoiceField.AccountingCostCode}
          meta={FreightInvoiceFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.AccountingCost,
      { meta: FreightInvoiceFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FreightInvoiceField.AccountingCost}
          meta={FreightInvoiceFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.LineCountNumeric,
      { meta: FreightInvoiceFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={FreightInvoiceField.LineCountNumeric}
          meta={FreightInvoiceFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.InvoicePeriod,
      { meta: FreightInvoiceFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={FreightInvoiceField.InvoicePeriod}
          meta={FreightInvoiceFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.Shipment,
      { meta: FreightInvoiceFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={FreightInvoiceField.Shipment}
          meta={FreightInvoiceFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.OrderReference,
      { meta: FreightInvoiceFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={FreightInvoiceField.OrderReference}
          meta={FreightInvoiceFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.BillingReference,
      { meta: FreightInvoiceFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={FreightInvoiceField.BillingReference}
          meta={FreightInvoiceFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.DespatchDocumentReference,
      { meta: FreightInvoiceFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FreightInvoiceField.DespatchDocumentReference}
          meta={FreightInvoiceFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.ReceiptDocumentReference,
      { meta: FreightInvoiceFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FreightInvoiceField.ReceiptDocumentReference}
          meta={FreightInvoiceFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.OriginatorDocumentReference,
      { meta: FreightInvoiceFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FreightInvoiceField.OriginatorDocumentReference}
          meta={FreightInvoiceFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.ContractDocumentReference,
      { meta: FreightInvoiceFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FreightInvoiceField.ContractDocumentReference}
          meta={FreightInvoiceFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.AdditionalDocumentReference,
      { meta: FreightInvoiceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={FreightInvoiceField.AdditionalDocumentReference}
          meta={FreightInvoiceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.ProjectReference,
      { meta: FreightInvoiceFieldMeta.ProjectReference,
        template: ({value, renderContext, fieldConfig}) => <ProjectReferenceDisplay
          key={FreightInvoiceField.ProjectReference}
          meta={FreightInvoiceFieldMeta.ProjectReference}
          fieldConfig={fieldConfig}
          projectReference={value?.ProjectReference}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.Signature,
      { meta: FreightInvoiceFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={FreightInvoiceField.Signature}
          meta={FreightInvoiceFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.AccountingSupplierParty,
      { meta: FreightInvoiceFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={FreightInvoiceField.AccountingSupplierParty}
          meta={FreightInvoiceFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.AccountingCustomerParty,
      { meta: FreightInvoiceFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={FreightInvoiceField.AccountingCustomerParty}
          meta={FreightInvoiceFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PayeeParty,
      { meta: FreightInvoiceFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={FreightInvoiceField.PayeeParty}
          meta={FreightInvoiceFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.TaxRepresentativeParty,
      { meta: FreightInvoiceFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={FreightInvoiceField.TaxRepresentativeParty}
          meta={FreightInvoiceFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PaymentMeans,
      { meta: FreightInvoiceFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={FreightInvoiceField.PaymentMeans}
          meta={FreightInvoiceFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PaymentTerms,
      { meta: FreightInvoiceFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={FreightInvoiceField.PaymentTerms}
          meta={FreightInvoiceFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PrepaidPayment,
      { meta: FreightInvoiceFieldMeta.PrepaidPayment,
        template: ({value, renderContext, fieldConfig}) => <PaymentDisplay
          key={FreightInvoiceField.PrepaidPayment}
          meta={FreightInvoiceFieldMeta.PrepaidPayment}
          fieldConfig={fieldConfig}
          payment={value?.PrepaidPayment}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.AllowanceCharge,
      { meta: FreightInvoiceFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={FreightInvoiceField.AllowanceCharge}
          meta={FreightInvoiceFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.TaxExchangeRate,
      { meta: FreightInvoiceFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={FreightInvoiceField.TaxExchangeRate}
          meta={FreightInvoiceFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PricingExchangeRate,
      { meta: FreightInvoiceFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={FreightInvoiceField.PricingExchangeRate}
          meta={FreightInvoiceFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PaymentExchangeRate,
      { meta: FreightInvoiceFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={FreightInvoiceField.PaymentExchangeRate}
          meta={FreightInvoiceFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.PaymentAlternativeExchangeRate,
      { meta: FreightInvoiceFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={FreightInvoiceField.PaymentAlternativeExchangeRate}
          meta={FreightInvoiceFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.TaxTotal,
      { meta: FreightInvoiceFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={FreightInvoiceField.TaxTotal}
          meta={FreightInvoiceFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.WithholdingTaxTotal,
      { meta: FreightInvoiceFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={FreightInvoiceField.WithholdingTaxTotal}
          meta={FreightInvoiceFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.LegalMonetaryTotal,
      { meta: FreightInvoiceFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={FreightInvoiceField.LegalMonetaryTotal}
          meta={FreightInvoiceFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      FreightInvoiceField.InvoiceLine,
      { meta: FreightInvoiceFieldMeta.InvoiceLine,
        template: ({value, renderContext, fieldConfig}) => <InvoiceLineDisplay
          key={FreightInvoiceField.InvoiceLine}
          meta={FreightInvoiceFieldMeta.InvoiceLine}
          fieldConfig={fieldConfig}
          invoiceLine={value?.InvoiceLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function FreightInvoiceDisplay<TFieldMeta>({ meta, fieldConfig, freightInvoice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FreightInvoiceTypeName,
    meta,
    fieldConfig,
    freightInvoice,
    renderContext,
    FreightInvoiceSubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SelfBilledInvoice } from  '../../model/doc/SelfBilledInvoice'
import { SelfBilledInvoiceField, SelfBilledInvoiceFieldMeta, SelfBilledInvoiceTypeName } from  '../../meta/doc/SelfBilledInvoiceMeta'
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
  fieldConfig?: FieldConfig<SelfBilledInvoice, void>
  selfBilledInvoice: SelfBilledInvoice[] | undefined
  renderContext: RenderContext
}

export const SelfBilledInvoiceSubElementsMap: SubElementsTemplatesMap<SelfBilledInvoiceField, SelfBilledInvoice, void> = new Map([
    [
      SelfBilledInvoiceField.UBLExtensions,
      { meta: SelfBilledInvoiceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SelfBilledInvoiceField.UBLExtensions}
          meta={SelfBilledInvoiceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.UBLVersionID,
      { meta: SelfBilledInvoiceFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledInvoiceField.UBLVersionID}
          meta={SelfBilledInvoiceFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.CustomizationID,
      { meta: SelfBilledInvoiceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledInvoiceField.CustomizationID}
          meta={SelfBilledInvoiceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.ProfileID,
      { meta: SelfBilledInvoiceFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledInvoiceField.ProfileID}
          meta={SelfBilledInvoiceFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.ProfileExecutionID,
      { meta: SelfBilledInvoiceFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledInvoiceField.ProfileExecutionID}
          meta={SelfBilledInvoiceFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.ID,
      { meta: SelfBilledInvoiceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledInvoiceField.ID}
          meta={SelfBilledInvoiceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.CopyIndicator,
      { meta: SelfBilledInvoiceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={SelfBilledInvoiceField.CopyIndicator}
          meta={SelfBilledInvoiceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.UUID,
      { meta: SelfBilledInvoiceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledInvoiceField.UUID}
          meta={SelfBilledInvoiceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.IssueDate,
      { meta: SelfBilledInvoiceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SelfBilledInvoiceField.IssueDate}
          meta={SelfBilledInvoiceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.IssueTime,
      { meta: SelfBilledInvoiceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={SelfBilledInvoiceField.IssueTime}
          meta={SelfBilledInvoiceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.DueDate,
      { meta: SelfBilledInvoiceFieldMeta.DueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SelfBilledInvoiceField.DueDate}
          meta={SelfBilledInvoiceFieldMeta.DueDate}
          fieldConfig={fieldConfig}
          date={value?.DueDate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.TaxPointDate,
      { meta: SelfBilledInvoiceFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SelfBilledInvoiceField.TaxPointDate}
          meta={SelfBilledInvoiceFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.InvoiceTypeCode,
      { meta: SelfBilledInvoiceFieldMeta.InvoiceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.InvoiceTypeCode}
          meta={SelfBilledInvoiceFieldMeta.InvoiceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.InvoiceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.Note,
      { meta: SelfBilledInvoiceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SelfBilledInvoiceField.Note}
          meta={SelfBilledInvoiceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.DocumentCurrencyCode,
      { meta: SelfBilledInvoiceFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.DocumentCurrencyCode}
          meta={SelfBilledInvoiceFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.TaxCurrencyCode,
      { meta: SelfBilledInvoiceFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.TaxCurrencyCode}
          meta={SelfBilledInvoiceFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PricingCurrencyCode,
      { meta: SelfBilledInvoiceFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.PricingCurrencyCode}
          meta={SelfBilledInvoiceFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PaymentCurrencyCode,
      { meta: SelfBilledInvoiceFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.PaymentCurrencyCode}
          meta={SelfBilledInvoiceFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PaymentAlternativeCurrencyCode,
      { meta: SelfBilledInvoiceFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.PaymentAlternativeCurrencyCode}
          meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.AccountingCostCode,
      { meta: SelfBilledInvoiceFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledInvoiceField.AccountingCostCode}
          meta={SelfBilledInvoiceFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.AccountingCost,
      { meta: SelfBilledInvoiceFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SelfBilledInvoiceField.AccountingCost}
          meta={SelfBilledInvoiceFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.LineCountNumeric,
      { meta: SelfBilledInvoiceFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={SelfBilledInvoiceField.LineCountNumeric}
          meta={SelfBilledInvoiceFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.BuyerReference,
      { meta: SelfBilledInvoiceFieldMeta.BuyerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SelfBilledInvoiceField.BuyerReference}
          meta={SelfBilledInvoiceFieldMeta.BuyerReference}
          fieldConfig={fieldConfig}
          text={value?.BuyerReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.InvoicePeriod,
      { meta: SelfBilledInvoiceFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={SelfBilledInvoiceField.InvoicePeriod}
          meta={SelfBilledInvoiceFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.OrderReference,
      { meta: SelfBilledInvoiceFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={SelfBilledInvoiceField.OrderReference}
          meta={SelfBilledInvoiceFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.BillingReference,
      { meta: SelfBilledInvoiceFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={SelfBilledInvoiceField.BillingReference}
          meta={SelfBilledInvoiceFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.ContractDocumentReference,
      { meta: SelfBilledInvoiceFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledInvoiceField.ContractDocumentReference}
          meta={SelfBilledInvoiceFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.DespatchDocumentReference,
      { meta: SelfBilledInvoiceFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledInvoiceField.DespatchDocumentReference}
          meta={SelfBilledInvoiceFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.ReceiptDocumentReference,
      { meta: SelfBilledInvoiceFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledInvoiceField.ReceiptDocumentReference}
          meta={SelfBilledInvoiceFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.StatementDocumentReference,
      { meta: SelfBilledInvoiceFieldMeta.StatementDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledInvoiceField.StatementDocumentReference}
          meta={SelfBilledInvoiceFieldMeta.StatementDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.StatementDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.OriginatorDocumentReference,
      { meta: SelfBilledInvoiceFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledInvoiceField.OriginatorDocumentReference}
          meta={SelfBilledInvoiceFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.AdditionalDocumentReference,
      { meta: SelfBilledInvoiceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledInvoiceField.AdditionalDocumentReference}
          meta={SelfBilledInvoiceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.ProjectReference,
      { meta: SelfBilledInvoiceFieldMeta.ProjectReference,
        template: ({value, renderContext, fieldConfig}) => <ProjectReferenceDisplay
          key={SelfBilledInvoiceField.ProjectReference}
          meta={SelfBilledInvoiceFieldMeta.ProjectReference}
          fieldConfig={fieldConfig}
          projectReference={value?.ProjectReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.Signature,
      { meta: SelfBilledInvoiceFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={SelfBilledInvoiceField.Signature}
          meta={SelfBilledInvoiceFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.AccountingCustomerParty,
      { meta: SelfBilledInvoiceFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={SelfBilledInvoiceField.AccountingCustomerParty}
          meta={SelfBilledInvoiceFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.AccountingSupplierParty,
      { meta: SelfBilledInvoiceFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={SelfBilledInvoiceField.AccountingSupplierParty}
          meta={SelfBilledInvoiceFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.BuyerCustomerParty,
      { meta: SelfBilledInvoiceFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={SelfBilledInvoiceField.BuyerCustomerParty}
          meta={SelfBilledInvoiceFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.SellerSupplierParty,
      { meta: SelfBilledInvoiceFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={SelfBilledInvoiceField.SellerSupplierParty}
          meta={SelfBilledInvoiceFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PayeeParty,
      { meta: SelfBilledInvoiceFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SelfBilledInvoiceField.PayeeParty}
          meta={SelfBilledInvoiceFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.TaxRepresentativeParty,
      { meta: SelfBilledInvoiceFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SelfBilledInvoiceField.TaxRepresentativeParty}
          meta={SelfBilledInvoiceFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.Delivery,
      { meta: SelfBilledInvoiceFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={SelfBilledInvoiceField.Delivery}
          meta={SelfBilledInvoiceFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.DeliveryTerms,
      { meta: SelfBilledInvoiceFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={SelfBilledInvoiceField.DeliveryTerms}
          meta={SelfBilledInvoiceFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PaymentMeans,
      { meta: SelfBilledInvoiceFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={SelfBilledInvoiceField.PaymentMeans}
          meta={SelfBilledInvoiceFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PaymentTerms,
      { meta: SelfBilledInvoiceFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={SelfBilledInvoiceField.PaymentTerms}
          meta={SelfBilledInvoiceFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PrepaidPayment,
      { meta: SelfBilledInvoiceFieldMeta.PrepaidPayment,
        template: ({value, renderContext, fieldConfig}) => <PaymentDisplay
          key={SelfBilledInvoiceField.PrepaidPayment}
          meta={SelfBilledInvoiceFieldMeta.PrepaidPayment}
          fieldConfig={fieldConfig}
          payment={value?.PrepaidPayment}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.AllowanceCharge,
      { meta: SelfBilledInvoiceFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={SelfBilledInvoiceField.AllowanceCharge}
          meta={SelfBilledInvoiceFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.TaxExchangeRate,
      { meta: SelfBilledInvoiceFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledInvoiceField.TaxExchangeRate}
          meta={SelfBilledInvoiceFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PricingExchangeRate,
      { meta: SelfBilledInvoiceFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledInvoiceField.PricingExchangeRate}
          meta={SelfBilledInvoiceFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PaymentExchangeRate,
      { meta: SelfBilledInvoiceFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledInvoiceField.PaymentExchangeRate}
          meta={SelfBilledInvoiceFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.PaymentAlternativeExchangeRate,
      { meta: SelfBilledInvoiceFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledInvoiceField.PaymentAlternativeExchangeRate}
          meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.TaxTotal,
      { meta: SelfBilledInvoiceFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={SelfBilledInvoiceField.TaxTotal}
          meta={SelfBilledInvoiceFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.WithholdingTaxTotal,
      { meta: SelfBilledInvoiceFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={SelfBilledInvoiceField.WithholdingTaxTotal}
          meta={SelfBilledInvoiceFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.LegalMonetaryTotal,
      { meta: SelfBilledInvoiceFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={SelfBilledInvoiceField.LegalMonetaryTotal}
          meta={SelfBilledInvoiceFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledInvoiceField.InvoiceLine,
      { meta: SelfBilledInvoiceFieldMeta.InvoiceLine,
        template: ({value, renderContext, fieldConfig}) => <InvoiceLineDisplay
          key={SelfBilledInvoiceField.InvoiceLine}
          meta={SelfBilledInvoiceFieldMeta.InvoiceLine}
          fieldConfig={fieldConfig}
          invoiceLine={value?.InvoiceLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function SelfBilledInvoiceDisplay<TFieldMeta>({ meta, fieldConfig, selfBilledInvoice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SelfBilledInvoiceTypeName,
    meta,
    fieldConfig,
    selfBilledInvoice,
    renderContext,
    SelfBilledInvoiceSubElementsMap,
  )
}

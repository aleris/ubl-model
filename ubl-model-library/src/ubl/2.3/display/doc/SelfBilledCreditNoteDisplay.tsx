import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SelfBilledCreditNote } from  '../../model/doc/SelfBilledCreditNote'
import { SelfBilledCreditNoteField, SelfBilledCreditNoteFieldMeta, SelfBilledCreditNoteTypeName } from  '../../meta/doc/SelfBilledCreditNoteMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { BillingReferenceDisplay } from '../cac/BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CreditNoteLineDisplay } from '../cac/CreditNoteLineDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DeliveryDisplay } from '../cac/DeliveryDisplay'
import { DeliveryTermsDisplay } from '../cac/DeliveryTermsDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExchangeRateDisplay } from '../cac/ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MonetaryTotalDisplay } from '../cac/MonetaryTotalDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ProjectReferenceDisplay } from '../cac/ProjectReferenceDisplay'
import { ResponseDisplay } from '../cac/ResponseDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SelfBilledCreditNote, void>
  selfBilledCreditNote: SelfBilledCreditNote[] | undefined
  renderContext: RenderContext
}

export const SelfBilledCreditNoteSubElementsMap: SubElementsTemplatesMap<SelfBilledCreditNoteField, SelfBilledCreditNote, void> = new Map([
    [
      SelfBilledCreditNoteField.UBLExtensions,
      { meta: SelfBilledCreditNoteFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SelfBilledCreditNoteField.UBLExtensions}
          meta={SelfBilledCreditNoteFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.UBLVersionID,
      { meta: SelfBilledCreditNoteFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledCreditNoteField.UBLVersionID}
          meta={SelfBilledCreditNoteFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.CustomizationID,
      { meta: SelfBilledCreditNoteFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledCreditNoteField.CustomizationID}
          meta={SelfBilledCreditNoteFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.ProfileID,
      { meta: SelfBilledCreditNoteFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledCreditNoteField.ProfileID}
          meta={SelfBilledCreditNoteFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.ProfileExecutionID,
      { meta: SelfBilledCreditNoteFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledCreditNoteField.ProfileExecutionID}
          meta={SelfBilledCreditNoteFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.ID,
      { meta: SelfBilledCreditNoteFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledCreditNoteField.ID}
          meta={SelfBilledCreditNoteFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.CopyIndicator,
      { meta: SelfBilledCreditNoteFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={SelfBilledCreditNoteField.CopyIndicator}
          meta={SelfBilledCreditNoteFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.UUID,
      { meta: SelfBilledCreditNoteFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SelfBilledCreditNoteField.UUID}
          meta={SelfBilledCreditNoteFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.IssueDate,
      { meta: SelfBilledCreditNoteFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SelfBilledCreditNoteField.IssueDate}
          meta={SelfBilledCreditNoteFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.IssueTime,
      { meta: SelfBilledCreditNoteFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={SelfBilledCreditNoteField.IssueTime}
          meta={SelfBilledCreditNoteFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.DueDate,
      { meta: SelfBilledCreditNoteFieldMeta.DueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SelfBilledCreditNoteField.DueDate}
          meta={SelfBilledCreditNoteFieldMeta.DueDate}
          fieldConfig={fieldConfig}
          date={value?.DueDate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.TaxPointDate,
      { meta: SelfBilledCreditNoteFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SelfBilledCreditNoteField.TaxPointDate}
          meta={SelfBilledCreditNoteFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.CreditNoteTypeCode,
      { meta: SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.CreditNoteTypeCode}
          meta={SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CreditNoteTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.Note,
      { meta: SelfBilledCreditNoteFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SelfBilledCreditNoteField.Note}
          meta={SelfBilledCreditNoteFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.DocumentCurrencyCode,
      { meta: SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.DocumentCurrencyCode}
          meta={SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.TaxCurrencyCode,
      { meta: SelfBilledCreditNoteFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.TaxCurrencyCode}
          meta={SelfBilledCreditNoteFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PricingCurrencyCode,
      { meta: SelfBilledCreditNoteFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.PricingCurrencyCode}
          meta={SelfBilledCreditNoteFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PaymentCurrencyCode,
      { meta: SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.PaymentCurrencyCode}
          meta={SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PaymentAlternativeCurrencyCode,
      { meta: SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.PaymentAlternativeCurrencyCode}
          meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.AccountingCostCode,
      { meta: SelfBilledCreditNoteFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SelfBilledCreditNoteField.AccountingCostCode}
          meta={SelfBilledCreditNoteFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.AccountingCost,
      { meta: SelfBilledCreditNoteFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SelfBilledCreditNoteField.AccountingCost}
          meta={SelfBilledCreditNoteFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.LineCountNumeric,
      { meta: SelfBilledCreditNoteFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={SelfBilledCreditNoteField.LineCountNumeric}
          meta={SelfBilledCreditNoteFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.BuyerReference,
      { meta: SelfBilledCreditNoteFieldMeta.BuyerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SelfBilledCreditNoteField.BuyerReference}
          meta={SelfBilledCreditNoteFieldMeta.BuyerReference}
          fieldConfig={fieldConfig}
          text={value?.BuyerReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.InvoicePeriod,
      { meta: SelfBilledCreditNoteFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={SelfBilledCreditNoteField.InvoicePeriod}
          meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.DiscrepancyResponse,
      { meta: SelfBilledCreditNoteFieldMeta.DiscrepancyResponse,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={SelfBilledCreditNoteField.DiscrepancyResponse}
          meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse}
          fieldConfig={fieldConfig}
          response={value?.DiscrepancyResponse}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.OrderReference,
      { meta: SelfBilledCreditNoteFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={SelfBilledCreditNoteField.OrderReference}
          meta={SelfBilledCreditNoteFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.BillingReference,
      { meta: SelfBilledCreditNoteFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={SelfBilledCreditNoteField.BillingReference}
          meta={SelfBilledCreditNoteFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.DespatchDocumentReference,
      { meta: SelfBilledCreditNoteFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledCreditNoteField.DespatchDocumentReference}
          meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.ReceiptDocumentReference,
      { meta: SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledCreditNoteField.ReceiptDocumentReference}
          meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.ContractDocumentReference,
      { meta: SelfBilledCreditNoteFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledCreditNoteField.ContractDocumentReference}
          meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.StatementDocumentReference,
      { meta: SelfBilledCreditNoteFieldMeta.StatementDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledCreditNoteField.StatementDocumentReference}
          meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.StatementDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.OriginatorDocumentReference,
      { meta: SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledCreditNoteField.OriginatorDocumentReference}
          meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.AdditionalDocumentReference,
      { meta: SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SelfBilledCreditNoteField.AdditionalDocumentReference}
          meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.ProjectReference,
      { meta: SelfBilledCreditNoteFieldMeta.ProjectReference,
        template: ({value, renderContext, fieldConfig}) => <ProjectReferenceDisplay
          key={SelfBilledCreditNoteField.ProjectReference}
          meta={SelfBilledCreditNoteFieldMeta.ProjectReference}
          fieldConfig={fieldConfig}
          projectReference={value?.ProjectReference}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.Signature,
      { meta: SelfBilledCreditNoteFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={SelfBilledCreditNoteField.Signature}
          meta={SelfBilledCreditNoteFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.AccountingCustomerParty,
      { meta: SelfBilledCreditNoteFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={SelfBilledCreditNoteField.AccountingCustomerParty}
          meta={SelfBilledCreditNoteFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.AccountingSupplierParty,
      { meta: SelfBilledCreditNoteFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={SelfBilledCreditNoteField.AccountingSupplierParty}
          meta={SelfBilledCreditNoteFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PayeeParty,
      { meta: SelfBilledCreditNoteFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SelfBilledCreditNoteField.PayeeParty}
          meta={SelfBilledCreditNoteFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.BuyerCustomerParty,
      { meta: SelfBilledCreditNoteFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={SelfBilledCreditNoteField.BuyerCustomerParty}
          meta={SelfBilledCreditNoteFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.SellerSupplierParty,
      { meta: SelfBilledCreditNoteFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={SelfBilledCreditNoteField.SellerSupplierParty}
          meta={SelfBilledCreditNoteFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.TaxRepresentativeParty,
      { meta: SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SelfBilledCreditNoteField.TaxRepresentativeParty}
          meta={SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.Delivery,
      { meta: SelfBilledCreditNoteFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={SelfBilledCreditNoteField.Delivery}
          meta={SelfBilledCreditNoteFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.DeliveryTerms,
      { meta: SelfBilledCreditNoteFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={SelfBilledCreditNoteField.DeliveryTerms}
          meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PaymentMeans,
      { meta: SelfBilledCreditNoteFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={SelfBilledCreditNoteField.PaymentMeans}
          meta={SelfBilledCreditNoteFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PaymentTerms,
      { meta: SelfBilledCreditNoteFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={SelfBilledCreditNoteField.PaymentTerms}
          meta={SelfBilledCreditNoteFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.AllowanceCharge,
      { meta: SelfBilledCreditNoteFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={SelfBilledCreditNoteField.AllowanceCharge}
          meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.TaxExchangeRate,
      { meta: SelfBilledCreditNoteFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledCreditNoteField.TaxExchangeRate}
          meta={SelfBilledCreditNoteFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PricingExchangeRate,
      { meta: SelfBilledCreditNoteFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledCreditNoteField.PricingExchangeRate}
          meta={SelfBilledCreditNoteFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PaymentExchangeRate,
      { meta: SelfBilledCreditNoteFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledCreditNoteField.PaymentExchangeRate}
          meta={SelfBilledCreditNoteFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.PaymentAlternativeExchangeRate,
      { meta: SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={SelfBilledCreditNoteField.PaymentAlternativeExchangeRate}
          meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.TaxTotal,
      { meta: SelfBilledCreditNoteFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={SelfBilledCreditNoteField.TaxTotal}
          meta={SelfBilledCreditNoteFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.WithholdingTaxTotal,
      { meta: SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={SelfBilledCreditNoteField.WithholdingTaxTotal}
          meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.LegalMonetaryTotal,
      { meta: SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={SelfBilledCreditNoteField.LegalMonetaryTotal}
          meta={SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      SelfBilledCreditNoteField.CreditNoteLine,
      { meta: SelfBilledCreditNoteFieldMeta.CreditNoteLine,
        template: ({value, renderContext, fieldConfig}) => <CreditNoteLineDisplay
          key={SelfBilledCreditNoteField.CreditNoteLine}
          meta={SelfBilledCreditNoteFieldMeta.CreditNoteLine}
          fieldConfig={fieldConfig}
          creditNoteLine={value?.CreditNoteLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function SelfBilledCreditNoteDisplay<TFieldMeta>({ meta, fieldConfig, selfBilledCreditNote, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SelfBilledCreditNoteTypeName,
    meta,
    fieldConfig,
    selfBilledCreditNote,
    renderContext,
    SelfBilledCreditNoteSubElementsMap,
  )
}

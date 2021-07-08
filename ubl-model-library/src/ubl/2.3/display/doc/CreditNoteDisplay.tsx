import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditNote } from  '../../model/doc/CreditNote'
import { CreditNoteField, CreditNoteFieldMeta, CreditNoteTypeName } from  '../../meta/doc/CreditNoteMeta'
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
  fieldConfig?: FieldConfig<CreditNote, void>
  creditNote: CreditNote[] | undefined
  renderContext: RenderContext
}

export const CreditNoteSubElementsMap: SubElementsTemplatesMap<CreditNoteField, CreditNote, void> = new Map([
    [
      CreditNoteField.UBLExtensions,
      { meta: CreditNoteFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CreditNoteField.UBLExtensions}
          meta={CreditNoteFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.UBLVersionID,
      { meta: CreditNoteFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteField.UBLVersionID}
          meta={CreditNoteFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.CustomizationID,
      { meta: CreditNoteFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteField.CustomizationID}
          meta={CreditNoteFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.ProfileID,
      { meta: CreditNoteFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteField.ProfileID}
          meta={CreditNoteFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.ProfileExecutionID,
      { meta: CreditNoteFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteField.ProfileExecutionID}
          meta={CreditNoteFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.ID,
      { meta: CreditNoteFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteField.ID}
          meta={CreditNoteFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.CopyIndicator,
      { meta: CreditNoteFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={CreditNoteField.CopyIndicator}
          meta={CreditNoteFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.UUID,
      { meta: CreditNoteFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CreditNoteField.UUID}
          meta={CreditNoteFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.IssueDate,
      { meta: CreditNoteFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CreditNoteField.IssueDate}
          meta={CreditNoteFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.IssueTime,
      { meta: CreditNoteFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CreditNoteField.IssueTime}
          meta={CreditNoteFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.DueDate,
      { meta: CreditNoteFieldMeta.DueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CreditNoteField.DueDate}
          meta={CreditNoteFieldMeta.DueDate}
          fieldConfig={fieldConfig}
          date={value?.DueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.TaxPointDate,
      { meta: CreditNoteFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CreditNoteField.TaxPointDate}
          meta={CreditNoteFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.CreditNoteTypeCode,
      { meta: CreditNoteFieldMeta.CreditNoteTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.CreditNoteTypeCode}
          meta={CreditNoteFieldMeta.CreditNoteTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CreditNoteTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.Note,
      { meta: CreditNoteFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CreditNoteField.Note}
          meta={CreditNoteFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.DocumentCurrencyCode,
      { meta: CreditNoteFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.DocumentCurrencyCode}
          meta={CreditNoteFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.TaxCurrencyCode,
      { meta: CreditNoteFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.TaxCurrencyCode}
          meta={CreditNoteFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PricingCurrencyCode,
      { meta: CreditNoteFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.PricingCurrencyCode}
          meta={CreditNoteFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PaymentCurrencyCode,
      { meta: CreditNoteFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.PaymentCurrencyCode}
          meta={CreditNoteFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PaymentAlternativeCurrencyCode,
      { meta: CreditNoteFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.PaymentAlternativeCurrencyCode}
          meta={CreditNoteFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.AccountingCostCode,
      { meta: CreditNoteFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CreditNoteField.AccountingCostCode}
          meta={CreditNoteFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.AccountingCost,
      { meta: CreditNoteFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CreditNoteField.AccountingCost}
          meta={CreditNoteFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.LineCountNumeric,
      { meta: CreditNoteFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={CreditNoteField.LineCountNumeric}
          meta={CreditNoteFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.BuyerReference,
      { meta: CreditNoteFieldMeta.BuyerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CreditNoteField.BuyerReference}
          meta={CreditNoteFieldMeta.BuyerReference}
          fieldConfig={fieldConfig}
          text={value?.BuyerReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.InvoicePeriod,
      { meta: CreditNoteFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CreditNoteField.InvoicePeriod}
          meta={CreditNoteFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.DiscrepancyResponse,
      { meta: CreditNoteFieldMeta.DiscrepancyResponse,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={CreditNoteField.DiscrepancyResponse}
          meta={CreditNoteFieldMeta.DiscrepancyResponse}
          fieldConfig={fieldConfig}
          response={value?.DiscrepancyResponse}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.OrderReference,
      { meta: CreditNoteFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={CreditNoteField.OrderReference}
          meta={CreditNoteFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.BillingReference,
      { meta: CreditNoteFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={CreditNoteField.BillingReference}
          meta={CreditNoteFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.DespatchDocumentReference,
      { meta: CreditNoteFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteField.DespatchDocumentReference}
          meta={CreditNoteFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.ReceiptDocumentReference,
      { meta: CreditNoteFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteField.ReceiptDocumentReference}
          meta={CreditNoteFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.ContractDocumentReference,
      { meta: CreditNoteFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteField.ContractDocumentReference}
          meta={CreditNoteFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.AdditionalDocumentReference,
      { meta: CreditNoteFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteField.AdditionalDocumentReference}
          meta={CreditNoteFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.StatementDocumentReference,
      { meta: CreditNoteFieldMeta.StatementDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteField.StatementDocumentReference}
          meta={CreditNoteFieldMeta.StatementDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.StatementDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.OriginatorDocumentReference,
      { meta: CreditNoteFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CreditNoteField.OriginatorDocumentReference}
          meta={CreditNoteFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.ProjectReference,
      { meta: CreditNoteFieldMeta.ProjectReference,
        template: ({value, renderContext, fieldConfig}) => <ProjectReferenceDisplay
          key={CreditNoteField.ProjectReference}
          meta={CreditNoteFieldMeta.ProjectReference}
          fieldConfig={fieldConfig}
          projectReference={value?.ProjectReference}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.Signature,
      { meta: CreditNoteFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CreditNoteField.Signature}
          meta={CreditNoteFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.AccountingSupplierParty,
      { meta: CreditNoteFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CreditNoteField.AccountingSupplierParty}
          meta={CreditNoteFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.AccountingCustomerParty,
      { meta: CreditNoteFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CreditNoteField.AccountingCustomerParty}
          meta={CreditNoteFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PayeeParty,
      { meta: CreditNoteFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CreditNoteField.PayeeParty}
          meta={CreditNoteFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.BuyerCustomerParty,
      { meta: CreditNoteFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CreditNoteField.BuyerCustomerParty}
          meta={CreditNoteFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.SellerSupplierParty,
      { meta: CreditNoteFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CreditNoteField.SellerSupplierParty}
          meta={CreditNoteFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.TaxRepresentativeParty,
      { meta: CreditNoteFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CreditNoteField.TaxRepresentativeParty}
          meta={CreditNoteFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.Delivery,
      { meta: CreditNoteFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={CreditNoteField.Delivery}
          meta={CreditNoteFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.DeliveryTerms,
      { meta: CreditNoteFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={CreditNoteField.DeliveryTerms}
          meta={CreditNoteFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PaymentMeans,
      { meta: CreditNoteFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={CreditNoteField.PaymentMeans}
          meta={CreditNoteFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PaymentTerms,
      { meta: CreditNoteFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={CreditNoteField.PaymentTerms}
          meta={CreditNoteFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.TaxExchangeRate,
      { meta: CreditNoteFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={CreditNoteField.TaxExchangeRate}
          meta={CreditNoteFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PricingExchangeRate,
      { meta: CreditNoteFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={CreditNoteField.PricingExchangeRate}
          meta={CreditNoteFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PaymentExchangeRate,
      { meta: CreditNoteFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={CreditNoteField.PaymentExchangeRate}
          meta={CreditNoteFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.PaymentAlternativeExchangeRate,
      { meta: CreditNoteFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={CreditNoteField.PaymentAlternativeExchangeRate}
          meta={CreditNoteFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.AllowanceCharge,
      { meta: CreditNoteFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={CreditNoteField.AllowanceCharge}
          meta={CreditNoteFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.TaxTotal,
      { meta: CreditNoteFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={CreditNoteField.TaxTotal}
          meta={CreditNoteFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.WithholdingTaxTotal,
      { meta: CreditNoteFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={CreditNoteField.WithholdingTaxTotal}
          meta={CreditNoteFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.LegalMonetaryTotal,
      { meta: CreditNoteFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={CreditNoteField.LegalMonetaryTotal}
          meta={CreditNoteFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      CreditNoteField.CreditNoteLine,
      { meta: CreditNoteFieldMeta.CreditNoteLine,
        template: ({value, renderContext, fieldConfig}) => <CreditNoteLineDisplay
          key={CreditNoteField.CreditNoteLine}
          meta={CreditNoteFieldMeta.CreditNoteLine}
          fieldConfig={fieldConfig}
          creditNoteLine={value?.CreditNoteLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function CreditNoteDisplay<TFieldMeta>({ meta, fieldConfig, creditNote, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CreditNoteTypeName,
    meta,
    fieldConfig,
    creditNote,
    renderContext,
    CreditNoteSubElementsMap,
  )
}

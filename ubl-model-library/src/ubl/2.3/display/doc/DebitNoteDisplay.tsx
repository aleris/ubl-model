import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DebitNote } from  '../../model/doc/DebitNote'
import { DebitNoteField, DebitNoteFieldMeta, DebitNoteTypeName } from  '../../meta/doc/DebitNoteMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { BillingReferenceDisplay } from '../cac/BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DebitNoteLineDisplay } from '../cac/DebitNoteLineDisplay'
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
import { PaymentDisplay } from '../cac/PaymentDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ResponseDisplay } from '../cac/ResponseDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DebitNote, void>
  debitNote: DebitNote[] | undefined
  renderContext: RenderContext
}

export const DebitNoteSubElementsMap: SubElementsTemplatesMap<DebitNoteField, DebitNote, void> = new Map([
    [
      DebitNoteField.UBLExtensions,
      { meta: DebitNoteFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DebitNoteField.UBLExtensions}
          meta={DebitNoteFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.UBLVersionID,
      { meta: DebitNoteFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteField.UBLVersionID}
          meta={DebitNoteFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.CustomizationID,
      { meta: DebitNoteFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteField.CustomizationID}
          meta={DebitNoteFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.ProfileID,
      { meta: DebitNoteFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteField.ProfileID}
          meta={DebitNoteFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.ProfileExecutionID,
      { meta: DebitNoteFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteField.ProfileExecutionID}
          meta={DebitNoteFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.ID,
      { meta: DebitNoteFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteField.ID}
          meta={DebitNoteFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.CopyIndicator,
      { meta: DebitNoteFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DebitNoteField.CopyIndicator}
          meta={DebitNoteFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.UUID,
      { meta: DebitNoteFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DebitNoteField.UUID}
          meta={DebitNoteFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.IssueDate,
      { meta: DebitNoteFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DebitNoteField.IssueDate}
          meta={DebitNoteFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.IssueTime,
      { meta: DebitNoteFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DebitNoteField.IssueTime}
          meta={DebitNoteFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.Note,
      { meta: DebitNoteFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DebitNoteField.Note}
          meta={DebitNoteFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.TaxPointDate,
      { meta: DebitNoteFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DebitNoteField.TaxPointDate}
          meta={DebitNoteFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.DocumentCurrencyCode,
      { meta: DebitNoteFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteField.DocumentCurrencyCode}
          meta={DebitNoteFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.TaxCurrencyCode,
      { meta: DebitNoteFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteField.TaxCurrencyCode}
          meta={DebitNoteFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PricingCurrencyCode,
      { meta: DebitNoteFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteField.PricingCurrencyCode}
          meta={DebitNoteFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PaymentCurrencyCode,
      { meta: DebitNoteFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteField.PaymentCurrencyCode}
          meta={DebitNoteFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PaymentAlternativeCurrencyCode,
      { meta: DebitNoteFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteField.PaymentAlternativeCurrencyCode}
          meta={DebitNoteFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.AccountingCostCode,
      { meta: DebitNoteFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DebitNoteField.AccountingCostCode}
          meta={DebitNoteFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.AccountingCost,
      { meta: DebitNoteFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DebitNoteField.AccountingCost}
          meta={DebitNoteFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.LineCountNumeric,
      { meta: DebitNoteFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={DebitNoteField.LineCountNumeric}
          meta={DebitNoteFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.InvoicePeriod,
      { meta: DebitNoteFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={DebitNoteField.InvoicePeriod}
          meta={DebitNoteFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.DiscrepancyResponse,
      { meta: DebitNoteFieldMeta.DiscrepancyResponse,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={DebitNoteField.DiscrepancyResponse}
          meta={DebitNoteFieldMeta.DiscrepancyResponse}
          fieldConfig={fieldConfig}
          response={value?.DiscrepancyResponse}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.OrderReference,
      { meta: DebitNoteFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={DebitNoteField.OrderReference}
          meta={DebitNoteFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.BillingReference,
      { meta: DebitNoteFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={DebitNoteField.BillingReference}
          meta={DebitNoteFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.DespatchDocumentReference,
      { meta: DebitNoteFieldMeta.DespatchDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DebitNoteField.DespatchDocumentReference}
          meta={DebitNoteFieldMeta.DespatchDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DespatchDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.ReceiptDocumentReference,
      { meta: DebitNoteFieldMeta.ReceiptDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DebitNoteField.ReceiptDocumentReference}
          meta={DebitNoteFieldMeta.ReceiptDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReceiptDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.StatementDocumentReference,
      { meta: DebitNoteFieldMeta.StatementDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DebitNoteField.StatementDocumentReference}
          meta={DebitNoteFieldMeta.StatementDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.StatementDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.ContractDocumentReference,
      { meta: DebitNoteFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DebitNoteField.ContractDocumentReference}
          meta={DebitNoteFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.AdditionalDocumentReference,
      { meta: DebitNoteFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DebitNoteField.AdditionalDocumentReference}
          meta={DebitNoteFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.Signature,
      { meta: DebitNoteFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={DebitNoteField.Signature}
          meta={DebitNoteFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.AccountingSupplierParty,
      { meta: DebitNoteFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={DebitNoteField.AccountingSupplierParty}
          meta={DebitNoteFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.AccountingCustomerParty,
      { meta: DebitNoteFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={DebitNoteField.AccountingCustomerParty}
          meta={DebitNoteFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PayeeParty,
      { meta: DebitNoteFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DebitNoteField.PayeeParty}
          meta={DebitNoteFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.BuyerCustomerParty,
      { meta: DebitNoteFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={DebitNoteField.BuyerCustomerParty}
          meta={DebitNoteFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.SellerSupplierParty,
      { meta: DebitNoteFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={DebitNoteField.SellerSupplierParty}
          meta={DebitNoteFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.TaxRepresentativeParty,
      { meta: DebitNoteFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DebitNoteField.TaxRepresentativeParty}
          meta={DebitNoteFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PrepaidPayment,
      { meta: DebitNoteFieldMeta.PrepaidPayment,
        template: ({value, renderContext, fieldConfig}) => <PaymentDisplay
          key={DebitNoteField.PrepaidPayment}
          meta={DebitNoteFieldMeta.PrepaidPayment}
          fieldConfig={fieldConfig}
          payment={value?.PrepaidPayment}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.AllowanceCharge,
      { meta: DebitNoteFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={DebitNoteField.AllowanceCharge}
          meta={DebitNoteFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.Delivery,
      { meta: DebitNoteFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={DebitNoteField.Delivery}
          meta={DebitNoteFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.DeliveryTerms,
      { meta: DebitNoteFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={DebitNoteField.DeliveryTerms}
          meta={DebitNoteFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PaymentMeans,
      { meta: DebitNoteFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={DebitNoteField.PaymentMeans}
          meta={DebitNoteFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PaymentTerms,
      { meta: DebitNoteFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={DebitNoteField.PaymentTerms}
          meta={DebitNoteFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.TaxExchangeRate,
      { meta: DebitNoteFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={DebitNoteField.TaxExchangeRate}
          meta={DebitNoteFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PricingExchangeRate,
      { meta: DebitNoteFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={DebitNoteField.PricingExchangeRate}
          meta={DebitNoteFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PaymentExchangeRate,
      { meta: DebitNoteFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={DebitNoteField.PaymentExchangeRate}
          meta={DebitNoteFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.PaymentAlternativeExchangeRate,
      { meta: DebitNoteFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={DebitNoteField.PaymentAlternativeExchangeRate}
          meta={DebitNoteFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.TaxTotal,
      { meta: DebitNoteFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={DebitNoteField.TaxTotal}
          meta={DebitNoteFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.WithholdingTaxTotal,
      { meta: DebitNoteFieldMeta.WithholdingTaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={DebitNoteField.WithholdingTaxTotal}
          meta={DebitNoteFieldMeta.WithholdingTaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.WithholdingTaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.RequestedMonetaryTotal,
      { meta: DebitNoteFieldMeta.RequestedMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={DebitNoteField.RequestedMonetaryTotal}
          meta={DebitNoteFieldMeta.RequestedMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.RequestedMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      DebitNoteField.DebitNoteLine,
      { meta: DebitNoteFieldMeta.DebitNoteLine,
        template: ({value, renderContext, fieldConfig}) => <DebitNoteLineDisplay
          key={DebitNoteField.DebitNoteLine}
          meta={DebitNoteFieldMeta.DebitNoteLine}
          fieldConfig={fieldConfig}
          debitNoteLine={value?.DebitNoteLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function DebitNoteDisplay<TFieldMeta>({ meta, fieldConfig, debitNote, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DebitNoteTypeName,
    meta,
    fieldConfig,
    debitNote,
    renderContext,
    DebitNoteSubElementsMap,
  )
}

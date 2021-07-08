import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderChange } from  '../../model/doc/OrderChange'
import { OrderChangeField, OrderChangeFieldMeta, OrderChangeTypeName } from  '../../meta/doc/OrderChangeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractDisplay } from '../cac/ContractDisplay'
import { CountryDisplay } from '../cac/CountryDisplay'
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
import { OrderLineDisplay } from '../cac/OrderLineDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransactionConditionsDisplay } from '../cac/TransactionConditionsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OrderChange, void>
  orderChange: OrderChange[] | undefined
  renderContext: RenderContext
}

export const OrderChangeSubElementsMap: SubElementsTemplatesMap<OrderChangeField, OrderChange, void> = new Map([
    [
      OrderChangeField.UBLExtensions,
      { meta: OrderChangeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderChangeField.UBLExtensions}
          meta={OrderChangeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.UBLVersionID,
      { meta: OrderChangeFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.UBLVersionID}
          meta={OrderChangeFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.CustomizationID,
      { meta: OrderChangeFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.CustomizationID}
          meta={OrderChangeFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.ProfileID,
      { meta: OrderChangeFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.ProfileID}
          meta={OrderChangeFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.ProfileExecutionID,
      { meta: OrderChangeFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.ProfileExecutionID}
          meta={OrderChangeFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.ID,
      { meta: OrderChangeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.ID}
          meta={OrderChangeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.SalesOrderID,
      { meta: OrderChangeFieldMeta.SalesOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.SalesOrderID}
          meta={OrderChangeFieldMeta.SalesOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.SalesOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.CopyIndicator,
      { meta: OrderChangeFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderChangeField.CopyIndicator}
          meta={OrderChangeFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.UUID,
      { meta: OrderChangeFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.UUID}
          meta={OrderChangeFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.IssueDate,
      { meta: OrderChangeFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={OrderChangeField.IssueDate}
          meta={OrderChangeFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.IssueTime,
      { meta: OrderChangeFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={OrderChangeField.IssueTime}
          meta={OrderChangeFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.SequenceNumberID,
      { meta: OrderChangeFieldMeta.SequenceNumberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderChangeField.SequenceNumberID}
          meta={OrderChangeFieldMeta.SequenceNumberID}
          fieldConfig={fieldConfig}
          identifier={value?.SequenceNumberID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.Note,
      { meta: OrderChangeFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderChangeField.Note}
          meta={OrderChangeFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.RequestedInvoiceCurrencyCode,
      { meta: OrderChangeFieldMeta.RequestedInvoiceCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderChangeField.RequestedInvoiceCurrencyCode}
          meta={OrderChangeFieldMeta.RequestedInvoiceCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.RequestedInvoiceCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.DocumentCurrencyCode,
      { meta: OrderChangeFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderChangeField.DocumentCurrencyCode}
          meta={OrderChangeFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.PricingCurrencyCode,
      { meta: OrderChangeFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderChangeField.PricingCurrencyCode}
          meta={OrderChangeFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.TaxCurrencyCode,
      { meta: OrderChangeFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderChangeField.TaxCurrencyCode}
          meta={OrderChangeFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.CustomerReference,
      { meta: OrderChangeFieldMeta.CustomerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderChangeField.CustomerReference}
          meta={OrderChangeFieldMeta.CustomerReference}
          fieldConfig={fieldConfig}
          text={value?.CustomerReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AccountingCostCode,
      { meta: OrderChangeFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderChangeField.AccountingCostCode}
          meta={OrderChangeFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AccountingCost,
      { meta: OrderChangeFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderChangeField.AccountingCost}
          meta={OrderChangeFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.LineCountNumeric,
      { meta: OrderChangeFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={OrderChangeField.LineCountNumeric}
          meta={OrderChangeFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.ValidityPeriod,
      { meta: OrderChangeFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={OrderChangeField.ValidityPeriod}
          meta={OrderChangeFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.OrderReference,
      { meta: OrderChangeFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={OrderChangeField.OrderReference}
          meta={OrderChangeFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.QuotationDocumentReference,
      { meta: OrderChangeFieldMeta.QuotationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderChangeField.QuotationDocumentReference}
          meta={OrderChangeFieldMeta.QuotationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.QuotationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.OriginatorDocumentReference,
      { meta: OrderChangeFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderChangeField.OriginatorDocumentReference}
          meta={OrderChangeFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AdditionalDocumentReference,
      { meta: OrderChangeFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderChangeField.AdditionalDocumentReference}
          meta={OrderChangeFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.Contract,
      { meta: OrderChangeFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={OrderChangeField.Contract}
          meta={OrderChangeFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.Signature,
      { meta: OrderChangeFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={OrderChangeField.Signature}
          meta={OrderChangeFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.BuyerCustomerParty,
      { meta: OrderChangeFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderChangeField.BuyerCustomerParty}
          meta={OrderChangeFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.SellerSupplierParty,
      { meta: OrderChangeFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderChangeField.SellerSupplierParty}
          meta={OrderChangeFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.OriginatorCustomerParty,
      { meta: OrderChangeFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderChangeField.OriginatorCustomerParty}
          meta={OrderChangeFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.FreightForwarderParty,
      { meta: OrderChangeFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={OrderChangeField.FreightForwarderParty}
          meta={OrderChangeFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AccountingCustomerParty,
      { meta: OrderChangeFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderChangeField.AccountingCustomerParty}
          meta={OrderChangeFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AccountingSupplierParty,
      { meta: OrderChangeFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderChangeField.AccountingSupplierParty}
          meta={OrderChangeFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.Delivery,
      { meta: OrderChangeFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={OrderChangeField.Delivery}
          meta={OrderChangeFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.DeliveryTerms,
      { meta: OrderChangeFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={OrderChangeField.DeliveryTerms}
          meta={OrderChangeFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.PaymentMeans,
      { meta: OrderChangeFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={OrderChangeField.PaymentMeans}
          meta={OrderChangeFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.PaymentTerms,
      { meta: OrderChangeFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={OrderChangeField.PaymentTerms}
          meta={OrderChangeFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.TransactionConditions,
      { meta: OrderChangeFieldMeta.TransactionConditions,
        template: ({value, renderContext, fieldConfig}) => <TransactionConditionsDisplay
          key={OrderChangeField.TransactionConditions}
          meta={OrderChangeFieldMeta.TransactionConditions}
          fieldConfig={fieldConfig}
          transactionConditions={value?.TransactionConditions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AllowanceCharge,
      { meta: OrderChangeFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={OrderChangeField.AllowanceCharge}
          meta={OrderChangeFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.TaxExchangeRate,
      { meta: OrderChangeFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderChangeField.TaxExchangeRate}
          meta={OrderChangeFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.PricingExchangeRate,
      { meta: OrderChangeFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderChangeField.PricingExchangeRate}
          meta={OrderChangeFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.PaymentExchangeRate,
      { meta: OrderChangeFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderChangeField.PaymentExchangeRate}
          meta={OrderChangeFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.DestinationCountry,
      { meta: OrderChangeFieldMeta.DestinationCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={OrderChangeField.DestinationCountry}
          meta={OrderChangeFieldMeta.DestinationCountry}
          fieldConfig={fieldConfig}
          country={value?.DestinationCountry}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.TaxTotal,
      { meta: OrderChangeFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={OrderChangeField.TaxTotal}
          meta={OrderChangeFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.AnticipatedMonetaryTotal,
      { meta: OrderChangeFieldMeta.AnticipatedMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={OrderChangeField.AnticipatedMonetaryTotal}
          meta={OrderChangeFieldMeta.AnticipatedMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.AnticipatedMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      OrderChangeField.OrderLine,
      { meta: OrderChangeFieldMeta.OrderLine,
        template: ({value, renderContext, fieldConfig}) => <OrderLineDisplay
          key={OrderChangeField.OrderLine}
          meta={OrderChangeFieldMeta.OrderLine}
          fieldConfig={fieldConfig}
          orderLine={value?.OrderLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderChangeDisplay<TFieldMeta>({ meta, fieldConfig, orderChange, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderChangeTypeName,
    meta,
    fieldConfig,
    orderChange,
    renderContext,
    OrderChangeSubElementsMap,
  )
}

import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Order } from  '../../model/doc/Order'
import { OrderField, OrderFieldMeta, OrderTypeName } from  '../../meta/doc/OrderMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { CatalogueReferenceDisplay } from '../cac/CatalogueReferenceDisplay'
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
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ProjectReferenceDisplay } from '../cac/ProjectReferenceDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransactionConditionsDisplay } from '../cac/TransactionConditionsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Order, void>
  order: Order[] | undefined
  renderContext: RenderContext
}

export const OrderSubElementsMap: SubElementsTemplatesMap<OrderField, Order, void> = new Map([
    [
      OrderField.UBLExtensions,
      { meta: OrderFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderField.UBLExtensions}
          meta={OrderFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.UBLVersionID,
      { meta: OrderFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.UBLVersionID}
          meta={OrderFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.CustomizationID,
      { meta: OrderFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.CustomizationID}
          meta={OrderFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.ProfileID,
      { meta: OrderFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.ProfileID}
          meta={OrderFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.ProfileExecutionID,
      { meta: OrderFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.ProfileExecutionID}
          meta={OrderFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.ID,
      { meta: OrderFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.ID}
          meta={OrderFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.SalesOrderID,
      { meta: OrderFieldMeta.SalesOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.SalesOrderID}
          meta={OrderFieldMeta.SalesOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.SalesOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.CopyIndicator,
      { meta: OrderFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderField.CopyIndicator}
          meta={OrderFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.UUID,
      { meta: OrderFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderField.UUID}
          meta={OrderFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.IssueDate,
      { meta: OrderFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={OrderField.IssueDate}
          meta={OrderFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.IssueTime,
      { meta: OrderFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={OrderField.IssueTime}
          meta={OrderFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.OrderTypeCode,
      { meta: OrderFieldMeta.OrderTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderField.OrderTypeCode}
          meta={OrderFieldMeta.OrderTypeCode}
          fieldConfig={fieldConfig}
          code={value?.OrderTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.Note,
      { meta: OrderFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderField.Note}
          meta={OrderFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.RequestedInvoiceCurrencyCode,
      { meta: OrderFieldMeta.RequestedInvoiceCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderField.RequestedInvoiceCurrencyCode}
          meta={OrderFieldMeta.RequestedInvoiceCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.RequestedInvoiceCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.DocumentCurrencyCode,
      { meta: OrderFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderField.DocumentCurrencyCode}
          meta={OrderFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.PricingCurrencyCode,
      { meta: OrderFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderField.PricingCurrencyCode}
          meta={OrderFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.TaxCurrencyCode,
      { meta: OrderFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderField.TaxCurrencyCode}
          meta={OrderFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.CustomerReference,
      { meta: OrderFieldMeta.CustomerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderField.CustomerReference}
          meta={OrderFieldMeta.CustomerReference}
          fieldConfig={fieldConfig}
          text={value?.CustomerReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.AccountingCostCode,
      { meta: OrderFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderField.AccountingCostCode}
          meta={OrderFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.AccountingCost,
      { meta: OrderFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderField.AccountingCost}
          meta={OrderFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.LineCountNumeric,
      { meta: OrderFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={OrderField.LineCountNumeric}
          meta={OrderFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.ValidityPeriod,
      { meta: OrderFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={OrderField.ValidityPeriod}
          meta={OrderFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.QuotationDocumentReference,
      { meta: OrderFieldMeta.QuotationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderField.QuotationDocumentReference}
          meta={OrderFieldMeta.QuotationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.QuotationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.OrderDocumentReference,
      { meta: OrderFieldMeta.OrderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderField.OrderDocumentReference}
          meta={OrderFieldMeta.OrderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OrderDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.OriginatorDocumentReference,
      { meta: OrderFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderField.OriginatorDocumentReference}
          meta={OrderFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.CatalogueReference,
      { meta: OrderFieldMeta.CatalogueReference,
        template: ({value, renderContext, fieldConfig}) => <CatalogueReferenceDisplay
          key={OrderField.CatalogueReference}
          meta={OrderFieldMeta.CatalogueReference}
          fieldConfig={fieldConfig}
          catalogueReference={value?.CatalogueReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.AdditionalDocumentReference,
      { meta: OrderFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderField.AdditionalDocumentReference}
          meta={OrderFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.Contract,
      { meta: OrderFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={OrderField.Contract}
          meta={OrderFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.ProjectReference,
      { meta: OrderFieldMeta.ProjectReference,
        template: ({value, renderContext, fieldConfig}) => <ProjectReferenceDisplay
          key={OrderField.ProjectReference}
          meta={OrderFieldMeta.ProjectReference}
          fieldConfig={fieldConfig}
          projectReference={value?.ProjectReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.Signature,
      { meta: OrderFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={OrderField.Signature}
          meta={OrderFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.BuyerCustomerParty,
      { meta: OrderFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderField.BuyerCustomerParty}
          meta={OrderFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.SellerSupplierParty,
      { meta: OrderFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderField.SellerSupplierParty}
          meta={OrderFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.OriginatorCustomerParty,
      { meta: OrderFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderField.OriginatorCustomerParty}
          meta={OrderFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.FreightForwarderParty,
      { meta: OrderFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={OrderField.FreightForwarderParty}
          meta={OrderFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.AccountingCustomerParty,
      { meta: OrderFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderField.AccountingCustomerParty}
          meta={OrderFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.Delivery,
      { meta: OrderFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={OrderField.Delivery}
          meta={OrderFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.DeliveryTerms,
      { meta: OrderFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={OrderField.DeliveryTerms}
          meta={OrderFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.PaymentMeans,
      { meta: OrderFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={OrderField.PaymentMeans}
          meta={OrderFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.PaymentTerms,
      { meta: OrderFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={OrderField.PaymentTerms}
          meta={OrderFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.TransactionConditions,
      { meta: OrderFieldMeta.TransactionConditions,
        template: ({value, renderContext, fieldConfig}) => <TransactionConditionsDisplay
          key={OrderField.TransactionConditions}
          meta={OrderFieldMeta.TransactionConditions}
          fieldConfig={fieldConfig}
          transactionConditions={value?.TransactionConditions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.AllowanceCharge,
      { meta: OrderFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={OrderField.AllowanceCharge}
          meta={OrderFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.TaxExchangeRate,
      { meta: OrderFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderField.TaxExchangeRate}
          meta={OrderFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.PricingExchangeRate,
      { meta: OrderFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderField.PricingExchangeRate}
          meta={OrderFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.PaymentExchangeRate,
      { meta: OrderFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderField.PaymentExchangeRate}
          meta={OrderFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.DestinationCountry,
      { meta: OrderFieldMeta.DestinationCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={OrderField.DestinationCountry}
          meta={OrderFieldMeta.DestinationCountry}
          fieldConfig={fieldConfig}
          country={value?.DestinationCountry}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.TaxTotal,
      { meta: OrderFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={OrderField.TaxTotal}
          meta={OrderFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.AnticipatedMonetaryTotal,
      { meta: OrderFieldMeta.AnticipatedMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={OrderField.AnticipatedMonetaryTotal}
          meta={OrderFieldMeta.AnticipatedMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.AnticipatedMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      OrderField.OrderLine,
      { meta: OrderFieldMeta.OrderLine,
        template: ({value, renderContext, fieldConfig}) => <OrderLineDisplay
          key={OrderField.OrderLine}
          meta={OrderFieldMeta.OrderLine}
          fieldConfig={fieldConfig}
          orderLine={value?.OrderLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderDisplay<TFieldMeta>({ meta, fieldConfig, order, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderTypeName,
    meta,
    fieldConfig,
    order,
    renderContext,
    OrderSubElementsMap,
  )
}

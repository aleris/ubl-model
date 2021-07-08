import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderResponse } from  '../../model/doc/OrderResponse'
import { OrderResponseField, OrderResponseFieldMeta, OrderResponseTypeName } from  '../../meta/doc/OrderResponseMeta'
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
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { MonetaryTotalDisplay } from '../cac/MonetaryTotalDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { OrderLineDisplay } from '../cac/OrderLineDisplay'
import { OrderReferenceDisplay } from '../cac/OrderReferenceDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransactionConditionsDisplay } from '../cac/TransactionConditionsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OrderResponse, void>
  orderResponse: OrderResponse[] | undefined
  renderContext: RenderContext
}

export const OrderResponseSubElementsMap: SubElementsTemplatesMap<OrderResponseField, OrderResponse, void> = new Map([
    [
      OrderResponseField.UBLExtensions,
      { meta: OrderResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderResponseField.UBLExtensions}
          meta={OrderResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.UBLVersionID,
      { meta: OrderResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.UBLVersionID}
          meta={OrderResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.CustomizationID,
      { meta: OrderResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.CustomizationID}
          meta={OrderResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.ProfileID,
      { meta: OrderResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.ProfileID}
          meta={OrderResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.ProfileExecutionID,
      { meta: OrderResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.ProfileExecutionID}
          meta={OrderResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.ID,
      { meta: OrderResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.ID}
          meta={OrderResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.SalesOrderID,
      { meta: OrderResponseFieldMeta.SalesOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.SalesOrderID}
          meta={OrderResponseFieldMeta.SalesOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.SalesOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.CopyIndicator,
      { meta: OrderResponseFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderResponseField.CopyIndicator}
          meta={OrderResponseFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.UUID,
      { meta: OrderResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderResponseField.UUID}
          meta={OrderResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.IssueDate,
      { meta: OrderResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={OrderResponseField.IssueDate}
          meta={OrderResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.IssueTime,
      { meta: OrderResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={OrderResponseField.IssueTime}
          meta={OrderResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OrderResponseCode,
      { meta: OrderResponseFieldMeta.OrderResponseCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderResponseField.OrderResponseCode}
          meta={OrderResponseFieldMeta.OrderResponseCode}
          fieldConfig={fieldConfig}
          code={value?.OrderResponseCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.Note,
      { meta: OrderResponseFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseField.Note}
          meta={OrderResponseFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.DocumentCurrencyCode,
      { meta: OrderResponseFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderResponseField.DocumentCurrencyCode}
          meta={OrderResponseFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.PricingCurrencyCode,
      { meta: OrderResponseFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderResponseField.PricingCurrencyCode}
          meta={OrderResponseFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.TaxCurrencyCode,
      { meta: OrderResponseFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderResponseField.TaxCurrencyCode}
          meta={OrderResponseFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.TotalPackagesQuantity,
      { meta: OrderResponseFieldMeta.TotalPackagesQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={OrderResponseField.TotalPackagesQuantity}
          meta={OrderResponseFieldMeta.TotalPackagesQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalPackagesQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.GrossWeightMeasure,
      { meta: OrderResponseFieldMeta.GrossWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={OrderResponseField.GrossWeightMeasure}
          meta={OrderResponseFieldMeta.GrossWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.NetWeightMeasure,
      { meta: OrderResponseFieldMeta.NetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={OrderResponseField.NetWeightMeasure}
          meta={OrderResponseFieldMeta.NetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.NetNetWeightMeasure,
      { meta: OrderResponseFieldMeta.NetNetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={OrderResponseField.NetNetWeightMeasure}
          meta={OrderResponseFieldMeta.NetNetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetNetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.GrossVolumeMeasure,
      { meta: OrderResponseFieldMeta.GrossVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={OrderResponseField.GrossVolumeMeasure}
          meta={OrderResponseFieldMeta.GrossVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.NetVolumeMeasure,
      { meta: OrderResponseFieldMeta.NetVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={OrderResponseField.NetVolumeMeasure}
          meta={OrderResponseFieldMeta.NetVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.CustomerReference,
      { meta: OrderResponseFieldMeta.CustomerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseField.CustomerReference}
          meta={OrderResponseFieldMeta.CustomerReference}
          fieldConfig={fieldConfig}
          text={value?.CustomerReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.AccountingCostCode,
      { meta: OrderResponseFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderResponseField.AccountingCostCode}
          meta={OrderResponseFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.AccountingCost,
      { meta: OrderResponseFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderResponseField.AccountingCost}
          meta={OrderResponseFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.LineCountNumeric,
      { meta: OrderResponseFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={OrderResponseField.LineCountNumeric}
          meta={OrderResponseFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.ValidityPeriod,
      { meta: OrderResponseFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={OrderResponseField.ValidityPeriod}
          meta={OrderResponseFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OrderReference,
      { meta: OrderResponseFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={OrderResponseField.OrderReference}
          meta={OrderResponseFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OrderDocumentReference,
      { meta: OrderResponseFieldMeta.OrderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderResponseField.OrderDocumentReference}
          meta={OrderResponseFieldMeta.OrderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OrderDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OrderChangeDocumentReference,
      { meta: OrderResponseFieldMeta.OrderChangeDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderResponseField.OrderChangeDocumentReference}
          meta={OrderResponseFieldMeta.OrderChangeDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OrderChangeDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OriginatorDocumentReference,
      { meta: OrderResponseFieldMeta.OriginatorDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderResponseField.OriginatorDocumentReference}
          meta={OrderResponseFieldMeta.OriginatorDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginatorDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.AdditionalDocumentReference,
      { meta: OrderResponseFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderResponseField.AdditionalDocumentReference}
          meta={OrderResponseFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.Contract,
      { meta: OrderResponseFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={OrderResponseField.Contract}
          meta={OrderResponseFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.Signature,
      { meta: OrderResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={OrderResponseField.Signature}
          meta={OrderResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.SellerSupplierParty,
      { meta: OrderResponseFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderResponseField.SellerSupplierParty}
          meta={OrderResponseFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.BuyerCustomerParty,
      { meta: OrderResponseFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderResponseField.BuyerCustomerParty}
          meta={OrderResponseFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OriginatorCustomerParty,
      { meta: OrderResponseFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderResponseField.OriginatorCustomerParty}
          meta={OrderResponseFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.FreightForwarderParty,
      { meta: OrderResponseFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={OrderResponseField.FreightForwarderParty}
          meta={OrderResponseFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.AccountingSupplierParty,
      { meta: OrderResponseFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={OrderResponseField.AccountingSupplierParty}
          meta={OrderResponseFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.AccountingCustomerParty,
      { meta: OrderResponseFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={OrderResponseField.AccountingCustomerParty}
          meta={OrderResponseFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.Delivery,
      { meta: OrderResponseFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={OrderResponseField.Delivery}
          meta={OrderResponseFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.DeliveryTerms,
      { meta: OrderResponseFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={OrderResponseField.DeliveryTerms}
          meta={OrderResponseFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.PaymentMeans,
      { meta: OrderResponseFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={OrderResponseField.PaymentMeans}
          meta={OrderResponseFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.PaymentTerms,
      { meta: OrderResponseFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={OrderResponseField.PaymentTerms}
          meta={OrderResponseFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.AllowanceCharge,
      { meta: OrderResponseFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={OrderResponseField.AllowanceCharge}
          meta={OrderResponseFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.TransactionConditions,
      { meta: OrderResponseFieldMeta.TransactionConditions,
        template: ({value, renderContext, fieldConfig}) => <TransactionConditionsDisplay
          key={OrderResponseField.TransactionConditions}
          meta={OrderResponseFieldMeta.TransactionConditions}
          fieldConfig={fieldConfig}
          transactionConditions={value?.TransactionConditions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.TaxExchangeRate,
      { meta: OrderResponseFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderResponseField.TaxExchangeRate}
          meta={OrderResponseFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.PricingExchangeRate,
      { meta: OrderResponseFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderResponseField.PricingExchangeRate}
          meta={OrderResponseFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.PaymentExchangeRate,
      { meta: OrderResponseFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={OrderResponseField.PaymentExchangeRate}
          meta={OrderResponseFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.DestinationCountry,
      { meta: OrderResponseFieldMeta.DestinationCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={OrderResponseField.DestinationCountry}
          meta={OrderResponseFieldMeta.DestinationCountry}
          fieldConfig={fieldConfig}
          country={value?.DestinationCountry}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.TaxTotal,
      { meta: OrderResponseFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={OrderResponseField.TaxTotal}
          meta={OrderResponseFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.LegalMonetaryTotal,
      { meta: OrderResponseFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={OrderResponseField.LegalMonetaryTotal}
          meta={OrderResponseFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      OrderResponseField.OrderLine,
      { meta: OrderResponseFieldMeta.OrderLine,
        template: ({value, renderContext, fieldConfig}) => <OrderLineDisplay
          key={OrderResponseField.OrderLine}
          meta={OrderResponseFieldMeta.OrderLine}
          fieldConfig={fieldConfig}
          orderLine={value?.OrderLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderResponseDisplay<TFieldMeta>({ meta, fieldConfig, orderResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderResponseTypeName,
    meta,
    fieldConfig,
    orderResponse,
    renderContext,
    OrderResponseSubElementsMap,
  )
}

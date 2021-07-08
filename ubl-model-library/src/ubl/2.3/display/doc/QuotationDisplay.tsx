import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Quotation } from  '../../model/doc/Quotation'
import { QuotationField, QuotationFieldMeta, QuotationTypeName } from  '../../meta/doc/QuotationMeta'
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
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MonetaryTotalDisplay } from '../cac/MonetaryTotalDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { QuotationLineDisplay } from '../cac/QuotationLineDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransactionConditionsDisplay } from '../cac/TransactionConditionsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Quotation, void>
  quotation: Quotation[] | undefined
  renderContext: RenderContext
}

export const QuotationSubElementsMap: SubElementsTemplatesMap<QuotationField, Quotation, void> = new Map([
    [
      QuotationField.UBLExtensions,
      { meta: QuotationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={QuotationField.UBLExtensions}
          meta={QuotationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.UBLVersionID,
      { meta: QuotationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationField.UBLVersionID}
          meta={QuotationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.CustomizationID,
      { meta: QuotationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationField.CustomizationID}
          meta={QuotationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.ProfileID,
      { meta: QuotationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationField.ProfileID}
          meta={QuotationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.ProfileExecutionID,
      { meta: QuotationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationField.ProfileExecutionID}
          meta={QuotationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.ID,
      { meta: QuotationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationField.ID}
          meta={QuotationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.CopyIndicator,
      { meta: QuotationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={QuotationField.CopyIndicator}
          meta={QuotationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.UUID,
      { meta: QuotationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QuotationField.UUID}
          meta={QuotationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.IssueDate,
      { meta: QuotationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={QuotationField.IssueDate}
          meta={QuotationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.IssueTime,
      { meta: QuotationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={QuotationField.IssueTime}
          meta={QuotationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.Note,
      { meta: QuotationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QuotationField.Note}
          meta={QuotationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.PricingCurrencyCode,
      { meta: QuotationFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QuotationField.PricingCurrencyCode}
          meta={QuotationFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.LineCountNumeric,
      { meta: QuotationFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={QuotationField.LineCountNumeric}
          meta={QuotationFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.ValidityPeriod,
      { meta: QuotationFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={QuotationField.ValidityPeriod}
          meta={QuotationFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.RequestForQuotationDocumentReference,
      { meta: QuotationFieldMeta.RequestForQuotationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={QuotationField.RequestForQuotationDocumentReference}
          meta={QuotationFieldMeta.RequestForQuotationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.RequestForQuotationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.AdditionalDocumentReference,
      { meta: QuotationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={QuotationField.AdditionalDocumentReference}
          meta={QuotationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.Contract,
      { meta: QuotationFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={QuotationField.Contract}
          meta={QuotationFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.Signature,
      { meta: QuotationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={QuotationField.Signature}
          meta={QuotationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.SellerSupplierParty,
      { meta: QuotationFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={QuotationField.SellerSupplierParty}
          meta={QuotationFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.BuyerCustomerParty,
      { meta: QuotationFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={QuotationField.BuyerCustomerParty}
          meta={QuotationFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.OriginatorCustomerParty,
      { meta: QuotationFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={QuotationField.OriginatorCustomerParty}
          meta={QuotationFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.Delivery,
      { meta: QuotationFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={QuotationField.Delivery}
          meta={QuotationFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.DeliveryTerms,
      { meta: QuotationFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={QuotationField.DeliveryTerms}
          meta={QuotationFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.PaymentMeans,
      { meta: QuotationFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={QuotationField.PaymentMeans}
          meta={QuotationFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.TransactionConditions,
      { meta: QuotationFieldMeta.TransactionConditions,
        template: ({value, renderContext, fieldConfig}) => <TransactionConditionsDisplay
          key={QuotationField.TransactionConditions}
          meta={QuotationFieldMeta.TransactionConditions}
          fieldConfig={fieldConfig}
          transactionConditions={value?.TransactionConditions}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.AllowanceCharge,
      { meta: QuotationFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={QuotationField.AllowanceCharge}
          meta={QuotationFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.DestinationCountry,
      { meta: QuotationFieldMeta.DestinationCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={QuotationField.DestinationCountry}
          meta={QuotationFieldMeta.DestinationCountry}
          fieldConfig={fieldConfig}
          country={value?.DestinationCountry}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.TaxTotal,
      { meta: QuotationFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={QuotationField.TaxTotal}
          meta={QuotationFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.QuotedMonetaryTotal,
      { meta: QuotationFieldMeta.QuotedMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={QuotationField.QuotedMonetaryTotal}
          meta={QuotationFieldMeta.QuotedMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.QuotedMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      QuotationField.QuotationLine,
      { meta: QuotationFieldMeta.QuotationLine,
        template: ({value, renderContext, fieldConfig}) => <QuotationLineDisplay
          key={QuotationField.QuotationLine}
          meta={QuotationFieldMeta.QuotationLine}
          fieldConfig={fieldConfig}
          quotationLine={value?.QuotationLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function QuotationDisplay<TFieldMeta>({ meta, fieldConfig, quotation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    QuotationTypeName,
    meta,
    fieldConfig,
    quotation,
    renderContext,
    QuotationSubElementsMap,
  )
}

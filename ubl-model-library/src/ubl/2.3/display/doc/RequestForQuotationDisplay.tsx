import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestForQuotation } from  '../../model/doc/RequestForQuotation'
import { RequestForQuotationField, RequestForQuotationFieldMeta, RequestForQuotationTypeName } from  '../../meta/doc/RequestForQuotationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
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
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { RequestForQuotationLineDisplay } from '../cac/RequestForQuotationLineDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RequestForQuotation, void>
  requestForQuotation: RequestForQuotation[] | undefined
  renderContext: RenderContext
}

export const RequestForQuotationSubElementsMap: SubElementsTemplatesMap<RequestForQuotationField, RequestForQuotation, void> = new Map([
    [
      RequestForQuotationField.UBLExtensions,
      { meta: RequestForQuotationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RequestForQuotationField.UBLExtensions}
          meta={RequestForQuotationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.UBLVersionID,
      { meta: RequestForQuotationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationField.UBLVersionID}
          meta={RequestForQuotationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.CustomizationID,
      { meta: RequestForQuotationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationField.CustomizationID}
          meta={RequestForQuotationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.ProfileID,
      { meta: RequestForQuotationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationField.ProfileID}
          meta={RequestForQuotationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.ProfileExecutionID,
      { meta: RequestForQuotationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationField.ProfileExecutionID}
          meta={RequestForQuotationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.ID,
      { meta: RequestForQuotationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationField.ID}
          meta={RequestForQuotationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.CopyIndicator,
      { meta: RequestForQuotationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={RequestForQuotationField.CopyIndicator}
          meta={RequestForQuotationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.UUID,
      { meta: RequestForQuotationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationField.UUID}
          meta={RequestForQuotationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.IssueDate,
      { meta: RequestForQuotationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={RequestForQuotationField.IssueDate}
          meta={RequestForQuotationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.IssueTime,
      { meta: RequestForQuotationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={RequestForQuotationField.IssueTime}
          meta={RequestForQuotationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.SubmissionDueDate,
      { meta: RequestForQuotationFieldMeta.SubmissionDueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={RequestForQuotationField.SubmissionDueDate}
          meta={RequestForQuotationFieldMeta.SubmissionDueDate}
          fieldConfig={fieldConfig}
          date={value?.SubmissionDueDate}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.Note,
      { meta: RequestForQuotationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RequestForQuotationField.Note}
          meta={RequestForQuotationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.PricingCurrencyCode,
      { meta: RequestForQuotationFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RequestForQuotationField.PricingCurrencyCode}
          meta={RequestForQuotationFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.LineCountNumeric,
      { meta: RequestForQuotationFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={RequestForQuotationField.LineCountNumeric}
          meta={RequestForQuotationFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.RequestedValidityPeriod,
      { meta: RequestForQuotationFieldMeta.RequestedValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RequestForQuotationField.RequestedValidityPeriod}
          meta={RequestForQuotationFieldMeta.RequestedValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.RequestedValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.CatalogueDocumentReference,
      { meta: RequestForQuotationFieldMeta.CatalogueDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RequestForQuotationField.CatalogueDocumentReference}
          meta={RequestForQuotationFieldMeta.CatalogueDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CatalogueDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.AdditionalDocumentReference,
      { meta: RequestForQuotationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RequestForQuotationField.AdditionalDocumentReference}
          meta={RequestForQuotationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.Signature,
      { meta: RequestForQuotationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={RequestForQuotationField.Signature}
          meta={RequestForQuotationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.OriginatorCustomerParty,
      { meta: RequestForQuotationFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RequestForQuotationField.OriginatorCustomerParty}
          meta={RequestForQuotationFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.SellerSupplierParty,
      { meta: RequestForQuotationFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={RequestForQuotationField.SellerSupplierParty}
          meta={RequestForQuotationFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.BuyerCustomerParty,
      { meta: RequestForQuotationFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RequestForQuotationField.BuyerCustomerParty}
          meta={RequestForQuotationFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.Delivery,
      { meta: RequestForQuotationFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={RequestForQuotationField.Delivery}
          meta={RequestForQuotationFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.DeliveryTerms,
      { meta: RequestForQuotationFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={RequestForQuotationField.DeliveryTerms}
          meta={RequestForQuotationFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.DestinationCountry,
      { meta: RequestForQuotationFieldMeta.DestinationCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={RequestForQuotationField.DestinationCountry}
          meta={RequestForQuotationFieldMeta.DestinationCountry}
          fieldConfig={fieldConfig}
          country={value?.DestinationCountry}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.Contract,
      { meta: RequestForQuotationFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={RequestForQuotationField.Contract}
          meta={RequestForQuotationFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationField.RequestForQuotationLine,
      { meta: RequestForQuotationFieldMeta.RequestForQuotationLine,
        template: ({value, renderContext, fieldConfig}) => <RequestForQuotationLineDisplay
          key={RequestForQuotationField.RequestForQuotationLine}
          meta={RequestForQuotationFieldMeta.RequestForQuotationLine}
          fieldConfig={fieldConfig}
          requestForQuotationLine={value?.RequestForQuotationLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function RequestForQuotationDisplay<TFieldMeta>({ meta, fieldConfig, requestForQuotation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RequestForQuotationTypeName,
    meta,
    fieldConfig,
    requestForQuotation,
    renderContext,
    RequestForQuotationSubElementsMap,
  )
}

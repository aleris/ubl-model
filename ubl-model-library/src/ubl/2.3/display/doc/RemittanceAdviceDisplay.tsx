import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RemittanceAdvice } from  '../../model/doc/RemittanceAdvice'
import { RemittanceAdviceField, RemittanceAdviceFieldMeta, RemittanceAdviceTypeName } from  '../../meta/doc/RemittanceAdviceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BillingReferenceDisplay } from '../cac/BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { RemittanceAdviceLineDisplay } from '../cac/RemittanceAdviceLineDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RemittanceAdvice, void>
  remittanceAdvice: RemittanceAdvice[] | undefined
  renderContext: RenderContext
}

export const RemittanceAdviceSubElementsMap: SubElementsTemplatesMap<RemittanceAdviceField, RemittanceAdvice, void> = new Map([
    [
      RemittanceAdviceField.UBLExtensions,
      { meta: RemittanceAdviceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RemittanceAdviceField.UBLExtensions}
          meta={RemittanceAdviceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.UBLVersionID,
      { meta: RemittanceAdviceFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceField.UBLVersionID}
          meta={RemittanceAdviceFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.CustomizationID,
      { meta: RemittanceAdviceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceField.CustomizationID}
          meta={RemittanceAdviceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.ProfileID,
      { meta: RemittanceAdviceFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceField.ProfileID}
          meta={RemittanceAdviceFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.ProfileExecutionID,
      { meta: RemittanceAdviceFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceField.ProfileExecutionID}
          meta={RemittanceAdviceFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.ID,
      { meta: RemittanceAdviceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceField.ID}
          meta={RemittanceAdviceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.CopyIndicator,
      { meta: RemittanceAdviceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={RemittanceAdviceField.CopyIndicator}
          meta={RemittanceAdviceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.UUID,
      { meta: RemittanceAdviceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceField.UUID}
          meta={RemittanceAdviceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.IssueDate,
      { meta: RemittanceAdviceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={RemittanceAdviceField.IssueDate}
          meta={RemittanceAdviceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.IssueTime,
      { meta: RemittanceAdviceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={RemittanceAdviceField.IssueTime}
          meta={RemittanceAdviceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.Note,
      { meta: RemittanceAdviceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RemittanceAdviceField.Note}
          meta={RemittanceAdviceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.DocumentCurrencyCode,
      { meta: RemittanceAdviceFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RemittanceAdviceField.DocumentCurrencyCode}
          meta={RemittanceAdviceFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.TotalDebitAmount,
      { meta: RemittanceAdviceFieldMeta.TotalDebitAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RemittanceAdviceField.TotalDebitAmount}
          meta={RemittanceAdviceFieldMeta.TotalDebitAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalDebitAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.TotalCreditAmount,
      { meta: RemittanceAdviceFieldMeta.TotalCreditAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RemittanceAdviceField.TotalCreditAmount}
          meta={RemittanceAdviceFieldMeta.TotalCreditAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalCreditAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.TotalPaymentAmount,
      { meta: RemittanceAdviceFieldMeta.TotalPaymentAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RemittanceAdviceField.TotalPaymentAmount}
          meta={RemittanceAdviceFieldMeta.TotalPaymentAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalPaymentAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.PaymentOrderReference,
      { meta: RemittanceAdviceFieldMeta.PaymentOrderReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RemittanceAdviceField.PaymentOrderReference}
          meta={RemittanceAdviceFieldMeta.PaymentOrderReference}
          fieldConfig={fieldConfig}
          text={value?.PaymentOrderReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.PayerReference,
      { meta: RemittanceAdviceFieldMeta.PayerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RemittanceAdviceField.PayerReference}
          meta={RemittanceAdviceFieldMeta.PayerReference}
          fieldConfig={fieldConfig}
          text={value?.PayerReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.InvoicingPartyReference,
      { meta: RemittanceAdviceFieldMeta.InvoicingPartyReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RemittanceAdviceField.InvoicingPartyReference}
          meta={RemittanceAdviceFieldMeta.InvoicingPartyReference}
          fieldConfig={fieldConfig}
          text={value?.InvoicingPartyReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.LineCountNumeric,
      { meta: RemittanceAdviceFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={RemittanceAdviceField.LineCountNumeric}
          meta={RemittanceAdviceFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.InvoicePeriod,
      { meta: RemittanceAdviceFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RemittanceAdviceField.InvoicePeriod}
          meta={RemittanceAdviceFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.BillingReference,
      { meta: RemittanceAdviceFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={RemittanceAdviceField.BillingReference}
          meta={RemittanceAdviceFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.AdditionalDocumentReference,
      { meta: RemittanceAdviceFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RemittanceAdviceField.AdditionalDocumentReference}
          meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.Signature,
      { meta: RemittanceAdviceFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={RemittanceAdviceField.Signature}
          meta={RemittanceAdviceFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.AccountingCustomerParty,
      { meta: RemittanceAdviceFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RemittanceAdviceField.AccountingCustomerParty}
          meta={RemittanceAdviceFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.AccountingSupplierParty,
      { meta: RemittanceAdviceFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={RemittanceAdviceField.AccountingSupplierParty}
          meta={RemittanceAdviceFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.PayeeParty,
      { meta: RemittanceAdviceFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={RemittanceAdviceField.PayeeParty}
          meta={RemittanceAdviceFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.PaymentMeans,
      { meta: RemittanceAdviceFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={RemittanceAdviceField.PaymentMeans}
          meta={RemittanceAdviceFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.TaxTotal,
      { meta: RemittanceAdviceFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={RemittanceAdviceField.TaxTotal}
          meta={RemittanceAdviceFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceField.RemittanceAdviceLine,
      { meta: RemittanceAdviceFieldMeta.RemittanceAdviceLine,
        template: ({value, renderContext, fieldConfig}) => <RemittanceAdviceLineDisplay
          key={RemittanceAdviceField.RemittanceAdviceLine}
          meta={RemittanceAdviceFieldMeta.RemittanceAdviceLine}
          fieldConfig={fieldConfig}
          remittanceAdviceLine={value?.RemittanceAdviceLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function RemittanceAdviceDisplay<TFieldMeta>({ meta, fieldConfig, remittanceAdvice, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RemittanceAdviceTypeName,
    meta,
    fieldConfig,
    remittanceAdvice,
    renderContext,
    RemittanceAdviceSubElementsMap,
  )
}

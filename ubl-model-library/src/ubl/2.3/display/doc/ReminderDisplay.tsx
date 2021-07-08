import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Reminder } from  '../../model/doc/Reminder'
import { ReminderField, ReminderFieldMeta, ReminderTypeName } from  '../../meta/doc/ReminderMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExchangeRateDisplay } from '../cac/ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MonetaryTotalDisplay } from '../cac/MonetaryTotalDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentDisplay } from '../cac/PaymentDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { ReminderLineDisplay } from '../cac/ReminderLineDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Reminder, void>
  reminder: Reminder[] | undefined
  renderContext: RenderContext
}

export const ReminderSubElementsMap: SubElementsTemplatesMap<ReminderField, Reminder, void> = new Map([
    [
      ReminderField.UBLExtensions,
      { meta: ReminderFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ReminderField.UBLExtensions}
          meta={ReminderFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.UBLVersionID,
      { meta: ReminderFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderField.UBLVersionID}
          meta={ReminderFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.CustomizationID,
      { meta: ReminderFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderField.CustomizationID}
          meta={ReminderFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ProfileID,
      { meta: ReminderFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderField.ProfileID}
          meta={ReminderFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ProfileExecutionID,
      { meta: ReminderFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderField.ProfileExecutionID}
          meta={ReminderFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ID,
      { meta: ReminderFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderField.ID}
          meta={ReminderFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.CopyIndicator,
      { meta: ReminderFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ReminderField.CopyIndicator}
          meta={ReminderFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.UUID,
      { meta: ReminderFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderField.UUID}
          meta={ReminderFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.IssueDate,
      { meta: ReminderFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ReminderField.IssueDate}
          meta={ReminderFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.IssueTime,
      { meta: ReminderFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ReminderField.IssueTime}
          meta={ReminderFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ReminderTypeCode,
      { meta: ReminderFieldMeta.ReminderTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.ReminderTypeCode}
          meta={ReminderFieldMeta.ReminderTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ReminderTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ReminderSequenceNumeric,
      { meta: ReminderFieldMeta.ReminderSequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ReminderField.ReminderSequenceNumeric}
          meta={ReminderFieldMeta.ReminderSequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.ReminderSequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.Note,
      { meta: ReminderFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReminderField.Note}
          meta={ReminderFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.TaxPointDate,
      { meta: ReminderFieldMeta.TaxPointDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ReminderField.TaxPointDate}
          meta={ReminderFieldMeta.TaxPointDate}
          fieldConfig={fieldConfig}
          date={value?.TaxPointDate}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.DocumentCurrencyCode,
      { meta: ReminderFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.DocumentCurrencyCode}
          meta={ReminderFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.TaxCurrencyCode,
      { meta: ReminderFieldMeta.TaxCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.TaxCurrencyCode}
          meta={ReminderFieldMeta.TaxCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.TaxCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PricingCurrencyCode,
      { meta: ReminderFieldMeta.PricingCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.PricingCurrencyCode}
          meta={ReminderFieldMeta.PricingCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PricingCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PaymentCurrencyCode,
      { meta: ReminderFieldMeta.PaymentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.PaymentCurrencyCode}
          meta={ReminderFieldMeta.PaymentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PaymentAlternativeCurrencyCode,
      { meta: ReminderFieldMeta.PaymentAlternativeCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.PaymentAlternativeCurrencyCode}
          meta={ReminderFieldMeta.PaymentAlternativeCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentAlternativeCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.AccountingCostCode,
      { meta: ReminderFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderField.AccountingCostCode}
          meta={ReminderFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.AccountingCost,
      { meta: ReminderFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReminderField.AccountingCost}
          meta={ReminderFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.LineCountNumeric,
      { meta: ReminderFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ReminderField.LineCountNumeric}
          meta={ReminderFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ReminderPeriod,
      { meta: ReminderFieldMeta.ReminderPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ReminderField.ReminderPeriod}
          meta={ReminderFieldMeta.ReminderPeriod}
          fieldConfig={fieldConfig}
          period={value?.ReminderPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.AdditionalDocumentReference,
      { meta: ReminderFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ReminderField.AdditionalDocumentReference}
          meta={ReminderFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.Signature,
      { meta: ReminderFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ReminderField.Signature}
          meta={ReminderFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.AccountingSupplierParty,
      { meta: ReminderFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={ReminderField.AccountingSupplierParty}
          meta={ReminderFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.AccountingCustomerParty,
      { meta: ReminderFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={ReminderField.AccountingCustomerParty}
          meta={ReminderFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PayeeParty,
      { meta: ReminderFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ReminderField.PayeeParty}
          meta={ReminderFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.TaxRepresentativeParty,
      { meta: ReminderFieldMeta.TaxRepresentativeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ReminderField.TaxRepresentativeParty}
          meta={ReminderFieldMeta.TaxRepresentativeParty}
          fieldConfig={fieldConfig}
          party={value?.TaxRepresentativeParty}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PaymentMeans,
      { meta: ReminderFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={ReminderField.PaymentMeans}
          meta={ReminderFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PaymentTerms,
      { meta: ReminderFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={ReminderField.PaymentTerms}
          meta={ReminderFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PrepaidPayment,
      { meta: ReminderFieldMeta.PrepaidPayment,
        template: ({value, renderContext, fieldConfig}) => <PaymentDisplay
          key={ReminderField.PrepaidPayment}
          meta={ReminderFieldMeta.PrepaidPayment}
          fieldConfig={fieldConfig}
          payment={value?.PrepaidPayment}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.AllowanceCharge,
      { meta: ReminderFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ReminderField.AllowanceCharge}
          meta={ReminderFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.TaxExchangeRate,
      { meta: ReminderFieldMeta.TaxExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={ReminderField.TaxExchangeRate}
          meta={ReminderFieldMeta.TaxExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.TaxExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PricingExchangeRate,
      { meta: ReminderFieldMeta.PricingExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={ReminderField.PricingExchangeRate}
          meta={ReminderFieldMeta.PricingExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PricingExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PaymentExchangeRate,
      { meta: ReminderFieldMeta.PaymentExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={ReminderField.PaymentExchangeRate}
          meta={ReminderFieldMeta.PaymentExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.PaymentAlternativeExchangeRate,
      { meta: ReminderFieldMeta.PaymentAlternativeExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={ReminderField.PaymentAlternativeExchangeRate}
          meta={ReminderFieldMeta.PaymentAlternativeExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.PaymentAlternativeExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.TaxTotal,
      { meta: ReminderFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={ReminderField.TaxTotal}
          meta={ReminderFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.LegalMonetaryTotal,
      { meta: ReminderFieldMeta.LegalMonetaryTotal,
        template: ({value, renderContext, fieldConfig}) => <MonetaryTotalDisplay
          key={ReminderField.LegalMonetaryTotal}
          meta={ReminderFieldMeta.LegalMonetaryTotal}
          fieldConfig={fieldConfig}
          monetaryTotal={value?.LegalMonetaryTotal}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderField.ReminderLine,
      { meta: ReminderFieldMeta.ReminderLine,
        template: ({value, renderContext, fieldConfig}) => <ReminderLineDisplay
          key={ReminderField.ReminderLine}
          meta={ReminderFieldMeta.ReminderLine}
          fieldConfig={fieldConfig}
          reminderLine={value?.ReminderLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function ReminderDisplay<TFieldMeta>({ meta, fieldConfig, reminder, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ReminderTypeName,
    meta,
    fieldConfig,
    reminder,
    renderContext,
    ReminderSubElementsMap,
  )
}

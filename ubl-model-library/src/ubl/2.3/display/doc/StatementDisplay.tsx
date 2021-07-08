import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Statement } from  '../../model/doc/Statement'
import { StatementField, StatementFieldMeta, StatementTypeName } from  '../../meta/doc/StatementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from '../cac/AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PaymentMeansDisplay } from '../cac/PaymentMeansDisplay'
import { PaymentTermsDisplay } from '../cac/PaymentTermsDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { StatementLineDisplay } from '../cac/StatementLineDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TaxTotalDisplay } from '../cac/TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Statement, void>
  statement: Statement[] | undefined
  renderContext: RenderContext
}

export const StatementSubElementsMap: SubElementsTemplatesMap<StatementField, Statement, void> = new Map([
    [
      StatementField.UBLExtensions,
      { meta: StatementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={StatementField.UBLExtensions}
          meta={StatementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.UBLVersionID,
      { meta: StatementFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementField.UBLVersionID}
          meta={StatementFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.CustomizationID,
      { meta: StatementFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementField.CustomizationID}
          meta={StatementFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.ProfileID,
      { meta: StatementFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementField.ProfileID}
          meta={StatementFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.ProfileExecutionID,
      { meta: StatementFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementField.ProfileExecutionID}
          meta={StatementFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.ID,
      { meta: StatementFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementField.ID}
          meta={StatementFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.CopyIndicator,
      { meta: StatementFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={StatementField.CopyIndicator}
          meta={StatementFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.UUID,
      { meta: StatementFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementField.UUID}
          meta={StatementFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.IssueDate,
      { meta: StatementFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={StatementField.IssueDate}
          meta={StatementFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.IssueTime,
      { meta: StatementFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={StatementField.IssueTime}
          meta={StatementFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.Note,
      { meta: StatementFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StatementField.Note}
          meta={StatementFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.DocumentCurrencyCode,
      { meta: StatementFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StatementField.DocumentCurrencyCode}
          meta={StatementFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.TotalDebitAmount,
      { meta: StatementFieldMeta.TotalDebitAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StatementField.TotalDebitAmount}
          meta={StatementFieldMeta.TotalDebitAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalDebitAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.TotalCreditAmount,
      { meta: StatementFieldMeta.TotalCreditAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StatementField.TotalCreditAmount}
          meta={StatementFieldMeta.TotalCreditAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalCreditAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.TotalBalanceAmount,
      { meta: StatementFieldMeta.TotalBalanceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StatementField.TotalBalanceAmount}
          meta={StatementFieldMeta.TotalBalanceAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalBalanceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.LineCountNumeric,
      { meta: StatementFieldMeta.LineCountNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={StatementField.LineCountNumeric}
          meta={StatementFieldMeta.LineCountNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineCountNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.StatementTypeCode,
      { meta: StatementFieldMeta.StatementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StatementField.StatementTypeCode}
          meta={StatementFieldMeta.StatementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.StatementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.StatementPeriod,
      { meta: StatementFieldMeta.StatementPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={StatementField.StatementPeriod}
          meta={StatementFieldMeta.StatementPeriod}
          fieldConfig={fieldConfig}
          period={value?.StatementPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.AdditionalDocumentReference,
      { meta: StatementFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={StatementField.AdditionalDocumentReference}
          meta={StatementFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.Signature,
      { meta: StatementFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={StatementField.Signature}
          meta={StatementFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.AccountingSupplierParty,
      { meta: StatementFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={StatementField.AccountingSupplierParty}
          meta={StatementFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.AccountingCustomerParty,
      { meta: StatementFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StatementField.AccountingCustomerParty}
          meta={StatementFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.BuyerCustomerParty,
      { meta: StatementFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StatementField.BuyerCustomerParty}
          meta={StatementFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.SellerSupplierParty,
      { meta: StatementFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={StatementField.SellerSupplierParty}
          meta={StatementFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.OriginatorCustomerParty,
      { meta: StatementFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StatementField.OriginatorCustomerParty}
          meta={StatementFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.PayeeParty,
      { meta: StatementFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={StatementField.PayeeParty}
          meta={StatementFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.PaymentMeans,
      { meta: StatementFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={StatementField.PaymentMeans}
          meta={StatementFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.PaymentTerms,
      { meta: StatementFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={StatementField.PaymentTerms}
          meta={StatementFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.AllowanceCharge,
      { meta: StatementFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={StatementField.AllowanceCharge}
          meta={StatementFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.TaxTotal,
      { meta: StatementFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={StatementField.TaxTotal}
          meta={StatementFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      StatementField.StatementLine,
      { meta: StatementFieldMeta.StatementLine,
        template: ({value, renderContext, fieldConfig}) => <StatementLineDisplay
          key={StatementField.StatementLine}
          meta={StatementFieldMeta.StatementLine}
          fieldConfig={fieldConfig}
          statementLine={value?.StatementLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function StatementDisplay<TFieldMeta>({ meta, fieldConfig, statement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    StatementTypeName,
    meta,
    fieldConfig,
    statement,
    renderContext,
    StatementSubElementsMap,
  )
}

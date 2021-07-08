import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { StatementLine } from  '../../model/cac/StatementLine'
import { StatementLineField, StatementLineFieldMeta, StatementLineTypeName } from  '../../meta/cac/StatementLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BillingReferenceDisplay } from './BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PaymentDisplay } from './PaymentDisplay'
import { PaymentMeansDisplay } from './PaymentMeansDisplay'
import { PaymentTermsDisplay } from './PaymentTermsDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<StatementLine, void>
  statementLine: StatementLine[] | undefined
  renderContext: RenderContext
}

export const StatementLineSubElementsMap: SubElementsTemplatesMap<StatementLineField, StatementLine, void> = new Map([
    [
      StatementLineField.UBLExtensions,
      { meta: StatementLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={StatementLineField.UBLExtensions}
          meta={StatementLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.ID,
      { meta: StatementLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementLineField.ID}
          meta={StatementLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.Note,
      { meta: StatementLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StatementLineField.Note}
          meta={StatementLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.UUID,
      { meta: StatementLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatementLineField.UUID}
          meta={StatementLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.BalanceBroughtForwardIndicator,
      { meta: StatementLineFieldMeta.BalanceBroughtForwardIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={StatementLineField.BalanceBroughtForwardIndicator}
          meta={StatementLineFieldMeta.BalanceBroughtForwardIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.BalanceBroughtForwardIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.DebitLineAmount,
      { meta: StatementLineFieldMeta.DebitLineAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StatementLineField.DebitLineAmount}
          meta={StatementLineFieldMeta.DebitLineAmount}
          fieldConfig={fieldConfig}
          amount={value?.DebitLineAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.CreditLineAmount,
      { meta: StatementLineFieldMeta.CreditLineAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StatementLineField.CreditLineAmount}
          meta={StatementLineFieldMeta.CreditLineAmount}
          fieldConfig={fieldConfig}
          amount={value?.CreditLineAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.BalanceAmount,
      { meta: StatementLineFieldMeta.BalanceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={StatementLineField.BalanceAmount}
          meta={StatementLineFieldMeta.BalanceAmount}
          fieldConfig={fieldConfig}
          amount={value?.BalanceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.PaymentPurposeCode,
      { meta: StatementLineFieldMeta.PaymentPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StatementLineField.PaymentPurposeCode}
          meta={StatementLineFieldMeta.PaymentPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.PaymentMeans,
      { meta: StatementLineFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={StatementLineField.PaymentMeans}
          meta={StatementLineFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.PaymentTerms,
      { meta: StatementLineFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={StatementLineField.PaymentTerms}
          meta={StatementLineFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.BuyerCustomerParty,
      { meta: StatementLineFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StatementLineField.BuyerCustomerParty}
          meta={StatementLineFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.SellerSupplierParty,
      { meta: StatementLineFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={StatementLineField.SellerSupplierParty}
          meta={StatementLineFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.OriginatorCustomerParty,
      { meta: StatementLineFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StatementLineField.OriginatorCustomerParty}
          meta={StatementLineFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.AccountingCustomerParty,
      { meta: StatementLineFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StatementLineField.AccountingCustomerParty}
          meta={StatementLineFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.AccountingSupplierParty,
      { meta: StatementLineFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={StatementLineField.AccountingSupplierParty}
          meta={StatementLineFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.PayeeParty,
      { meta: StatementLineFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={StatementLineField.PayeeParty}
          meta={StatementLineFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.InvoicePeriod,
      { meta: StatementLineFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={StatementLineField.InvoicePeriod}
          meta={StatementLineFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.BillingReference,
      { meta: StatementLineFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={StatementLineField.BillingReference}
          meta={StatementLineFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.DocumentReference,
      { meta: StatementLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={StatementLineField.DocumentReference}
          meta={StatementLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.ExchangeRate,
      { meta: StatementLineFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={StatementLineField.ExchangeRate}
          meta={StatementLineFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.AllowanceCharge,
      { meta: StatementLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={StatementLineField.AllowanceCharge}
          meta={StatementLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      StatementLineField.CollectedPayment,
      { meta: StatementLineFieldMeta.CollectedPayment,
        template: ({value, renderContext, fieldConfig}) => <PaymentDisplay
          key={StatementLineField.CollectedPayment}
          meta={StatementLineFieldMeta.CollectedPayment}
          fieldConfig={fieldConfig}
          payment={value?.CollectedPayment}
          renderContext={renderContext}
        />}
    ]
]) 

export function StatementLineDisplay<TFieldMeta>({ meta, fieldConfig, statementLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    StatementLineTypeName,
    meta,
    fieldConfig,
    statementLine,
    renderContext,
    StatementLineSubElementsMap,
  )
}

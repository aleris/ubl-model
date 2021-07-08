import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RemittanceAdviceLine } from  '../../model/cac/RemittanceAdviceLine'
import { RemittanceAdviceLineField, RemittanceAdviceLineFieldMeta, RemittanceAdviceLineTypeName } from  '../../meta/cac/RemittanceAdviceLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BillingReferenceDisplay } from './BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RemittanceAdviceLine, void>
  remittanceAdviceLine: RemittanceAdviceLine[] | undefined
  renderContext: RenderContext
}

export const RemittanceAdviceLineSubElementsMap: SubElementsTemplatesMap<RemittanceAdviceLineField, RemittanceAdviceLine, void> = new Map([
    [
      RemittanceAdviceLineField.UBLExtensions,
      { meta: RemittanceAdviceLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RemittanceAdviceLineField.UBLExtensions}
          meta={RemittanceAdviceLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.ID,
      { meta: RemittanceAdviceLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceLineField.ID}
          meta={RemittanceAdviceLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.Note,
      { meta: RemittanceAdviceLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RemittanceAdviceLineField.Note}
          meta={RemittanceAdviceLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.UUID,
      { meta: RemittanceAdviceLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RemittanceAdviceLineField.UUID}
          meta={RemittanceAdviceLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.DebitLineAmount,
      { meta: RemittanceAdviceLineFieldMeta.DebitLineAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RemittanceAdviceLineField.DebitLineAmount}
          meta={RemittanceAdviceLineFieldMeta.DebitLineAmount}
          fieldConfig={fieldConfig}
          amount={value?.DebitLineAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.CreditLineAmount,
      { meta: RemittanceAdviceLineFieldMeta.CreditLineAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RemittanceAdviceLineField.CreditLineAmount}
          meta={RemittanceAdviceLineFieldMeta.CreditLineAmount}
          fieldConfig={fieldConfig}
          amount={value?.CreditLineAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.BalanceAmount,
      { meta: RemittanceAdviceLineFieldMeta.BalanceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RemittanceAdviceLineField.BalanceAmount}
          meta={RemittanceAdviceLineFieldMeta.BalanceAmount}
          fieldConfig={fieldConfig}
          amount={value?.BalanceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.PaymentPurposeCode,
      { meta: RemittanceAdviceLineFieldMeta.PaymentPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RemittanceAdviceLineField.PaymentPurposeCode}
          meta={RemittanceAdviceLineFieldMeta.PaymentPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.InvoicingPartyReference,
      { meta: RemittanceAdviceLineFieldMeta.InvoicingPartyReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RemittanceAdviceLineField.InvoicingPartyReference}
          meta={RemittanceAdviceLineFieldMeta.InvoicingPartyReference}
          fieldConfig={fieldConfig}
          text={value?.InvoicingPartyReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.AccountingSupplierParty,
      { meta: RemittanceAdviceLineFieldMeta.AccountingSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={RemittanceAdviceLineField.AccountingSupplierParty}
          meta={RemittanceAdviceLineFieldMeta.AccountingSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.AccountingSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.AccountingCustomerParty,
      { meta: RemittanceAdviceLineFieldMeta.AccountingCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RemittanceAdviceLineField.AccountingCustomerParty}
          meta={RemittanceAdviceLineFieldMeta.AccountingCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.AccountingCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.BuyerCustomerParty,
      { meta: RemittanceAdviceLineFieldMeta.BuyerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RemittanceAdviceLineField.BuyerCustomerParty}
          meta={RemittanceAdviceLineFieldMeta.BuyerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.BuyerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.SellerSupplierParty,
      { meta: RemittanceAdviceLineFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={RemittanceAdviceLineField.SellerSupplierParty}
          meta={RemittanceAdviceLineFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.OriginatorCustomerParty,
      { meta: RemittanceAdviceLineFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={RemittanceAdviceLineField.OriginatorCustomerParty}
          meta={RemittanceAdviceLineFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.PayeeParty,
      { meta: RemittanceAdviceLineFieldMeta.PayeeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={RemittanceAdviceLineField.PayeeParty}
          meta={RemittanceAdviceLineFieldMeta.PayeeParty}
          fieldConfig={fieldConfig}
          party={value?.PayeeParty}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.InvoicePeriod,
      { meta: RemittanceAdviceLineFieldMeta.InvoicePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RemittanceAdviceLineField.InvoicePeriod}
          meta={RemittanceAdviceLineFieldMeta.InvoicePeriod}
          fieldConfig={fieldConfig}
          period={value?.InvoicePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.BillingReference,
      { meta: RemittanceAdviceLineFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={RemittanceAdviceLineField.BillingReference}
          meta={RemittanceAdviceLineFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.DocumentReference,
      { meta: RemittanceAdviceLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RemittanceAdviceLineField.DocumentReference}
          meta={RemittanceAdviceLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RemittanceAdviceLineField.ExchangeRate,
      { meta: RemittanceAdviceLineFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={RemittanceAdviceLineField.ExchangeRate}
          meta={RemittanceAdviceLineFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ]
]) 

export function RemittanceAdviceLineDisplay<TFieldMeta>({ meta, fieldConfig, remittanceAdviceLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RemittanceAdviceLineTypeName,
    meta,
    fieldConfig,
    remittanceAdviceLine,
    renderContext,
    RemittanceAdviceLineSubElementsMap,
  )
}

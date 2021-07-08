import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PaymentTerms } from  '../../model/cac/PaymentTerms'
import { PaymentTermsField, PaymentTermsFieldMeta, PaymentTermsTypeName } from  '../../meta/cac/PaymentTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PaymentTerms, void>
  paymentTerms: PaymentTerms[] | undefined
  renderContext: RenderContext
}

export const PaymentTermsSubElementsMap: SubElementsTemplatesMap<PaymentTermsField, PaymentTerms, void> = new Map([
    [
      PaymentTermsField.UBLExtensions,
      { meta: PaymentTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PaymentTermsField.UBLExtensions}
          meta={PaymentTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.ID,
      { meta: PaymentTermsFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentTermsField.ID}
          meta={PaymentTermsFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PaymentMeansID,
      { meta: PaymentTermsFieldMeta.PaymentMeansID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentTermsField.PaymentMeansID}
          meta={PaymentTermsFieldMeta.PaymentMeansID}
          fieldConfig={fieldConfig}
          identifier={value?.PaymentMeansID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PrepaidPaymentReferenceID,
      { meta: PaymentTermsFieldMeta.PrepaidPaymentReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentTermsField.PrepaidPaymentReferenceID}
          meta={PaymentTermsFieldMeta.PrepaidPaymentReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.PrepaidPaymentReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.Note,
      { meta: PaymentTermsFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PaymentTermsField.Note}
          meta={PaymentTermsFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.ReferenceEventCode,
      { meta: PaymentTermsFieldMeta.ReferenceEventCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PaymentTermsField.ReferenceEventCode}
          meta={PaymentTermsFieldMeta.ReferenceEventCode}
          fieldConfig={fieldConfig}
          code={value?.ReferenceEventCode}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.SettlementDiscountPercent,
      { meta: PaymentTermsFieldMeta.SettlementDiscountPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={PaymentTermsField.SettlementDiscountPercent}
          meta={PaymentTermsFieldMeta.SettlementDiscountPercent}
          fieldConfig={fieldConfig}
          numeric={value?.SettlementDiscountPercent}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PenaltySurchargePercent,
      { meta: PaymentTermsFieldMeta.PenaltySurchargePercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={PaymentTermsField.PenaltySurchargePercent}
          meta={PaymentTermsFieldMeta.PenaltySurchargePercent}
          fieldConfig={fieldConfig}
          numeric={value?.PenaltySurchargePercent}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PaymentPercent,
      { meta: PaymentTermsFieldMeta.PaymentPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={PaymentTermsField.PaymentPercent}
          meta={PaymentTermsFieldMeta.PaymentPercent}
          fieldConfig={fieldConfig}
          numeric={value?.PaymentPercent}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.Amount,
      { meta: PaymentTermsFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PaymentTermsField.Amount}
          meta={PaymentTermsFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.SettlementDiscountAmount,
      { meta: PaymentTermsFieldMeta.SettlementDiscountAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PaymentTermsField.SettlementDiscountAmount}
          meta={PaymentTermsFieldMeta.SettlementDiscountAmount}
          fieldConfig={fieldConfig}
          amount={value?.SettlementDiscountAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PenaltyAmount,
      { meta: PaymentTermsFieldMeta.PenaltyAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PaymentTermsField.PenaltyAmount}
          meta={PaymentTermsFieldMeta.PenaltyAmount}
          fieldConfig={fieldConfig}
          amount={value?.PenaltyAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PaymentTermsDetailsURI,
      { meta: PaymentTermsFieldMeta.PaymentTermsDetailsURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentTermsField.PaymentTermsDetailsURI}
          meta={PaymentTermsFieldMeta.PaymentTermsDetailsURI}
          fieldConfig={fieldConfig}
          identifier={value?.PaymentTermsDetailsURI}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PaymentDueDate,
      { meta: PaymentTermsFieldMeta.PaymentDueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PaymentTermsField.PaymentDueDate}
          meta={PaymentTermsFieldMeta.PaymentDueDate}
          fieldConfig={fieldConfig}
          date={value?.PaymentDueDate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.InstallmentDueDate,
      { meta: PaymentTermsFieldMeta.InstallmentDueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PaymentTermsField.InstallmentDueDate}
          meta={PaymentTermsFieldMeta.InstallmentDueDate}
          fieldConfig={fieldConfig}
          date={value?.InstallmentDueDate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.InvoicingPartyReference,
      { meta: PaymentTermsFieldMeta.InvoicingPartyReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PaymentTermsField.InvoicingPartyReference}
          meta={PaymentTermsFieldMeta.InvoicingPartyReference}
          fieldConfig={fieldConfig}
          text={value?.InvoicingPartyReference}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.SettlementPeriod,
      { meta: PaymentTermsFieldMeta.SettlementPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PaymentTermsField.SettlementPeriod}
          meta={PaymentTermsFieldMeta.SettlementPeriod}
          fieldConfig={fieldConfig}
          period={value?.SettlementPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.PenaltyPeriod,
      { meta: PaymentTermsFieldMeta.PenaltyPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PaymentTermsField.PenaltyPeriod}
          meta={PaymentTermsFieldMeta.PenaltyPeriod}
          fieldConfig={fieldConfig}
          period={value?.PenaltyPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.ExchangeRate,
      { meta: PaymentTermsFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={PaymentTermsField.ExchangeRate}
          meta={PaymentTermsFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentTermsField.ValidityPeriod,
      { meta: PaymentTermsFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PaymentTermsField.ValidityPeriod}
          meta={PaymentTermsFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ]
]) 

export function PaymentTermsDisplay<TFieldMeta>({ meta, fieldConfig, paymentTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PaymentTermsTypeName,
    meta,
    fieldConfig,
    paymentTerms,
    renderContext,
    PaymentTermsSubElementsMap,
  )
}

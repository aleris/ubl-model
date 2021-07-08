import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PaymentMandate } from  '../../model/cac/PaymentMandate'
import { PaymentMandateField, PaymentMandateFieldMeta, PaymentMandateTypeName } from  '../../meta/cac/PaymentMandateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { ClauseDisplay } from './ClauseDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { FinancialAccountDisplay } from './FinancialAccountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PaymentMandate, void>
  paymentMandate: PaymentMandate[] | undefined
  renderContext: RenderContext
}

export const PaymentMandateSubElementsMap: SubElementsTemplatesMap<PaymentMandateField, PaymentMandate, void> = new Map([
    [
      PaymentMandateField.UBLExtensions,
      { meta: PaymentMandateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PaymentMandateField.UBLExtensions}
          meta={PaymentMandateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.ID,
      { meta: PaymentMandateFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentMandateField.ID}
          meta={PaymentMandateFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.MandateTypeCode,
      { meta: PaymentMandateFieldMeta.MandateTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PaymentMandateField.MandateTypeCode}
          meta={PaymentMandateFieldMeta.MandateTypeCode}
          fieldConfig={fieldConfig}
          code={value?.MandateTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.MaximumPaymentInstructionsNumeric,
      { meta: PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={PaymentMandateField.MaximumPaymentInstructionsNumeric}
          meta={PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MaximumPaymentInstructionsNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.MaximumPaidAmount,
      { meta: PaymentMandateFieldMeta.MaximumPaidAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PaymentMandateField.MaximumPaidAmount}
          meta={PaymentMandateFieldMeta.MaximumPaidAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumPaidAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.SignatureID,
      { meta: PaymentMandateFieldMeta.SignatureID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentMandateField.SignatureID}
          meta={PaymentMandateFieldMeta.SignatureID}
          fieldConfig={fieldConfig}
          identifier={value?.SignatureID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.PayerParty,
      { meta: PaymentMandateFieldMeta.PayerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PaymentMandateField.PayerParty}
          meta={PaymentMandateFieldMeta.PayerParty}
          fieldConfig={fieldConfig}
          party={value?.PayerParty}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.PayerFinancialAccount,
      { meta: PaymentMandateFieldMeta.PayerFinancialAccount,
        template: ({value, renderContext, fieldConfig}) => <FinancialAccountDisplay
          key={PaymentMandateField.PayerFinancialAccount}
          meta={PaymentMandateFieldMeta.PayerFinancialAccount}
          fieldConfig={fieldConfig}
          financialAccount={value?.PayerFinancialAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.ValidityPeriod,
      { meta: PaymentMandateFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PaymentMandateField.ValidityPeriod}
          meta={PaymentMandateFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.PaymentReversalPeriod,
      { meta: PaymentMandateFieldMeta.PaymentReversalPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PaymentMandateField.PaymentReversalPeriod}
          meta={PaymentMandateFieldMeta.PaymentReversalPeriod}
          fieldConfig={fieldConfig}
          period={value?.PaymentReversalPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMandateField.Clause,
      { meta: PaymentMandateFieldMeta.Clause,
        template: ({value, renderContext, fieldConfig}) => <ClauseDisplay
          key={PaymentMandateField.Clause}
          meta={PaymentMandateFieldMeta.Clause}
          fieldConfig={fieldConfig}
          clause={value?.Clause}
          renderContext={renderContext}
        />}
    ]
]) 

export function PaymentMandateDisplay<TFieldMeta>({ meta, fieldConfig, paymentMandate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PaymentMandateTypeName,
    meta,
    fieldConfig,
    paymentMandate,
    renderContext,
    PaymentMandateSubElementsMap,
  )
}

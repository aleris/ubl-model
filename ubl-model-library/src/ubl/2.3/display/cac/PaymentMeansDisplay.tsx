import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PaymentMeans } from  '../../model/cac/PaymentMeans'
import { PaymentMeansField, PaymentMeansFieldMeta, PaymentMeansTypeName } from  '../../meta/cac/PaymentMeansMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CardAccountDisplay } from './CardAccountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CreditAccountDisplay } from './CreditAccountDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { FinancialAccountDisplay } from './FinancialAccountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PaymentMandateDisplay } from './PaymentMandateDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TradeFinancingDisplay } from './TradeFinancingDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PaymentMeans, void>
  paymentMeans: PaymentMeans[] | undefined
  renderContext: RenderContext
}

export const PaymentMeansSubElementsMap: SubElementsTemplatesMap<PaymentMeansField, PaymentMeans, void> = new Map([
    [
      PaymentMeansField.UBLExtensions,
      { meta: PaymentMeansFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PaymentMeansField.UBLExtensions}
          meta={PaymentMeansFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.ID,
      { meta: PaymentMeansFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentMeansField.ID}
          meta={PaymentMeansFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PaymentMeansCode,
      { meta: PaymentMeansFieldMeta.PaymentMeansCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PaymentMeansField.PaymentMeansCode}
          meta={PaymentMeansFieldMeta.PaymentMeansCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentMeansCode}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PaymentDueDate,
      { meta: PaymentMeansFieldMeta.PaymentDueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PaymentMeansField.PaymentDueDate}
          meta={PaymentMeansFieldMeta.PaymentDueDate}
          fieldConfig={fieldConfig}
          date={value?.PaymentDueDate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PaymentChannelCode,
      { meta: PaymentMeansFieldMeta.PaymentChannelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PaymentMeansField.PaymentChannelCode}
          meta={PaymentMeansFieldMeta.PaymentChannelCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentChannelCode}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.InstructionID,
      { meta: PaymentMeansFieldMeta.InstructionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentMeansField.InstructionID}
          meta={PaymentMeansFieldMeta.InstructionID}
          fieldConfig={fieldConfig}
          identifier={value?.InstructionID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.InstructionNote,
      { meta: PaymentMeansFieldMeta.InstructionNote,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PaymentMeansField.InstructionNote}
          meta={PaymentMeansFieldMeta.InstructionNote}
          fieldConfig={fieldConfig}
          text={value?.InstructionNote}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PaymentID,
      { meta: PaymentMeansFieldMeta.PaymentID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentMeansField.PaymentID}
          meta={PaymentMeansFieldMeta.PaymentID}
          fieldConfig={fieldConfig}
          identifier={value?.PaymentID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.CardAccount,
      { meta: PaymentMeansFieldMeta.CardAccount,
        template: ({value, renderContext, fieldConfig}) => <CardAccountDisplay
          key={PaymentMeansField.CardAccount}
          meta={PaymentMeansFieldMeta.CardAccount}
          fieldConfig={fieldConfig}
          cardAccount={value?.CardAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PayerFinancialAccount,
      { meta: PaymentMeansFieldMeta.PayerFinancialAccount,
        template: ({value, renderContext, fieldConfig}) => <FinancialAccountDisplay
          key={PaymentMeansField.PayerFinancialAccount}
          meta={PaymentMeansFieldMeta.PayerFinancialAccount}
          fieldConfig={fieldConfig}
          financialAccount={value?.PayerFinancialAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PayeeFinancialAccount,
      { meta: PaymentMeansFieldMeta.PayeeFinancialAccount,
        template: ({value, renderContext, fieldConfig}) => <FinancialAccountDisplay
          key={PaymentMeansField.PayeeFinancialAccount}
          meta={PaymentMeansFieldMeta.PayeeFinancialAccount}
          fieldConfig={fieldConfig}
          financialAccount={value?.PayeeFinancialAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.CreditAccount,
      { meta: PaymentMeansFieldMeta.CreditAccount,
        template: ({value, renderContext, fieldConfig}) => <CreditAccountDisplay
          key={PaymentMeansField.CreditAccount}
          meta={PaymentMeansFieldMeta.CreditAccount}
          fieldConfig={fieldConfig}
          creditAccount={value?.CreditAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.PaymentMandate,
      { meta: PaymentMeansFieldMeta.PaymentMandate,
        template: ({value, renderContext, fieldConfig}) => <PaymentMandateDisplay
          key={PaymentMeansField.PaymentMandate}
          meta={PaymentMeansFieldMeta.PaymentMandate}
          fieldConfig={fieldConfig}
          paymentMandate={value?.PaymentMandate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentMeansField.TradeFinancing,
      { meta: PaymentMeansFieldMeta.TradeFinancing,
        template: ({value, renderContext, fieldConfig}) => <TradeFinancingDisplay
          key={PaymentMeansField.TradeFinancing}
          meta={PaymentMeansFieldMeta.TradeFinancing}
          fieldConfig={fieldConfig}
          tradeFinancing={value?.TradeFinancing}
          renderContext={renderContext}
        />}
    ]
]) 

export function PaymentMeansDisplay<TFieldMeta>({ meta, fieldConfig, paymentMeans, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PaymentMeansTypeName,
    meta,
    fieldConfig,
    paymentMeans,
    renderContext,
    PaymentMeansSubElementsMap,
  )
}

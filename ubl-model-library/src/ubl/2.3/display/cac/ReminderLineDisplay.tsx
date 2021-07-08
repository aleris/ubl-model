import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ReminderLine } from  '../../model/cac/ReminderLine'
import { ReminderLineField, ReminderLineFieldMeta, ReminderLineTypeName } from  '../../meta/cac/ReminderLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BillingReferenceDisplay } from './BillingReferenceDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ExchangeRateDisplay } from './ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ReminderLine, void>
  reminderLine: ReminderLine[] | undefined
  renderContext: RenderContext
}

export const ReminderLineSubElementsMap: SubElementsTemplatesMap<ReminderLineField, ReminderLine, void> = new Map([
    [
      ReminderLineField.UBLExtensions,
      { meta: ReminderLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ReminderLineField.UBLExtensions}
          meta={ReminderLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.ID,
      { meta: ReminderLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderLineField.ID}
          meta={ReminderLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.Note,
      { meta: ReminderLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReminderLineField.Note}
          meta={ReminderLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.UUID,
      { meta: ReminderLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ReminderLineField.UUID}
          meta={ReminderLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.BalanceBroughtForwardIndicator,
      { meta: ReminderLineFieldMeta.BalanceBroughtForwardIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ReminderLineField.BalanceBroughtForwardIndicator}
          meta={ReminderLineFieldMeta.BalanceBroughtForwardIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.BalanceBroughtForwardIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.DebitLineAmount,
      { meta: ReminderLineFieldMeta.DebitLineAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ReminderLineField.DebitLineAmount}
          meta={ReminderLineFieldMeta.DebitLineAmount}
          fieldConfig={fieldConfig}
          amount={value?.DebitLineAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.CreditLineAmount,
      { meta: ReminderLineFieldMeta.CreditLineAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ReminderLineField.CreditLineAmount}
          meta={ReminderLineFieldMeta.CreditLineAmount}
          fieldConfig={fieldConfig}
          amount={value?.CreditLineAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.AccountingCostCode,
      { meta: ReminderLineFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderLineField.AccountingCostCode}
          meta={ReminderLineFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.AccountingCost,
      { meta: ReminderLineFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ReminderLineField.AccountingCost}
          meta={ReminderLineFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.PenaltySurchargePercent,
      { meta: ReminderLineFieldMeta.PenaltySurchargePercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ReminderLineField.PenaltySurchargePercent}
          meta={ReminderLineFieldMeta.PenaltySurchargePercent}
          fieldConfig={fieldConfig}
          numeric={value?.PenaltySurchargePercent}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.Amount,
      { meta: ReminderLineFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ReminderLineField.Amount}
          meta={ReminderLineFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.PaymentPurposeCode,
      { meta: ReminderLineFieldMeta.PaymentPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ReminderLineField.PaymentPurposeCode}
          meta={ReminderLineFieldMeta.PaymentPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.ReminderPeriod,
      { meta: ReminderLineFieldMeta.ReminderPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ReminderLineField.ReminderPeriod}
          meta={ReminderLineFieldMeta.ReminderPeriod}
          fieldConfig={fieldConfig}
          period={value?.ReminderPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.BillingReference,
      { meta: ReminderLineFieldMeta.BillingReference,
        template: ({value, renderContext, fieldConfig}) => <BillingReferenceDisplay
          key={ReminderLineField.BillingReference}
          meta={ReminderLineFieldMeta.BillingReference}
          fieldConfig={fieldConfig}
          billingReference={value?.BillingReference}
          renderContext={renderContext}
        />}
    ],

    [
      ReminderLineField.ExchangeRate,
      { meta: ReminderLineFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={ReminderLineField.ExchangeRate}
          meta={ReminderLineFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ]
]) 

export function ReminderLineDisplay<TFieldMeta>({ meta, fieldConfig, reminderLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ReminderLineTypeName,
    meta,
    fieldConfig,
    reminderLine,
    renderContext,
    ReminderLineSubElementsMap,
  )
}

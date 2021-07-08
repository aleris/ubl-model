import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Payment } from  '../../model/cac/Payment'
import { PaymentField, PaymentFieldMeta, PaymentTypeName } from  '../../meta/cac/PaymentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Payment, void>
  payment: Payment[] | undefined
  renderContext: RenderContext
}

export const PaymentSubElementsMap: SubElementsTemplatesMap<PaymentField, Payment, void> = new Map([
    [
      PaymentField.UBLExtensions,
      { meta: PaymentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PaymentField.UBLExtensions}
          meta={PaymentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentField.ID,
      { meta: PaymentFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentField.ID}
          meta={PaymentFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentField.PaidAmount,
      { meta: PaymentFieldMeta.PaidAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PaymentField.PaidAmount}
          meta={PaymentFieldMeta.PaidAmount}
          fieldConfig={fieldConfig}
          amount={value?.PaidAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentField.ReceivedDate,
      { meta: PaymentFieldMeta.ReceivedDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PaymentField.ReceivedDate}
          meta={PaymentFieldMeta.ReceivedDate}
          fieldConfig={fieldConfig}
          date={value?.ReceivedDate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentField.PaidDate,
      { meta: PaymentFieldMeta.PaidDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PaymentField.PaidDate}
          meta={PaymentFieldMeta.PaidDate}
          fieldConfig={fieldConfig}
          date={value?.PaidDate}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentField.PaidTime,
      { meta: PaymentFieldMeta.PaidTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PaymentField.PaidTime}
          meta={PaymentFieldMeta.PaidTime}
          fieldConfig={fieldConfig}
          time={value?.PaidTime}
          renderContext={renderContext}
        />}
    ],

    [
      PaymentField.InstructionID,
      { meta: PaymentFieldMeta.InstructionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PaymentField.InstructionID}
          meta={PaymentFieldMeta.InstructionID}
          fieldConfig={fieldConfig}
          identifier={value?.InstructionID}
          renderContext={renderContext}
        />}
    ]
]) 

export function PaymentDisplay<TFieldMeta>({ meta, fieldConfig, payment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PaymentTypeName,
    meta,
    fieldConfig,
    payment,
    renderContext,
    PaymentSubElementsMap,
  )
}

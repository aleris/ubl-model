import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OnAccountPayment } from  '../../model/cac/OnAccountPayment'
import { OnAccountPaymentField, OnAccountPaymentFieldMeta, OnAccountPaymentTypeName } from  '../../meta/cac/OnAccountPaymentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { PaymentTermsDisplay } from './PaymentTermsDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OnAccountPayment, void>
  onAccountPayment: OnAccountPayment[] | undefined
  renderContext: RenderContext
}

export const OnAccountPaymentSubElementsMap: SubElementsTemplatesMap<OnAccountPaymentField, OnAccountPayment, void> = new Map([
    [
      OnAccountPaymentField.UBLExtensions,
      { meta: OnAccountPaymentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OnAccountPaymentField.UBLExtensions}
          meta={OnAccountPaymentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OnAccountPaymentField.EstimatedConsumedQuantity,
      { meta: OnAccountPaymentFieldMeta.EstimatedConsumedQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={OnAccountPaymentField.EstimatedConsumedQuantity}
          meta={OnAccountPaymentFieldMeta.EstimatedConsumedQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.EstimatedConsumedQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      OnAccountPaymentField.Note,
      { meta: OnAccountPaymentFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OnAccountPaymentField.Note}
          meta={OnAccountPaymentFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OnAccountPaymentField.PaymentTerms,
      { meta: OnAccountPaymentFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={OnAccountPaymentField.PaymentTerms}
          meta={OnAccountPaymentFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ]
]) 

export function OnAccountPaymentDisplay<TFieldMeta>({ meta, fieldConfig, onAccountPayment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OnAccountPaymentTypeName,
    meta,
    fieldConfig,
    onAccountPayment,
    renderContext,
    OnAccountPaymentSubElementsMap,
  )
}

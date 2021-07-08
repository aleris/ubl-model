import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportExecutionTerms } from  '../../model/cac/TransportExecutionTerms'
import { TransportExecutionTermsField, TransportExecutionTermsFieldMeta, TransportExecutionTermsTypeName } from  '../../meta/cac/TransportExecutionTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DeliveryTermsDisplay } from './DeliveryTermsDisplay'
import { EnvironmentalEmissionDisplay } from './EnvironmentalEmissionDisplay'
import { NotificationRequirementDisplay } from './NotificationRequirementDisplay'
import { PaymentTermsDisplay } from './PaymentTermsDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportExecutionTerms, void>
  transportExecutionTerms: TransportExecutionTerms[] | undefined
  renderContext: RenderContext
}

export const TransportExecutionTermsSubElementsMap: SubElementsTemplatesMap<TransportExecutionTermsField, TransportExecutionTerms, void> = new Map([
    [
      TransportExecutionTermsField.UBLExtensions,
      { meta: TransportExecutionTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportExecutionTermsField.UBLExtensions}
          meta={TransportExecutionTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.TransportUserSpecialTerms,
      { meta: TransportExecutionTermsFieldMeta.TransportUserSpecialTerms,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionTermsField.TransportUserSpecialTerms}
          meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms}
          fieldConfig={fieldConfig}
          text={value?.TransportUserSpecialTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.TransportServiceProviderSpecialTerms,
      { meta: TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionTermsField.TransportServiceProviderSpecialTerms}
          meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms}
          fieldConfig={fieldConfig}
          text={value?.TransportServiceProviderSpecialTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.ChangeConditions,
      { meta: TransportExecutionTermsFieldMeta.ChangeConditions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportExecutionTermsField.ChangeConditions}
          meta={TransportExecutionTermsFieldMeta.ChangeConditions}
          fieldConfig={fieldConfig}
          text={value?.ChangeConditions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.PaymentTerms,
      { meta: TransportExecutionTermsFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TransportExecutionTermsField.PaymentTerms}
          meta={TransportExecutionTermsFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.DeliveryTerms,
      { meta: TransportExecutionTermsFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={TransportExecutionTermsField.DeliveryTerms}
          meta={TransportExecutionTermsFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.BonusPaymentTerms,
      { meta: TransportExecutionTermsFieldMeta.BonusPaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TransportExecutionTermsField.BonusPaymentTerms}
          meta={TransportExecutionTermsFieldMeta.BonusPaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.BonusPaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.CommissionPaymentTerms,
      { meta: TransportExecutionTermsFieldMeta.CommissionPaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TransportExecutionTermsField.CommissionPaymentTerms}
          meta={TransportExecutionTermsFieldMeta.CommissionPaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.CommissionPaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.PenaltyPaymentTerms,
      { meta: TransportExecutionTermsFieldMeta.PenaltyPaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TransportExecutionTermsField.PenaltyPaymentTerms}
          meta={TransportExecutionTermsFieldMeta.PenaltyPaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PenaltyPaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.EnvironmentalEmission,
      { meta: TransportExecutionTermsFieldMeta.EnvironmentalEmission,
        template: ({value, renderContext, fieldConfig}) => <EnvironmentalEmissionDisplay
          key={TransportExecutionTermsField.EnvironmentalEmission}
          meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission}
          fieldConfig={fieldConfig}
          environmentalEmission={value?.EnvironmentalEmission}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.NotificationRequirement,
      { meta: TransportExecutionTermsFieldMeta.NotificationRequirement,
        template: ({value, renderContext, fieldConfig}) => <NotificationRequirementDisplay
          key={TransportExecutionTermsField.NotificationRequirement}
          meta={TransportExecutionTermsFieldMeta.NotificationRequirement}
          fieldConfig={fieldConfig}
          notificationRequirement={value?.NotificationRequirement}
          renderContext={renderContext}
        />}
    ],

    [
      TransportExecutionTermsField.ServiceChargePaymentTerms,
      { meta: TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TransportExecutionTermsField.ServiceChargePaymentTerms}
          meta={TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.ServiceChargePaymentTerms}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportExecutionTermsDisplay<TFieldMeta>({ meta, fieldConfig, transportExecutionTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportExecutionTermsTypeName,
    meta,
    fieldConfig,
    transportExecutionTerms,
    renderContext,
    TransportExecutionTermsSubElementsMap,
  )
}

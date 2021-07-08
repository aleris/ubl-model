import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AllowanceCharge } from  '../../model/cac/AllowanceCharge'
import { AllowanceChargeField, AllowanceChargeFieldMeta, AllowanceChargeTypeName } from  '../../meta/cac/AllowanceChargeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PaymentMeansDisplay } from './PaymentMeansDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TaxTotalDisplay } from './TaxTotalDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AllowanceCharge, void>
  allowanceCharge: AllowanceCharge[] | undefined
  renderContext: RenderContext
}

export const AllowanceChargeSubElementsMap: SubElementsTemplatesMap<AllowanceChargeField, AllowanceCharge, void> = new Map([
    [
      AllowanceChargeField.UBLExtensions,
      { meta: AllowanceChargeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AllowanceChargeField.UBLExtensions}
          meta={AllowanceChargeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.ID,
      { meta: AllowanceChargeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AllowanceChargeField.ID}
          meta={AllowanceChargeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.ChargeIndicator,
      { meta: AllowanceChargeFieldMeta.ChargeIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AllowanceChargeField.ChargeIndicator}
          meta={AllowanceChargeFieldMeta.ChargeIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ChargeIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.AllowanceChargeReasonCode,
      { meta: AllowanceChargeFieldMeta.AllowanceChargeReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AllowanceChargeField.AllowanceChargeReasonCode}
          meta={AllowanceChargeFieldMeta.AllowanceChargeReasonCode}
          fieldConfig={fieldConfig}
          code={value?.AllowanceChargeReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.AllowanceChargeReason,
      { meta: AllowanceChargeFieldMeta.AllowanceChargeReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AllowanceChargeField.AllowanceChargeReason}
          meta={AllowanceChargeFieldMeta.AllowanceChargeReason}
          fieldConfig={fieldConfig}
          text={value?.AllowanceChargeReason}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.MultiplierFactorNumeric,
      { meta: AllowanceChargeFieldMeta.MultiplierFactorNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={AllowanceChargeField.MultiplierFactorNumeric}
          meta={AllowanceChargeFieldMeta.MultiplierFactorNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.MultiplierFactorNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.PrepaidIndicator,
      { meta: AllowanceChargeFieldMeta.PrepaidIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={AllowanceChargeField.PrepaidIndicator}
          meta={AllowanceChargeFieldMeta.PrepaidIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PrepaidIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.SequenceNumeric,
      { meta: AllowanceChargeFieldMeta.SequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={AllowanceChargeField.SequenceNumeric}
          meta={AllowanceChargeFieldMeta.SequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.SequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.Amount,
      { meta: AllowanceChargeFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={AllowanceChargeField.Amount}
          meta={AllowanceChargeFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.BaseAmount,
      { meta: AllowanceChargeFieldMeta.BaseAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={AllowanceChargeField.BaseAmount}
          meta={AllowanceChargeFieldMeta.BaseAmount}
          fieldConfig={fieldConfig}
          amount={value?.BaseAmount}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.AccountingCostCode,
      { meta: AllowanceChargeFieldMeta.AccountingCostCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AllowanceChargeField.AccountingCostCode}
          meta={AllowanceChargeFieldMeta.AccountingCostCode}
          fieldConfig={fieldConfig}
          code={value?.AccountingCostCode}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.AccountingCost,
      { meta: AllowanceChargeFieldMeta.AccountingCost,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AllowanceChargeField.AccountingCost}
          meta={AllowanceChargeFieldMeta.AccountingCost}
          fieldConfig={fieldConfig}
          text={value?.AccountingCost}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.PerUnitAmount,
      { meta: AllowanceChargeFieldMeta.PerUnitAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={AllowanceChargeField.PerUnitAmount}
          meta={AllowanceChargeFieldMeta.PerUnitAmount}
          fieldConfig={fieldConfig}
          amount={value?.PerUnitAmount}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.TaxCategory,
      { meta: AllowanceChargeFieldMeta.TaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={AllowanceChargeField.TaxCategory}
          meta={AllowanceChargeFieldMeta.TaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.TaxCategory}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.TaxTotal,
      { meta: AllowanceChargeFieldMeta.TaxTotal,
        template: ({value, renderContext, fieldConfig}) => <TaxTotalDisplay
          key={AllowanceChargeField.TaxTotal}
          meta={AllowanceChargeFieldMeta.TaxTotal}
          fieldConfig={fieldConfig}
          taxTotal={value?.TaxTotal}
          renderContext={renderContext}
        />}
    ],

    [
      AllowanceChargeField.PaymentMeans,
      { meta: AllowanceChargeFieldMeta.PaymentMeans,
        template: ({value, renderContext, fieldConfig}) => <PaymentMeansDisplay
          key={AllowanceChargeField.PaymentMeans}
          meta={AllowanceChargeFieldMeta.PaymentMeans}
          fieldConfig={fieldConfig}
          paymentMeans={value?.PaymentMeans}
          renderContext={renderContext}
        />}
    ]
]) 

export function AllowanceChargeDisplay<TFieldMeta>({ meta, fieldConfig, allowanceCharge, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AllowanceChargeTypeName,
    meta,
    fieldConfig,
    allowanceCharge,
    renderContext,
    AllowanceChargeSubElementsMap,
  )
}

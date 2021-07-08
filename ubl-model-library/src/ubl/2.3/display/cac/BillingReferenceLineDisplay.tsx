import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillingReferenceLine } from  '../../model/cac/BillingReferenceLine'
import { BillingReferenceLineField, BillingReferenceLineFieldMeta, BillingReferenceLineTypeName } from  '../../meta/cac/BillingReferenceLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<BillingReferenceLine, void>
  billingReferenceLine: BillingReferenceLine[] | undefined
  renderContext: RenderContext
}

export const BillingReferenceLineSubElementsMap: SubElementsTemplatesMap<BillingReferenceLineField, BillingReferenceLine, void> = new Map([
    [
      BillingReferenceLineField.UBLExtensions,
      { meta: BillingReferenceLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BillingReferenceLineField.UBLExtensions}
          meta={BillingReferenceLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceLineField.ID,
      { meta: BillingReferenceLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillingReferenceLineField.ID}
          meta={BillingReferenceLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceLineField.Amount,
      { meta: BillingReferenceLineFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={BillingReferenceLineField.Amount}
          meta={BillingReferenceLineFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      BillingReferenceLineField.AllowanceCharge,
      { meta: BillingReferenceLineFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={BillingReferenceLineField.AllowanceCharge}
          meta={BillingReferenceLineFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ]
]) 

export function BillingReferenceLineDisplay<TFieldMeta>({ meta, fieldConfig, billingReferenceLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BillingReferenceLineTypeName,
    meta,
    fieldConfig,
    billingReferenceLine,
    renderContext,
    BillingReferenceLineSubElementsMap,
  )
}

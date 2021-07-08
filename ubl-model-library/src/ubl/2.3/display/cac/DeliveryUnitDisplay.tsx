import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryUnit } from  '../../model/cac/DeliveryUnit'
import { DeliveryUnitField, DeliveryUnitFieldMeta, DeliveryUnitTypeName } from  '../../meta/cac/DeliveryUnitMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DeliveryUnit, void>
  deliveryUnit: DeliveryUnit[] | undefined
  renderContext: RenderContext
}

export const DeliveryUnitSubElementsMap: SubElementsTemplatesMap<DeliveryUnitField, DeliveryUnit, void> = new Map([
    [
      DeliveryUnitField.UBLExtensions,
      { meta: DeliveryUnitFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DeliveryUnitField.UBLExtensions}
          meta={DeliveryUnitFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryUnitField.BatchQuantity,
      { meta: DeliveryUnitFieldMeta.BatchQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DeliveryUnitField.BatchQuantity}
          meta={DeliveryUnitFieldMeta.BatchQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.BatchQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryUnitField.ConsumerUnitQuantity,
      { meta: DeliveryUnitFieldMeta.ConsumerUnitQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DeliveryUnitField.ConsumerUnitQuantity}
          meta={DeliveryUnitFieldMeta.ConsumerUnitQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ConsumerUnitQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryUnitField.HazardousRiskIndicator,
      { meta: DeliveryUnitFieldMeta.HazardousRiskIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DeliveryUnitField.HazardousRiskIndicator}
          meta={DeliveryUnitFieldMeta.HazardousRiskIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HazardousRiskIndicator}
          renderContext={renderContext}
        />}
    ]
]) 

export function DeliveryUnitDisplay<TFieldMeta>({ meta, fieldConfig, deliveryUnit, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DeliveryUnitTypeName,
    meta,
    fieldConfig,
    deliveryUnit,
    renderContext,
    DeliveryUnitSubElementsMap,
  )
}

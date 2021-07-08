import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { HazardousGoodsTransit } from  '../../model/cac/HazardousGoodsTransit'
import { HazardousGoodsTransitField, HazardousGoodsTransitFieldMeta, HazardousGoodsTransitTypeName } from  '../../meta/cac/HazardousGoodsTransitMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TemperatureDisplay } from './TemperatureDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<HazardousGoodsTransit, void>
  hazardousGoodsTransit: HazardousGoodsTransit[] | undefined
  renderContext: RenderContext
}

export const HazardousGoodsTransitSubElementsMap: SubElementsTemplatesMap<HazardousGoodsTransitField, HazardousGoodsTransit, void> = new Map([
    [
      HazardousGoodsTransitField.UBLExtensions,
      { meta: HazardousGoodsTransitFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={HazardousGoodsTransitField.UBLExtensions}
          meta={HazardousGoodsTransitFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.TransportEmergencyCardCode,
      { meta: HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousGoodsTransitField.TransportEmergencyCardCode}
          meta={HazardousGoodsTransitFieldMeta.TransportEmergencyCardCode}
          fieldConfig={fieldConfig}
          code={value?.TransportEmergencyCardCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.PackingCriteriaCode,
      { meta: HazardousGoodsTransitFieldMeta.PackingCriteriaCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousGoodsTransitField.PackingCriteriaCode}
          meta={HazardousGoodsTransitFieldMeta.PackingCriteriaCode}
          fieldConfig={fieldConfig}
          code={value?.PackingCriteriaCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.HazardousRegulationCode,
      { meta: HazardousGoodsTransitFieldMeta.HazardousRegulationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousGoodsTransitField.HazardousRegulationCode}
          meta={HazardousGoodsTransitFieldMeta.HazardousRegulationCode}
          fieldConfig={fieldConfig}
          code={value?.HazardousRegulationCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.InhalationToxicityZoneCode,
      { meta: HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousGoodsTransitField.InhalationToxicityZoneCode}
          meta={HazardousGoodsTransitFieldMeta.InhalationToxicityZoneCode}
          fieldConfig={fieldConfig}
          code={value?.InhalationToxicityZoneCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.TransportAuthorizationCode,
      { meta: HazardousGoodsTransitFieldMeta.TransportAuthorizationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={HazardousGoodsTransitField.TransportAuthorizationCode}
          meta={HazardousGoodsTransitFieldMeta.TransportAuthorizationCode}
          fieldConfig={fieldConfig}
          code={value?.TransportAuthorizationCode}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.MaximumTemperature,
      { meta: HazardousGoodsTransitFieldMeta.MaximumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={HazardousGoodsTransitField.MaximumTemperature}
          meta={HazardousGoodsTransitFieldMeta.MaximumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MaximumTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      HazardousGoodsTransitField.MinimumTemperature,
      { meta: HazardousGoodsTransitFieldMeta.MinimumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={HazardousGoodsTransitField.MinimumTemperature}
          meta={HazardousGoodsTransitFieldMeta.MinimumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MinimumTemperature}
          renderContext={renderContext}
        />}
    ]
]) 

export function HazardousGoodsTransitDisplay<TFieldMeta>({ meta, fieldConfig, hazardousGoodsTransit, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    HazardousGoodsTransitTypeName,
    meta,
    fieldConfig,
    hazardousGoodsTransit,
    renderContext,
    HazardousGoodsTransitSubElementsMap,
  )
}

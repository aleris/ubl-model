import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Capability } from  '../../model/cac/Capability'
import { CapabilityField, CapabilityFieldMeta, CapabilityTypeName } from  '../../meta/cac/CapabilityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EvidenceSuppliedDisplay } from './EvidenceSuppliedDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { WebSiteDisplay } from './WebSiteDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Capability, void>
  capability: Capability[] | undefined
  renderContext: RenderContext
}

export const CapabilitySubElementsMap: SubElementsTemplatesMap<CapabilityField, Capability, void> = new Map([
    [
      CapabilityField.UBLExtensions,
      { meta: CapabilityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CapabilityField.UBLExtensions}
          meta={CapabilityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.CapabilityTypeCode,
      { meta: CapabilityFieldMeta.CapabilityTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CapabilityField.CapabilityTypeCode}
          meta={CapabilityFieldMeta.CapabilityTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CapabilityTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.Description,
      { meta: CapabilityFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CapabilityField.Description}
          meta={CapabilityFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.ValueAmount,
      { meta: CapabilityFieldMeta.ValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={CapabilityField.ValueAmount}
          meta={CapabilityFieldMeta.ValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.ValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.ValueQuantity,
      { meta: CapabilityFieldMeta.ValueQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={CapabilityField.ValueQuantity}
          meta={CapabilityFieldMeta.ValueQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ValueQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.EvidenceSupplied,
      { meta: CapabilityFieldMeta.EvidenceSupplied,
        template: ({value, renderContext, fieldConfig}) => <EvidenceSuppliedDisplay
          key={CapabilityField.EvidenceSupplied}
          meta={CapabilityFieldMeta.EvidenceSupplied}
          fieldConfig={fieldConfig}
          evidenceSupplied={value?.EvidenceSupplied}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.ValidityPeriod,
      { meta: CapabilityFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CapabilityField.ValidityPeriod}
          meta={CapabilityFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CapabilityField.WebSite,
      { meta: CapabilityFieldMeta.WebSite,
        template: ({value, renderContext, fieldConfig}) => <WebSiteDisplay
          key={CapabilityField.WebSite}
          meta={CapabilityFieldMeta.WebSite}
          fieldConfig={fieldConfig}
          webSite={value?.WebSite}
          renderContext={renderContext}
        />}
    ]
]) 

export function CapabilityDisplay<TFieldMeta>({ meta, fieldConfig, capability, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CapabilityTypeName,
    meta,
    fieldConfig,
    capability,
    renderContext,
    CapabilitySubElementsMap,
  )
}

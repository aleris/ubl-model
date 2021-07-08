import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxScheme } from  '../../model/cac/TaxScheme'
import { TaxSchemeField, TaxSchemeFieldMeta, TaxSchemeTypeName } from  '../../meta/cac/TaxSchemeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TaxScheme, void>
  taxScheme: TaxScheme[] | undefined
  renderContext: RenderContext
}

export const TaxSchemeSubElementsMap: SubElementsTemplatesMap<TaxSchemeField, TaxScheme, void> = new Map([
    [
      TaxSchemeField.UBLExtensions,
      { meta: TaxSchemeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TaxSchemeField.UBLExtensions}
          meta={TaxSchemeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSchemeField.ID,
      { meta: TaxSchemeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TaxSchemeField.ID}
          meta={TaxSchemeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSchemeField.Name,
      { meta: TaxSchemeFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TaxSchemeField.Name}
          meta={TaxSchemeFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSchemeField.TaxTypeCode,
      { meta: TaxSchemeFieldMeta.TaxTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TaxSchemeField.TaxTypeCode}
          meta={TaxSchemeFieldMeta.TaxTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TaxTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSchemeField.CurrencyCode,
      { meta: TaxSchemeFieldMeta.CurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TaxSchemeField.CurrencyCode}
          meta={TaxSchemeFieldMeta.CurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.CurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      TaxSchemeField.JurisdictionRegionAddress,
      { meta: TaxSchemeFieldMeta.JurisdictionRegionAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={TaxSchemeField.JurisdictionRegionAddress}
          meta={TaxSchemeFieldMeta.JurisdictionRegionAddress}
          fieldConfig={fieldConfig}
          address={value?.JurisdictionRegionAddress}
          renderContext={renderContext}
        />}
    ]
]) 

export function TaxSchemeDisplay<TFieldMeta>({ meta, fieldConfig, taxScheme, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TaxSchemeTypeName,
    meta,
    fieldConfig,
    taxScheme,
    renderContext,
    TaxSchemeSubElementsMap,
  )
}

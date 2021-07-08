import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CorporateRegistrationScheme } from  '../../model/cac/CorporateRegistrationScheme'
import { CorporateRegistrationSchemeField, CorporateRegistrationSchemeFieldMeta, CorporateRegistrationSchemeTypeName } from  '../../meta/cac/CorporateRegistrationSchemeMeta'
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
  fieldConfig?: FieldConfig<CorporateRegistrationScheme, void>
  corporateRegistrationScheme: CorporateRegistrationScheme[] | undefined
  renderContext: RenderContext
}

export const CorporateRegistrationSchemeSubElementsMap: SubElementsTemplatesMap<CorporateRegistrationSchemeField, CorporateRegistrationScheme, void> = new Map([
    [
      CorporateRegistrationSchemeField.UBLExtensions,
      { meta: CorporateRegistrationSchemeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CorporateRegistrationSchemeField.UBLExtensions}
          meta={CorporateRegistrationSchemeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CorporateRegistrationSchemeField.ID,
      { meta: CorporateRegistrationSchemeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CorporateRegistrationSchemeField.ID}
          meta={CorporateRegistrationSchemeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CorporateRegistrationSchemeField.Name,
      { meta: CorporateRegistrationSchemeFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CorporateRegistrationSchemeField.Name}
          meta={CorporateRegistrationSchemeFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      CorporateRegistrationSchemeField.CorporateRegistrationTypeCode,
      { meta: CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CorporateRegistrationSchemeField.CorporateRegistrationTypeCode}
          meta={CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CorporateRegistrationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CorporateRegistrationSchemeField.JurisdictionRegionAddress,
      { meta: CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={CorporateRegistrationSchemeField.JurisdictionRegionAddress}
          meta={CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress}
          fieldConfig={fieldConfig}
          address={value?.JurisdictionRegionAddress}
          renderContext={renderContext}
        />}
    ]
]) 

export function CorporateRegistrationSchemeDisplay<TFieldMeta>({ meta, fieldConfig, corporateRegistrationScheme, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CorporateRegistrationSchemeTypeName,
    meta,
    fieldConfig,
    corporateRegistrationScheme,
    renderContext,
    CorporateRegistrationSchemeSubElementsMap,
  )
}

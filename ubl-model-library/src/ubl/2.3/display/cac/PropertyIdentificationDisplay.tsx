import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PropertyIdentification } from  '../../model/cac/PropertyIdentification'
import { PropertyIdentificationField, PropertyIdentificationFieldMeta, PropertyIdentificationTypeName } from  '../../meta/cac/PropertyIdentificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PropertyIdentification, void>
  propertyIdentification: PropertyIdentification[] | undefined
  renderContext: RenderContext
}

export const PropertyIdentificationSubElementsMap: SubElementsTemplatesMap<PropertyIdentificationField, PropertyIdentification, void> = new Map([
    [
      PropertyIdentificationField.UBLExtensions,
      { meta: PropertyIdentificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PropertyIdentificationField.UBLExtensions}
          meta={PropertyIdentificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PropertyIdentificationField.ID,
      { meta: PropertyIdentificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PropertyIdentificationField.ID}
          meta={PropertyIdentificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PropertyIdentificationField.IssuerScopeID,
      { meta: PropertyIdentificationFieldMeta.IssuerScopeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PropertyIdentificationField.IssuerScopeID}
          meta={PropertyIdentificationFieldMeta.IssuerScopeID}
          fieldConfig={fieldConfig}
          identifier={value?.IssuerScopeID}
          renderContext={renderContext}
        />}
    ],

    [
      PropertyIdentificationField.IssuerParty,
      { meta: PropertyIdentificationFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PropertyIdentificationField.IssuerParty}
          meta={PropertyIdentificationFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function PropertyIdentificationDisplay<TFieldMeta>({ meta, fieldConfig, propertyIdentification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PropertyIdentificationTypeName,
    meta,
    fieldConfig,
    propertyIdentification,
    renderContext,
    PropertyIdentificationSubElementsMap,
  )
}

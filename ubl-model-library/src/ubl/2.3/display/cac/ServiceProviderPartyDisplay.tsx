import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceProviderParty } from  '../../model/cac/ServiceProviderParty'
import { ServiceProviderPartyField, ServiceProviderPartyFieldMeta, ServiceProviderPartyTypeName } from  '../../meta/cac/ServiceProviderPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContactDisplay } from './ContactDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ServiceProviderParty, void>
  serviceProviderParty: ServiceProviderParty[] | undefined
  renderContext: RenderContext
}

export const ServiceProviderPartySubElementsMap: SubElementsTemplatesMap<ServiceProviderPartyField, ServiceProviderParty, void> = new Map([
    [
      ServiceProviderPartyField.UBLExtensions,
      { meta: ServiceProviderPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ServiceProviderPartyField.UBLExtensions}
          meta={ServiceProviderPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceProviderPartyField.ID,
      { meta: ServiceProviderPartyFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ServiceProviderPartyField.ID}
          meta={ServiceProviderPartyFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceProviderPartyField.ServiceTypeCode,
      { meta: ServiceProviderPartyFieldMeta.ServiceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ServiceProviderPartyField.ServiceTypeCode}
          meta={ServiceProviderPartyFieldMeta.ServiceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ServiceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceProviderPartyField.ServiceType,
      { meta: ServiceProviderPartyFieldMeta.ServiceType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ServiceProviderPartyField.ServiceType}
          meta={ServiceProviderPartyFieldMeta.ServiceType}
          fieldConfig={fieldConfig}
          text={value?.ServiceType}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceProviderPartyField.Party,
      { meta: ServiceProviderPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ServiceProviderPartyField.Party}
          meta={ServiceProviderPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceProviderPartyField.SellerContact,
      { meta: ServiceProviderPartyFieldMeta.SellerContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={ServiceProviderPartyField.SellerContact}
          meta={ServiceProviderPartyFieldMeta.SellerContact}
          fieldConfig={fieldConfig}
          contact={value?.SellerContact}
          renderContext={renderContext}
        />}
    ]
]) 

export function ServiceProviderPartyDisplay<TFieldMeta>({ meta, fieldConfig, serviceProviderParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ServiceProviderPartyTypeName,
    meta,
    fieldConfig,
    serviceProviderParty,
    renderContext,
    ServiceProviderPartySubElementsMap,
  )
}

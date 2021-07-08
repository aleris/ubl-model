import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Party } from  '../../model/cac/Party'
import { PartyField, PartyFieldMeta, PartyTypeName } from  '../../meta/cac/PartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { AuthorizationDisplay } from './AuthorizationDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContactDisplay } from './ContactDisplay'
import { FinancialAccountDisplay } from './FinancialAccountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LanguageDisplay } from './LanguageDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PartyIdentificationDisplay } from './PartyIdentificationDisplay'
import { PartyLegalEntityDisplay } from './PartyLegalEntityDisplay'
import { PartyNameDisplay } from './PartyNameDisplay'
import { PartyTaxSchemeDisplay } from './PartyTaxSchemeDisplay'
import { PersonDisplay } from './PersonDisplay'
import { PowerOfAttorneyDisplay } from './PowerOfAttorneyDisplay'
import { ServiceProviderPartyDisplay } from './ServiceProviderPartyDisplay'
import { SocialMediaProfileDisplay } from './SocialMediaProfileDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { WebSiteDisplay } from './WebSiteDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Party, void>
  party: Party[] | undefined
  renderContext: RenderContext
}

export const PartySubElementsMap: SubElementsTemplatesMap<PartyField, Party, void> = new Map([
    [
      PartyField.UBLExtensions,
      { meta: PartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PartyField.UBLExtensions}
          meta={PartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.MarkCareIndicator,
      { meta: PartyFieldMeta.MarkCareIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PartyField.MarkCareIndicator}
          meta={PartyFieldMeta.MarkCareIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.MarkCareIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.MarkAttentionIndicator,
      { meta: PartyFieldMeta.MarkAttentionIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PartyField.MarkAttentionIndicator}
          meta={PartyFieldMeta.MarkAttentionIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.MarkAttentionIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.WebsiteURI,
      { meta: PartyFieldMeta.WebsiteURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PartyField.WebsiteURI}
          meta={PartyFieldMeta.WebsiteURI}
          fieldConfig={fieldConfig}
          identifier={value?.WebsiteURI}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.LogoReferenceID,
      { meta: PartyFieldMeta.LogoReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PartyField.LogoReferenceID}
          meta={PartyFieldMeta.LogoReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.LogoReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.EndpointID,
      { meta: PartyFieldMeta.EndpointID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PartyField.EndpointID}
          meta={PartyFieldMeta.EndpointID}
          fieldConfig={fieldConfig}
          identifier={value?.EndpointID}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.IndustryClassificationCode,
      { meta: PartyFieldMeta.IndustryClassificationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PartyField.IndustryClassificationCode}
          meta={PartyFieldMeta.IndustryClassificationCode}
          fieldConfig={fieldConfig}
          code={value?.IndustryClassificationCode}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PartyIdentification,
      { meta: PartyFieldMeta.PartyIdentification,
        template: ({value, renderContext, fieldConfig}) => <PartyIdentificationDisplay
          key={PartyField.PartyIdentification}
          meta={PartyFieldMeta.PartyIdentification}
          fieldConfig={fieldConfig}
          partyIdentification={value?.PartyIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PartyName,
      { meta: PartyFieldMeta.PartyName,
        template: ({value, renderContext, fieldConfig}) => <PartyNameDisplay
          key={PartyField.PartyName}
          meta={PartyFieldMeta.PartyName}
          fieldConfig={fieldConfig}
          partyName={value?.PartyName}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.Language,
      { meta: PartyFieldMeta.Language,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={PartyField.Language}
          meta={PartyFieldMeta.Language}
          fieldConfig={fieldConfig}
          language={value?.Language}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PostalAddress,
      { meta: PartyFieldMeta.PostalAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={PartyField.PostalAddress}
          meta={PartyFieldMeta.PostalAddress}
          fieldConfig={fieldConfig}
          address={value?.PostalAddress}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PhysicalLocation,
      { meta: PartyFieldMeta.PhysicalLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={PartyField.PhysicalLocation}
          meta={PartyFieldMeta.PhysicalLocation}
          fieldConfig={fieldConfig}
          location={value?.PhysicalLocation}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PartyTaxScheme,
      { meta: PartyFieldMeta.PartyTaxScheme,
        template: ({value, renderContext, fieldConfig}) => <PartyTaxSchemeDisplay
          key={PartyField.PartyTaxScheme}
          meta={PartyFieldMeta.PartyTaxScheme}
          fieldConfig={fieldConfig}
          partyTaxScheme={value?.PartyTaxScheme}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PartyLegalEntity,
      { meta: PartyFieldMeta.PartyLegalEntity,
        template: ({value, renderContext, fieldConfig}) => <PartyLegalEntityDisplay
          key={PartyField.PartyLegalEntity}
          meta={PartyFieldMeta.PartyLegalEntity}
          fieldConfig={fieldConfig}
          partyLegalEntity={value?.PartyLegalEntity}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.Contact,
      { meta: PartyFieldMeta.Contact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={PartyField.Contact}
          meta={PartyFieldMeta.Contact}
          fieldConfig={fieldConfig}
          contact={value?.Contact}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.Person,
      { meta: PartyFieldMeta.Person,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={PartyField.Person}
          meta={PartyFieldMeta.Person}
          fieldConfig={fieldConfig}
          person={value?.Person}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.AgentParty,
      { meta: PartyFieldMeta.AgentParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PartyField.AgentParty}
          meta={PartyFieldMeta.AgentParty}
          fieldConfig={fieldConfig}
          party={value?.AgentParty}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.ServiceProviderParty,
      { meta: PartyFieldMeta.ServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <ServiceProviderPartyDisplay
          key={PartyField.ServiceProviderParty}
          meta={PartyFieldMeta.ServiceProviderParty}
          fieldConfig={fieldConfig}
          serviceProviderParty={value?.ServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PowerOfAttorney,
      { meta: PartyFieldMeta.PowerOfAttorney,
        template: ({value, renderContext, fieldConfig}) => <PowerOfAttorneyDisplay
          key={PartyField.PowerOfAttorney}
          meta={PartyFieldMeta.PowerOfAttorney}
          fieldConfig={fieldConfig}
          powerOfAttorney={value?.PowerOfAttorney}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.PartyAuthorization,
      { meta: PartyFieldMeta.PartyAuthorization,
        template: ({value, renderContext, fieldConfig}) => <AuthorizationDisplay
          key={PartyField.PartyAuthorization}
          meta={PartyFieldMeta.PartyAuthorization}
          fieldConfig={fieldConfig}
          authorization={value?.PartyAuthorization}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.FinancialAccount,
      { meta: PartyFieldMeta.FinancialAccount,
        template: ({value, renderContext, fieldConfig}) => <FinancialAccountDisplay
          key={PartyField.FinancialAccount}
          meta={PartyFieldMeta.FinancialAccount}
          fieldConfig={fieldConfig}
          financialAccount={value?.FinancialAccount}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.AdditionalWebSite,
      { meta: PartyFieldMeta.AdditionalWebSite,
        template: ({value, renderContext, fieldConfig}) => <WebSiteDisplay
          key={PartyField.AdditionalWebSite}
          meta={PartyFieldMeta.AdditionalWebSite}
          fieldConfig={fieldConfig}
          webSite={value?.AdditionalWebSite}
          renderContext={renderContext}
        />}
    ],

    [
      PartyField.SocialMediaProfile,
      { meta: PartyFieldMeta.SocialMediaProfile,
        template: ({value, renderContext, fieldConfig}) => <SocialMediaProfileDisplay
          key={PartyField.SocialMediaProfile}
          meta={PartyFieldMeta.SocialMediaProfile}
          fieldConfig={fieldConfig}
          socialMediaProfile={value?.SocialMediaProfile}
          renderContext={renderContext}
        />}
    ]
]) 

export function PartyDisplay<TFieldMeta>({ meta, fieldConfig, party, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PartyTypeName,
    meta,
    fieldConfig,
    party,
    renderContext,
    PartySubElementsMap,
  )
}

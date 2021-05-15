import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Party } from  '../../model/cac/Party'
import { PartyFieldMeta } from  '../../meta/cac/PartyMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import AuthorizationDisplay from './AuthorizationDisplay'
import { Authorization } from '../../model/cac/Authorization'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import FinancialAccountDisplay from './FinancialAccountDisplay'
import { FinancialAccount } from '../../model/cac/FinancialAccount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LanguageDisplay from './LanguageDisplay'
import { Language } from '../../model/cac/Language'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyIdentificationDisplay from './PartyIdentificationDisplay'
import { PartyIdentification } from '../../model/cac/PartyIdentification'
import PartyLegalEntityDisplay from './PartyLegalEntityDisplay'
import { PartyLegalEntity } from '../../model/cac/PartyLegalEntity'
import PartyNameDisplay from './PartyNameDisplay'
import { PartyName } from '../../model/cac/PartyName'
import PartyTaxSchemeDisplay from './PartyTaxSchemeDisplay'
import { PartyTaxScheme } from '../../model/cac/PartyTaxScheme'
import PersonDisplay from './PersonDisplay'
import { Person } from '../../model/cac/Person'
import PowerOfAttorneyDisplay from './PowerOfAttorneyDisplay'
import { PowerOfAttorney } from '../../model/cac/PowerOfAttorney'
import ServiceProviderPartyDisplay from './ServiceProviderPartyDisplay'
import { ServiceProviderParty } from '../../model/cac/ServiceProviderParty'
import SocialMediaProfileDisplay from './SocialMediaProfileDisplay'
import { SocialMediaProfile } from '../../model/cac/SocialMediaProfile'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WebSiteDisplay from './WebSiteDisplay'
import { WebSite } from '../../model/cac/WebSite'

type Props<T> = {
  label: string
  value: Party | undefined
  meta: FieldMeta<T>
}

export default function PartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Party">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PartyFieldMeta.UBLExtensions}
          />

          <IndicatorDisplay
            label="Mark Care Indicator"
            value={value.MarkCareIndicator?.[0]}
            meta={PartyFieldMeta.MarkCareIndicator}
          />

          <IndicatorDisplay
            label="Mark Attention Indicator"
            value={value.MarkAttentionIndicator?.[0]}
            meta={PartyFieldMeta.MarkAttentionIndicator}
          />

          <IdentifierDisplay
            label="Website URI"
            value={value.WebsiteURI?.[0]}
            meta={PartyFieldMeta.WebsiteURI}
          />

          <IdentifierDisplay
            label="Logo Reference"
            value={value.LogoReferenceID?.[0]}
            meta={PartyFieldMeta.LogoReferenceID}
          />

          <IdentifierDisplay
            label="Endpoint Identifier"
            value={value.EndpointID?.[0]}
            meta={PartyFieldMeta.EndpointID}
          />

          <CodeDisplay
            label="Industry Classification Code"
            value={value.IndustryClassificationCode?.[0]}
            meta={PartyFieldMeta.IndustryClassificationCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PartyIdentification"
            label="Party Identification"
            items={value.PartyIdentification}
            meta={PartyFieldMeta.PartyIdentification} 
            itemDisplay={ (itemValue: PartyIdentification, key: string | number) =>
              <PartyIdentificationDisplay
                key={key}
                label="Party Identification"
                value={itemValue}
                meta={PartyFieldMeta.PartyIdentification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PartyName"
            label="Party Name"
            items={value.PartyName}
            meta={PartyFieldMeta.PartyName} 
            itemDisplay={ (itemValue: PartyName, key: string | number) =>
              <PartyNameDisplay
                key={key}
                label="Party Name"
                value={itemValue}
                meta={PartyFieldMeta.PartyName}
              />
            }
          />

          <LanguageDisplay
            label="Language"
            value={value.Language?.[0]}
            meta={PartyFieldMeta.Language}
          />

          <AddressDisplay
            label="Postal Address"
            value={value.PostalAddress?.[0]}
            meta={PartyFieldMeta.PostalAddress}
          />

          <LocationDisplay
            label="Physical Location"
            value={value.PhysicalLocation?.[0]}
            meta={PartyFieldMeta.PhysicalLocation}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PartyTaxScheme"
            label="Party Tax Scheme"
            items={value.PartyTaxScheme}
            meta={PartyFieldMeta.PartyTaxScheme} 
            itemDisplay={ (itemValue: PartyTaxScheme, key: string | number) =>
              <PartyTaxSchemeDisplay
                key={key}
                label="Party Tax Scheme"
                value={itemValue}
                meta={PartyFieldMeta.PartyTaxScheme}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PartyLegalEntity"
            label="Party Legal Entity"
            items={value.PartyLegalEntity}
            meta={PartyFieldMeta.PartyLegalEntity} 
            itemDisplay={ (itemValue: PartyLegalEntity, key: string | number) =>
              <PartyLegalEntityDisplay
                key={key}
                label="Party Legal Entity"
                value={itemValue}
                meta={PartyFieldMeta.PartyLegalEntity}
              />
            }
          />

          <ContactDisplay
            label="Contact"
            value={value.Contact?.[0]}
            meta={PartyFieldMeta.Contact}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Person"
            label="Person"
            items={value.Person}
            meta={PartyFieldMeta.Person} 
            itemDisplay={ (itemValue: Person, key: string | number) =>
              <PersonDisplay
                key={key}
                label="Person"
                value={itemValue}
                meta={PartyFieldMeta.Person}
              />
            }
          />

          <PartyDisplay
            label="Agent Party"
            value={value.AgentParty?.[0]}
            meta={PartyFieldMeta.AgentParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ServiceProviderParty"
            label="Service Provider Party"
            items={value.ServiceProviderParty}
            meta={PartyFieldMeta.ServiceProviderParty} 
            itemDisplay={ (itemValue: ServiceProviderParty, key: string | number) =>
              <ServiceProviderPartyDisplay
                key={key}
                label="Service Provider Party"
                value={itemValue}
                meta={PartyFieldMeta.ServiceProviderParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PowerOfAttorney"
            label="Power Of Attorney"
            items={value.PowerOfAttorney}
            meta={PartyFieldMeta.PowerOfAttorney} 
            itemDisplay={ (itemValue: PowerOfAttorney, key: string | number) =>
              <PowerOfAttorneyDisplay
                key={key}
                label="Power Of Attorney"
                value={itemValue}
                meta={PartyFieldMeta.PowerOfAttorney}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Authorization ubl-PartyAuthorization"
            label="Party Authorization"
            items={value.PartyAuthorization}
            meta={PartyFieldMeta.PartyAuthorization} 
            itemDisplay={ (itemValue: Authorization, key: string | number) =>
              <AuthorizationDisplay
                key={key}
                label="Party Authorization"
                value={itemValue}
                meta={PartyFieldMeta.PartyAuthorization}
              />
            }
          />

          <FinancialAccountDisplay
            label="Financial Account"
            value={value.FinancialAccount?.[0]}
            meta={PartyFieldMeta.FinancialAccount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-WebSite ubl-AdditionalWebSite"
            label="Additional Web Site"
            items={value.AdditionalWebSite}
            meta={PartyFieldMeta.AdditionalWebSite} 
            itemDisplay={ (itemValue: WebSite, key: string | number) =>
              <WebSiteDisplay
                key={key}
                label="Additional Web Site"
                value={itemValue}
                meta={PartyFieldMeta.AdditionalWebSite}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-SocialMediaProfile"
            label="Social Media Profile"
            items={value.SocialMediaProfile}
            meta={PartyFieldMeta.SocialMediaProfile} 
            itemDisplay={ (itemValue: SocialMediaProfile, key: string | number) =>
              <SocialMediaProfileDisplay
                key={key}
                label="Social Media Profile"
                value={itemValue}
                meta={PartyFieldMeta.SocialMediaProfile}
              />
            }
          />
        </div>
    </div>
  )
}

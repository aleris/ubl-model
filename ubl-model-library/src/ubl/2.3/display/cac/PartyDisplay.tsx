import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Party
  meta: FieldMeta<T>
}

export default function PartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Party ubl-PartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Party ubl-UBLExtensions"
          meta={PartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Party ubl-Indicator ubl-MarkCareIndicator"
          meta={PartyFieldMeta.MarkCareIndicator} 
          value={value.MarkCareIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Mark Care Indicator"
              value={itemValue}
              meta={PartyFieldMeta.MarkCareIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Party ubl-Indicator ubl-MarkAttentionIndicator"
          meta={PartyFieldMeta.MarkAttentionIndicator} 
          value={value.MarkAttentionIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Mark Attention Indicator"
              value={itemValue}
              meta={PartyFieldMeta.MarkAttentionIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Party ubl-Identifier ubl-WebsiteURI"
          meta={PartyFieldMeta.WebsiteURI} 
          value={value.WebsiteURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Website URI"
              value={itemValue}
              meta={PartyFieldMeta.WebsiteURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Party ubl-Identifier ubl-LogoReferenceID"
          meta={PartyFieldMeta.LogoReferenceID} 
          value={value.LogoReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Logo Reference"
              value={itemValue}
              meta={PartyFieldMeta.LogoReferenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Party ubl-Identifier ubl-EndpointID"
          meta={PartyFieldMeta.EndpointID} 
          value={value.EndpointID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Endpoint Identifier"
              value={itemValue}
              meta={PartyFieldMeta.EndpointID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Party ubl-Code ubl-IndustryClassificationCode"
          meta={PartyFieldMeta.IndustryClassificationCode} 
          value={value.IndustryClassificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Industry Classification Code"
              value={itemValue}
              meta={PartyFieldMeta.IndustryClassificationCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-PartyIdentification"
          meta={PartyFieldMeta.PartyIdentification} 
          value={value.PartyIdentification}
          itemDisplay={ (itemValue: PartyIdentification, key: string | number) =>
            <PartyIdentificationDisplay
              key={key}
              label="Party Identification"
              value={itemValue}
              meta={PartyFieldMeta.PartyIdentification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-PartyName"
          meta={PartyFieldMeta.PartyName} 
          value={value.PartyName}
          itemDisplay={ (itemValue: PartyName, key: string | number) =>
            <PartyNameDisplay
              key={key}
              label="Party Name"
              value={itemValue}
              meta={PartyFieldMeta.PartyName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Party ubl-Language"
          meta={PartyFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Language"
              value={itemValue}
              meta={PartyFieldMeta.Language}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Party ubl-Address ubl-PostalAddress"
          meta={PartyFieldMeta.PostalAddress} 
          value={value.PostalAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Postal Address"
              value={itemValue}
              meta={PartyFieldMeta.PostalAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Party ubl-Location ubl-PhysicalLocation"
          meta={PartyFieldMeta.PhysicalLocation} 
          value={value.PhysicalLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Physical Location"
              value={itemValue}
              meta={PartyFieldMeta.PhysicalLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-PartyTaxScheme"
          meta={PartyFieldMeta.PartyTaxScheme} 
          value={value.PartyTaxScheme}
          itemDisplay={ (itemValue: PartyTaxScheme, key: string | number) =>
            <PartyTaxSchemeDisplay
              key={key}
              label="Party Tax Scheme"
              value={itemValue}
              meta={PartyFieldMeta.PartyTaxScheme}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-PartyLegalEntity"
          meta={PartyFieldMeta.PartyLegalEntity} 
          value={value.PartyLegalEntity}
          itemDisplay={ (itemValue: PartyLegalEntity, key: string | number) =>
            <PartyLegalEntityDisplay
              key={key}
              label="Party Legal Entity"
              value={itemValue}
              meta={PartyFieldMeta.PartyLegalEntity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Party ubl-Contact"
          meta={PartyFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Contact"
              value={itemValue}
              meta={PartyFieldMeta.Contact}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-Person"
          meta={PartyFieldMeta.Person} 
          value={value.Person}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Person"
              value={itemValue}
              meta={PartyFieldMeta.Person}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Party ubl-AgentParty"
          meta={PartyFieldMeta.AgentParty} 
          value={value.AgentParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Agent Party"
              value={itemValue}
              meta={PartyFieldMeta.AgentParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-ServiceProviderParty"
          meta={PartyFieldMeta.ServiceProviderParty} 
          value={value.ServiceProviderParty}
          itemDisplay={ (itemValue: ServiceProviderParty, key: string | number) =>
            <ServiceProviderPartyDisplay
              key={key}
              label="Service Provider Party"
              value={itemValue}
              meta={PartyFieldMeta.ServiceProviderParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-PowerOfAttorney"
          meta={PartyFieldMeta.PowerOfAttorney} 
          value={value.PowerOfAttorney}
          itemDisplay={ (itemValue: PowerOfAttorney, key: string | number) =>
            <PowerOfAttorneyDisplay
              key={key}
              label="Power Of Attorney"
              value={itemValue}
              meta={PartyFieldMeta.PowerOfAttorney}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-Authorization ubl-PartyAuthorization"
          meta={PartyFieldMeta.PartyAuthorization} 
          value={value.PartyAuthorization}
          itemDisplay={ (itemValue: Authorization, key: string | number) =>
            <AuthorizationDisplay
              key={key}
              label="Party Authorization"
              value={itemValue}
              meta={PartyFieldMeta.PartyAuthorization}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Party ubl-FinancialAccount"
          meta={PartyFieldMeta.FinancialAccount} 
          value={value.FinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay
              key={key}
              label="Financial Account"
              value={itemValue}
              meta={PartyFieldMeta.FinancialAccount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-WebSite ubl-AdditionalWebSite"
          meta={PartyFieldMeta.AdditionalWebSite} 
          value={value.AdditionalWebSite}
          itemDisplay={ (itemValue: WebSite, key: string | number) =>
            <WebSiteDisplay
              key={key}
              label="Additional Web Site"
              value={itemValue}
              meta={PartyFieldMeta.AdditionalWebSite}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Party ubl-SocialMediaProfile"
          meta={PartyFieldMeta.SocialMediaProfile} 
          value={value.SocialMediaProfile}
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

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Party
  meta: FieldMeta<T>
}

export default function PartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.MarkCareIndicator} 
          value={value.MarkCareIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PartyFieldMeta.MarkCareIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.MarkAttentionIndicator} 
          value={value.MarkAttentionIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PartyFieldMeta.MarkAttentionIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.WebsiteURI} 
          value={value.WebsiteURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PartyFieldMeta.WebsiteURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.LogoReferenceID} 
          value={value.LogoReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PartyFieldMeta.LogoReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.EndpointID} 
          value={value.EndpointID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PartyFieldMeta.EndpointID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.IndustryClassificationCode} 
          value={value.IndustryClassificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PartyFieldMeta.IndustryClassificationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PartyIdentification} 
          value={value.PartyIdentification}
          itemDisplay={ (itemValue: PartyIdentification, key: string | number) =>
            <PartyIdentificationDisplay key={key} meta={PartyFieldMeta.PartyIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PartyName} 
          value={value.PartyName}
          itemDisplay={ (itemValue: PartyName, key: string | number) =>
            <PartyNameDisplay key={key} meta={PartyFieldMeta.PartyName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={PartyFieldMeta.Language} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PostalAddress} 
          value={value.PostalAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={PartyFieldMeta.PostalAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PhysicalLocation} 
          value={value.PhysicalLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={PartyFieldMeta.PhysicalLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PartyTaxScheme} 
          value={value.PartyTaxScheme}
          itemDisplay={ (itemValue: PartyTaxScheme, key: string | number) =>
            <PartyTaxSchemeDisplay key={key} meta={PartyFieldMeta.PartyTaxScheme} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PartyLegalEntity} 
          value={value.PartyLegalEntity}
          itemDisplay={ (itemValue: PartyLegalEntity, key: string | number) =>
            <PartyLegalEntityDisplay key={key} meta={PartyFieldMeta.PartyLegalEntity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.Contact} 
          value={value.Contact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={PartyFieldMeta.Contact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.Person} 
          value={value.Person}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={PartyFieldMeta.Person} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.AgentParty} 
          value={value.AgentParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PartyFieldMeta.AgentParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.ServiceProviderParty} 
          value={value.ServiceProviderParty}
          itemDisplay={ (itemValue: ServiceProviderParty, key: string | number) =>
            <ServiceProviderPartyDisplay key={key} meta={PartyFieldMeta.ServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PowerOfAttorney} 
          value={value.PowerOfAttorney}
          itemDisplay={ (itemValue: PowerOfAttorney, key: string | number) =>
            <PowerOfAttorneyDisplay key={key} meta={PartyFieldMeta.PowerOfAttorney} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.PartyAuthorization} 
          value={value.PartyAuthorization}
          itemDisplay={ (itemValue: Authorization, key: string | number) =>
            <AuthorizationDisplay key={key} meta={PartyFieldMeta.PartyAuthorization} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.FinancialAccount} 
          value={value.FinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay key={key} meta={PartyFieldMeta.FinancialAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.AdditionalWebSite} 
          value={value.AdditionalWebSite}
          itemDisplay={ (itemValue: WebSite, key: string | number) =>
            <WebSiteDisplay key={key} meta={PartyFieldMeta.AdditionalWebSite} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyFieldMeta.SocialMediaProfile} 
          value={value.SocialMediaProfile}
          itemDisplay={ (itemValue: SocialMediaProfile, key: string | number) =>
            <SocialMediaProfileDisplay key={key} meta={PartyFieldMeta.SocialMediaProfile} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

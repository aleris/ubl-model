import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ParticipantParty } from  '../../model/cac/ParticipantParty'
import { ParticipantPartyFieldMeta } from  '../../meta/cac/ParticipantPartyMeta'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ParticipantParty
  meta: FieldMeta<T>
}

export default function ParticipantPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ParticipantParty ubl-ParticipantPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ParticipantParty ubl-UBLExtensions"
          meta={ParticipantPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ParticipantParty ubl-Indicator ubl-InitiatingPartyIndicator"
          meta={ParticipantPartyFieldMeta.InitiatingPartyIndicator} 
          value={value.InitiatingPartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Initiating Party Indicator"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.InitiatingPartyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ParticipantParty ubl-Indicator ubl-PrivatePartyIndicator"
          meta={ParticipantPartyFieldMeta.PrivatePartyIndicator} 
          value={value.PrivatePartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Private Party Indicator"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.PrivatePartyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ParticipantParty ubl-Indicator ubl-PublicPartyIndicator"
          meta={ParticipantPartyFieldMeta.PublicPartyIndicator} 
          value={value.PublicPartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Public Party Indicator"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.PublicPartyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ParticipantParty ubl-Indicator ubl-ServiceProviderPartyIndicator"
          meta={ParticipantPartyFieldMeta.ServiceProviderPartyIndicator} 
          value={value.ServiceProviderPartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Service Provider Party Indicator"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.ServiceProviderPartyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ParticipantParty ubl-Party"
          meta={ParticipantPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.Party}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ParticipantParty ubl-Contact ubl-LegalContact"
          meta={ParticipantPartyFieldMeta.LegalContact} 
          value={value.LegalContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Legal Contact"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.LegalContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ParticipantParty ubl-Contact ubl-TechnicalContact"
          meta={ParticipantPartyFieldMeta.TechnicalContact} 
          value={value.TechnicalContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Technical Contact"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.TechnicalContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ParticipantParty ubl-Contact ubl-SupportContact"
          meta={ParticipantPartyFieldMeta.SupportContact} 
          value={value.SupportContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Support Contact"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.SupportContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ParticipantParty ubl-Contact ubl-CommercialContact"
          meta={ParticipantPartyFieldMeta.CommercialContact} 
          value={value.CommercialContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Commercial Contact"
              value={itemValue}
              meta={ParticipantPartyFieldMeta.CommercialContact}
            />
          }
        />
        </div>
    </div>
  )
}

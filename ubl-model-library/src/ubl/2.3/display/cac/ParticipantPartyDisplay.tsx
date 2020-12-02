import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ParticipantParty
  meta: FieldMeta<T>
}

export default function ParticipantPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ParticipantPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.InitiatingPartyIndicator} 
          value={value.InitiatingPartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ParticipantPartyFieldMeta.InitiatingPartyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.PrivatePartyIndicator} 
          value={value.PrivatePartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ParticipantPartyFieldMeta.PrivatePartyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.PublicPartyIndicator} 
          value={value.PublicPartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ParticipantPartyFieldMeta.PublicPartyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.ServiceProviderPartyIndicator} 
          value={value.ServiceProviderPartyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ParticipantPartyFieldMeta.ServiceProviderPartyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ParticipantPartyFieldMeta.Party} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.LegalContact} 
          value={value.LegalContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={ParticipantPartyFieldMeta.LegalContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.TechnicalContact} 
          value={value.TechnicalContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={ParticipantPartyFieldMeta.TechnicalContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.SupportContact} 
          value={value.SupportContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={ParticipantPartyFieldMeta.SupportContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ParticipantPartyFieldMeta.CommercialContact} 
          value={value.CommercialContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={ParticipantPartyFieldMeta.CommercialContact} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

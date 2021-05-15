import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ParticipantParty | undefined
  meta: FieldMeta<T>
}

export default function ParticipantPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ParticipantParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ParticipantPartyFieldMeta.UBLExtensions}
          />

          <IndicatorDisplay
            label="Initiating Party Indicator"
            value={value.InitiatingPartyIndicator?.[0]}
            meta={ParticipantPartyFieldMeta.InitiatingPartyIndicator}
          />

          <IndicatorDisplay
            label="Private Party Indicator"
            value={value.PrivatePartyIndicator?.[0]}
            meta={ParticipantPartyFieldMeta.PrivatePartyIndicator}
          />

          <IndicatorDisplay
            label="Public Party Indicator"
            value={value.PublicPartyIndicator?.[0]}
            meta={ParticipantPartyFieldMeta.PublicPartyIndicator}
          />

          <IndicatorDisplay
            label="Service Provider Party Indicator"
            value={value.ServiceProviderPartyIndicator?.[0]}
            meta={ParticipantPartyFieldMeta.ServiceProviderPartyIndicator}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={ParticipantPartyFieldMeta.Party}
          />

          <ContactDisplay
            label="Legal Contact"
            value={value.LegalContact?.[0]}
            meta={ParticipantPartyFieldMeta.LegalContact}
          />

          <ContactDisplay
            label="Technical Contact"
            value={value.TechnicalContact?.[0]}
            meta={ParticipantPartyFieldMeta.TechnicalContact}
          />

          <ContactDisplay
            label="Support Contact"
            value={value.SupportContact?.[0]}
            meta={ParticipantPartyFieldMeta.SupportContact}
          />

          <ContactDisplay
            label="Commercial Contact"
            value={value.CommercialContact?.[0]}
            meta={ParticipantPartyFieldMeta.CommercialContact}
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ShareholderParty } from  '../../model/cac/ShareholderParty'
import { ShareholderPartyFieldMeta } from  '../../meta/cac/ShareholderPartyMeta'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ShareholderParty
  meta: FieldMeta<T>
}

export default function ShareholderPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ShareholderParty ubl-ShareholderPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ShareholderParty ubl-UBLExtensions"
          meta={ShareholderPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ShareholderPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShareholderParty ubl-Numeric ubl-PartecipationPercent"
          meta={ShareholderPartyFieldMeta.PartecipationPercent} 
          value={value.PartecipationPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Partecipation"
              value={itemValue}
              meta={ShareholderPartyFieldMeta.PartecipationPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShareholderParty ubl-Party"
          meta={ShareholderPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={ShareholderPartyFieldMeta.Party}
            />
          }
        />
        </div>
    </div>
  )
}

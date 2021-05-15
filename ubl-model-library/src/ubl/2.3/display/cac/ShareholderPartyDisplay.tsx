import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ShareholderParty | undefined
  meta: FieldMeta<T>
}

export default function ShareholderPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ShareholderParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ShareholderPartyFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Partecipation"
            value={value.PartecipationPercent?.[0]}
            meta={ShareholderPartyFieldMeta.PartecipationPercent}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={ShareholderPartyFieldMeta.Party}
          />
        </div>
    </div>
  )
}

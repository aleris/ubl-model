import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WinningParty } from  '../../model/cac/WinningParty'
import { WinningPartyFieldMeta } from  '../../meta/cac/WinningPartyMeta'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: WinningParty | undefined
  meta: FieldMeta<T>
}

export default function WinningPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-WinningParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={WinningPartyFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Rank"
            value={value.Rank?.[0]}
            meta={WinningPartyFieldMeta.Rank}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={WinningPartyFieldMeta.Party}
          />
        </div>
    </div>
  )
}

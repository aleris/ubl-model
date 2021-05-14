import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: WinningParty
  meta: FieldMeta<T>
}

export default function WinningPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-WinningParty ubl-WinningPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-WinningParty ubl-UBLExtensions"
          meta={WinningPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={WinningPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WinningParty ubl-Text ubl-Rank"
          meta={WinningPartyFieldMeta.Rank} 
          value={value.Rank}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Rank"
              value={itemValue}
              meta={WinningPartyFieldMeta.Rank}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WinningParty ubl-Party"
          meta={WinningPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={WinningPartyFieldMeta.Party}
            />
          }
        />
        </div>
    </div>
  )
}

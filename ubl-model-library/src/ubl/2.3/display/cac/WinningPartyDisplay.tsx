import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WinningParty } from  '../../model/cac/WinningParty'
import { WinningPartyFieldMeta } from  '../../meta/cac/WinningPartyMeta'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: WinningParty
  meta: FieldMeta<T>
}

export default function WinningPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={WinningPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={WinningPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WinningPartyFieldMeta.Rank} 
          value={value.Rank}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WinningPartyFieldMeta.Rank} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WinningPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WinningPartyFieldMeta.Party} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

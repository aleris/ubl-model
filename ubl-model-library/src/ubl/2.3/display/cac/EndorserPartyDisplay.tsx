import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EndorserParty } from  '../../model/cac/EndorserParty'
import { EndorserPartyFieldMeta } from  '../../meta/cac/EndorserPartyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EndorserParty
  meta: FieldMeta<T>
}

export default function EndorserPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EndorserPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EndorserPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorserPartyFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EndorserPartyFieldMeta.RoleCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorserPartyFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={EndorserPartyFieldMeta.SequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorserPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={EndorserPartyFieldMeta.Party} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorserPartyFieldMeta.SignatoryContact} 
          value={value.SignatoryContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={EndorserPartyFieldMeta.SignatoryContact} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: EndorserParty | undefined
  meta: FieldMeta<T>
}

export default function EndorserPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EndorserParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EndorserPartyFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Role Code"
            value={value.RoleCode?.[0]}
            meta={EndorserPartyFieldMeta.RoleCode}
          />

          <NumericDisplay
            label="Sequence"
            value={value.SequenceNumeric?.[0]}
            meta={EndorserPartyFieldMeta.SequenceNumeric}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={EndorserPartyFieldMeta.Party}
          />

          <ContactDisplay
            label="Signatory Contact"
            value={value.SignatoryContact?.[0]}
            meta={EndorserPartyFieldMeta.SignatoryContact}
          />
        </div>
    </div>
  )
}

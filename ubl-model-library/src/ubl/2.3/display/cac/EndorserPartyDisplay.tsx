import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EndorserParty
  meta: FieldMeta<T>
}

export default function EndorserPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EndorserParty ubl-EndorserPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EndorserParty ubl-UBLExtensions"
          meta={EndorserPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EndorserPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EndorserParty ubl-Code ubl-RoleCode"
          meta={EndorserPartyFieldMeta.RoleCode} 
          value={value.RoleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Role Code"
              value={itemValue}
              meta={EndorserPartyFieldMeta.RoleCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EndorserParty ubl-Numeric ubl-SequenceNumeric"
          meta={EndorserPartyFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Sequence"
              value={itemValue}
              meta={EndorserPartyFieldMeta.SequenceNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EndorserParty ubl-Party"
          meta={EndorserPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={EndorserPartyFieldMeta.Party}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EndorserParty ubl-Contact ubl-SignatoryContact"
          meta={EndorserPartyFieldMeta.SignatoryContact} 
          value={value.SignatoryContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Signatory Contact"
              value={itemValue}
              meta={EndorserPartyFieldMeta.SignatoryContact}
            />
          }
        />
        </div>
    </div>
  )
}

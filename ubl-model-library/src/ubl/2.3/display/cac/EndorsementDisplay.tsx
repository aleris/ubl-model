import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Endorsement } from  '../../model/cac/Endorsement'
import { EndorsementFieldMeta } from  '../../meta/cac/EndorsementMeta'
import EndorserPartyDisplay from './EndorserPartyDisplay'
import { EndorserParty } from '../../model/cac/EndorserParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import SignatureDisplay from './SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Endorsement | undefined
  meta: FieldMeta<T>
}

export default function EndorsementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Endorsement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EndorsementFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Document"
            value={value.DocumentID?.[0]}
            meta={EndorsementFieldMeta.DocumentID}
          />

          <TextDisplay
            label="Approval Status"
            value={value.ApprovalStatus?.[0]}
            meta={EndorsementFieldMeta.ApprovalStatus}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Remarks"
            label="Remarks"
            items={value.Remarks}
            meta={EndorsementFieldMeta.Remarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Remarks"
                value={itemValue}
                meta={EndorsementFieldMeta.Remarks}
              />
            }
          />

          <EndorserPartyDisplay
            label="Endorser Party"
            value={value.EndorserParty?.[0]}
            meta={EndorsementFieldMeta.EndorserParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={EndorsementFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={EndorsementFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}

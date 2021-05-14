import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Endorsement
  meta: FieldMeta<T>
}

export default function EndorsementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Endorsement ubl-EndorsementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Endorsement ubl-UBLExtensions"
          meta={EndorsementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EndorsementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Endorsement ubl-Identifier ubl-DocumentID"
          meta={EndorsementFieldMeta.DocumentID} 
          value={value.DocumentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Document"
              value={itemValue}
              meta={EndorsementFieldMeta.DocumentID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Endorsement ubl-Text ubl-ApprovalStatus"
          meta={EndorsementFieldMeta.ApprovalStatus} 
          value={value.ApprovalStatus}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Approval Status"
              value={itemValue}
              meta={EndorsementFieldMeta.ApprovalStatus}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Endorsement ubl-Text ubl-Remarks"
          meta={EndorsementFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Remarks"
              value={itemValue}
              meta={EndorsementFieldMeta.Remarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Endorsement ubl-EndorserParty"
          meta={EndorsementFieldMeta.EndorserParty} 
          value={value.EndorserParty}
          itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
            <EndorserPartyDisplay
              key={key}
              label="Endorser Party"
              value={itemValue}
              meta={EndorsementFieldMeta.EndorserParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Endorsement ubl-Signature"
          meta={EndorsementFieldMeta.Signature} 
          value={value.Signature}
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

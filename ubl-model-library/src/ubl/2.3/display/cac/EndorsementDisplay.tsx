import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Endorsement
  meta: FieldMeta<T>
}

export default function EndorsementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EndorsementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EndorsementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorsementFieldMeta.DocumentID} 
          value={value.DocumentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EndorsementFieldMeta.DocumentID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorsementFieldMeta.ApprovalStatus} 
          value={value.ApprovalStatus}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EndorsementFieldMeta.ApprovalStatus} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorsementFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EndorsementFieldMeta.Remarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorsementFieldMeta.EndorserParty} 
          value={value.EndorserParty}
          itemDisplay={ (itemValue: EndorserParty, key: string | number) =>
            <EndorserPartyDisplay key={key} meta={EndorsementFieldMeta.EndorserParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EndorsementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={EndorsementFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

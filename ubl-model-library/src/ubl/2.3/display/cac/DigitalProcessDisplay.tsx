import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalProcess } from  '../../model/cac/DigitalProcess'
import { DigitalProcessFieldMeta } from  '../../meta/cac/DigitalProcessMeta'
import DigitalCollaborationDisplay from './DigitalCollaborationDisplay'
import { DigitalCollaboration } from '../../model/cac/DigitalCollaboration'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DigitalProcess
  meta: FieldMeta<T>
}

export default function DigitalProcessDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DigitalProcessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DigitalProcessFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalProcessFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalProcessFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalProcessFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DigitalProcessFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalProcessFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalProcessFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalProcessFieldMeta.DigitalCollaboration} 
          value={value.DigitalCollaboration}
          itemDisplay={ (itemValue: DigitalCollaboration, key: string | number) =>
            <DigitalCollaborationDisplay key={key} meta={DigitalProcessFieldMeta.DigitalCollaboration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalProcessFieldMeta.CertificationDocumentReference} 
          value={value.CertificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DigitalProcessFieldMeta.CertificationDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

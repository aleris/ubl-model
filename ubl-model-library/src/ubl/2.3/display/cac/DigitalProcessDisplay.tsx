import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: DigitalProcess
  meta: FieldMeta<T>
}

export default function DigitalProcessDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DigitalProcess ubl-DigitalProcessType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DigitalProcess ubl-UBLExtensions"
          meta={DigitalProcessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DigitalProcessFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalProcess ubl-Identifier ubl-ID"
          meta={DigitalProcessFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DigitalProcessFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DigitalProcess ubl-Text ubl-Description"
          meta={DigitalProcessFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={DigitalProcessFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalProcess ubl-Identifier ubl-ProfileID"
          meta={DigitalProcessFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={DigitalProcessFieldMeta.ProfileID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalProcess ubl-DigitalCollaboration"
          meta={DigitalProcessFieldMeta.DigitalCollaboration} 
          value={value.DigitalCollaboration}
          itemDisplay={ (itemValue: DigitalCollaboration, key: string | number) =>
            <DigitalCollaborationDisplay
              key={key}
              label="Digital Collaboration"
              value={itemValue}
              meta={DigitalProcessFieldMeta.DigitalCollaboration}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalProcess ubl-DocumentReference ubl-CertificationDocumentReference"
          meta={DigitalProcessFieldMeta.CertificationDocumentReference} 
          value={value.CertificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Certification Document Reference"
              value={itemValue}
              meta={DigitalProcessFieldMeta.CertificationDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}

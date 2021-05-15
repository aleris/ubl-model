import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DigitalProcess | undefined
  meta: FieldMeta<T>
}

export default function DigitalProcessDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DigitalProcess">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DigitalProcessFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DigitalProcessFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={DigitalProcessFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={DigitalProcessFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={DigitalProcessFieldMeta.ProfileID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DigitalCollaboration"
            label="Digital Collaboration"
            items={value.DigitalCollaboration}
            meta={DigitalProcessFieldMeta.DigitalCollaboration} 
            itemDisplay={ (itemValue: DigitalCollaboration, key: string | number) =>
              <DigitalCollaborationDisplay
                key={key}
                label="Digital Collaboration"
                value={itemValue}
                meta={DigitalProcessFieldMeta.DigitalCollaboration}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-CertificationDocumentReference"
            label="Certification Document Reference"
            items={value.CertificationDocumentReference}
            meta={DigitalProcessFieldMeta.CertificationDocumentReference} 
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

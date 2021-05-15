import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Contact } from  '../../model/cac/Contact'
import { ContactFieldMeta } from  '../../meta/cac/ContactMeta'
import CommunicationDisplay from './CommunicationDisplay'
import { Communication } from '../../model/cac/Communication'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Contact | undefined
  meta: FieldMeta<T>
}

export default function ContactDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Contact">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContactFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ContactFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ContactFieldMeta.Name}
          />

          <TextDisplay
            label="Job Title"
            value={value.JobTitle?.[0]}
            meta={ContactFieldMeta.JobTitle}
          />

          <TextDisplay
            label="Department"
            value={value.Department?.[0]}
            meta={ContactFieldMeta.Department}
          />

          <TextDisplay
            label="Telephone"
            value={value.Telephone?.[0]}
            meta={ContactFieldMeta.Telephone}
          />

          <TextDisplay
            label="Telefax"
            value={value.Telefax?.[0]}
            meta={ContactFieldMeta.Telefax}
          />

          <TextDisplay
            label="Electronic Mail"
            value={value.ElectronicMail?.[0]}
            meta={ContactFieldMeta.ElectronicMail}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ContactFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ContactFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Communication ubl-OtherCommunication"
            label="Other Communication"
            items={value.OtherCommunication}
            meta={ContactFieldMeta.OtherCommunication} 
            itemDisplay={ (itemValue: Communication, key: string | number) =>
              <CommunicationDisplay
                key={key}
                label="Other Communication"
                value={itemValue}
                meta={ContactFieldMeta.OtherCommunication}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Contact
  meta: FieldMeta<T>
}

export default function ContactDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Contact ubl-ContactType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Contact ubl-UBLExtensions"
          meta={ContactFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContactFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Identifier ubl-ID"
          meta={ContactFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ContactFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-Name"
          meta={ContactFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ContactFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-JobTitle"
          meta={ContactFieldMeta.JobTitle} 
          value={value.JobTitle}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Job Title"
              value={itemValue}
              meta={ContactFieldMeta.JobTitle}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-Department"
          meta={ContactFieldMeta.Department} 
          value={value.Department}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Department"
              value={itemValue}
              meta={ContactFieldMeta.Department}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-Telephone"
          meta={ContactFieldMeta.Telephone} 
          value={value.Telephone}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Telephone"
              value={itemValue}
              meta={ContactFieldMeta.Telephone}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-Telefax"
          meta={ContactFieldMeta.Telefax} 
          value={value.Telefax}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Telefax"
              value={itemValue}
              meta={ContactFieldMeta.Telefax}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-ElectronicMail"
          meta={ContactFieldMeta.ElectronicMail} 
          value={value.ElectronicMail}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Electronic Mail"
              value={itemValue}
              meta={ContactFieldMeta.ElectronicMail}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Contact ubl-Text ubl-Note"
          meta={ContactFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ContactFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Contact ubl-Communication ubl-OtherCommunication"
          meta={ContactFieldMeta.OtherCommunication} 
          value={value.OtherCommunication}
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

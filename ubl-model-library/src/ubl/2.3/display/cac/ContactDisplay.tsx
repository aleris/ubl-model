import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Contact
  meta: FieldMeta<T>
}

export default function ContactDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContactFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContactFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContactFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.JobTitle} 
          value={value.JobTitle}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.JobTitle} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.Department} 
          value={value.Department}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.Department} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.Telephone} 
          value={value.Telephone}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.Telephone} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.Telefax} 
          value={value.Telefax}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.Telefax} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.ElectronicMail} 
          value={value.ElectronicMail}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.ElectronicMail} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContactFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContactFieldMeta.OtherCommunication} 
          value={value.OtherCommunication}
          itemDisplay={ (itemValue: Communication, key: string | number) =>
            <CommunicationDisplay key={key} meta={ContactFieldMeta.OtherCommunication} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

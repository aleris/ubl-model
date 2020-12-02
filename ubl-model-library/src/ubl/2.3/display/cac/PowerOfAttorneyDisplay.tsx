import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PowerOfAttorney } from  '../../model/cac/PowerOfAttorney'
import { PowerOfAttorneyFieldMeta } from  '../../meta/cac/PowerOfAttorneyMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PowerOfAttorney
  meta: FieldMeta<T>
}

export default function PowerOfAttorneyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PowerOfAttorneyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PowerOfAttorneyFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PowerOfAttorneyFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PowerOfAttorneyFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PowerOfAttorneyFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.NotaryParty} 
          value={value.NotaryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PowerOfAttorneyFieldMeta.NotaryParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.AgentParty} 
          value={value.AgentParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PowerOfAttorneyFieldMeta.AgentParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.WitnessParty} 
          value={value.WitnessParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PowerOfAttorneyFieldMeta.WitnessParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PowerOfAttorneyFieldMeta.MandateDocumentReference} 
          value={value.MandateDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={PowerOfAttorneyFieldMeta.MandateDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

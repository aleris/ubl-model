import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: PowerOfAttorney
  meta: FieldMeta<T>
}

export default function PowerOfAttorneyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PowerOfAttorney ubl-PowerOfAttorneyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PowerOfAttorney ubl-UBLExtensions"
          meta={PowerOfAttorneyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PowerOfAttorney ubl-Identifier ubl-ID"
          meta={PowerOfAttorneyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PowerOfAttorney ubl-Date ubl-IssueDate"
          meta={PowerOfAttorneyFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PowerOfAttorney ubl-Time ubl-IssueTime"
          meta={PowerOfAttorneyFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PowerOfAttorney ubl-Text ubl-Description"
          meta={PowerOfAttorneyFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PowerOfAttorney ubl-Party ubl-NotaryParty"
          meta={PowerOfAttorneyFieldMeta.NotaryParty} 
          value={value.NotaryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Notary Party"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.NotaryParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PowerOfAttorney ubl-Party ubl-AgentParty"
          meta={PowerOfAttorneyFieldMeta.AgentParty} 
          value={value.AgentParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Agent Party"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.AgentParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PowerOfAttorney ubl-Party ubl-WitnessParty"
          meta={PowerOfAttorneyFieldMeta.WitnessParty} 
          value={value.WitnessParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Witness Party"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.WitnessParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PowerOfAttorney ubl-DocumentReference ubl-MandateDocumentReference"
          meta={PowerOfAttorneyFieldMeta.MandateDocumentReference} 
          value={value.MandateDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Mandate Document Reference"
              value={itemValue}
              meta={PowerOfAttorneyFieldMeta.MandateDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}

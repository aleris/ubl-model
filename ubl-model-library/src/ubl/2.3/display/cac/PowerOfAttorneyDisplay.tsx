import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: PowerOfAttorney | undefined
  meta: FieldMeta<T>
}

export default function PowerOfAttorneyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PowerOfAttorney">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PowerOfAttorneyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PowerOfAttorneyFieldMeta.ID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={PowerOfAttorneyFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={PowerOfAttorneyFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={PowerOfAttorneyFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={PowerOfAttorneyFieldMeta.Description}
              />
            }
          />

          <PartyDisplay
            label="Notary Party"
            value={value.NotaryParty?.[0]}
            meta={PowerOfAttorneyFieldMeta.NotaryParty}
          />

          <PartyDisplay
            label="Agent Party"
            value={value.AgentParty?.[0]}
            meta={PowerOfAttorneyFieldMeta.AgentParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-WitnessParty"
            label="Witness Party"
            items={value.WitnessParty}
            meta={PowerOfAttorneyFieldMeta.WitnessParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Witness Party"
                value={itemValue}
                meta={PowerOfAttorneyFieldMeta.WitnessParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-MandateDocumentReference"
            label="Mandate Document Reference"
            items={value.MandateDocumentReference}
            meta={PowerOfAttorneyFieldMeta.MandateDocumentReference} 
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

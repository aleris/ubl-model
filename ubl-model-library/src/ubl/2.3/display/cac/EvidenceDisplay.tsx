import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Evidence } from  '../../model/cac/Evidence'
import { EvidenceFieldMeta } from  '../../meta/cac/EvidenceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LanguageDisplay from './LanguageDisplay'
import { Language } from '../../model/cac/Language'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Evidence | undefined
  meta: FieldMeta<T>
}

export default function EvidenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Evidence">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EvidenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={EvidenceFieldMeta.ID}
          />

          <CodeDisplay
            label="Evidence Type Code"
            value={value.EvidenceTypeCode?.[0]}
            meta={EvidenceFieldMeta.EvidenceTypeCode}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={EvidenceFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={EvidenceFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={EvidenceFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-CandidateStatement"
            label="Candidate Statement"
            items={value.CandidateStatement}
            meta={EvidenceFieldMeta.CandidateStatement} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Candidate Statement"
                value={itemValue}
                meta={EvidenceFieldMeta.CandidateStatement}
              />
            }
          />

          <CodeDisplay
            label="Confidentiality Level Code"
            value={value.ConfidentialityLevelCode?.[0]}
            meta={EvidenceFieldMeta.ConfidentialityLevelCode}
          />

          <PartyDisplay
            label="Evidence Issuing Party"
            value={value.EvidenceIssuingParty?.[0]}
            meta={EvidenceFieldMeta.EvidenceIssuingParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={EvidenceFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={EvidenceFieldMeta.DocumentReference}
              />
            }
          />

          <LanguageDisplay
            label="Language"
            value={value.Language?.[0]}
            meta={EvidenceFieldMeta.Language}
          />
        </div>
    </div>
  )
}

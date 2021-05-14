import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Evidence
  meta: FieldMeta<T>
}

export default function EvidenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Evidence ubl-EvidenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Evidence ubl-UBLExtensions"
          meta={EvidenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EvidenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Evidence ubl-Identifier ubl-ID"
          meta={EvidenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={EvidenceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Evidence ubl-Code ubl-EvidenceTypeCode"
          meta={EvidenceFieldMeta.EvidenceTypeCode} 
          value={value.EvidenceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Evidence Type Code"
              value={itemValue}
              meta={EvidenceFieldMeta.EvidenceTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Evidence ubl-Text ubl-Name"
          meta={EvidenceFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={EvidenceFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Evidence ubl-Text ubl-Description"
          meta={EvidenceFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={EvidenceFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Evidence ubl-Text ubl-CandidateStatement"
          meta={EvidenceFieldMeta.CandidateStatement} 
          value={value.CandidateStatement}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Candidate Statement"
              value={itemValue}
              meta={EvidenceFieldMeta.CandidateStatement}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Evidence ubl-Code ubl-ConfidentialityLevelCode"
          meta={EvidenceFieldMeta.ConfidentialityLevelCode} 
          value={value.ConfidentialityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Confidentiality Level Code"
              value={itemValue}
              meta={EvidenceFieldMeta.ConfidentialityLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Evidence ubl-Party ubl-EvidenceIssuingParty"
          meta={EvidenceFieldMeta.EvidenceIssuingParty} 
          value={value.EvidenceIssuingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Evidence Issuing Party"
              value={itemValue}
              meta={EvidenceFieldMeta.EvidenceIssuingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Evidence ubl-DocumentReference"
          meta={EvidenceFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={EvidenceFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Evidence ubl-Language"
          meta={EvidenceFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Language"
              value={itemValue}
              meta={EvidenceFieldMeta.Language}
            />
          }
        />
        </div>
    </div>
  )
}

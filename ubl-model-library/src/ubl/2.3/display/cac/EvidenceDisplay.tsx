import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Evidence
  meta: FieldMeta<T>
}

export default function EvidenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EvidenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EvidenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EvidenceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.EvidenceTypeCode} 
          value={value.EvidenceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EvidenceFieldMeta.EvidenceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EvidenceFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EvidenceFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.CandidateStatement} 
          value={value.CandidateStatement}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EvidenceFieldMeta.CandidateStatement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.ConfidentialityLevelCode} 
          value={value.ConfidentialityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={EvidenceFieldMeta.ConfidentialityLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.EvidenceIssuingParty} 
          value={value.EvidenceIssuingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={EvidenceFieldMeta.EvidenceIssuingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={EvidenceFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EvidenceFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={EvidenceFieldMeta.Language} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

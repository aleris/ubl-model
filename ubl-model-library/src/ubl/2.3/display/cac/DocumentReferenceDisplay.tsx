import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentReference } from  '../../model/cac/DocumentReference'
import { DocumentReferenceFieldMeta } from  '../../meta/cac/DocumentReferenceMeta'
import AttachmentDisplay from './AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ResultOfVerificationDisplay from './ResultOfVerificationDisplay'
import { ResultOfVerification } from '../../model/cac/ResultOfVerification'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DocumentReference
  meta: FieldMeta<T>
}

export default function DocumentReferenceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DocumentReferenceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentReferenceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={DocumentReferenceFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentReferenceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DocumentReferenceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DocumentReferenceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DocumentReferenceFieldMeta.DocumentTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.DocumentType} 
          value={value.DocumentType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentReferenceFieldMeta.DocumentType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.XPath} 
          value={value.XPath}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentReferenceFieldMeta.XPath} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress} 
          value={value.ReferencedDocumentInternalAddress}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.LanguageID} 
          value={value.LanguageID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentReferenceFieldMeta.LanguageID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.LocaleCode} 
          value={value.LocaleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DocumentReferenceFieldMeta.LocaleCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentReferenceFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DocumentReferenceFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.DocumentDescription} 
          value={value.DocumentDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentReferenceFieldMeta.DocumentDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.Attachment} 
          value={value.Attachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay key={key} meta={DocumentReferenceFieldMeta.Attachment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={DocumentReferenceFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentReferenceFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentReferenceFieldMeta.ResultOfVerification} 
          value={value.ResultOfVerification}
          itemDisplay={ (itemValue: ResultOfVerification, key: string | number) =>
            <ResultOfVerificationDisplay key={key} meta={DocumentReferenceFieldMeta.ResultOfVerification} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

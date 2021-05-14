import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: DocumentReference
  meta: FieldMeta<T>
}

export default function DocumentReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DocumentReference ubl-DocumentReferenceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DocumentReference ubl-UBLExtensions"
          meta={DocumentReferenceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Identifier ubl-ID"
          meta={DocumentReferenceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Indicator ubl-CopyIndicator"
          meta={DocumentReferenceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Identifier ubl-UUID"
          meta={DocumentReferenceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Date ubl-IssueDate"
          meta={DocumentReferenceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Time ubl-IssueTime"
          meta={DocumentReferenceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Code ubl-DocumentTypeCode"
          meta={DocumentReferenceFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Type Code"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.DocumentTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Text ubl-DocumentType"
          meta={DocumentReferenceFieldMeta.DocumentType} 
          value={value.DocumentType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Document Type"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.DocumentType}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Text ubl-XPath"
          meta={DocumentReferenceFieldMeta.XPath} 
          value={value.XPath}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="XPath"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.XPath}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Text ubl-ReferencedDocumentInternalAddress"
          meta={DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress} 
          value={value.ReferencedDocumentInternalAddress}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Referenced Document Internal Address"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Identifier ubl-LanguageID"
          meta={DocumentReferenceFieldMeta.LanguageID} 
          value={value.LanguageID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Language"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.LanguageID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Code ubl-LocaleCode"
          meta={DocumentReferenceFieldMeta.LocaleCode} 
          value={value.LocaleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Locale Code"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.LocaleCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Identifier ubl-VersionID"
          meta={DocumentReferenceFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Code ubl-DocumentStatusCode"
          meta={DocumentReferenceFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Code"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.DocumentStatusCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DocumentReference ubl-Text ubl-DocumentDescription"
          meta={DocumentReferenceFieldMeta.DocumentDescription} 
          value={value.DocumentDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Document Description"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.DocumentDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentReference ubl-Attachment"
          meta={DocumentReferenceFieldMeta.Attachment} 
          value={value.Attachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay
              key={key}
              label="Attachment"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.Attachment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentReference ubl-Period ubl-ValidityPeriod"
          meta={DocumentReferenceFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentReference ubl-Party ubl-IssuerParty"
          meta={DocumentReferenceFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentReference ubl-ResultOfVerification"
          meta={DocumentReferenceFieldMeta.ResultOfVerification} 
          value={value.ResultOfVerification}
          itemDisplay={ (itemValue: ResultOfVerification, key: string | number) =>
            <ResultOfVerificationDisplay
              key={key}
              label="Result Of Verification"
              value={itemValue}
              meta={DocumentReferenceFieldMeta.ResultOfVerification}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DocumentReference | undefined
  meta: FieldMeta<T>
}

export default function DocumentReferenceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DocumentReference">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DocumentReferenceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DocumentReferenceFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={DocumentReferenceFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DocumentReferenceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={DocumentReferenceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={DocumentReferenceFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Document Type Code"
            value={value.DocumentTypeCode?.[0]}
            meta={DocumentReferenceFieldMeta.DocumentTypeCode}
          />

          <TextDisplay
            label="Document Type"
            value={value.DocumentType?.[0]}
            meta={DocumentReferenceFieldMeta.DocumentType}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-XPath"
            label="XPath"
            items={value.XPath}
            meta={DocumentReferenceFieldMeta.XPath} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="XPath"
                value={itemValue}
                meta={DocumentReferenceFieldMeta.XPath}
              />
            }
          />

          <TextDisplay
            label="Referenced Document Internal Address"
            value={value.ReferencedDocumentInternalAddress?.[0]}
            meta={DocumentReferenceFieldMeta.ReferencedDocumentInternalAddress}
          />

          <IdentifierDisplay
            label="Language"
            value={value.LanguageID?.[0]}
            meta={DocumentReferenceFieldMeta.LanguageID}
          />

          <CodeDisplay
            label="Locale Code"
            value={value.LocaleCode?.[0]}
            meta={DocumentReferenceFieldMeta.LocaleCode}
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={DocumentReferenceFieldMeta.VersionID}
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={DocumentReferenceFieldMeta.DocumentStatusCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-DocumentDescription"
            label="Document Description"
            items={value.DocumentDescription}
            meta={DocumentReferenceFieldMeta.DocumentDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Document Description"
                value={itemValue}
                meta={DocumentReferenceFieldMeta.DocumentDescription}
              />
            }
          />

          <AttachmentDisplay
            label="Attachment"
            value={value.Attachment?.[0]}
            meta={DocumentReferenceFieldMeta.Attachment}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={DocumentReferenceFieldMeta.ValidityPeriod}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={DocumentReferenceFieldMeta.IssuerParty}
          />

          <ResultOfVerificationDisplay
            label="Result Of Verification"
            value={value.ResultOfVerification?.[0]}
            meta={DocumentReferenceFieldMeta.ResultOfVerification}
          />
        </div>
    </div>
  )
}

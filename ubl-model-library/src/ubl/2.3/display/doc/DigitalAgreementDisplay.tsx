import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalAgreement } from  '../../model/doc/DigitalAgreement'
import { DigitalAgreementFieldMeta } from  '../../meta/doc/DigitalAgreementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CountryDisplay from '../cac/CountryDisplay'
import { Country } from '../../model/cac/Country'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DigitalAgreementTermsDisplay from '../cac/DigitalAgreementTermsDisplay'
import { DigitalAgreementTerms } from '../../model/cac/DigitalAgreementTerms'
import DigitalProcessDisplay from '../cac/DigitalProcessDisplay'
import { DigitalProcess } from '../../model/cac/DigitalProcess'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ParticipantPartyDisplay from '../cac/ParticipantPartyDisplay'
import { ParticipantParty } from '../../model/cac/ParticipantParty'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DigitalAgreement | undefined
  meta: FieldMeta<T>
}

export default function DigitalAgreementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-DigitalAgreement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DigitalAgreementFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={DigitalAgreementFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={DigitalAgreementFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={DigitalAgreementFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={DigitalAgreementFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DigitalAgreementFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DigitalAgreementFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={DigitalAgreementFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={DigitalAgreementFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Agreement Type Code"
            value={value.AgreementTypeCode?.[0]}
            meta={DigitalAgreementFieldMeta.AgreementTypeCode}
          />

          <IdentifierDisplay
            label="Version Identifier"
            value={value.VersionID?.[0]}
            meta={DigitalAgreementFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version Identifier"
            value={value.PreviousVersionID?.[0]}
            meta={DigitalAgreementFieldMeta.PreviousVersionID}
          />

          <CodeDisplay
            label="Required Response Message Level Code"
            value={value.RequiredResponseMessageLevelCode?.[0]}
            meta={DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={DigitalAgreementFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={DigitalAgreementFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Governor Party"
            value={value.GovernorParty?.[0]}
            meta={DigitalAgreementFieldMeta.GovernorParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ParticipantParty"
            label="Participant Party"
            items={value.ParticipantParty}
            meta={DigitalAgreementFieldMeta.ParticipantParty} 
            itemDisplay={ (itemValue: ParticipantParty, key: string | number) =>
              <ParticipantPartyDisplay
                key={key}
                label="Participant Party"
                value={itemValue}
                meta={DigitalAgreementFieldMeta.ParticipantParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Country ubl-AgreementCountry"
            label="Agreement Country"
            items={value.AgreementCountry}
            meta={DigitalAgreementFieldMeta.AgreementCountry} 
            itemDisplay={ (itemValue: Country, key: string | number) =>
              <CountryDisplay
                key={key}
                label="Agreement Country"
                value={itemValue}
                meta={DigitalAgreementFieldMeta.AgreementCountry}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-RequiredCertificationDocumentReference"
            label="Required Certification Document Reference"
            items={value.RequiredCertificationDocumentReference}
            meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Required Certification Document Reference"
                value={itemValue}
                meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference}
              />
            }
          />

          <DigitalAgreementTermsDisplay
            label="Digital Agreement Terms"
            value={value.DigitalAgreementTerms?.[0]}
            meta={DigitalAgreementFieldMeta.DigitalAgreementTerms}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DigitalProcess"
            label="Digital Process"
            items={value.DigitalProcess}
            meta={DigitalAgreementFieldMeta.DigitalProcess} 
            itemDisplay={ (itemValue: DigitalProcess, key: string | number) =>
              <DigitalProcessDisplay
                key={key}
                label="Digital Process"
                value={itemValue}
                meta={DigitalAgreementFieldMeta.DigitalProcess}
              />
            }
          />
        </div>
    </div>
  )
}

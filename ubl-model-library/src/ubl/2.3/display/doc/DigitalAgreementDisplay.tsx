import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DigitalAgreement
  meta: FieldMeta<T>
}

export default function DigitalAgreementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-DigitalAgreement ubl-DigitalAgreementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DigitalAgreement ubl-UBLExtensions"
          meta={DigitalAgreementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-UBLVersionID"
          meta={DigitalAgreementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-CustomizationID"
          meta={DigitalAgreementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-ProfileID"
          meta={DigitalAgreementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-ProfileExecutionID"
          meta={DigitalAgreementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-ID"
          meta={DigitalAgreementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-UUID"
          meta={DigitalAgreementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Date ubl-IssueDate"
          meta={DigitalAgreementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Time ubl-IssueTime"
          meta={DigitalAgreementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Code ubl-AgreementTypeCode"
          meta={DigitalAgreementFieldMeta.AgreementTypeCode} 
          value={value.AgreementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Agreement Type Code"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.AgreementTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-VersionID"
          meta={DigitalAgreementFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Identifier ubl-PreviousVersionID"
          meta={DigitalAgreementFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version Identifier"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalAgreement ubl-Code ubl-RequiredResponseMessageLevelCode"
          meta={DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode} 
          value={value.RequiredResponseMessageLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Required Response Message Level Code"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-Signature"
          meta={DigitalAgreementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-Party ubl-GovernorParty"
          meta={DigitalAgreementFieldMeta.GovernorParty} 
          value={value.GovernorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Governor Party"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.GovernorParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-ParticipantParty"
          meta={DigitalAgreementFieldMeta.ParticipantParty} 
          value={value.ParticipantParty}
          itemDisplay={ (itemValue: ParticipantParty, key: string | number) =>
            <ParticipantPartyDisplay
              key={key}
              label="Participant Party"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.ParticipantParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-Country ubl-AgreementCountry"
          meta={DigitalAgreementFieldMeta.AgreementCountry} 
          value={value.AgreementCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Agreement Country"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.AgreementCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-DocumentReference ubl-RequiredCertificationDocumentReference"
          meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference} 
          value={value.RequiredCertificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Required Certification Document Reference"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-DigitalAgreementTerms"
          meta={DigitalAgreementFieldMeta.DigitalAgreementTerms} 
          value={value.DigitalAgreementTerms}
          itemDisplay={ (itemValue: DigitalAgreementTerms, key: string | number) =>
            <DigitalAgreementTermsDisplay
              key={key}
              label="Digital Agreement Terms"
              value={itemValue}
              meta={DigitalAgreementFieldMeta.DigitalAgreementTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalAgreement ubl-DigitalProcess"
          meta={DigitalAgreementFieldMeta.DigitalProcess} 
          value={value.DigitalProcess}
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

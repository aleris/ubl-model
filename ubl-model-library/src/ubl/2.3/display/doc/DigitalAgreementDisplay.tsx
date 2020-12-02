import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DigitalAgreement
  meta: FieldMeta<T>
}

export default function DigitalAgreementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DigitalAgreementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DigitalAgreementFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DigitalAgreementFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.AgreementTypeCode} 
          value={value.AgreementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DigitalAgreementFieldMeta.AgreementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalAgreementFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode} 
          value={value.RequiredResponseMessageLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={DigitalAgreementFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.GovernorParty} 
          value={value.GovernorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DigitalAgreementFieldMeta.GovernorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.ParticipantParty} 
          value={value.ParticipantParty}
          itemDisplay={ (itemValue: ParticipantParty, key: string | number) =>
            <ParticipantPartyDisplay key={key} meta={DigitalAgreementFieldMeta.ParticipantParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.AgreementCountry} 
          value={value.AgreementCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={DigitalAgreementFieldMeta.AgreementCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference} 
          value={value.RequiredCertificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.DigitalAgreementTerms} 
          value={value.DigitalAgreementTerms}
          itemDisplay={ (itemValue: DigitalAgreementTerms, key: string | number) =>
            <DigitalAgreementTermsDisplay key={key} meta={DigitalAgreementFieldMeta.DigitalAgreementTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalAgreementFieldMeta.DigitalProcess} 
          value={value.DigitalProcess}
          itemDisplay={ (itemValue: DigitalProcess, key: string | number) =>
            <DigitalProcessDisplay key={key} meta={DigitalAgreementFieldMeta.DigitalProcess} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GuaranteeCertificate } from  '../../model/doc/GuaranteeCertificate'
import { GuaranteeCertificateFieldMeta } from  '../../meta/doc/GuaranteeCertificateMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ImmobilizedSecurityDisplay from '../cac/ImmobilizedSecurityDisplay'
import { ImmobilizedSecurity } from '../../model/cac/ImmobilizedSecurity'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import RegulationDisplay from '../cac/RegulationDisplay'
import { Regulation } from '../../model/cac/Regulation'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: GuaranteeCertificate
  meta: FieldMeta<T>
}

export default function GuaranteeCertificateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-GuaranteeCertificate ubl-GuaranteeCertificateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GuaranteeCertificate ubl-UBLExtensions"
          meta={GuaranteeCertificateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-UBLVersionID"
          meta={GuaranteeCertificateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-CustomizationID"
          meta={GuaranteeCertificateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-ProfileID"
          meta={GuaranteeCertificateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-ProfileExecutionID"
          meta={GuaranteeCertificateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-ID"
          meta={GuaranteeCertificateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Indicator ubl-CopyIndicator"
          meta={GuaranteeCertificateFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-UUID"
          meta={GuaranteeCertificateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Identifier ubl-ContractFolderID"
          meta={GuaranteeCertificateFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Date ubl-IssueDate"
          meta={GuaranteeCertificateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Time ubl-IssueTime"
          meta={GuaranteeCertificateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Code ubl-GuaranteeTypeCode"
          meta={GuaranteeCertificateFieldMeta.GuaranteeTypeCode} 
          value={value.GuaranteeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Guarantee Type Code"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.GuaranteeTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Text ubl-Purpose"
          meta={GuaranteeCertificateFieldMeta.Purpose} 
          value={value.Purpose}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Purpose"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.Purpose}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Amount ubl-LiabilityAmount"
          meta={GuaranteeCertificateFieldMeta.LiabilityAmount} 
          value={value.LiabilityAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Liability"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.LiabilityAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Code ubl-ConstitutionCode"
          meta={GuaranteeCertificateFieldMeta.ConstitutionCode} 
          value={value.ConstitutionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Constitution Code"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ConstitutionCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GuaranteeCertificate ubl-Text ubl-Note"
          meta={GuaranteeCertificateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-Period ubl-ApplicablePeriod"
          meta={GuaranteeCertificateFieldMeta.ApplicablePeriod} 
          value={value.ApplicablePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Applicable Period"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ApplicablePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-Regulation ubl-ApplicableRegulation"
          meta={GuaranteeCertificateFieldMeta.ApplicableRegulation} 
          value={value.ApplicableRegulation}
          itemDisplay={ (itemValue: Regulation, key: string | number) =>
            <RegulationDisplay
              key={key}
              label="Applicable Regulation"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ApplicableRegulation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-DocumentReference ubl-GuaranteeDocumentReference"
          meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference} 
          value={value.GuaranteeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Guarantee Document Reference"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-ImmobilizedSecurity"
          meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity} 
          value={value.ImmobilizedSecurity}
          itemDisplay={ (itemValue: ImmobilizedSecurity, key: string | number) =>
            <ImmobilizedSecurityDisplay
              key={key}
              label="Immobilized Security"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-Signature"
          meta={GuaranteeCertificateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-Party ubl-GuarantorParty"
          meta={GuaranteeCertificateFieldMeta.GuarantorParty} 
          value={value.GuarantorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Guarantor Party"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.GuarantorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-Party ubl-InterestedParty"
          meta={GuaranteeCertificateFieldMeta.InterestedParty} 
          value={value.InterestedParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Interested Party"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.InterestedParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GuaranteeCertificate ubl-Party ubl-BeneficiaryParty"
          meta={GuaranteeCertificateFieldMeta.BeneficiaryParty} 
          value={value.BeneficiaryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Beneficiary Party"
              value={itemValue}
              meta={GuaranteeCertificateFieldMeta.BeneficiaryParty}
            />
          }
        />
        </div>
    </div>
  )
}

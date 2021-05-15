import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: GuaranteeCertificate | undefined
  meta: FieldMeta<T>
}

export default function GuaranteeCertificateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-GuaranteeCertificate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GuaranteeCertificateFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={GuaranteeCertificateFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={GuaranteeCertificateFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={GuaranteeCertificateFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={GuaranteeCertificateFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GuaranteeCertificateFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={GuaranteeCertificateFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={GuaranteeCertificateFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={GuaranteeCertificateFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={GuaranteeCertificateFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={GuaranteeCertificateFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Guarantee Type Code"
            value={value.GuaranteeTypeCode?.[0]}
            meta={GuaranteeCertificateFieldMeta.GuaranteeTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Purpose"
            label="Purpose"
            items={value.Purpose}
            meta={GuaranteeCertificateFieldMeta.Purpose} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Purpose"
                value={itemValue}
                meta={GuaranteeCertificateFieldMeta.Purpose}
              />
            }
          />

          <AmountDisplay
            label="Liability"
            value={value.LiabilityAmount?.[0]}
            meta={GuaranteeCertificateFieldMeta.LiabilityAmount}
          />

          <CodeDisplay
            label="Constitution Code"
            value={value.ConstitutionCode?.[0]}
            meta={GuaranteeCertificateFieldMeta.ConstitutionCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={GuaranteeCertificateFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={GuaranteeCertificateFieldMeta.Note}
              />
            }
          />

          <PeriodDisplay
            label="Applicable Period"
            value={value.ApplicablePeriod?.[0]}
            meta={GuaranteeCertificateFieldMeta.ApplicablePeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Regulation ubl-ApplicableRegulation"
            label="Applicable Regulation"
            items={value.ApplicableRegulation}
            meta={GuaranteeCertificateFieldMeta.ApplicableRegulation} 
            itemDisplay={ (itemValue: Regulation, key: string | number) =>
              <RegulationDisplay
                key={key}
                label="Applicable Regulation"
                value={itemValue}
                meta={GuaranteeCertificateFieldMeta.ApplicableRegulation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-GuaranteeDocumentReference"
            label="Guarantee Document Reference"
            items={value.GuaranteeDocumentReference}
            meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Guarantee Document Reference"
                value={itemValue}
                meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ImmobilizedSecurity"
            label="Immobilized Security"
            items={value.ImmobilizedSecurity}
            meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity} 
            itemDisplay={ (itemValue: ImmobilizedSecurity, key: string | number) =>
              <ImmobilizedSecurityDisplay
                key={key}
                label="Immobilized Security"
                value={itemValue}
                meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={GuaranteeCertificateFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={GuaranteeCertificateFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Guarantor Party"
            value={value.GuarantorParty?.[0]}
            meta={GuaranteeCertificateFieldMeta.GuarantorParty}
          />

          <PartyDisplay
            label="Interested Party"
            value={value.InterestedParty?.[0]}
            meta={GuaranteeCertificateFieldMeta.InterestedParty}
          />

          <PartyDisplay
            label="Beneficiary Party"
            value={value.BeneficiaryParty?.[0]}
            meta={GuaranteeCertificateFieldMeta.BeneficiaryParty}
          />
        </div>
    </div>
  )
}

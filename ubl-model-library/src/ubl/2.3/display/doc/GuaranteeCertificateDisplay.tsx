import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: GuaranteeCertificate
  meta: FieldMeta<T>
}

export default function GuaranteeCertificateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GuaranteeCertificateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={GuaranteeCertificateFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GuaranteeCertificateFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={GuaranteeCertificateFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={GuaranteeCertificateFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.GuaranteeTypeCode} 
          value={value.GuaranteeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GuaranteeCertificateFieldMeta.GuaranteeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.Purpose} 
          value={value.Purpose}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GuaranteeCertificateFieldMeta.Purpose} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.LiabilityAmount} 
          value={value.LiabilityAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GuaranteeCertificateFieldMeta.LiabilityAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ConstitutionCode} 
          value={value.ConstitutionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GuaranteeCertificateFieldMeta.ConstitutionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GuaranteeCertificateFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ApplicablePeriod} 
          value={value.ApplicablePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={GuaranteeCertificateFieldMeta.ApplicablePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ApplicableRegulation} 
          value={value.ApplicableRegulation}
          itemDisplay={ (itemValue: Regulation, key: string | number) =>
            <RegulationDisplay key={key} meta={GuaranteeCertificateFieldMeta.ApplicableRegulation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference} 
          value={value.GuaranteeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GuaranteeCertificateFieldMeta.GuaranteeDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity} 
          value={value.ImmobilizedSecurity}
          itemDisplay={ (itemValue: ImmobilizedSecurity, key: string | number) =>
            <ImmobilizedSecurityDisplay key={key} meta={GuaranteeCertificateFieldMeta.ImmobilizedSecurity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={GuaranteeCertificateFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.GuarantorParty} 
          value={value.GuarantorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GuaranteeCertificateFieldMeta.GuarantorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.InterestedParty} 
          value={value.InterestedParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GuaranteeCertificateFieldMeta.InterestedParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GuaranteeCertificateFieldMeta.BeneficiaryParty} 
          value={value.BeneficiaryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GuaranteeCertificateFieldMeta.BeneficiaryParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Tender } from  '../../model/doc/Tender'
import { TenderFieldMeta } from  '../../meta/doc/TenderMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TenderedProjectDisplay from '../cac/TenderedProjectDisplay'
import { TenderedProject } from '../../model/cac/TenderedProject'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Tender
  meta: FieldMeta<T>
}

export default function TenderDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.TenderTypeCode} 
          value={value.TenderTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderFieldMeta.TenderTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TenderFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.CallForTenderDocumentReference} 
          value={value.CallForTenderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderFieldMeta.CallForTenderDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TenderFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.TendererParty} 
          value={value.TendererParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderFieldMeta.TendererParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.TendererQualificationDocumentReference} 
          value={value.TendererQualificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderFieldMeta.TendererQualificationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.SubcontractorParty} 
          value={value.SubcontractorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderFieldMeta.SubcontractorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={TenderFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={TenderFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderFieldMeta.TenderedProject} 
          value={value.TenderedProject}
          itemDisplay={ (itemValue: TenderedProject, key: string | number) =>
            <TenderedProjectDisplay key={key} meta={TenderFieldMeta.TenderedProject} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

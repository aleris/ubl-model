import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationApplicationResponse } from  '../../model/doc/QualificationApplicationResponse'
import { QualificationApplicationResponseFieldMeta } from  '../../meta/doc/QualificationApplicationResponseMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EconomicOperatorPartyDisplay from '../cac/EconomicOperatorPartyDisplay'
import { EconomicOperatorParty } from '../../model/cac/EconomicOperatorParty'
import EvidenceDisplay from '../cac/EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ProcurementProjectDisplay from '../cac/ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import ProcurementProjectLotDisplay from '../cac/ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TenderingCriterionDisplay from '../cac/TenderingCriterionDisplay'
import { TenderingCriterion } from '../../model/cac/TenderingCriterion'
import TenderingCriterionResponseDisplay from '../cac/TenderingCriterionResponseDisplay'
import { TenderingCriterionResponse } from '../../model/cac/TenderingCriterionResponse'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: QualificationApplicationResponse
  meta: FieldMeta<T>
}

export default function QualificationApplicationResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-QualificationApplicationResponse ubl-QualificationApplicationResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-QualificationApplicationResponse ubl-UBLExtensions"
          meta={QualificationApplicationResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-UBLVersionID"
          meta={QualificationApplicationResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-CustomizationID"
          meta={QualificationApplicationResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-ProfileID"
          meta={QualificationApplicationResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-ProfileExecutionID"
          meta={QualificationApplicationResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-ID"
          meta={QualificationApplicationResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Indicator ubl-CopyIndicator"
          meta={QualificationApplicationResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-UUID"
          meta={QualificationApplicationResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-ContractFolderID"
          meta={QualificationApplicationResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Text ubl-ContractName"
          meta={QualificationApplicationResponseFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ContractName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Date ubl-IssueDate"
          meta={QualificationApplicationResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Time ubl-IssueTime"
          meta={QualificationApplicationResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Text ubl-EconomicOperatorGroupName"
          meta={QualificationApplicationResponseFieldMeta.EconomicOperatorGroupName} 
          value={value.EconomicOperatorGroupName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Economic Operator Group Name"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.EconomicOperatorGroupName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-VersionID"
          meta={QualificationApplicationResponseFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Identifier ubl-PreviousVersionID"
          meta={QualificationApplicationResponseFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Code ubl-ProcedureCode"
          meta={QualificationApplicationResponseFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procedure Code"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ProcedureCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Code ubl-QualificationApplicationTypeCode"
          meta={QualificationApplicationResponseFieldMeta.QualificationApplicationTypeCode} 
          value={value.QualificationApplicationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Qualification Application Type Code"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.QualificationApplicationTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Text ubl-WeightScoringMethodologyNote"
          meta={QualificationApplicationResponseFieldMeta.WeightScoringMethodologyNote} 
          value={value.WeightScoringMethodologyNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Weight Scoring Methodology Note"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.WeightScoringMethodologyNote}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Code ubl-WeightingTypeCode"
          meta={QualificationApplicationResponseFieldMeta.WeightingTypeCode} 
          value={value.WeightingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Weighting Type Code"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.WeightingTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationApplicationResponse ubl-Text ubl-Note"
          meta={QualificationApplicationResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-ContractingParty"
          meta={QualificationApplicationResponseFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-EconomicOperatorParty"
          meta={QualificationApplicationResponseFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-ProcurementProject"
          meta={QualificationApplicationResponseFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-ProcurementProjectLot"
          meta={QualificationApplicationResponseFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.ProcurementProjectLot}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-TenderingCriterion"
          meta={QualificationApplicationResponseFieldMeta.TenderingCriterion} 
          value={value.TenderingCriterion}
          itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
            <TenderingCriterionDisplay
              key={key}
              label="Tendering Criterion"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.TenderingCriterion}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-TenderingCriterionResponse"
          meta={QualificationApplicationResponseFieldMeta.TenderingCriterionResponse} 
          value={value.TenderingCriterionResponse}
          itemDisplay={ (itemValue: TenderingCriterionResponse, key: string | number) =>
            <TenderingCriterionResponseDisplay
              key={key}
              label="Tendering Criterion Response"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.TenderingCriterionResponse}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={QualificationApplicationResponseFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-Evidence"
          meta={QualificationApplicationResponseFieldMeta.Evidence} 
          value={value.Evidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay
              key={key}
              label="Evidence"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.Evidence}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationResponse ubl-Signature"
          meta={QualificationApplicationResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={QualificationApplicationResponseFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}

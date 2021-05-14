import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationApplicationRequest } from  '../../model/doc/QualificationApplicationRequest'
import { QualificationApplicationRequestFieldMeta } from  '../../meta/doc/QualificationApplicationRequestMeta'
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
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: QualificationApplicationRequest
  meta: FieldMeta<T>
}

export default function QualificationApplicationRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-QualificationApplicationRequest ubl-QualificationApplicationRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-QualificationApplicationRequest ubl-UBLExtensions"
          meta={QualificationApplicationRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-UBLVersionID"
          meta={QualificationApplicationRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-CustomizationID"
          meta={QualificationApplicationRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-ProfileID"
          meta={QualificationApplicationRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={QualificationApplicationRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-ID"
          meta={QualificationApplicationRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Indicator ubl-CopyIndicator"
          meta={QualificationApplicationRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-UUID"
          meta={QualificationApplicationRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-ContractFolderID"
          meta={QualificationApplicationRequestFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Text ubl-ContractName"
          meta={QualificationApplicationRequestFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ContractName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Date ubl-IssueDate"
          meta={QualificationApplicationRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Time ubl-IssueTime"
          meta={QualificationApplicationRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-VersionID"
          meta={QualificationApplicationRequestFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Identifier ubl-PreviousVersionID"
          meta={QualificationApplicationRequestFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Code ubl-ProcedureCode"
          meta={QualificationApplicationRequestFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procedure Code"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ProcedureCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Code ubl-QualificationApplicationTypeCode"
          meta={QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode} 
          value={value.QualificationApplicationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Qualification Application Type Code"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Text ubl-WeightScoringMethodologyNote"
          meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote} 
          value={value.WeightScoringMethodologyNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Weight Scoring Methodology Note"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Code ubl-WeightingTypeCode"
          meta={QualificationApplicationRequestFieldMeta.WeightingTypeCode} 
          value={value.WeightingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Weighting Type Code"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.WeightingTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QualificationApplicationRequest ubl-Text ubl-Note"
          meta={QualificationApplicationRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-ContractingParty"
          meta={QualificationApplicationRequestFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-EconomicOperatorParty"
          meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-ProcurementProject"
          meta={QualificationApplicationRequestFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-ProcurementProjectLot"
          meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-TenderingCriterion"
          meta={QualificationApplicationRequestFieldMeta.TenderingCriterion} 
          value={value.TenderingCriterion}
          itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
            <TenderingCriterionDisplay
              key={key}
              label="Tendering Criterion"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.TenderingCriterion}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QualificationApplicationRequest ubl-Signature"
          meta={QualificationApplicationRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={QualificationApplicationRequestFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}

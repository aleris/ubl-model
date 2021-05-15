import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: QualificationApplicationRequest | undefined
  meta: FieldMeta<T>
}

export default function QualificationApplicationRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-QualificationApplicationRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={QualificationApplicationRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={QualificationApplicationRequestFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.ContractFolderID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ContractName"
            label="Contract Name"
            items={value.ContractName}
            meta={QualificationApplicationRequestFieldMeta.ContractName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Contract Name"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.ContractName}
              />
            }
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={QualificationApplicationRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={QualificationApplicationRequestFieldMeta.IssueTime}
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version"
            value={value.PreviousVersionID?.[0]}
            meta={QualificationApplicationRequestFieldMeta.PreviousVersionID}
          />

          <CodeDisplay
            label="Procedure Code"
            value={value.ProcedureCode?.[0]}
            meta={QualificationApplicationRequestFieldMeta.ProcedureCode}
          />

          <CodeDisplay
            label="Qualification Application Type Code"
            value={value.QualificationApplicationTypeCode?.[0]}
            meta={QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-WeightScoringMethodologyNote"
            label="Weight Scoring Methodology Note"
            items={value.WeightScoringMethodologyNote}
            meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Weight Scoring Methodology Note"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote}
              />
            }
          />

          <CodeDisplay
            label="Weighting Type Code"
            value={value.WeightingTypeCode?.[0]}
            meta={QualificationApplicationRequestFieldMeta.WeightingTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={QualificationApplicationRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ContractingParty"
            label="Contracting Party"
            items={value.ContractingParty}
            meta={QualificationApplicationRequestFieldMeta.ContractingParty} 
            itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
              <ContractingPartyDisplay
                key={key}
                label="Contracting Party"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.ContractingParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-EconomicOperatorParty"
            label="Economic Operator Party"
            items={value.EconomicOperatorParty}
            meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty} 
            itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
              <EconomicOperatorPartyDisplay
                key={key}
                label="Economic Operator Party"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty}
              />
            }
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={QualificationApplicationRequestFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot} 
            itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
              <ProcurementProjectLotDisplay
                key={key}
                label="Procurement Project Lot"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TenderingCriterion"
            label="Tendering Criterion"
            items={value.TenderingCriterion}
            meta={QualificationApplicationRequestFieldMeta.TenderingCriterion} 
            itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
              <TenderingCriterionDisplay
                key={key}
                label="Tendering Criterion"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.TenderingCriterion}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={QualificationApplicationRequestFieldMeta.Signature} 
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

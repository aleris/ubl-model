import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: QualificationApplicationResponse
  meta: FieldMeta<T>
}

export default function QualificationApplicationResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={QualificationApplicationResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={QualificationApplicationResponseFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={QualificationApplicationResponseFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={QualificationApplicationResponseFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.EconomicOperatorGroupName} 
          value={value.EconomicOperatorGroupName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationResponseFieldMeta.EconomicOperatorGroupName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationResponseFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ProcedureCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.QualificationApplicationTypeCode} 
          value={value.QualificationApplicationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationApplicationResponseFieldMeta.QualificationApplicationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.WeightScoringMethodologyNote} 
          value={value.WeightScoringMethodologyNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationResponseFieldMeta.WeightScoringMethodologyNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.WeightingTypeCode} 
          value={value.WeightingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationApplicationResponseFieldMeta.WeightingTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationResponseFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={QualificationApplicationResponseFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={QualificationApplicationResponseFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.TenderingCriterion} 
          value={value.TenderingCriterion}
          itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
            <TenderingCriterionDisplay key={key} meta={QualificationApplicationResponseFieldMeta.TenderingCriterion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.TenderingCriterionResponse} 
          value={value.TenderingCriterionResponse}
          itemDisplay={ (itemValue: TenderingCriterionResponse, key: string | number) =>
            <TenderingCriterionResponseDisplay key={key} meta={QualificationApplicationResponseFieldMeta.TenderingCriterionResponse} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={QualificationApplicationResponseFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.Evidence} 
          value={value.Evidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay key={key} meta={QualificationApplicationResponseFieldMeta.Evidence} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={QualificationApplicationResponseFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

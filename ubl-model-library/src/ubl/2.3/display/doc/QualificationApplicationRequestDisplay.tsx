import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: QualificationApplicationRequest
  meta: FieldMeta<T>
}

export default function QualificationApplicationRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={QualificationApplicationRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={QualificationApplicationRequestFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={QualificationApplicationRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={QualificationApplicationRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QualificationApplicationRequestFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ProcedureCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode} 
          value={value.QualificationApplicationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationApplicationRequestFieldMeta.QualificationApplicationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote} 
          value={value.WeightScoringMethodologyNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationRequestFieldMeta.WeightScoringMethodologyNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.WeightingTypeCode} 
          value={value.WeightingTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={QualificationApplicationRequestFieldMeta.WeightingTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QualificationApplicationRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={QualificationApplicationRequestFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={QualificationApplicationRequestFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.TenderingCriterion} 
          value={value.TenderingCriterion}
          itemDisplay={ (itemValue: TenderingCriterion, key: string | number) =>
            <TenderingCriterionDisplay key={key} meta={QualificationApplicationRequestFieldMeta.TenderingCriterion} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={QualificationApplicationRequestFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QualificationApplicationRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={QualificationApplicationRequestFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

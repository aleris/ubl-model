import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderContract } from  '../../model/doc/TenderContract'
import { TenderContractFieldMeta } from  '../../meta/doc/TenderContractMeta'
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
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import ProcurementProjectDisplay from '../cac/ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import ProcurementProjectLotDisplay from '../cac/ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TenderingProcessDisplay from '../cac/TenderingProcessDisplay'
import { TenderingProcess } from '../../model/cac/TenderingProcess'
import TenderingTermsDisplay from '../cac/TenderingTermsDisplay'
import { TenderingTerms } from '../../model/cac/TenderingTerms'
import TenderResultDisplay from '../cac/TenderResultDisplay'
import { TenderResult } from '../../model/cac/TenderResult'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderContract
  meta: FieldMeta<T>
}

export default function TenderContractDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderContractFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderContractFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderContractFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderContractFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderContractFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TenderContractFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderContractFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderContractFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.RegulatoryDomain} 
          value={value.RegulatoryDomain}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderContractFieldMeta.RegulatoryDomain} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.PublishAwardIndicator} 
          value={value.PublishAwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderContractFieldMeta.PublishAwardIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.PreviousDocumentReference} 
          value={value.PreviousDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderContractFieldMeta.PreviousDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderContractFieldMeta.ContractDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TenderContractFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={TenderContractFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={TenderContractFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderContractFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay key={key} meta={TenderContractFieldMeta.TenderingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay key={key} meta={TenderContractFieldMeta.TenderingProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={TenderContractFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={TenderContractFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderContractFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay key={key} meta={TenderContractFieldMeta.TenderResult} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

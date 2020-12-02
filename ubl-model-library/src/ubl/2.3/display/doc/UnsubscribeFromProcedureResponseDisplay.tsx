import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnsubscribeFromProcedureResponse } from  '../../model/doc/UnsubscribeFromProcedureResponse'
import { UnsubscribeFromProcedureResponseFieldMeta } from  '../../meta/doc/UnsubscribeFromProcedureResponseMeta'
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
import ProcurementProjectLotReferenceDisplay from '../cac/ProcurementProjectLotReferenceDisplay'
import { ProcurementProjectLotReference } from '../../model/cac/ProcurementProjectLotReference'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: UnsubscribeFromProcedureResponse
  meta: FieldMeta<T>
}

export default function UnsubscribeFromProcedureResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference} 
          value={value.UnsubscribeToProcedureDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay key={key} meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

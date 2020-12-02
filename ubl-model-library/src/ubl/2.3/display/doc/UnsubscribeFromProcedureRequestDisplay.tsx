import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnsubscribeFromProcedureRequest } from  '../../model/doc/UnsubscribeFromProcedureRequest'
import { UnsubscribeFromProcedureRequestFieldMeta } from  '../../meta/doc/UnsubscribeFromProcedureRequestMeta'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
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
  value: UnsubscribeFromProcedureRequest
  meta: FieldMeta<T>
}

export default function UnsubscribeFromProcedureRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay key={key} meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProjectLotReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

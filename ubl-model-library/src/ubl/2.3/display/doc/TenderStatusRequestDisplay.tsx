import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderStatusRequest } from  '../../model/doc/TenderStatusRequest'
import { TenderStatusRequestFieldMeta } from  '../../meta/doc/TenderStatusRequestMeta'
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
import ProcurementProjectLotDisplay from '../cac/ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderStatusRequest
  meta: FieldMeta<T>
}

export default function TenderStatusRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderStatusRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderStatusRequestFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderStatusRequestFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderStatusRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TenderStatusRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderStatusRequestFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderStatusRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TenderStatusRequestFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={TenderStatusRequestFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay key={key} meta={TenderStatusRequestFieldMeta.EconomicOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={TenderStatusRequestFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderStatusRequestFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={TenderStatusRequestFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

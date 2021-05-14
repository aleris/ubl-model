import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: UnsubscribeFromProcedureResponse
  meta: FieldMeta<T>
}

export default function UnsubscribeFromProcedureResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-UnsubscribeFromProcedureResponse ubl-UnsubscribeFromProcedureResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-UnsubscribeFromProcedureResponse ubl-UBLExtensions"
          meta={UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-UBLVersionID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-CustomizationID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-ProfileID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-ProfileExecutionID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-ID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Indicator ubl-CopyIndicator"
          meta={UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-UUID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Identifier ubl-ContractFolderID"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Date ubl-IssueDate"
          meta={UnsubscribeFromProcedureResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Time ubl-IssueTime"
          meta={UnsubscribeFromProcedureResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-UnsubscribeFromProcedureResponse ubl-Text ubl-Note"
          meta={UnsubscribeFromProcedureResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnsubscribeFromProcedureResponse ubl-DocumentReference ubl-UnsubscribeToProcedureDocumentReference"
          meta={UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference} 
          value={value.UnsubscribeToProcedureDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Unsubscribe To Procedure Document Reference"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UnsubscribeFromProcedureResponse ubl-Signature"
          meta={UnsubscribeFromProcedureResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnsubscribeFromProcedureResponse ubl-EconomicOperatorParty"
          meta={UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnsubscribeFromProcedureResponse ubl-ContractingParty"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnsubscribeFromProcedureResponse ubl-ProcurementProject"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UnsubscribeFromProcedureResponse ubl-ProcurementProjectLotReference"
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay
              key={key}
              label="Procurement Project Lot Reference"
              value={itemValue}
              meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference}
            />
          }
        />
        </div>
    </div>
  )
}

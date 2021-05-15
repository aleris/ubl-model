import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: UnsubscribeFromProcedureResponse | undefined
  meta: FieldMeta<T>
}

export default function UnsubscribeFromProcedureResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-UnsubscribeFromProcedureResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={UnsubscribeFromProcedureResponseFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={UnsubscribeFromProcedureResponseFieldMeta.Note}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Unsubscribe To Procedure Document Reference"
            value={value.UnsubscribeToProcedureDocumentReference?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={UnsubscribeFromProcedureResponseFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={UnsubscribeFromProcedureResponseFieldMeta.Signature}
              />
            }
          />

          <EconomicOperatorPartyDisplay
            label="Economic Operator Party"
            value={value.EconomicOperatorParty?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty}
          />

          <ContractingPartyDisplay
            label="Contracting Party"
            value={value.ContractingParty?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ContractingParty}
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLotReference"
            label="Procurement Project Lot Reference"
            items={value.ProcurementProjectLotReference}
            meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference} 
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

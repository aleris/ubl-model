import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: UnsubscribeFromProcedureRequest | undefined
  meta: FieldMeta<T>
}

export default function UnsubscribeFromProcedureRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-UnsubscribeFromProcedureRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={UnsubscribeFromProcedureRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={UnsubscribeFromProcedureRequestFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={UnsubscribeFromProcedureRequestFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={UnsubscribeFromProcedureRequestFieldMeta.Signature}
              />
            }
          />

          <EconomicOperatorPartyDisplay
            label="Economic Operator Party"
            value={value.EconomicOperatorParty?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.EconomicOperatorParty}
          />

          <ContractingPartyDisplay
            label="Contracting Party"
            value={value.ContractingParty?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ContractingParty}
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLotReference"
            label="Procurement Project Lot Reference"
            items={value.ProcurementProjectLotReference}
            meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProjectLotReference} 
            itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
              <ProcurementProjectLotReferenceDisplay
                key={key}
                label="Procurement Project Lot Reference"
                value={itemValue}
                meta={UnsubscribeFromProcedureRequestFieldMeta.ProcurementProjectLotReference}
              />
            }
          />
        </div>
    </div>
  )
}

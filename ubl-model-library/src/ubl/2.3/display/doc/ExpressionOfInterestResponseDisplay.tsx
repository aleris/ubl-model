import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExpressionOfInterestResponse } from  '../../model/doc/ExpressionOfInterestResponse'
import { ExpressionOfInterestResponseFieldMeta } from  '../../meta/doc/ExpressionOfInterestResponseMeta'
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
  value: ExpressionOfInterestResponse | undefined
  meta: FieldMeta<T>
}

export default function ExpressionOfInterestResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ExpressionOfInterestResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ContractName"
            label="Contract Name"
            items={value.ContractName}
            meta={ExpressionOfInterestResponseFieldMeta.ContractName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Contract Name"
                value={itemValue}
                meta={ExpressionOfInterestResponseFieldMeta.ContractName}
              />
            }
          />

          <CodeDisplay
            label="Tender Language Locale Code"
            value={value.TenderLanguageLocaleCode?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ExpressionOfInterestResponseFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ExpressionOfInterestResponseFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ExpressionOfInterestDocumentReference"
            label="Expression Of Interest Document Reference"
            items={value.ExpressionOfInterestDocumentReference}
            meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Expression Of Interest Document Reference"
                value={itemValue}
                meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ExpressionOfInterestResponseFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ExpressionOfInterestResponseFieldMeta.Signature}
              />
            }
          />

          <EconomicOperatorPartyDisplay
            label="Economic Operator Party"
            value={value.EconomicOperatorParty?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ContractingParty"
            label="Contracting Party"
            items={value.ContractingParty}
            meta={ExpressionOfInterestResponseFieldMeta.ContractingParty} 
            itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
              <ContractingPartyDisplay
                key={key}
                label="Contracting Party"
                value={itemValue}
                meta={ExpressionOfInterestResponseFieldMeta.ContractingParty}
              />
            }
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={ExpressionOfInterestResponseFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLotReference"
            label="Procurement Project Lot Reference"
            items={value.ProcurementProjectLotReference}
            meta={ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference} 
            itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
              <ProcurementProjectLotReferenceDisplay
                key={key}
                label="Procurement Project Lot Reference"
                value={itemValue}
                meta={ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ExpressionOfInterestResponse
  meta: FieldMeta<T>
}

export default function ExpressionOfInterestResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ExpressionOfInterestResponse ubl-ExpressionOfInterestResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExpressionOfInterestResponse ubl-UBLExtensions"
          meta={ExpressionOfInterestResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-UBLVersionID"
          meta={ExpressionOfInterestResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-CustomizationID"
          meta={ExpressionOfInterestResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-ProfileID"
          meta={ExpressionOfInterestResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-ProfileExecutionID"
          meta={ExpressionOfInterestResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-ID"
          meta={ExpressionOfInterestResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Indicator ubl-CopyIndicator"
          meta={ExpressionOfInterestResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-UUID"
          meta={ExpressionOfInterestResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Identifier ubl-ContractFolderID"
          meta={ExpressionOfInterestResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Date ubl-IssueDate"
          meta={ExpressionOfInterestResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Time ubl-IssueTime"
          meta={ExpressionOfInterestResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Text ubl-ContractName"
          meta={ExpressionOfInterestResponseFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ContractName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Code ubl-TenderLanguageLocaleCode"
          meta={ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode} 
          value={value.TenderLanguageLocaleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tender Language Locale Code"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.TenderLanguageLocaleCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExpressionOfInterestResponse ubl-Text ubl-Note"
          meta={ExpressionOfInterestResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestResponse ubl-DocumentReference ubl-ExpressionOfInterestDocumentReference"
          meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference} 
          value={value.ExpressionOfInterestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Expression Of Interest Document Reference"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ExpressionOfInterestDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestResponse ubl-Signature"
          meta={ExpressionOfInterestResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExpressionOfInterestResponse ubl-EconomicOperatorParty"
          meta={ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestResponse ubl-ContractingParty"
          meta={ExpressionOfInterestResponseFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExpressionOfInterestResponse ubl-ProcurementProject"
          meta={ExpressionOfInterestResponseFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={ExpressionOfInterestResponseFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestResponse ubl-ProcurementProjectLotReference"
          meta={ExpressionOfInterestResponseFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
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

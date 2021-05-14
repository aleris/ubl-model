import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExpressionOfInterestRequest } from  '../../model/doc/ExpressionOfInterestRequest'
import { ExpressionOfInterestRequestFieldMeta } from  '../../meta/doc/ExpressionOfInterestRequestMeta'
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
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
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
  value: ExpressionOfInterestRequest
  meta: FieldMeta<T>
}

export default function ExpressionOfInterestRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ExpressionOfInterestRequest ubl-ExpressionOfInterestRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExpressionOfInterestRequest ubl-UBLExtensions"
          meta={ExpressionOfInterestRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-UBLVersionID"
          meta={ExpressionOfInterestRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-CustomizationID"
          meta={ExpressionOfInterestRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-ProfileID"
          meta={ExpressionOfInterestRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={ExpressionOfInterestRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-ID"
          meta={ExpressionOfInterestRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Indicator ubl-CopyIndicator"
          meta={ExpressionOfInterestRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-UUID"
          meta={ExpressionOfInterestRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Identifier ubl-ContractFolderID"
          meta={ExpressionOfInterestRequestFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Date ubl-IssueDate"
          meta={ExpressionOfInterestRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Time ubl-IssueTime"
          meta={ExpressionOfInterestRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Text ubl-ContractName"
          meta={ExpressionOfInterestRequestFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ContractName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Code ubl-PreferredLanguageLocaleCode"
          meta={ExpressionOfInterestRequestFieldMeta.PreferredLanguageLocaleCode} 
          value={value.PreferredLanguageLocaleCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Preferred Language Locale Code"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.PreferredLanguageLocaleCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExpressionOfInterestRequest ubl-Text ubl-Note"
          meta={ExpressionOfInterestRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-Period ubl-ValidityPeriod"
          meta={ExpressionOfInterestRequestFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-DocumentReference"
          meta={ExpressionOfInterestRequestFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-Signature"
          meta={ExpressionOfInterestRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-EconomicOperatorParty"
          meta={ExpressionOfInterestRequestFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-ContractingParty"
          meta={ExpressionOfInterestRequestFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-ProcurementProject"
          meta={ExpressionOfInterestRequestFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExpressionOfInterestRequest ubl-ProcurementProjectLotReference"
          meta={ExpressionOfInterestRequestFieldMeta.ProcurementProjectLotReference} 
          value={value.ProcurementProjectLotReference}
          itemDisplay={ (itemValue: ProcurementProjectLotReference, key: string | number) =>
            <ProcurementProjectLotReferenceDisplay
              key={key}
              label="Procurement Project Lot Reference"
              value={itemValue}
              meta={ExpressionOfInterestRequestFieldMeta.ProcurementProjectLotReference}
            />
          }
        />
        </div>
    </div>
  )
}

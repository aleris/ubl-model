import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExportCustomsDeclaration } from  '../../model/doc/ExportCustomsDeclaration'
import { ExportCustomsDeclarationFieldMeta } from  '../../meta/doc/ExportCustomsDeclarationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomsDeclarationDisplay from '../cac/CustomsDeclarationDisplay'
import { CustomsDeclaration } from '../../model/cac/CustomsDeclaration'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
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
  value: ExportCustomsDeclaration
  meta: FieldMeta<T>
}

export default function ExportCustomsDeclarationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ExportCustomsDeclaration ubl-ExportCustomsDeclarationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ExportCustomsDeclaration ubl-UBLExtensions"
          meta={ExportCustomsDeclarationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-UBLVersionID"
          meta={ExportCustomsDeclarationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-CustomizationID"
          meta={ExportCustomsDeclarationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-ProfileID"
          meta={ExportCustomsDeclarationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-ProfileExecutionID"
          meta={ExportCustomsDeclarationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-ID"
          meta={ExportCustomsDeclarationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-UUID"
          meta={ExportCustomsDeclarationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Date ubl-IssueDate"
          meta={ExportCustomsDeclarationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Time ubl-IssueTime"
          meta={ExportCustomsDeclarationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Code ubl-ExportTypeCode"
          meta={ExportCustomsDeclarationFieldMeta.ExportTypeCode} 
          value={value.ExportTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Export Type Code"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.ExportTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Code ubl-ExportReasonCode"
          meta={ExportCustomsDeclarationFieldMeta.ExportReasonCode} 
          value={value.ExportReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Export Reason Code"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.ExportReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Text ubl-Note"
          meta={ExportCustomsDeclarationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ExportCustomsDeclaration ubl-Identifier ubl-VersionID"
          meta={ExportCustomsDeclarationFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExportCustomsDeclaration ubl-Party ubl-ExporterParty"
          meta={ExportCustomsDeclarationFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Exporter Party"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.ExporterParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ExportCustomsDeclaration ubl-CustomsDeclaration"
          meta={ExportCustomsDeclarationFieldMeta.CustomsDeclaration} 
          value={value.CustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay
              key={key}
              label="Customs Declaration"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.CustomsDeclaration}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ExportCustomsDeclaration ubl-Signature"
          meta={ExportCustomsDeclarationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ExportCustomsDeclarationFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}

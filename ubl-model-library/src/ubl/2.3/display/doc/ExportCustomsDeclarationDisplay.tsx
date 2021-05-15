import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ExportCustomsDeclaration | undefined
  meta: FieldMeta<T>
}

export default function ExportCustomsDeclarationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ExportCustomsDeclaration">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.IssueTime}
          />

          <CodeDisplay
            label="Export Type Code"
            value={value.ExportTypeCode?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.ExportTypeCode}
          />

          <CodeDisplay
            label="Export Reason Code"
            value={value.ExportReasonCode?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.ExportReasonCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ExportCustomsDeclarationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ExportCustomsDeclarationFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.VersionID}
          />

          <PartyDisplay
            label="Exporter Party"
            value={value.ExporterParty?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.ExporterParty}
          />

          <CustomsDeclarationDisplay
            label="Customs Declaration"
            value={value.CustomsDeclaration?.[0]}
            meta={ExportCustomsDeclarationFieldMeta.CustomsDeclaration}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ExportCustomsDeclarationFieldMeta.Signature} 
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

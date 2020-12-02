import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ExportCustomsDeclaration
  meta: FieldMeta<T>
}

export default function ExportCustomsDeclarationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.ExportTypeCode} 
          value={value.ExportTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.ExportTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.ExportReasonCode} 
          value={value.ExportReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.ExportReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.ExporterParty} 
          value={value.ExporterParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.ExporterParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.CustomsDeclaration} 
          value={value.CustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.CustomsDeclaration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExportCustomsDeclarationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ExportCustomsDeclarationFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

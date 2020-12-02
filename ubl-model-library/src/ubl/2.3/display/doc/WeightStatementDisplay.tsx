import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { WeightStatement } from  '../../model/doc/WeightStatement'
import { WeightStatementFieldMeta } from  '../../meta/doc/WeightStatementMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: WeightStatement
  meta: FieldMeta<T>
}

export default function WeightStatementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={WeightStatementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={WeightStatementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WeightStatementFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WeightStatementFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WeightStatementFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WeightStatementFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WeightStatementFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WeightStatementFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={WeightStatementFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={WeightStatementFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.WeightStatementTypeCode} 
          value={value.WeightStatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={WeightStatementFieldMeta.WeightStatementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={WeightStatementFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WeightStatementFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WeightStatementFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.WeighingParty} 
          value={value.WeighingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WeightStatementFieldMeta.WeighingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.ShipperParty} 
          value={value.ShipperParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WeightStatementFieldMeta.ShipperParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.ResponsibleParty} 
          value={value.ResponsibleParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WeightStatementFieldMeta.ResponsibleParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WeightStatementFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={WeightStatementFieldMeta.Shipment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

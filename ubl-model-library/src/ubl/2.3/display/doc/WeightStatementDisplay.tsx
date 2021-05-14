import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: WeightStatement
  meta: FieldMeta<T>
}

export default function WeightStatementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-WeightStatement ubl-WeightStatementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-WeightStatement ubl-UBLExtensions"
          meta={WeightStatementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={WeightStatementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Identifier ubl-UBLVersionID"
          meta={WeightStatementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={WeightStatementFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Identifier ubl-CustomizationID"
          meta={WeightStatementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={WeightStatementFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Identifier ubl-ProfileID"
          meta={WeightStatementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={WeightStatementFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Identifier ubl-ProfileExecutionID"
          meta={WeightStatementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={WeightStatementFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Identifier ubl-ID"
          meta={WeightStatementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={WeightStatementFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Identifier ubl-UUID"
          meta={WeightStatementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={WeightStatementFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Date ubl-IssueDate"
          meta={WeightStatementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={WeightStatementFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Time ubl-IssueTime"
          meta={WeightStatementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={WeightStatementFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-WeightStatement ubl-Code ubl-WeightStatementTypeCode"
          meta={WeightStatementFieldMeta.WeightStatementTypeCode} 
          value={value.WeightStatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Weight Statement Type Code"
              value={itemValue}
              meta={WeightStatementFieldMeta.WeightStatementTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-WeightStatement ubl-Signature"
          meta={WeightStatementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={WeightStatementFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WeightStatement ubl-Party ubl-SenderParty"
          meta={WeightStatementFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={WeightStatementFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WeightStatement ubl-Party ubl-ReceiverParty"
          meta={WeightStatementFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={WeightStatementFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WeightStatement ubl-Party ubl-WeighingParty"
          meta={WeightStatementFieldMeta.WeighingParty} 
          value={value.WeighingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Weighing Party"
              value={itemValue}
              meta={WeightStatementFieldMeta.WeighingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WeightStatement ubl-Party ubl-ShipperParty"
          meta={WeightStatementFieldMeta.ShipperParty} 
          value={value.ShipperParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Shipper Party"
              value={itemValue}
              meta={WeightStatementFieldMeta.ShipperParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WeightStatement ubl-Party ubl-ResponsibleParty"
          meta={WeightStatementFieldMeta.ResponsibleParty} 
          value={value.ResponsibleParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Responsible Party"
              value={itemValue}
              meta={WeightStatementFieldMeta.ResponsibleParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-WeightStatement ubl-Shipment"
          meta={WeightStatementFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={WeightStatementFieldMeta.Shipment}
            />
          }
        />
        </div>
    </div>
  )
}

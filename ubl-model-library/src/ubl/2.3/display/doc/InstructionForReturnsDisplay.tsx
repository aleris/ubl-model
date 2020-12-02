import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { InstructionForReturns } from  '../../model/doc/InstructionForReturns'
import { InstructionForReturnsFieldMeta } from  '../../meta/doc/InstructionForReturnsMeta'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import InstructionForReturnsLineDisplay from '../cac/InstructionForReturnsLineDisplay'
import { InstructionForReturnsLine } from '../../model/cac/InstructionForReturnsLine'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: InstructionForReturns
  meta: FieldMeta<T>
}

export default function InstructionForReturnsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={InstructionForReturnsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={InstructionForReturnsFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={InstructionForReturnsFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={InstructionForReturnsFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={InstructionForReturnsFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={InstructionForReturnsFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={InstructionForReturnsFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={InstructionForReturnsFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.RetailerCustomerParty} 
          value={value.RetailerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={InstructionForReturnsFieldMeta.RetailerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.ManufacturerParty} 
          value={value.ManufacturerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={InstructionForReturnsFieldMeta.ManufacturerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={InstructionForReturnsFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsFieldMeta.InstructionForReturnsLine} 
          value={value.InstructionForReturnsLine}
          itemDisplay={ (itemValue: InstructionForReturnsLine, key: string | number) =>
            <InstructionForReturnsLineDisplay key={key} meta={InstructionForReturnsFieldMeta.InstructionForReturnsLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

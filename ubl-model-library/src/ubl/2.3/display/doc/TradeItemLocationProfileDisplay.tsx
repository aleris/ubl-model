import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradeItemLocationProfile } from  '../../model/doc/TradeItemLocationProfile'
import { TradeItemLocationProfileFieldMeta } from  '../../meta/doc/TradeItemLocationProfileMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
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
import ItemManagementProfileDisplay from '../cac/ItemManagementProfileDisplay'
import { ItemManagementProfile } from '../../model/cac/ItemManagementProfile'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
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
  value: TradeItemLocationProfile
  meta: FieldMeta<T>
}

export default function TradeItemLocationProfileDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TradeItemLocationProfileFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeItemLocationProfileFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeItemLocationProfileFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeItemLocationProfileFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeItemLocationProfileFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeItemLocationProfileFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TradeItemLocationProfileFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TradeItemLocationProfileFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TradeItemLocationProfileFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TradeItemLocationProfileFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TradeItemLocationProfileFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.ProfileStatusCode} 
          value={value.ProfileStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TradeItemLocationProfileFieldMeta.ProfileStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TradeItemLocationProfileFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TradeItemLocationProfileFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TradeItemLocationProfileFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TradeItemLocationProfileFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TradeItemLocationProfileFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={TradeItemLocationProfileFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={TradeItemLocationProfileFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradeItemLocationProfileFieldMeta.ItemManagementProfile} 
          value={value.ItemManagementProfile}
          itemDisplay={ (itemValue: ItemManagementProfile, key: string | number) =>
            <ItemManagementProfileDisplay key={key} meta={TradeItemLocationProfileFieldMeta.ItemManagementProfile} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

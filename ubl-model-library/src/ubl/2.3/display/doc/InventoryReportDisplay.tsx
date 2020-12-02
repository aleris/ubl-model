import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { InventoryReport } from  '../../model/doc/InventoryReport'
import { InventoryReportFieldMeta } from  '../../meta/doc/InventoryReportMeta'
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
import InventoryReportLineDisplay from '../cac/InventoryReportLineDisplay'
import { InventoryReportLine } from '../../model/cac/InventoryReportLine'
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
  value: InventoryReport
  meta: FieldMeta<T>
}

export default function InventoryReportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={InventoryReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={InventoryReportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={InventoryReportFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InventoryReportFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={InventoryReportFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={InventoryReportFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={InventoryReportFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={InventoryReportFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.InventoryPeriod} 
          value={value.InventoryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={InventoryReportFieldMeta.InventoryPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={InventoryReportFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={InventoryReportFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.RetailerCustomerParty} 
          value={value.RetailerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={InventoryReportFieldMeta.RetailerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.InventoryReportingParty} 
          value={value.InventoryReportingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={InventoryReportFieldMeta.InventoryReportingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={InventoryReportFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InventoryReportFieldMeta.InventoryReportLine} 
          value={value.InventoryReportLine}
          itemDisplay={ (itemValue: InventoryReportLine, key: string | number) =>
            <InventoryReportLineDisplay key={key} meta={InventoryReportFieldMeta.InventoryReportLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

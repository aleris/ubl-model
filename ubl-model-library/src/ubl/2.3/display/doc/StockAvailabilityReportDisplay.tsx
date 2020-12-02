import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { StockAvailabilityReport } from  '../../model/doc/StockAvailabilityReport'
import { StockAvailabilityReportFieldMeta } from  '../../meta/doc/StockAvailabilityReportMeta'
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
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import StockAvailabilityReportLineDisplay from '../cac/StockAvailabilityReportLineDisplay'
import { StockAvailabilityReportLine } from '../../model/cac/StockAvailabilityReportLine'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: StockAvailabilityReport
  meta: FieldMeta<T>
}

export default function StockAvailabilityReportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={StockAvailabilityReportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={StockAvailabilityReportFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StockAvailabilityReportFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={StockAvailabilityReportFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={StockAvailabilityReportFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StockAvailabilityReportFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StockAvailabilityReportFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.InventoryPeriod} 
          value={value.InventoryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={StockAvailabilityReportFieldMeta.InventoryPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={StockAvailabilityReportFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={StockAvailabilityReportFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={StockAvailabilityReportFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.RetailerCustomerParty} 
          value={value.RetailerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StockAvailabilityReportFieldMeta.RetailerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.InventoryReportingParty} 
          value={value.InventoryReportingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={StockAvailabilityReportFieldMeta.InventoryReportingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StockAvailabilityReportFieldMeta.StockAvailabilityReportLine} 
          value={value.StockAvailabilityReportLine}
          itemDisplay={ (itemValue: StockAvailabilityReportLine, key: string | number) =>
            <StockAvailabilityReportLineDisplay key={key} meta={StockAvailabilityReportFieldMeta.StockAvailabilityReportLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

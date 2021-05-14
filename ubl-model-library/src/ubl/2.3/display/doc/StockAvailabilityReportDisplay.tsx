import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: StockAvailabilityReport
  meta: FieldMeta<T>
}

export default function StockAvailabilityReportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-StockAvailabilityReport ubl-StockAvailabilityReportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-StockAvailabilityReport ubl-UBLExtensions"
          meta={StockAvailabilityReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Identifier ubl-UBLVersionID"
          meta={StockAvailabilityReportFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Identifier ubl-CustomizationID"
          meta={StockAvailabilityReportFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Identifier ubl-ProfileID"
          meta={StockAvailabilityReportFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Identifier ubl-ProfileExecutionID"
          meta={StockAvailabilityReportFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Identifier ubl-ID"
          meta={StockAvailabilityReportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Indicator ubl-CopyIndicator"
          meta={StockAvailabilityReportFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Identifier ubl-UUID"
          meta={StockAvailabilityReportFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Date ubl-IssueDate"
          meta={StockAvailabilityReportFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Time ubl-IssueTime"
          meta={StockAvailabilityReportFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Text ubl-Note"
          meta={StockAvailabilityReportFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-StockAvailabilityReport ubl-Code ubl-DocumentCurrencyCode"
          meta={StockAvailabilityReportFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-Period ubl-InventoryPeriod"
          meta={StockAvailabilityReportFieldMeta.InventoryPeriod} 
          value={value.InventoryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Inventory Period"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.InventoryPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-DocumentReference"
          meta={StockAvailabilityReportFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-Signature"
          meta={StockAvailabilityReportFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-SupplierParty ubl-SellerSupplierParty"
          meta={StockAvailabilityReportFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-CustomerParty ubl-RetailerCustomerParty"
          meta={StockAvailabilityReportFieldMeta.RetailerCustomerParty} 
          value={value.RetailerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Retailer Customer Party"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.RetailerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-Party ubl-InventoryReportingParty"
          meta={StockAvailabilityReportFieldMeta.InventoryReportingParty} 
          value={value.InventoryReportingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Inventory Reporting Party"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.InventoryReportingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-StockAvailabilityReport ubl-StockAvailabilityReportLine"
          meta={StockAvailabilityReportFieldMeta.StockAvailabilityReportLine} 
          value={value.StockAvailabilityReportLine}
          itemDisplay={ (itemValue: StockAvailabilityReportLine, key: string | number) =>
            <StockAvailabilityReportLineDisplay
              key={key}
              label="Stock Availability Report Line"
              value={itemValue}
              meta={StockAvailabilityReportFieldMeta.StockAvailabilityReportLine}
            />
          }
        />
        </div>
    </div>
  )
}

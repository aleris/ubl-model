import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: InventoryReport
  meta: FieldMeta<T>
}

export default function InventoryReportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-InventoryReport ubl-InventoryReportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-InventoryReport ubl-UBLExtensions"
          meta={InventoryReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={InventoryReportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Identifier ubl-UBLVersionID"
          meta={InventoryReportFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={InventoryReportFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Identifier ubl-CustomizationID"
          meta={InventoryReportFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={InventoryReportFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Identifier ubl-ProfileID"
          meta={InventoryReportFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={InventoryReportFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Identifier ubl-ProfileExecutionID"
          meta={InventoryReportFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={InventoryReportFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Identifier ubl-ID"
          meta={InventoryReportFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={InventoryReportFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Indicator ubl-CopyIndicator"
          meta={InventoryReportFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={InventoryReportFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Identifier ubl-UUID"
          meta={InventoryReportFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={InventoryReportFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Date ubl-IssueDate"
          meta={InventoryReportFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={InventoryReportFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Time ubl-IssueTime"
          meta={InventoryReportFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={InventoryReportFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Text ubl-Note"
          meta={InventoryReportFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={InventoryReportFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InventoryReport ubl-Code ubl-DocumentCurrencyCode"
          meta={InventoryReportFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={InventoryReportFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InventoryReport ubl-Period ubl-InventoryPeriod"
          meta={InventoryReportFieldMeta.InventoryPeriod} 
          value={value.InventoryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Inventory Period"
              value={itemValue}
              meta={InventoryReportFieldMeta.InventoryPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InventoryReport ubl-DocumentReference"
          meta={InventoryReportFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={InventoryReportFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InventoryReport ubl-Signature"
          meta={InventoryReportFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={InventoryReportFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InventoryReport ubl-CustomerParty ubl-RetailerCustomerParty"
          meta={InventoryReportFieldMeta.RetailerCustomerParty} 
          value={value.RetailerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Retailer Customer Party"
              value={itemValue}
              meta={InventoryReportFieldMeta.RetailerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InventoryReport ubl-Party ubl-InventoryReportingParty"
          meta={InventoryReportFieldMeta.InventoryReportingParty} 
          value={value.InventoryReportingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Inventory Reporting Party"
              value={itemValue}
              meta={InventoryReportFieldMeta.InventoryReportingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InventoryReport ubl-SupplierParty ubl-SellerSupplierParty"
          meta={InventoryReportFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={InventoryReportFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InventoryReport ubl-InventoryReportLine"
          meta={InventoryReportFieldMeta.InventoryReportLine} 
          value={value.InventoryReportLine}
          itemDisplay={ (itemValue: InventoryReportLine, key: string | number) =>
            <InventoryReportLineDisplay
              key={key}
              label="Inventory Report Line"
              value={itemValue}
              meta={InventoryReportFieldMeta.InventoryReportLine}
            />
          }
        />
        </div>
    </div>
  )
}

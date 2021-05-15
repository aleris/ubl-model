import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: StockAvailabilityReport | undefined
  meta: FieldMeta<T>
}

export default function StockAvailabilityReportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-StockAvailabilityReport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={StockAvailabilityReportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={StockAvailabilityReportFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={StockAvailabilityReportFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={StockAvailabilityReportFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={StockAvailabilityReportFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={StockAvailabilityReportFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={StockAvailabilityReportFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={StockAvailabilityReportFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={StockAvailabilityReportFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={StockAvailabilityReportFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={StockAvailabilityReportFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={StockAvailabilityReportFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={StockAvailabilityReportFieldMeta.DocumentCurrencyCode}
          />

          <PeriodDisplay
            label="Inventory Period"
            value={value.InventoryPeriod?.[0]}
            meta={StockAvailabilityReportFieldMeta.InventoryPeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={StockAvailabilityReportFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={StockAvailabilityReportFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={StockAvailabilityReportFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={StockAvailabilityReportFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={StockAvailabilityReportFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Retailer Customer Party"
            value={value.RetailerCustomerParty?.[0]}
            meta={StockAvailabilityReportFieldMeta.RetailerCustomerParty}
          />

          <PartyDisplay
            label="Inventory Reporting Party"
            value={value.InventoryReportingParty?.[0]}
            meta={StockAvailabilityReportFieldMeta.InventoryReportingParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-StockAvailabilityReportLine"
            label="Stock Availability Report Line"
            items={value.StockAvailabilityReportLine}
            meta={StockAvailabilityReportFieldMeta.StockAvailabilityReportLine} 
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

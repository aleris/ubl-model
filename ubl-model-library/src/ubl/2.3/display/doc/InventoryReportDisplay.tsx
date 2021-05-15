import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: InventoryReport | undefined
  meta: FieldMeta<T>
}

export default function InventoryReportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-InventoryReport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={InventoryReportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={InventoryReportFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={InventoryReportFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={InventoryReportFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={InventoryReportFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={InventoryReportFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={InventoryReportFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={InventoryReportFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={InventoryReportFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={InventoryReportFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={InventoryReportFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={InventoryReportFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={InventoryReportFieldMeta.DocumentCurrencyCode}
          />

          <PeriodDisplay
            label="Inventory Period"
            value={value.InventoryPeriod?.[0]}
            meta={InventoryReportFieldMeta.InventoryPeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={InventoryReportFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={InventoryReportFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={InventoryReportFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={InventoryReportFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Retailer Customer Party"
            value={value.RetailerCustomerParty?.[0]}
            meta={InventoryReportFieldMeta.RetailerCustomerParty}
          />

          <PartyDisplay
            label="Inventory Reporting Party"
            value={value.InventoryReportingParty?.[0]}
            meta={InventoryReportFieldMeta.InventoryReportingParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={InventoryReportFieldMeta.SellerSupplierParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-InventoryReportLine"
            label="Inventory Report Line"
            items={value.InventoryReportLine}
            meta={InventoryReportFieldMeta.InventoryReportLine} 
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

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderLine } from  '../../model/cac/TenderLine'
import { TenderLineFieldMeta } from  '../../meta/cac/TenderLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import RelatedItemDisplay from './RelatedItemDisplay'
import { RelatedItem } from '../../model/cac/RelatedItem'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderLine | undefined
  meta: FieldMeta<T>
}

export default function TenderLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TenderLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TenderLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={TenderLineFieldMeta.Quantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={TenderLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={TenderLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <AmountDisplay
            label="Total Tax Amount"
            value={value.TotalTaxAmount?.[0]}
            meta={TenderLineFieldMeta.TotalTaxAmount}
          />

          <TextDisplay
            label="Orderable Unit"
            value={value.OrderableUnit?.[0]}
            meta={TenderLineFieldMeta.OrderableUnit}
          />

          <QuantityDisplay
            label="Content Unit"
            value={value.ContentUnitQuantity?.[0]}
            meta={TenderLineFieldMeta.ContentUnitQuantity}
          />

          <NumericDisplay
            label="Order Quantity Increment"
            value={value.OrderQuantityIncrementNumeric?.[0]}
            meta={TenderLineFieldMeta.OrderQuantityIncrementNumeric}
          />

          <QuantityDisplay
            label="Minimum Order Quantity"
            value={value.MinimumOrderQuantity?.[0]}
            meta={TenderLineFieldMeta.MinimumOrderQuantity}
          />

          <QuantityDisplay
            label="Maximum Order Quantity"
            value={value.MaximumOrderQuantity?.[0]}
            meta={TenderLineFieldMeta.MaximumOrderQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-WarrantyInformation"
            label="Warranty Information"
            items={value.WarrantyInformation}
            meta={TenderLineFieldMeta.WarrantyInformation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Warranty Information"
                value={itemValue}
                meta={TenderLineFieldMeta.WarrantyInformation}
              />
            }
          />

          <CodeDisplay
            label="Pack Level Code"
            value={value.PackLevelCode?.[0]}
            meta={TenderLineFieldMeta.PackLevelCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={TenderLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={TenderLineFieldMeta.DocumentReference}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={TenderLineFieldMeta.Item}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemLocationQuantity ubl-OfferedItemLocationQuantity"
            label="Offered Item Location Quantity"
            items={value.OfferedItemLocationQuantity}
            meta={TenderLineFieldMeta.OfferedItemLocationQuantity} 
            itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
              <ItemLocationQuantityDisplay
                key={key}
                label="Offered Item Location Quantity"
                value={itemValue}
                meta={TenderLineFieldMeta.OfferedItemLocationQuantity}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-ReplacementRelatedItem"
            label="Replacement Related Item"
            items={value.ReplacementRelatedItem}
            meta={TenderLineFieldMeta.ReplacementRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Replacement Related Item"
                value={itemValue}
                meta={TenderLineFieldMeta.ReplacementRelatedItem}
              />
            }
          />

          <PartyDisplay
            label="Warranty Party"
            value={value.WarrantyParty?.[0]}
            meta={TenderLineFieldMeta.WarrantyParty}
          />

          <PeriodDisplay
            label="Warranty Validity Period"
            value={value.WarrantyValidityPeriod?.[0]}
            meta={TenderLineFieldMeta.WarrantyValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderLine ubl-SubTenderLine"
            label="Sub Tender Line"
            items={value.SubTenderLine}
            meta={TenderLineFieldMeta.SubTenderLine} 
            itemDisplay={ (itemValue: TenderLine, key: string | number) =>
              <TenderLineDisplay
                key={key}
                label="Sub Tender Line"
                value={itemValue}
                meta={TenderLineFieldMeta.SubTenderLine}
              />
            }
          />

          <LineReferenceDisplay
            label="Call For Tenders Line Reference"
            value={value.CallForTendersLineReference?.[0]}
            meta={TenderLineFieldMeta.CallForTendersLineReference}
          />

          <DocumentReferenceDisplay
            label="Call For Tenders Document Reference"
            value={value.CallForTendersDocumentReference?.[0]}
            meta={TenderLineFieldMeta.CallForTendersDocumentReference}
          />
        </div>
    </div>
  )
}

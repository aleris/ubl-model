import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderLine
  meta: FieldMeta<T>
}

export default function TenderLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderLine ubl-TenderLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderLine ubl-UBLExtensions"
          meta={TenderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Identifier ubl-ID"
          meta={TenderLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderLine ubl-Text ubl-Note"
          meta={TenderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TenderLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Quantity"
          meta={TenderLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={TenderLineFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Amount ubl-LineExtensionAmount"
          meta={TenderLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={TenderLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={TenderLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={TenderLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Amount ubl-TotalTaxAmount"
          meta={TenderLineFieldMeta.TotalTaxAmount} 
          value={value.TotalTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Tax Amount"
              value={itemValue}
              meta={TenderLineFieldMeta.TotalTaxAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Text ubl-OrderableUnit"
          meta={TenderLineFieldMeta.OrderableUnit} 
          value={value.OrderableUnit}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Orderable Unit"
              value={itemValue}
              meta={TenderLineFieldMeta.OrderableUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Quantity ubl-ContentUnitQuantity"
          meta={TenderLineFieldMeta.ContentUnitQuantity} 
          value={value.ContentUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Content Unit"
              value={itemValue}
              meta={TenderLineFieldMeta.ContentUnitQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Numeric ubl-OrderQuantityIncrementNumeric"
          meta={TenderLineFieldMeta.OrderQuantityIncrementNumeric} 
          value={value.OrderQuantityIncrementNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Order Quantity Increment"
              value={itemValue}
              meta={TenderLineFieldMeta.OrderQuantityIncrementNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Quantity ubl-MinimumOrderQuantity"
          meta={TenderLineFieldMeta.MinimumOrderQuantity} 
          value={value.MinimumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Order Quantity"
              value={itemValue}
              meta={TenderLineFieldMeta.MinimumOrderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Quantity ubl-MaximumOrderQuantity"
          meta={TenderLineFieldMeta.MaximumOrderQuantity} 
          value={value.MaximumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Order Quantity"
              value={itemValue}
              meta={TenderLineFieldMeta.MaximumOrderQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderLine ubl-Text ubl-WarrantyInformation"
          meta={TenderLineFieldMeta.WarrantyInformation} 
          value={value.WarrantyInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Warranty Information"
              value={itemValue}
              meta={TenderLineFieldMeta.WarrantyInformation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderLine ubl-Code ubl-PackLevelCode"
          meta={TenderLineFieldMeta.PackLevelCode} 
          value={value.PackLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pack Level Code"
              value={itemValue}
              meta={TenderLineFieldMeta.PackLevelCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderLine ubl-DocumentReference"
          meta={TenderLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={TenderLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderLine ubl-Item"
          meta={TenderLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={TenderLineFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderLine ubl-ItemLocationQuantity ubl-OfferedItemLocationQuantity"
          meta={TenderLineFieldMeta.OfferedItemLocationQuantity} 
          value={value.OfferedItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay
              key={key}
              label="Offered Item Location Quantity"
              value={itemValue}
              meta={TenderLineFieldMeta.OfferedItemLocationQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderLine ubl-RelatedItem ubl-ReplacementRelatedItem"
          meta={TenderLineFieldMeta.ReplacementRelatedItem} 
          value={value.ReplacementRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Replacement Related Item"
              value={itemValue}
              meta={TenderLineFieldMeta.ReplacementRelatedItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderLine ubl-Party ubl-WarrantyParty"
          meta={TenderLineFieldMeta.WarrantyParty} 
          value={value.WarrantyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Warranty Party"
              value={itemValue}
              meta={TenderLineFieldMeta.WarrantyParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderLine ubl-Period ubl-WarrantyValidityPeriod"
          meta={TenderLineFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Warranty Validity Period"
              value={itemValue}
              meta={TenderLineFieldMeta.WarrantyValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderLine ubl-SubTenderLine"
          meta={TenderLineFieldMeta.SubTenderLine} 
          value={value.SubTenderLine}
          itemDisplay={ (itemValue: TenderLine, key: string | number) =>
            <TenderLineDisplay
              key={key}
              label="Sub Tender Line"
              value={itemValue}
              meta={TenderLineFieldMeta.SubTenderLine}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderLine ubl-LineReference ubl-CallForTendersLineReference"
          meta={TenderLineFieldMeta.CallForTendersLineReference} 
          value={value.CallForTendersLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Call For Tenders Line Reference"
              value={itemValue}
              meta={TenderLineFieldMeta.CallForTendersLineReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderLine ubl-DocumentReference ubl-CallForTendersDocumentReference"
          meta={TenderLineFieldMeta.CallForTendersDocumentReference} 
          value={value.CallForTendersDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Call For Tenders Document Reference"
              value={itemValue}
              meta={TenderLineFieldMeta.CallForTendersDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}

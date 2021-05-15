import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { QuotationLine } from  '../../model/cac/QuotationLine'
import { QuotationLineFieldMeta } from  '../../meta/cac/QuotationLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LineItemDisplay from './LineItemDisplay'
import { LineItem } from '../../model/cac/LineItem'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: QuotationLine | undefined
  meta: FieldMeta<T>
}

export default function QuotationLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-QuotationLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={QuotationLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={QuotationLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={QuotationLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={QuotationLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={QuotationLineFieldMeta.Quantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={QuotationLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <AmountDisplay
            label="Total Tax Amount"
            value={value.TotalTaxAmount?.[0]}
            meta={QuotationLineFieldMeta.TotalTaxAmount}
          />

          <IdentifierDisplay
            label="Request For Quotation Line Identifier"
            value={value.RequestForQuotationLineID?.[0]}
            meta={QuotationLineFieldMeta.RequestForQuotationLineID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={QuotationLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={QuotationLineFieldMeta.DocumentReference}
              />
            }
          />

          <LineItemDisplay
            label="Line Item"
            value={value.LineItem?.[0]}
            meta={QuotationLineFieldMeta.LineItem}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineItem ubl-SellerProposedSubstituteLineItem"
            label="Seller Proposed Substitute Line Item"
            items={value.SellerProposedSubstituteLineItem}
            meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem} 
            itemDisplay={ (itemValue: LineItem, key: string | number) =>
              <LineItemDisplay
                key={key}
                label="Seller Proposed Substitute Line Item"
                value={itemValue}
                meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineItem ubl-AlternativeLineItem"
            label="Alternative Line Item"
            items={value.AlternativeLineItem}
            meta={QuotationLineFieldMeta.AlternativeLineItem} 
            itemDisplay={ (itemValue: LineItem, key: string | number) =>
              <LineItemDisplay
                key={key}
                label="Alternative Line Item"
                value={itemValue}
                meta={QuotationLineFieldMeta.AlternativeLineItem}
              />
            }
          />

          <LineReferenceDisplay
            label="Request Line Reference"
            value={value.RequestLineReference?.[0]}
            meta={QuotationLineFieldMeta.RequestLineReference}
          />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderLine } from  '../../model/cac/OrderLine'
import { OrderLineFieldMeta } from  '../../meta/cac/OrderLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import LineItemDisplay from './LineItemDisplay'
import { LineItem } from '../../model/cac/LineItem'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import OrderLineReferenceDisplay from './OrderLineReferenceDisplay'
import { OrderLineReference } from '../../model/cac/OrderLineReference'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: OrderLine | undefined
  meta: FieldMeta<T>
}

export default function OrderLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-OrderLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderLineFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Substitution Status Code"
            value={value.SubstitutionStatusCode?.[0]}
            meta={OrderLineFieldMeta.SubstitutionStatusCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={OrderLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={OrderLineFieldMeta.Note}
              />
            }
          />

          <LineItemDisplay
            label="Line Item"
            value={value.LineItem?.[0]}
            meta={OrderLineFieldMeta.LineItem}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineItem ubl-SellerProposedSubstituteLineItem"
            label="Seller Proposed Substitute Line Item"
            items={value.SellerProposedSubstituteLineItem}
            meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem} 
            itemDisplay={ (itemValue: LineItem, key: string | number) =>
              <LineItemDisplay
                key={key}
                label="Seller Proposed Substitute Line Item"
                value={itemValue}
                meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineItem ubl-SellerSubstitutedLineItem"
            label="Seller Substituted Line Item"
            items={value.SellerSubstitutedLineItem}
            meta={OrderLineFieldMeta.SellerSubstitutedLineItem} 
            itemDisplay={ (itemValue: LineItem, key: string | number) =>
              <LineItemDisplay
                key={key}
                label="Seller Substituted Line Item"
                value={itemValue}
                meta={OrderLineFieldMeta.SellerSubstitutedLineItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineItem ubl-BuyerProposedSubstituteLineItem"
            label="Buyer Proposed Substitute Line Item"
            items={value.BuyerProposedSubstituteLineItem}
            meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem} 
            itemDisplay={ (itemValue: LineItem, key: string | number) =>
              <LineItemDisplay
                key={key}
                label="Buyer Proposed Substitute Line Item"
                value={itemValue}
                meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem}
              />
            }
          />

          <LineReferenceDisplay
            label="Catalogue Line Reference"
            value={value.CatalogueLineReference?.[0]}
            meta={OrderLineFieldMeta.CatalogueLineReference}
          />

          <LineReferenceDisplay
            label="Quotation Line Reference"
            value={value.QuotationLineReference?.[0]}
            meta={OrderLineFieldMeta.QuotationLineReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-OrderLineReference"
            label="Order Line Reference"
            items={value.OrderLineReference}
            meta={OrderLineFieldMeta.OrderLineReference} 
            itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
              <OrderLineReferenceDisplay
                key={key}
                label="Order Line Reference"
                value={itemValue}
                meta={OrderLineFieldMeta.OrderLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={OrderLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={OrderLineFieldMeta.DocumentReference}
              />
            }
          />
        </div>
    </div>
  )
}

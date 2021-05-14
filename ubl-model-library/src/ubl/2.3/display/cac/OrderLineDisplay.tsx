import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OrderLine
  meta: FieldMeta<T>
}

export default function OrderLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-OrderLine ubl-OrderLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderLine ubl-UBLExtensions"
          meta={OrderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderLine ubl-Code ubl-SubstitutionStatusCode"
          meta={OrderLineFieldMeta.SubstitutionStatusCode} 
          value={value.SubstitutionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Substitution Status Code"
              value={itemValue}
              meta={OrderLineFieldMeta.SubstitutionStatusCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OrderLine ubl-Text ubl-Note"
          meta={OrderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={OrderLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderLine ubl-LineItem"
          meta={OrderLineFieldMeta.LineItem} 
          value={value.LineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Line Item"
              value={itemValue}
              meta={OrderLineFieldMeta.LineItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderLine ubl-LineItem ubl-SellerProposedSubstituteLineItem"
          meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem} 
          value={value.SellerProposedSubstituteLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Seller Proposed Substitute Line Item"
              value={itemValue}
              meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderLine ubl-LineItem ubl-SellerSubstitutedLineItem"
          meta={OrderLineFieldMeta.SellerSubstitutedLineItem} 
          value={value.SellerSubstitutedLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Seller Substituted Line Item"
              value={itemValue}
              meta={OrderLineFieldMeta.SellerSubstitutedLineItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderLine ubl-LineItem ubl-BuyerProposedSubstituteLineItem"
          meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem} 
          value={value.BuyerProposedSubstituteLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Buyer Proposed Substitute Line Item"
              value={itemValue}
              meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderLine ubl-LineReference ubl-CatalogueLineReference"
          meta={OrderLineFieldMeta.CatalogueLineReference} 
          value={value.CatalogueLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Catalogue Line Reference"
              value={itemValue}
              meta={OrderLineFieldMeta.CatalogueLineReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderLine ubl-LineReference ubl-QuotationLineReference"
          meta={OrderLineFieldMeta.QuotationLineReference} 
          value={value.QuotationLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Quotation Line Reference"
              value={itemValue}
              meta={OrderLineFieldMeta.QuotationLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderLine ubl-OrderLineReference"
          meta={OrderLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay
              key={key}
              label="Order Line Reference"
              value={itemValue}
              meta={OrderLineFieldMeta.OrderLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderLine ubl-DocumentReference"
          meta={OrderLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
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

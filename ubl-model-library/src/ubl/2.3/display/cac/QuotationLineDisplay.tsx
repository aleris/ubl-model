import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: QuotationLine
  meta: FieldMeta<T>
}

export default function QuotationLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-QuotationLine ubl-QuotationLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-QuotationLine ubl-UBLExtensions"
          meta={QuotationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={QuotationLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Identifier ubl-ID"
          meta={QuotationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={QuotationLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Text ubl-Note"
          meta={QuotationLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={QuotationLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Quantity"
          meta={QuotationLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={QuotationLineFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Amount ubl-LineExtensionAmount"
          meta={QuotationLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={QuotationLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Amount ubl-TotalTaxAmount"
          meta={QuotationLineFieldMeta.TotalTaxAmount} 
          value={value.TotalTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Tax Amount"
              value={itemValue}
              meta={QuotationLineFieldMeta.TotalTaxAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-QuotationLine ubl-Identifier ubl-RequestForQuotationLineID"
          meta={QuotationLineFieldMeta.RequestForQuotationLineID} 
          value={value.RequestForQuotationLineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Request For Quotation Line Identifier"
              value={itemValue}
              meta={QuotationLineFieldMeta.RequestForQuotationLineID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QuotationLine ubl-DocumentReference"
          meta={QuotationLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={QuotationLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QuotationLine ubl-LineItem"
          meta={QuotationLineFieldMeta.LineItem} 
          value={value.LineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Line Item"
              value={itemValue}
              meta={QuotationLineFieldMeta.LineItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QuotationLine ubl-LineItem ubl-SellerProposedSubstituteLineItem"
          meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem} 
          value={value.SellerProposedSubstituteLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Seller Proposed Substitute Line Item"
              value={itemValue}
              meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-QuotationLine ubl-LineItem ubl-AlternativeLineItem"
          meta={QuotationLineFieldMeta.AlternativeLineItem} 
          value={value.AlternativeLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Alternative Line Item"
              value={itemValue}
              meta={QuotationLineFieldMeta.AlternativeLineItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-QuotationLine ubl-LineReference ubl-RequestLineReference"
          meta={QuotationLineFieldMeta.RequestLineReference} 
          value={value.RequestLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Request Line Reference"
              value={itemValue}
              meta={QuotationLineFieldMeta.RequestLineReference}
            />
          }
        />
        </div>
    </div>
  )
}

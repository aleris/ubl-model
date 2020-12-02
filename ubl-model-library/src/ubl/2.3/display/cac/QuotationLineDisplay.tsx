import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: QuotationLine
  meta: FieldMeta<T>
}

export default function QuotationLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={QuotationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={QuotationLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QuotationLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={QuotationLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={QuotationLineFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={QuotationLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={QuotationLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.TotalTaxAmount} 
          value={value.TotalTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={QuotationLineFieldMeta.TotalTaxAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.RequestForQuotationLineID} 
          value={value.RequestForQuotationLineID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={QuotationLineFieldMeta.RequestForQuotationLineID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={QuotationLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.LineItem} 
          value={value.LineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={QuotationLineFieldMeta.LineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem} 
          value={value.SellerProposedSubstituteLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={QuotationLineFieldMeta.SellerProposedSubstituteLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.AlternativeLineItem} 
          value={value.AlternativeLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={QuotationLineFieldMeta.AlternativeLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={QuotationLineFieldMeta.RequestLineReference} 
          value={value.RequestLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={QuotationLineFieldMeta.RequestLineReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

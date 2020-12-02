import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: OrderLine
  meta: FieldMeta<T>
}

export default function OrderLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.SubstitutionStatusCode} 
          value={value.SubstitutionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderLineFieldMeta.SubstitutionStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.LineItem} 
          value={value.LineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={OrderLineFieldMeta.LineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem} 
          value={value.SellerProposedSubstituteLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.SellerSubstitutedLineItem} 
          value={value.SellerSubstitutedLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={OrderLineFieldMeta.SellerSubstitutedLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem} 
          value={value.BuyerProposedSubstituteLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.CatalogueLineReference} 
          value={value.CatalogueLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={OrderLineFieldMeta.CatalogueLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.QuotationLineReference} 
          value={value.QuotationLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={OrderLineFieldMeta.QuotationLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay key={key} meta={OrderLineFieldMeta.OrderLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

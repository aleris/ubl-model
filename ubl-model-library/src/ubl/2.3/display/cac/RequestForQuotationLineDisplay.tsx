import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestForQuotationLine } from  '../../model/cac/RequestForQuotationLine'
import { RequestForQuotationLineFieldMeta } from  '../../meta/cac/RequestForQuotationLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LineItemDisplay from './LineItemDisplay'
import { LineItem } from '../../model/cac/LineItem'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: RequestForQuotationLine
  meta: FieldMeta<T>
}

export default function RequestForQuotationLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RequestForQuotationLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RequestForQuotationLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.OptionalLineItemIndicator} 
          value={value.OptionalLineItemIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={RequestForQuotationLineFieldMeta.OptionalLineItemIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.PrivacyCode} 
          value={value.PrivacyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RequestForQuotationLineFieldMeta.PrivacyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.SecurityClassificationCode} 
          value={value.SecurityClassificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RequestForQuotationLineFieldMeta.SecurityClassificationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RequestForQuotationLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationLineFieldMeta.LineItem} 
          value={value.LineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={RequestForQuotationLineFieldMeta.LineItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

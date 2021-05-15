import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: RequestForQuotationLine | undefined
  meta: FieldMeta<T>
}

export default function RequestForQuotationLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RequestForQuotationLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RequestForQuotationLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={RequestForQuotationLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={RequestForQuotationLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={RequestForQuotationLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={RequestForQuotationLineFieldMeta.Note}
              />
            }
          />

          <IndicatorDisplay
            label="Optional Line Item Indicator"
            value={value.OptionalLineItemIndicator?.[0]}
            meta={RequestForQuotationLineFieldMeta.OptionalLineItemIndicator}
          />

          <CodeDisplay
            label="Privacy Code"
            value={value.PrivacyCode?.[0]}
            meta={RequestForQuotationLineFieldMeta.PrivacyCode}
          />

          <CodeDisplay
            label="Security Classification Code"
            value={value.SecurityClassificationCode?.[0]}
            meta={RequestForQuotationLineFieldMeta.SecurityClassificationCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={RequestForQuotationLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={RequestForQuotationLineFieldMeta.DocumentReference}
              />
            }
          />

          <LineItemDisplay
            label="Line Item"
            value={value.LineItem?.[0]}
            meta={RequestForQuotationLineFieldMeta.LineItem}
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: RequestForQuotationLine
  meta: FieldMeta<T>
}

export default function RequestForQuotationLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RequestForQuotationLine ubl-RequestForQuotationLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RequestForQuotationLine ubl-UBLExtensions"
          meta={RequestForQuotationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForQuotationLine ubl-Identifier ubl-ID"
          meta={RequestForQuotationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForQuotationLine ubl-Identifier ubl-UUID"
          meta={RequestForQuotationLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RequestForQuotationLine ubl-Text ubl-Note"
          meta={RequestForQuotationLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForQuotationLine ubl-Indicator ubl-OptionalLineItemIndicator"
          meta={RequestForQuotationLineFieldMeta.OptionalLineItemIndicator} 
          value={value.OptionalLineItemIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Optional Line Item Indicator"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.OptionalLineItemIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForQuotationLine ubl-Code ubl-PrivacyCode"
          meta={RequestForQuotationLineFieldMeta.PrivacyCode} 
          value={value.PrivacyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Privacy Code"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.PrivacyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForQuotationLine ubl-Code ubl-SecurityClassificationCode"
          meta={RequestForQuotationLineFieldMeta.SecurityClassificationCode} 
          value={value.SecurityClassificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Security Classification Code"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.SecurityClassificationCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RequestForQuotationLine ubl-DocumentReference"
          meta={RequestForQuotationLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RequestForQuotationLine ubl-LineItem"
          meta={RequestForQuotationLineFieldMeta.LineItem} 
          value={value.LineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Line Item"
              value={itemValue}
              meta={RequestForQuotationLineFieldMeta.LineItem}
            />
          }
        />
        </div>
    </div>
  )
}

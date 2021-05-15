import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestForTenderLine } from  '../../model/cac/RequestForTenderLine'
import { RequestForTenderLineFieldMeta } from  '../../meta/cac/RequestForTenderLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RequestForTenderLine | undefined
  meta: FieldMeta<T>
}

export default function RequestForTenderLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RequestForTenderLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RequestForTenderLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={RequestForTenderLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={RequestForTenderLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={RequestForTenderLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={RequestForTenderLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={RequestForTenderLineFieldMeta.Quantity}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={RequestForTenderLineFieldMeta.MinimumQuantity}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={RequestForTenderLineFieldMeta.MaximumQuantity}
          />

          <IndicatorDisplay
            label="Tax Included Indicator"
            value={value.TaxIncludedIndicator?.[0]}
            meta={RequestForTenderLineFieldMeta.TaxIncludedIndicator}
          />

          <AmountDisplay
            label="Minimum Amount"
            value={value.MinimumAmount?.[0]}
            meta={RequestForTenderLineFieldMeta.MinimumAmount}
          />

          <AmountDisplay
            label="Maximum Amount"
            value={value.MaximumAmount?.[0]}
            meta={RequestForTenderLineFieldMeta.MaximumAmount}
          />

          <AmountDisplay
            label="Estimated Amount"
            value={value.EstimatedAmount?.[0]}
            meta={RequestForTenderLineFieldMeta.EstimatedAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={RequestForTenderLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={RequestForTenderLineFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-DeliveryPeriod"
            label="Delivery Period"
            items={value.DeliveryPeriod}
            meta={RequestForTenderLineFieldMeta.DeliveryPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Delivery Period"
                value={itemValue}
                meta={RequestForTenderLineFieldMeta.DeliveryPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
            label="Required Item Location Quantity"
            items={value.RequiredItemLocationQuantity}
            meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity} 
            itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
              <ItemLocationQuantityDisplay
                key={key}
                label="Required Item Location Quantity"
                value={itemValue}
                meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity}
              />
            }
          />

          <PeriodDisplay
            label="Warranty Validity Period"
            value={value.WarrantyValidityPeriod?.[0]}
            meta={RequestForTenderLineFieldMeta.WarrantyValidityPeriod}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={RequestForTenderLineFieldMeta.Item}
          />

          <ElementListDisplay
            className="ubl-cac ubl-RequestForTenderLine ubl-SubRequestForTenderLine"
            label="Sub Request For Tender Line"
            items={value.SubRequestForTenderLine}
            meta={RequestForTenderLineFieldMeta.SubRequestForTenderLine} 
            itemDisplay={ (itemValue: RequestForTenderLine, key: string | number) =>
              <RequestForTenderLineDisplay
                key={key}
                label="Sub Request For Tender Line"
                value={itemValue}
                meta={RequestForTenderLineFieldMeta.SubRequestForTenderLine}
              />
            }
          />
        </div>
    </div>
  )
}

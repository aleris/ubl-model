import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: RequestForTenderLine
  meta: FieldMeta<T>
}

export default function RequestForTenderLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RequestForTenderLine ubl-RequestForTenderLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RequestForTenderLine ubl-UBLExtensions"
          meta={RequestForTenderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Identifier ubl-ID"
          meta={RequestForTenderLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Identifier ubl-UUID"
          meta={RequestForTenderLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Text ubl-Note"
          meta={RequestForTenderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Quantity"
          meta={RequestForTenderLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Quantity ubl-MinimumQuantity"
          meta={RequestForTenderLineFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Quantity ubl-MaximumQuantity"
          meta={RequestForTenderLineFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Indicator ubl-TaxIncludedIndicator"
          meta={RequestForTenderLineFieldMeta.TaxIncludedIndicator} 
          value={value.TaxIncludedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Tax Included Indicator"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.TaxIncludedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Amount ubl-MinimumAmount"
          meta={RequestForTenderLineFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Minimum Amount"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.MinimumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Amount ubl-MaximumAmount"
          meta={RequestForTenderLineFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Amount"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.MaximumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestForTenderLine ubl-Amount ubl-EstimatedAmount"
          meta={RequestForTenderLineFieldMeta.EstimatedAmount} 
          value={value.EstimatedAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Estimated Amount"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.EstimatedAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RequestForTenderLine ubl-DocumentReference"
          meta={RequestForTenderLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RequestForTenderLine ubl-Period ubl-DeliveryPeriod"
          meta={RequestForTenderLineFieldMeta.DeliveryPeriod} 
          value={value.DeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Delivery Period"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.DeliveryPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RequestForTenderLine ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
          meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay
              key={key}
              label="Required Item Location Quantity"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RequestForTenderLine ubl-Period ubl-WarrantyValidityPeriod"
          meta={RequestForTenderLineFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Warranty Validity Period"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.WarrantyValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RequestForTenderLine ubl-Item"
          meta={RequestForTenderLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={RequestForTenderLineFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RequestForTenderLine ubl-SubRequestForTenderLine"
          meta={RequestForTenderLineFieldMeta.SubRequestForTenderLine} 
          value={value.SubRequestForTenderLine}
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

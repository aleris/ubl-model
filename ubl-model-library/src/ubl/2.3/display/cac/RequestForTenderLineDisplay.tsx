import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: RequestForTenderLine
  meta: FieldMeta<T>
}

export default function RequestForTenderLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RequestForTenderLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForTenderLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForTenderLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RequestForTenderLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={RequestForTenderLineFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={RequestForTenderLineFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={RequestForTenderLineFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.TaxIncludedIndicator} 
          value={value.TaxIncludedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={RequestForTenderLineFieldMeta.TaxIncludedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestForTenderLineFieldMeta.MinimumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestForTenderLineFieldMeta.MaximumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.EstimatedAmount} 
          value={value.EstimatedAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestForTenderLineFieldMeta.EstimatedAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RequestForTenderLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.DeliveryPeriod} 
          value={value.DeliveryPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RequestForTenderLineFieldMeta.DeliveryPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={RequestForTenderLineFieldMeta.RequiredItemLocationQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RequestForTenderLineFieldMeta.WarrantyValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={RequestForTenderLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForTenderLineFieldMeta.SubRequestForTenderLine} 
          value={value.SubRequestForTenderLine}
          itemDisplay={ (itemValue: RequestForTenderLine, key: string | number) =>
            <RequestForTenderLineDisplay key={key} meta={RequestForTenderLineFieldMeta.SubRequestForTenderLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

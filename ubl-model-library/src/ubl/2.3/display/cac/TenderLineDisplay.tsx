import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderLine } from  '../../model/cac/TenderLine'
import { TenderLineFieldMeta } from  '../../meta/cac/TenderLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import RelatedItemDisplay from './RelatedItemDisplay'
import { RelatedItem } from '../../model/cac/RelatedItem'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderLine
  meta: FieldMeta<T>
}

export default function TenderLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderLineFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.TotalTaxAmount} 
          value={value.TotalTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderLineFieldMeta.TotalTaxAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.OrderableUnit} 
          value={value.OrderableUnit}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderLineFieldMeta.OrderableUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.ContentUnitQuantity} 
          value={value.ContentUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderLineFieldMeta.ContentUnitQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.OrderQuantityIncrementNumeric} 
          value={value.OrderQuantityIncrementNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TenderLineFieldMeta.OrderQuantityIncrementNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.MinimumOrderQuantity} 
          value={value.MinimumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderLineFieldMeta.MinimumOrderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.MaximumOrderQuantity} 
          value={value.MaximumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderLineFieldMeta.MaximumOrderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.WarrantyInformation} 
          value={value.WarrantyInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderLineFieldMeta.WarrantyInformation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.PackLevelCode} 
          value={value.PackLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderLineFieldMeta.PackLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={TenderLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.OfferedItemLocationQuantity} 
          value={value.OfferedItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={TenderLineFieldMeta.OfferedItemLocationQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.ReplacementRelatedItem} 
          value={value.ReplacementRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={TenderLineFieldMeta.ReplacementRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.WarrantyParty} 
          value={value.WarrantyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderLineFieldMeta.WarrantyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderLineFieldMeta.WarrantyValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.SubTenderLine} 
          value={value.SubTenderLine}
          itemDisplay={ (itemValue: TenderLine, key: string | number) =>
            <TenderLineDisplay key={key} meta={TenderLineFieldMeta.SubTenderLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.CallForTendersLineReference} 
          value={value.CallForTendersLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={TenderLineFieldMeta.CallForTendersLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderLineFieldMeta.CallForTendersDocumentReference} 
          value={value.CallForTendersDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderLineFieldMeta.CallForTendersDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

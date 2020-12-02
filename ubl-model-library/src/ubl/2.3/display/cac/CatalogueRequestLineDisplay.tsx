import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueRequestLine } from  '../../model/cac/CatalogueRequestLine'
import { CatalogueRequestLineFieldMeta } from  '../../meta/cac/CatalogueRequestLineMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CatalogueRequestLine
  meta: FieldMeta<T>
}

export default function CatalogueRequestLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueRequestLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.ContractSubdivision} 
          value={value.ContractSubdivision}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueRequestLineFieldMeta.ContractSubdivision} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueRequestLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.LineValidityPeriod} 
          value={value.LineValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CatalogueRequestLineFieldMeta.LineValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={CatalogueRequestLineFieldMeta.Item} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

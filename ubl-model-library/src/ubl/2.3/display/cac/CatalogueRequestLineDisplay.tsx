import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: CatalogueRequestLine | undefined
  meta: FieldMeta<T>
}

export default function CatalogueRequestLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CatalogueRequestLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueRequestLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueRequestLineFieldMeta.ID}
          />

          <TextDisplay
            label="Contract Subdivision"
            value={value.ContractSubdivision?.[0]}
            meta={CatalogueRequestLineFieldMeta.ContractSubdivision}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CatalogueRequestLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CatalogueRequestLineFieldMeta.Note}
              />
            }
          />

          <PeriodDisplay
            label="Line Validity Period"
            value={value.LineValidityPeriod?.[0]}
            meta={CatalogueRequestLineFieldMeta.LineValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
            label="Required Item Location Quantity"
            items={value.RequiredItemLocationQuantity}
            meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity} 
            itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
              <ItemLocationQuantityDisplay
                key={key}
                label="Required Item Location Quantity"
                value={itemValue}
                meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={CatalogueRequestLineFieldMeta.Item}
          />
        </div>
    </div>
  )
}

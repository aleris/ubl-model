import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CatalogueRequestLine
  meta: FieldMeta<T>
}

export default function CatalogueRequestLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CatalogueRequestLine ubl-CatalogueRequestLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueRequestLine ubl-UBLExtensions"
          meta={CatalogueRequestLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequestLine ubl-Identifier ubl-ID"
          meta={CatalogueRequestLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequestLine ubl-Text ubl-ContractSubdivision"
          meta={CatalogueRequestLineFieldMeta.ContractSubdivision} 
          value={value.ContractSubdivision}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Subdivision"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.ContractSubdivision}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueRequestLine ubl-Text ubl-Note"
          meta={CatalogueRequestLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequestLine ubl-Period ubl-LineValidityPeriod"
          meta={CatalogueRequestLineFieldMeta.LineValidityPeriod} 
          value={value.LineValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Line Validity Period"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.LineValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequestLine ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
          meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay
              key={key}
              label="Required Item Location Quantity"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequestLine ubl-Item"
          meta={CatalogueRequestLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={CatalogueRequestLineFieldMeta.Item}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemProperty } from  '../../model/cac/ItemProperty'
import { ItemPropertyFieldMeta } from  '../../meta/cac/ItemPropertyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemPropertyGroupDisplay from './ItemPropertyGroupDisplay'
import { ItemPropertyGroup } from '../../model/cac/ItemPropertyGroup'
import ItemPropertyRangeDisplay from './ItemPropertyRangeDisplay'
import { ItemPropertyRange } from '../../model/cac/ItemPropertyRange'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PropertyIdentificationDisplay from './PropertyIdentificationDisplay'
import { PropertyIdentification } from '../../model/cac/PropertyIdentification'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemProperty | undefined
  meta: FieldMeta<T>
}

export default function ItemPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemProperty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemPropertyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ItemPropertyFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ItemPropertyFieldMeta.Name}
          />

          <CodeDisplay
            label="Name Code"
            value={value.NameCode?.[0]}
            meta={ItemPropertyFieldMeta.NameCode}
          />

          <TextDisplay
            label="Test Method"
            value={value.TestMethod?.[0]}
            meta={ItemPropertyFieldMeta.TestMethod}
          />

          <TextDisplay
            label="Value"
            value={value.Value?.[0]}
            meta={ItemPropertyFieldMeta.Value}
          />

          <QuantityDisplay
            label="Value Quantity"
            value={value.ValueQuantity?.[0]}
            meta={ItemPropertyFieldMeta.ValueQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ValueQualifier"
            label="Value Qualifier"
            items={value.ValueQualifier}
            meta={ItemPropertyFieldMeta.ValueQualifier} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Value Qualifier"
                value={itemValue}
                meta={ItemPropertyFieldMeta.ValueQualifier}
              />
            }
          />

          <CodeDisplay
            label="Importance Code"
            value={value.ImportanceCode?.[0]}
            meta={ItemPropertyFieldMeta.ImportanceCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ListValue"
            label="List Value"
            items={value.ListValue}
            meta={ItemPropertyFieldMeta.ListValue} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="List Value"
                value={itemValue}
                meta={ItemPropertyFieldMeta.ListValue}
              />
            }
          />

          <PeriodDisplay
            label="Usability Period"
            value={value.UsabilityPeriod?.[0]}
            meta={ItemPropertyFieldMeta.UsabilityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemPropertyGroup"
            label="Item Property Group"
            items={value.ItemPropertyGroup}
            meta={ItemPropertyFieldMeta.ItemPropertyGroup} 
            itemDisplay={ (itemValue: ItemPropertyGroup, key: string | number) =>
              <ItemPropertyGroupDisplay
                key={key}
                label="Item Property Group"
                value={itemValue}
                meta={ItemPropertyFieldMeta.ItemPropertyGroup}
              />
            }
          />

          <DimensionDisplay
            label="Range Dimension"
            value={value.RangeDimension?.[0]}
            meta={ItemPropertyFieldMeta.RangeDimension}
          />

          <ItemPropertyRangeDisplay
            label="Item Property Range"
            value={value.ItemPropertyRange?.[0]}
            meta={ItemPropertyFieldMeta.ItemPropertyRange}
          />

          <PropertyIdentificationDisplay
            label="Standard Property Identification"
            value={value.StandardPropertyIdentification?.[0]}
            meta={ItemPropertyFieldMeta.StandardPropertyIdentification}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemProperty ubl-SubItemProperty"
            label="Sub Item Property"
            items={value.SubItemProperty}
            meta={ItemPropertyFieldMeta.SubItemProperty} 
            itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
              <ItemPropertyDisplay
                key={key}
                label="Sub Item Property"
                value={itemValue}
                meta={ItemPropertyFieldMeta.SubItemProperty}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemProperty
  meta: FieldMeta<T>
}

export default function ItemPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemProperty ubl-ItemPropertyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemProperty ubl-UBLExtensions"
          meta={ItemPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemPropertyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Identifier ubl-ID"
          meta={ItemPropertyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Text ubl-Name"
          meta={ItemPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ItemPropertyFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Code ubl-NameCode"
          meta={ItemPropertyFieldMeta.NameCode} 
          value={value.NameCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Name Code"
              value={itemValue}
              meta={ItemPropertyFieldMeta.NameCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Text ubl-TestMethod"
          meta={ItemPropertyFieldMeta.TestMethod} 
          value={value.TestMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Test Method"
              value={itemValue}
              meta={ItemPropertyFieldMeta.TestMethod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Text ubl-Value"
          meta={ItemPropertyFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={ItemPropertyFieldMeta.Value}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Quantity ubl-ValueQuantity"
          meta={ItemPropertyFieldMeta.ValueQuantity} 
          value={value.ValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Value Quantity"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ValueQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Text ubl-ValueQualifier"
          meta={ItemPropertyFieldMeta.ValueQualifier} 
          value={value.ValueQualifier}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Value Qualifier"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ValueQualifier}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Code ubl-ImportanceCode"
          meta={ItemPropertyFieldMeta.ImportanceCode} 
          value={value.ImportanceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Importance Code"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ImportanceCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ItemProperty ubl-Text ubl-ListValue"
          meta={ItemPropertyFieldMeta.ListValue} 
          value={value.ListValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="List Value"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ListValue}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemProperty ubl-Period ubl-UsabilityPeriod"
          meta={ItemPropertyFieldMeta.UsabilityPeriod} 
          value={value.UsabilityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Usability Period"
              value={itemValue}
              meta={ItemPropertyFieldMeta.UsabilityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemProperty ubl-ItemPropertyGroup"
          meta={ItemPropertyFieldMeta.ItemPropertyGroup} 
          value={value.ItemPropertyGroup}
          itemDisplay={ (itemValue: ItemPropertyGroup, key: string | number) =>
            <ItemPropertyGroupDisplay
              key={key}
              label="Item Property Group"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ItemPropertyGroup}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemProperty ubl-Dimension ubl-RangeDimension"
          meta={ItemPropertyFieldMeta.RangeDimension} 
          value={value.RangeDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Range Dimension"
              value={itemValue}
              meta={ItemPropertyFieldMeta.RangeDimension}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemProperty ubl-ItemPropertyRange"
          meta={ItemPropertyFieldMeta.ItemPropertyRange} 
          value={value.ItemPropertyRange}
          itemDisplay={ (itemValue: ItemPropertyRange, key: string | number) =>
            <ItemPropertyRangeDisplay
              key={key}
              label="Item Property Range"
              value={itemValue}
              meta={ItemPropertyFieldMeta.ItemPropertyRange}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemProperty ubl-PropertyIdentification ubl-StandardPropertyIdentification"
          meta={ItemPropertyFieldMeta.StandardPropertyIdentification} 
          value={value.StandardPropertyIdentification}
          itemDisplay={ (itemValue: PropertyIdentification, key: string | number) =>
            <PropertyIdentificationDisplay
              key={key}
              label="Standard Property Identification"
              value={itemValue}
              meta={ItemPropertyFieldMeta.StandardPropertyIdentification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemProperty ubl-SubItemProperty"
          meta={ItemPropertyFieldMeta.SubItemProperty} 
          value={value.SubItemProperty}
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

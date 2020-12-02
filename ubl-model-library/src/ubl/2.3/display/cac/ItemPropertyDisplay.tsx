import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ItemProperty
  meta: FieldMeta<T>
}

export default function ItemPropertyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemPropertyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemPropertyFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.NameCode} 
          value={value.NameCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemPropertyFieldMeta.NameCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.TestMethod} 
          value={value.TestMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyFieldMeta.TestMethod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyFieldMeta.Value} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ValueQuantity} 
          value={value.ValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemPropertyFieldMeta.ValueQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ValueQualifier} 
          value={value.ValueQualifier}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyFieldMeta.ValueQualifier} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ImportanceCode} 
          value={value.ImportanceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemPropertyFieldMeta.ImportanceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ListValue} 
          value={value.ListValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyFieldMeta.ListValue} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.UsabilityPeriod} 
          value={value.UsabilityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ItemPropertyFieldMeta.UsabilityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ItemPropertyGroup} 
          value={value.ItemPropertyGroup}
          itemDisplay={ (itemValue: ItemPropertyGroup, key: string | number) =>
            <ItemPropertyGroupDisplay key={key} meta={ItemPropertyFieldMeta.ItemPropertyGroup} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.RangeDimension} 
          value={value.RangeDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={ItemPropertyFieldMeta.RangeDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.ItemPropertyRange} 
          value={value.ItemPropertyRange}
          itemDisplay={ (itemValue: ItemPropertyRange, key: string | number) =>
            <ItemPropertyRangeDisplay key={key} meta={ItemPropertyFieldMeta.ItemPropertyRange} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.StandardPropertyIdentification} 
          value={value.StandardPropertyIdentification}
          itemDisplay={ (itemValue: PropertyIdentification, key: string | number) =>
            <PropertyIdentificationDisplay key={key} meta={ItemPropertyFieldMeta.StandardPropertyIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyFieldMeta.SubItemProperty} 
          value={value.SubItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay key={key} meta={ItemPropertyFieldMeta.SubItemProperty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

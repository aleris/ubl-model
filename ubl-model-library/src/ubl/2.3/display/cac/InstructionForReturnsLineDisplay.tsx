import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { InstructionForReturnsLine } from  '../../model/cac/InstructionForReturnsLine'
import { InstructionForReturnsLineFieldMeta } from  '../../meta/cac/InstructionForReturnsLineMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: InstructionForReturnsLine
  meta: FieldMeta<T>
}

export default function InstructionForReturnsLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={InstructionForReturnsLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={InstructionForReturnsLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InstructionForReturnsLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={InstructionForReturnsLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={InstructionForReturnsLineFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsLineFieldMeta.ManufacturerParty} 
          value={value.ManufacturerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={InstructionForReturnsLineFieldMeta.ManufacturerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InstructionForReturnsLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={InstructionForReturnsLineFieldMeta.Item} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

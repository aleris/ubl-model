import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: InstructionForReturnsLine
  meta: FieldMeta<T>
}

export default function InstructionForReturnsLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-InstructionForReturnsLine ubl-InstructionForReturnsLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-InstructionForReturnsLine ubl-UBLExtensions"
          meta={InstructionForReturnsLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={InstructionForReturnsLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InstructionForReturnsLine ubl-Identifier ubl-ID"
          meta={InstructionForReturnsLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={InstructionForReturnsLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-InstructionForReturnsLine ubl-Text ubl-Note"
          meta={InstructionForReturnsLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={InstructionForReturnsLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InstructionForReturnsLine ubl-Quantity"
          meta={InstructionForReturnsLineFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={InstructionForReturnsLineFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InstructionForReturnsLine ubl-Party ubl-ManufacturerParty"
          meta={InstructionForReturnsLineFieldMeta.ManufacturerParty} 
          value={value.ManufacturerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Manufacturer Party"
              value={itemValue}
              meta={InstructionForReturnsLineFieldMeta.ManufacturerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InstructionForReturnsLine ubl-Item"
          meta={InstructionForReturnsLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={InstructionForReturnsLineFieldMeta.Item}
            />
          }
        />
        </div>
    </div>
  )
}

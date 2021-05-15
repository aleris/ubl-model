import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: InstructionForReturnsLine | undefined
  meta: FieldMeta<T>
}

export default function InstructionForReturnsLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-InstructionForReturnsLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={InstructionForReturnsLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={InstructionForReturnsLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={InstructionForReturnsLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={InstructionForReturnsLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={InstructionForReturnsLineFieldMeta.Quantity}
          />

          <PartyDisplay
            label="Manufacturer Party"
            value={value.ManufacturerParty?.[0]}
            meta={InstructionForReturnsLineFieldMeta.ManufacturerParty}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={InstructionForReturnsLineFieldMeta.Item}
          />
        </div>
    </div>
  )
}

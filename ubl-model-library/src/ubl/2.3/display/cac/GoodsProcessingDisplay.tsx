import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsProcessing } from  '../../model/cac/GoodsProcessing'
import { GoodsProcessingFieldMeta } from  '../../meta/cac/GoodsProcessingMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CriterionItemDisplay from './CriterionItemDisplay'
import { CriterionItem } from '../../model/cac/CriterionItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: GoodsProcessing | undefined
  meta: FieldMeta<T>
}

export default function GoodsProcessingDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-GoodsProcessing">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsProcessingFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsProcessingFieldMeta.ID}
          />

          <CodeDisplay
            label="Type"
            value={value.TypeCode?.[0]}
            meta={GoodsProcessingFieldMeta.TypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={GoodsProcessingFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={GoodsProcessingFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={GoodsProcessingFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={GoodsProcessingFieldMeta.Note}
              />
            }
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={GoodsProcessingFieldMeta.Period}
          />

          <PartyDisplay
            label="Processing Party"
            value={value.ProcessingParty?.[0]}
            meta={GoodsProcessingFieldMeta.ProcessingParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-CriterionItem"
            label="Criterion Item"
            items={value.CriterionItem}
            meta={GoodsProcessingFieldMeta.CriterionItem} 
            itemDisplay={ (itemValue: CriterionItem, key: string | number) =>
              <CriterionItemDisplay
                key={key}
                label="Criterion Item"
                value={itemValue}
                meta={GoodsProcessingFieldMeta.CriterionItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsProcessing ubl-SubGoodsProcessing"
            label="Sub Goods Processing"
            items={value.SubGoodsProcessing}
            meta={GoodsProcessingFieldMeta.SubGoodsProcessing} 
            itemDisplay={ (itemValue: GoodsProcessing, key: string | number) =>
              <GoodsProcessingDisplay
                key={key}
                label="Sub Goods Processing"
                value={itemValue}
                meta={GoodsProcessingFieldMeta.SubGoodsProcessing}
              />
            }
          />
        </div>
    </div>
  )
}

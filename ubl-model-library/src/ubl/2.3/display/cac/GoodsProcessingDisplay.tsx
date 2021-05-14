import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: GoodsProcessing
  meta: FieldMeta<T>
}

export default function GoodsProcessingDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-GoodsProcessing ubl-GoodsProcessingType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsProcessing ubl-UBLExtensions"
          meta={GoodsProcessingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsProcessing ubl-Identifier ubl-ID"
          meta={GoodsProcessingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsProcessing ubl-Code ubl-TypeCode"
          meta={GoodsProcessingFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Type"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.TypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsProcessing ubl-Text ubl-Description"
          meta={GoodsProcessingFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsProcessing ubl-Text ubl-Note"
          meta={GoodsProcessingFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsProcessing ubl-Period"
          meta={GoodsProcessingFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.Period}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsProcessing ubl-Party ubl-ProcessingParty"
          meta={GoodsProcessingFieldMeta.ProcessingParty} 
          value={value.ProcessingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Processing Party"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.ProcessingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsProcessing ubl-CriterionItem"
          meta={GoodsProcessingFieldMeta.CriterionItem} 
          value={value.CriterionItem}
          itemDisplay={ (itemValue: CriterionItem, key: string | number) =>
            <CriterionItemDisplay
              key={key}
              label="Criterion Item"
              value={itemValue}
              meta={GoodsProcessingFieldMeta.CriterionItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsProcessing ubl-SubGoodsProcessing"
          meta={GoodsProcessingFieldMeta.SubGoodsProcessing} 
          value={value.SubGoodsProcessing}
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

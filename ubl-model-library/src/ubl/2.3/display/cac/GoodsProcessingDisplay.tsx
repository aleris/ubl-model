import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: GoodsProcessing
  meta: FieldMeta<T>
}

export default function GoodsProcessingDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsProcessingFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsProcessingFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GoodsProcessingFieldMeta.TypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsProcessingFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsProcessingFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={GoodsProcessingFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.ProcessingParty} 
          value={value.ProcessingParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsProcessingFieldMeta.ProcessingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.CriterionItem} 
          value={value.CriterionItem}
          itemDisplay={ (itemValue: CriterionItem, key: string | number) =>
            <CriterionItemDisplay key={key} meta={GoodsProcessingFieldMeta.CriterionItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsProcessingFieldMeta.SubGoodsProcessing} 
          value={value.SubGoodsProcessing}
          itemDisplay={ (itemValue: GoodsProcessing, key: string | number) =>
            <GoodsProcessingDisplay key={key} meta={GoodsProcessingFieldMeta.SubGoodsProcessing} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

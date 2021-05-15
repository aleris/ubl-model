import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AttestationLine } from  '../../model/cac/AttestationLine'
import { AttestationLineFieldMeta } from  '../../meta/cac/AttestationLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CriterionItemDisplay from './CriterionItemDisplay'
import { CriterionItem } from '../../model/cac/CriterionItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AttestationLine | undefined
  meta: FieldMeta<T>
}

export default function AttestationLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AttestationLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AttestationLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AttestationLineFieldMeta.ID}
          />

          <CodeDisplay
            label="Type Code"
            value={value.TypeCode?.[0]}
            meta={AttestationLineFieldMeta.TypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={AttestationLineFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={AttestationLineFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CriterionItem"
            label="Criterion Item"
            items={value.CriterionItem}
            meta={AttestationLineFieldMeta.CriterionItem} 
            itemDisplay={ (itemValue: CriterionItem, key: string | number) =>
              <CriterionItemDisplay
                key={key}
                label="Criterion Item"
                value={itemValue}
                meta={AttestationLineFieldMeta.CriterionItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AttestationLine ubl-SubAttestationLine"
            label="Sub Attestation Line"
            items={value.SubAttestationLine}
            meta={AttestationLineFieldMeta.SubAttestationLine} 
            itemDisplay={ (itemValue: AttestationLine, key: string | number) =>
              <AttestationLineDisplay
                key={key}
                label="Sub Attestation Line"
                value={itemValue}
                meta={AttestationLineFieldMeta.SubAttestationLine}
              />
            }
          />
        </div>
    </div>
  )
}

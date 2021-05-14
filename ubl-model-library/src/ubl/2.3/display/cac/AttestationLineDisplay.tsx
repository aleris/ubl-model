import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: AttestationLine
  meta: FieldMeta<T>
}

export default function AttestationLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AttestationLine ubl-AttestationLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AttestationLine ubl-UBLExtensions"
          meta={AttestationLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AttestationLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttestationLine ubl-Identifier ubl-ID"
          meta={AttestationLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AttestationLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttestationLine ubl-Code ubl-TypeCode"
          meta={AttestationLineFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Type Code"
              value={itemValue}
              meta={AttestationLineFieldMeta.TypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AttestationLine ubl-Text ubl-Description"
          meta={AttestationLineFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={AttestationLineFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AttestationLine ubl-CriterionItem"
          meta={AttestationLineFieldMeta.CriterionItem} 
          value={value.CriterionItem}
          itemDisplay={ (itemValue: CriterionItem, key: string | number) =>
            <CriterionItemDisplay
              key={key}
              label="Criterion Item"
              value={itemValue}
              meta={AttestationLineFieldMeta.CriterionItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AttestationLine ubl-SubAttestationLine"
          meta={AttestationLineFieldMeta.SubAttestationLine} 
          value={value.SubAttestationLine}
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

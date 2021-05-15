import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Declaration } from  '../../model/cac/Declaration'
import { DeclarationFieldMeta } from  '../../meta/cac/DeclarationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceSuppliedDisplay from './EvidenceSuppliedDisplay'
import { EvidenceSupplied } from '../../model/cac/EvidenceSupplied'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Declaration | undefined
  meta: FieldMeta<T>
}

export default function DeclarationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Declaration">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DeclarationFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Name"
            label="Name"
            items={value.Name}
            meta={DeclarationFieldMeta.Name} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Name"
                value={itemValue}
                meta={DeclarationFieldMeta.Name}
              />
            }
          />

          <CodeDisplay
            label="Declaration Type Code"
            value={value.DeclarationTypeCode?.[0]}
            meta={DeclarationFieldMeta.DeclarationTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={DeclarationFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={DeclarationFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EvidenceSupplied"
            label="Evidence Supplied"
            items={value.EvidenceSupplied}
            meta={DeclarationFieldMeta.EvidenceSupplied} 
            itemDisplay={ (itemValue: EvidenceSupplied, key: string | number) =>
              <EvidenceSuppliedDisplay
                key={key}
                label="Evidence Supplied"
                value={itemValue}
                meta={DeclarationFieldMeta.EvidenceSupplied}
              />
            }
          />
        </div>
    </div>
  )
}

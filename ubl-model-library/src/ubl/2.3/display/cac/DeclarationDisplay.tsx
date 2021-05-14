import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Declaration
  meta: FieldMeta<T>
}

export default function DeclarationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Declaration ubl-DeclarationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Declaration ubl-UBLExtensions"
          meta={DeclarationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DeclarationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Declaration ubl-Text ubl-Name"
          meta={DeclarationFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={DeclarationFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Declaration ubl-Code ubl-DeclarationTypeCode"
          meta={DeclarationFieldMeta.DeclarationTypeCode} 
          value={value.DeclarationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Declaration Type Code"
              value={itemValue}
              meta={DeclarationFieldMeta.DeclarationTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Declaration ubl-Text ubl-Description"
          meta={DeclarationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={DeclarationFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Declaration ubl-EvidenceSupplied"
          meta={DeclarationFieldMeta.EvidenceSupplied} 
          value={value.EvidenceSupplied}
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

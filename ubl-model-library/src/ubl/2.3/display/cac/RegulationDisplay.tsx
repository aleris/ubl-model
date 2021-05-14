import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Regulation } from  '../../model/cac/Regulation'
import { RegulationFieldMeta } from  '../../meta/cac/RegulationMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Regulation
  meta: FieldMeta<T>
}

export default function RegulationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Regulation ubl-RegulationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Regulation ubl-UBLExtensions"
          meta={RegulationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RegulationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Regulation ubl-Text ubl-Name"
          meta={RegulationFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={RegulationFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Regulation ubl-Text ubl-LegalReference"
          meta={RegulationFieldMeta.LegalReference} 
          value={value.LegalReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Legal Reference"
              value={itemValue}
              meta={RegulationFieldMeta.LegalReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Regulation ubl-Identifier ubl-OntologyURI"
          meta={RegulationFieldMeta.OntologyURI} 
          value={value.OntologyURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Ontology URI"
              value={itemValue}
              meta={RegulationFieldMeta.OntologyURI}
            />
          }
        />
        </div>
    </div>
  )
}

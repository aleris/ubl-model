import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Regulation | undefined
  meta: FieldMeta<T>
}

export default function RegulationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Regulation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RegulationFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={RegulationFieldMeta.Name}
          />

          <TextDisplay
            label="Legal Reference"
            value={value.LegalReference?.[0]}
            meta={RegulationFieldMeta.LegalReference}
          />

          <IdentifierDisplay
            label="Ontology URI"
            value={value.OntologyURI?.[0]}
            meta={RegulationFieldMeta.OntologyURI}
          />
        </div>
    </div>
  )
}

import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentDistribution } from  '../../model/cac/DocumentDistribution'
import { DocumentDistributionFieldMeta } from  '../../meta/cac/DocumentDistributionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DocumentDistribution | undefined
  meta: FieldMeta<T>
}

export default function DocumentDistributionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DocumentDistribution">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DocumentDistributionFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Document Type Code"
            value={value.DocumentTypeCode?.[0]}
            meta={DocumentDistributionFieldMeta.DocumentTypeCode}
          />

          <TextDisplay
            label="Print Qualifier"
            value={value.PrintQualifier?.[0]}
            meta={DocumentDistributionFieldMeta.PrintQualifier}
          />

          <NumericDisplay
            label="Maximum Copies"
            value={value.MaximumCopiesNumeric?.[0]}
            meta={DocumentDistributionFieldMeta.MaximumCopiesNumeric}
          />

          <NumericDisplay
            label="Maximum Originals"
            value={value.MaximumOriginalsNumeric?.[0]}
            meta={DocumentDistributionFieldMeta.MaximumOriginalsNumeric}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={DocumentDistributionFieldMeta.Party}
          />
        </div>
    </div>
  )
}

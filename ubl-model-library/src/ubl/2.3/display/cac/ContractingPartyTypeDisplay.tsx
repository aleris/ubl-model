import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingPartyType } from  '../../model/cac/ContractingPartyType'
import { ContractingPartyTypeFieldMeta } from  '../../meta/cac/ContractingPartyTypeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractingPartyType | undefined
  meta: FieldMeta<T>
}

export default function ContractingPartyTypeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ContractingPartyType">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractingPartyTypeFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Party Type Code"
            value={value.PartyTypeCode?.[0]}
            meta={ContractingPartyTypeFieldMeta.PartyTypeCode}
          />

          <TextDisplay
            label="Party Type"
            value={value.PartyType?.[0]}
            meta={ContractingPartyTypeFieldMeta.PartyType}
          />
        </div>
    </div>
  )
}

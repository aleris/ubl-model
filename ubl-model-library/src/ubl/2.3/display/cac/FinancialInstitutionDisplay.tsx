import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { FinancialInstitution } from  '../../model/cac/FinancialInstitution'
import { FinancialInstitutionFieldMeta } from  '../../meta/cac/FinancialInstitutionMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: FinancialInstitution | undefined
  meta: FieldMeta<T>
}

export default function FinancialInstitutionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-FinancialInstitution">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FinancialInstitutionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={FinancialInstitutionFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={FinancialInstitutionFieldMeta.Name}
          />

          <AddressDisplay
            label="Address"
            value={value.Address?.[0]}
            meta={FinancialInstitutionFieldMeta.Address}
          />
        </div>
    </div>
  )
}

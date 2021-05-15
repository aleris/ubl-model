import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Branch } from  '../../model/cac/Branch'
import { BranchFieldMeta } from  '../../meta/cac/BranchMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import FinancialInstitutionDisplay from './FinancialInstitutionDisplay'
import { FinancialInstitution } from '../../model/cac/FinancialInstitution'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Branch | undefined
  meta: FieldMeta<T>
}

export default function BranchDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Branch">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BranchFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={BranchFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={BranchFieldMeta.Name}
          />

          <FinancialInstitutionDisplay
            label="Financial Institution"
            value={value.FinancialInstitution?.[0]}
            meta={BranchFieldMeta.FinancialInstitution}
          />

          <AddressDisplay
            label="Address"
            value={value.Address?.[0]}
            meta={BranchFieldMeta.Address}
          />
        </div>
    </div>
  )
}

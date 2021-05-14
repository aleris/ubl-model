import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: FinancialInstitution
  meta: FieldMeta<T>
}

export default function FinancialInstitutionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-FinancialInstitution ubl-FinancialInstitutionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-FinancialInstitution ubl-UBLExtensions"
          meta={FinancialInstitutionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={FinancialInstitutionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialInstitution ubl-Identifier ubl-ID"
          meta={FinancialInstitutionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={FinancialInstitutionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialInstitution ubl-Text ubl-Name"
          meta={FinancialInstitutionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={FinancialInstitutionFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FinancialInstitution ubl-Address"
          meta={FinancialInstitutionFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Address"
              value={itemValue}
              meta={FinancialInstitutionFieldMeta.Address}
            />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Branch
  meta: FieldMeta<T>
}

export default function BranchDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Branch ubl-BranchType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Branch ubl-UBLExtensions"
          meta={BranchFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={BranchFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Branch ubl-Identifier ubl-ID"
          meta={BranchFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={BranchFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Branch ubl-Text ubl-Name"
          meta={BranchFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={BranchFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Branch ubl-FinancialInstitution"
          meta={BranchFieldMeta.FinancialInstitution} 
          value={value.FinancialInstitution}
          itemDisplay={ (itemValue: FinancialInstitution, key: string | number) =>
            <FinancialInstitutionDisplay
              key={key}
              label="Financial Institution"
              value={itemValue}
              meta={BranchFieldMeta.FinancialInstitution}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Branch ubl-Address"
          meta={BranchFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Address"
              value={itemValue}
              meta={BranchFieldMeta.Address}
            />
          }
        />
        </div>
    </div>
  )
}

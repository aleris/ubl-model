import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Branch
  meta: FieldMeta<T>
}

export default function BranchDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={BranchFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={BranchFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BranchFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BranchFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BranchFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={BranchFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BranchFieldMeta.FinancialInstitution} 
          value={value.FinancialInstitution}
          itemDisplay={ (itemValue: FinancialInstitution, key: string | number) =>
            <FinancialInstitutionDisplay key={key} meta={BranchFieldMeta.FinancialInstitution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BranchFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={BranchFieldMeta.Address} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

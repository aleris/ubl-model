import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: FinancialInstitution
  meta: FieldMeta<T>
}

export default function FinancialInstitutionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FinancialInstitutionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FinancialInstitutionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialInstitutionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FinancialInstitutionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialInstitutionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FinancialInstitutionFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialInstitutionFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={FinancialInstitutionFieldMeta.Address} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueItemSpecificationUpdateLine } from  '../../model/cac/CatalogueItemSpecificationUpdateLine'
import { CatalogueItemSpecificationUpdateLineFieldMeta } from  '../../meta/cac/CatalogueItemSpecificationUpdateLineMeta'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CatalogueItemSpecificationUpdateLine
  meta: FieldMeta<T>
}

export default function CatalogueItemSpecificationUpdateLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={CatalogueItemSpecificationUpdateLineFieldMeta.Item} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

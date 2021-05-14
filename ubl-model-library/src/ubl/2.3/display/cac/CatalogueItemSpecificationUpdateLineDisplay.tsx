import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: CatalogueItemSpecificationUpdateLine
  meta: FieldMeta<T>
}

export default function CatalogueItemSpecificationUpdateLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CatalogueItemSpecificationUpdateLine ubl-CatalogueItemSpecificationUpdateLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueItemSpecificationUpdateLine ubl-UBLExtensions"
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdateLine ubl-Identifier ubl-ID"
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdateLine ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdateLine ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdateLine ubl-Item"
          meta={CatalogueItemSpecificationUpdateLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateLineFieldMeta.Item}
            />
          }
        />
        </div>
    </div>
  )
}

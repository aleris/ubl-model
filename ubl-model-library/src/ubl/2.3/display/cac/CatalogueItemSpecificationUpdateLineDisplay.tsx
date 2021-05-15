import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: CatalogueItemSpecificationUpdateLine | undefined
  meta: FieldMeta<T>
}

export default function CatalogueItemSpecificationUpdateLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CatalogueItemSpecificationUpdateLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueItemSpecificationUpdateLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueItemSpecificationUpdateLineFieldMeta.ID}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CatalogueItemSpecificationUpdateLineFieldMeta.ContractorCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CatalogueItemSpecificationUpdateLineFieldMeta.SellerSupplierParty}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={CatalogueItemSpecificationUpdateLineFieldMeta.Item}
          />
        </div>
    </div>
  )
}

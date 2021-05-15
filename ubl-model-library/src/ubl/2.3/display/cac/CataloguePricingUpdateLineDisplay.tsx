import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CataloguePricingUpdateLine } from  '../../model/cac/CataloguePricingUpdateLine'
import { CataloguePricingUpdateLineFieldMeta } from  '../../meta/cac/CataloguePricingUpdateLineMeta'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CataloguePricingUpdateLine | undefined
  meta: FieldMeta<T>
}

export default function CataloguePricingUpdateLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CataloguePricingUpdateLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CataloguePricingUpdateLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CataloguePricingUpdateLineFieldMeta.ID}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CataloguePricingUpdateLineFieldMeta.SellerSupplierParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
            label="Required Item Location Quantity"
            items={value.RequiredItemLocationQuantity}
            meta={CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity} 
            itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
              <ItemLocationQuantityDisplay
                key={key}
                label="Required Item Location Quantity"
                value={itemValue}
                meta={CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity}
              />
            }
          />
        </div>
    </div>
  )
}

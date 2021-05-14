import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CataloguePricingUpdateLine
  meta: FieldMeta<T>
}

export default function CataloguePricingUpdateLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CataloguePricingUpdateLine ubl-CataloguePricingUpdateLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CataloguePricingUpdateLine ubl-UBLExtensions"
          meta={CataloguePricingUpdateLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CataloguePricingUpdateLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdateLine ubl-Identifier ubl-ID"
          meta={CataloguePricingUpdateLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CataloguePricingUpdateLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdateLine ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdateLine ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CataloguePricingUpdateLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CataloguePricingUpdateLineFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CataloguePricingUpdateLine ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
          meta={CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
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

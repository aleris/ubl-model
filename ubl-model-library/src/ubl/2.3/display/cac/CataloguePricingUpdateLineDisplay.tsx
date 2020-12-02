import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CataloguePricingUpdateLine
  meta: FieldMeta<T>
}

export default function CataloguePricingUpdateLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CataloguePricingUpdateLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CataloguePricingUpdateLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CataloguePricingUpdateLineFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CataloguePricingUpdateLineFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={CataloguePricingUpdateLineFieldMeta.RequiredItemLocationQuantity} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

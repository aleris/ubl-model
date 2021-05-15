import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ActivityDataLine } from  '../../model/cac/ActivityDataLine'
import { ActivityDataLineFieldMeta } from  '../../meta/cac/ActivityDataLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SalesItemDisplay from './SalesItemDisplay'
import { SalesItem } from '../../model/cac/SalesItem'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ActivityDataLine | undefined
  meta: FieldMeta<T>
}

export default function ActivityDataLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ActivityDataLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ActivityDataLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ActivityDataLineFieldMeta.ID}
          />

          <CodeDisplay
            label="Supply Chain Activity Type Code"
            value={value.SupplyChainActivityTypeCode?.[0]}
            meta={ActivityDataLineFieldMeta.SupplyChainActivityTypeCode}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={ActivityDataLineFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={ActivityDataLineFieldMeta.SellerSupplierParty}
          />

          <PeriodDisplay
            label="Activity Period"
            value={value.ActivityPeriod?.[0]}
            meta={ActivityDataLineFieldMeta.ActivityPeriod}
          />

          <LocationDisplay
            label="Activity Origin Location"
            value={value.ActivityOriginLocation?.[0]}
            meta={ActivityDataLineFieldMeta.ActivityOriginLocation}
          />

          <LocationDisplay
            label="Activity Final Location"
            value={value.ActivityFinalLocation?.[0]}
            meta={ActivityDataLineFieldMeta.ActivityFinalLocation}
          />

          <ElementListDisplay
            className="ubl-cac ubl-SalesItem"
            label="Sales Item"
            items={value.SalesItem}
            meta={ActivityDataLineFieldMeta.SalesItem} 
            itemDisplay={ (itemValue: SalesItem, key: string | number) =>
              <SalesItemDisplay
                key={key}
                label="Sales Item"
                value={itemValue}
                meta={ActivityDataLineFieldMeta.SalesItem}
              />
            }
          />
        </div>
    </div>
  )
}

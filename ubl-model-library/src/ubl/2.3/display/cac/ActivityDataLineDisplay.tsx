import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ActivityDataLine
  meta: FieldMeta<T>
}

export default function ActivityDataLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ActivityDataLine ubl-ActivityDataLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ActivityDataLine ubl-UBLExtensions"
          meta={ActivityDataLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ActivityDataLine ubl-Identifier ubl-ID"
          meta={ActivityDataLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ActivityDataLine ubl-Code ubl-SupplyChainActivityTypeCode"
          meta={ActivityDataLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Supply Chain Activity Type Code"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.SupplyChainActivityTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ActivityDataLine ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={ActivityDataLineFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ActivityDataLine ubl-SupplierParty ubl-SellerSupplierParty"
          meta={ActivityDataLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ActivityDataLine ubl-Period ubl-ActivityPeriod"
          meta={ActivityDataLineFieldMeta.ActivityPeriod} 
          value={value.ActivityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Activity Period"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.ActivityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ActivityDataLine ubl-Location ubl-ActivityOriginLocation"
          meta={ActivityDataLineFieldMeta.ActivityOriginLocation} 
          value={value.ActivityOriginLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Activity Origin Location"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.ActivityOriginLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ActivityDataLine ubl-Location ubl-ActivityFinalLocation"
          meta={ActivityDataLineFieldMeta.ActivityFinalLocation} 
          value={value.ActivityFinalLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Activity Final Location"
              value={itemValue}
              meta={ActivityDataLineFieldMeta.ActivityFinalLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ActivityDataLine ubl-SalesItem"
          meta={ActivityDataLineFieldMeta.SalesItem} 
          value={value.SalesItem}
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

import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ActivityDataLine
  meta: FieldMeta<T>
}

export default function ActivityDataLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ActivityDataLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ActivityDataLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.SupplyChainActivityTypeCode} 
          value={value.SupplyChainActivityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ActivityDataLineFieldMeta.SupplyChainActivityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ActivityDataLineFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={ActivityDataLineFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.ActivityPeriod} 
          value={value.ActivityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ActivityDataLineFieldMeta.ActivityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.ActivityOriginLocation} 
          value={value.ActivityOriginLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ActivityDataLineFieldMeta.ActivityOriginLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.ActivityFinalLocation} 
          value={value.ActivityFinalLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ActivityDataLineFieldMeta.ActivityFinalLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityDataLineFieldMeta.SalesItem} 
          value={value.SalesItem}
          itemDisplay={ (itemValue: SalesItem, key: string | number) =>
            <SalesItemDisplay key={key} meta={ActivityDataLineFieldMeta.SalesItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

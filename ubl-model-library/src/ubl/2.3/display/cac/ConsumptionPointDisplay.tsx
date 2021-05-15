import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionPoint } from  '../../model/cac/ConsumptionPoint'
import { ConsumptionPointFieldMeta } from  '../../meta/cac/ConsumptionPointMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MeterDisplay from './MeterDisplay'
import { Meter } from '../../model/cac/Meter'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WebSiteAccessDisplay from './WebSiteAccessDisplay'
import { WebSiteAccess } from '../../model/cac/WebSiteAccess'

type Props<T> = {
  label: string
  value: ConsumptionPoint | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionPointDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionPoint">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionPointFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ConsumptionPointFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ConsumptionPointFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ConsumptionPointFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Subscriber Identifier"
            value={value.SubscriberID?.[0]}
            meta={ConsumptionPointFieldMeta.SubscriberID}
          />

          <TextDisplay
            label="Subscriber Type"
            value={value.SubscriberType?.[0]}
            meta={ConsumptionPointFieldMeta.SubscriberType}
          />

          <CodeDisplay
            label="Subscriber Type Code"
            value={value.SubscriberTypeCode?.[0]}
            meta={ConsumptionPointFieldMeta.SubscriberTypeCode}
          />

          <QuantityDisplay
            label="Total Delivered Quantity"
            value={value.TotalDeliveredQuantity?.[0]}
            meta={ConsumptionPointFieldMeta.TotalDeliveredQuantity}
          />

          <AddressDisplay
            label="Address"
            value={value.Address?.[0]}
            meta={ConsumptionPointFieldMeta.Address}
          />

          <WebSiteAccessDisplay
            label="Web Site Access"
            value={value.WebSiteAccess?.[0]}
            meta={ConsumptionPointFieldMeta.WebSiteAccess}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Meter ubl-UtilityMeter"
            label="Utility Meter"
            items={value.UtilityMeter}
            meta={ConsumptionPointFieldMeta.UtilityMeter} 
            itemDisplay={ (itemValue: Meter, key: string | number) =>
              <MeterDisplay
                key={key}
                label="Utility Meter"
                value={itemValue}
                meta={ConsumptionPointFieldMeta.UtilityMeter}
              />
            }
          />
        </div>
    </div>
  )
}

import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ConsumptionPoint
  meta: FieldMeta<T>
}

export default function ConsumptionPointDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionPoint ubl-ConsumptionPointType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionPoint ubl-UBLExtensions"
          meta={ConsumptionPointFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionPoint ubl-Identifier ubl-ID"
          meta={ConsumptionPointFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ConsumptionPoint ubl-Text ubl-Description"
          meta={ConsumptionPointFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionPoint ubl-Identifier ubl-SubscriberID"
          meta={ConsumptionPointFieldMeta.SubscriberID} 
          value={value.SubscriberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Subscriber Identifier"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.SubscriberID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionPoint ubl-Text ubl-SubscriberType"
          meta={ConsumptionPointFieldMeta.SubscriberType} 
          value={value.SubscriberType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Subscriber Type"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.SubscriberType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionPoint ubl-Code ubl-SubscriberTypeCode"
          meta={ConsumptionPointFieldMeta.SubscriberTypeCode} 
          value={value.SubscriberTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Subscriber Type Code"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.SubscriberTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionPoint ubl-Quantity ubl-TotalDeliveredQuantity"
          meta={ConsumptionPointFieldMeta.TotalDeliveredQuantity} 
          value={value.TotalDeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Delivered Quantity"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.TotalDeliveredQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionPoint ubl-Address"
          meta={ConsumptionPointFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Address"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.Address}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionPoint ubl-WebSiteAccess"
          meta={ConsumptionPointFieldMeta.WebSiteAccess} 
          value={value.WebSiteAccess}
          itemDisplay={ (itemValue: WebSiteAccess, key: string | number) =>
            <WebSiteAccessDisplay
              key={key}
              label="Web Site Access"
              value={itemValue}
              meta={ConsumptionPointFieldMeta.WebSiteAccess}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ConsumptionPoint ubl-Meter ubl-UtilityMeter"
          meta={ConsumptionPointFieldMeta.UtilityMeter} 
          value={value.UtilityMeter}
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

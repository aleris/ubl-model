import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ConsumptionPoint
  meta: FieldMeta<T>
}

export default function ConsumptionPointDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionPointFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsumptionPointFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionPointFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.SubscriberID} 
          value={value.SubscriberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsumptionPointFieldMeta.SubscriberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.SubscriberType} 
          value={value.SubscriberType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionPointFieldMeta.SubscriberType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.SubscriberTypeCode} 
          value={value.SubscriberTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionPointFieldMeta.SubscriberTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.TotalDeliveredQuantity} 
          value={value.TotalDeliveredQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionPointFieldMeta.TotalDeliveredQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.Address} 
          value={value.Address}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={ConsumptionPointFieldMeta.Address} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.WebSiteAccess} 
          value={value.WebSiteAccess}
          itemDisplay={ (itemValue: WebSiteAccess, key: string | number) =>
            <WebSiteAccessDisplay key={key} meta={ConsumptionPointFieldMeta.WebSiteAccess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionPointFieldMeta.UtilityMeter} 
          value={value.UtilityMeter}
          itemDisplay={ (itemValue: Meter, key: string | number) =>
            <MeterDisplay key={key} meta={ConsumptionPointFieldMeta.UtilityMeter} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

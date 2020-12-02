import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PostAwardProcess } from  '../../model/cac/PostAwardProcess'
import { PostAwardProcessFieldMeta } from  '../../meta/cac/PostAwardProcessMeta'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PostAwardProcess
  meta: FieldMeta<T>
}

export default function PostAwardProcessDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PostAwardProcessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PostAwardProcessFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator} 
          value={value.ElectronicCatalogueUsageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator} 
          value={value.ElectronicInvoiceAcceptedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator} 
          value={value.ElectronicOrderUsageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator} 
          value={value.ElectronicPaymentUsageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

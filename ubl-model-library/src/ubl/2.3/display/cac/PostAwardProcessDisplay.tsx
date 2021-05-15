import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PostAwardProcess } from  '../../model/cac/PostAwardProcess'
import { PostAwardProcessFieldMeta } from  '../../meta/cac/PostAwardProcessMeta'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PostAwardProcess | undefined
  meta: FieldMeta<T>
}

export default function PostAwardProcessDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PostAwardProcess">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PostAwardProcessFieldMeta.UBLExtensions}
          />

          <IndicatorDisplay
            label="Electronic Catalogue Usage"
            value={value.ElectronicCatalogueUsageIndicator?.[0]}
            meta={PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator}
          />

          <IndicatorDisplay
            label="Electronic Invoice Accepted"
            value={value.ElectronicInvoiceAcceptedIndicator?.[0]}
            meta={PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator}
          />

          <IndicatorDisplay
            label="Electronic Order Usage"
            value={value.ElectronicOrderUsageIndicator?.[0]}
            meta={PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Indicator ubl-ElectronicPaymentUsageIndicator"
            label="Electronic Payment Usage"
            items={value.ElectronicPaymentUsageIndicator}
            meta={PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator} 
            itemDisplay={ (itemValue: Indicator, key: string | number) =>
              <IndicatorDisplay
                key={key}
                label="Electronic Payment Usage"
                value={itemValue}
                meta={PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator}
              />
            }
          />
        </div>
    </div>
  )
}

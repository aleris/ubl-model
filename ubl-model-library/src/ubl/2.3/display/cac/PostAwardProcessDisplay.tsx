import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PostAwardProcess } from  '../../model/cac/PostAwardProcess'
import { PostAwardProcessFieldMeta } from  '../../meta/cac/PostAwardProcessMeta'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PostAwardProcess
  meta: FieldMeta<T>
}

export default function PostAwardProcessDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PostAwardProcess ubl-PostAwardProcessType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PostAwardProcess ubl-UBLExtensions"
          meta={PostAwardProcessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PostAwardProcessFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PostAwardProcess ubl-Indicator ubl-ElectronicCatalogueUsageIndicator"
          meta={PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator} 
          value={value.ElectronicCatalogueUsageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Electronic Catalogue Usage"
              value={itemValue}
              meta={PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PostAwardProcess ubl-Indicator ubl-ElectronicInvoiceAcceptedIndicator"
          meta={PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator} 
          value={value.ElectronicInvoiceAcceptedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Electronic Invoice Accepted"
              value={itemValue}
              meta={PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PostAwardProcess ubl-Indicator ubl-ElectronicOrderUsageIndicator"
          meta={PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator} 
          value={value.ElectronicOrderUsageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Electronic Order Usage"
              value={itemValue}
              meta={PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PostAwardProcess ubl-Indicator ubl-ElectronicPaymentUsageIndicator"
          meta={PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator} 
          value={value.ElectronicPaymentUsageIndicator}
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

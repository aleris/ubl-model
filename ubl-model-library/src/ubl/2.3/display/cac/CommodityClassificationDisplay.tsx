import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CommodityClassification } from  '../../model/cac/CommodityClassification'
import { CommodityClassificationFieldMeta } from  '../../meta/cac/CommodityClassificationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CommodityClassification
  meta: FieldMeta<T>
}

export default function CommodityClassificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CommodityClassification ubl-CommodityClassificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CommodityClassification ubl-UBLExtensions"
          meta={CommodityClassificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CommodityClassificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CommodityClassification ubl-Code ubl-NatureCode"
          meta={CommodityClassificationFieldMeta.NatureCode} 
          value={value.NatureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Nature Code"
              value={itemValue}
              meta={CommodityClassificationFieldMeta.NatureCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CommodityClassification ubl-Code ubl-CargoTypeCode"
          meta={CommodityClassificationFieldMeta.CargoTypeCode} 
          value={value.CargoTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Cargo Type Code"
              value={itemValue}
              meta={CommodityClassificationFieldMeta.CargoTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CommodityClassification ubl-Code ubl-CommodityCode"
          meta={CommodityClassificationFieldMeta.CommodityCode} 
          value={value.CommodityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Commodity Code"
              value={itemValue}
              meta={CommodityClassificationFieldMeta.CommodityCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CommodityClassification ubl-Code ubl-ItemClassificationCode"
          meta={CommodityClassificationFieldMeta.ItemClassificationCode} 
          value={value.ItemClassificationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Item Classification Code"
              value={itemValue}
              meta={CommodityClassificationFieldMeta.ItemClassificationCode}
            />
          }
        />
        </div>
    </div>
  )
}

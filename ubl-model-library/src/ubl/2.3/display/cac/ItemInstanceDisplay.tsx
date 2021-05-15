import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemInstance } from  '../../model/cac/ItemInstance'
import { ItemInstanceFieldMeta } from  '../../meta/cac/ItemInstanceMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemPropertyDisplay from './ItemPropertyDisplay'
import { ItemProperty } from '../../model/cac/ItemProperty'
import LotIdentificationDisplay from './LotIdentificationDisplay'
import { LotIdentification } from '../../model/cac/LotIdentification'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemInstance | undefined
  meta: FieldMeta<T>
}

export default function ItemInstanceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemInstance">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemInstanceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Product Trace Identifier"
            value={value.ProductTraceID?.[0]}
            meta={ItemInstanceFieldMeta.ProductTraceID}
          />

          <DateDisplay
            label="Manufacture Date"
            value={value.ManufactureDate?.[0]}
            meta={ItemInstanceFieldMeta.ManufactureDate}
          />

          <TimeDisplay
            label="Manufacture Time"
            value={value.ManufactureTime?.[0]}
            meta={ItemInstanceFieldMeta.ManufactureTime}
          />

          <DateDisplay
            label="Best Before Date"
            value={value.BestBeforeDate?.[0]}
            meta={ItemInstanceFieldMeta.BestBeforeDate}
          />

          <IdentifierDisplay
            label="Registration Identifier"
            value={value.RegistrationID?.[0]}
            meta={ItemInstanceFieldMeta.RegistrationID}
          />

          <IdentifierDisplay
            label="Serial Identifier"
            value={value.SerialID?.[0]}
            meta={ItemInstanceFieldMeta.SerialID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemProperty ubl-AdditionalItemProperty"
            label="Additional Item Property"
            items={value.AdditionalItemProperty}
            meta={ItemInstanceFieldMeta.AdditionalItemProperty} 
            itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
              <ItemPropertyDisplay
                key={key}
                label="Additional Item Property"
                value={itemValue}
                meta={ItemInstanceFieldMeta.AdditionalItemProperty}
              />
            }
          />

          <LotIdentificationDisplay
            label="Lot Identification"
            value={value.LotIdentification?.[0]}
            meta={ItemInstanceFieldMeta.LotIdentification}
          />
        </div>
    </div>
  )
}

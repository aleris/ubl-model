import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemInstance
  meta: FieldMeta<T>
}

export default function ItemInstanceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemInstance ubl-ItemInstanceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemInstance ubl-UBLExtensions"
          meta={ItemInstanceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemInstanceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInstance ubl-Identifier ubl-ProductTraceID"
          meta={ItemInstanceFieldMeta.ProductTraceID} 
          value={value.ProductTraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Product Trace Identifier"
              value={itemValue}
              meta={ItemInstanceFieldMeta.ProductTraceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInstance ubl-Date ubl-ManufactureDate"
          meta={ItemInstanceFieldMeta.ManufactureDate} 
          value={value.ManufactureDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Manufacture Date"
              value={itemValue}
              meta={ItemInstanceFieldMeta.ManufactureDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInstance ubl-Time ubl-ManufactureTime"
          meta={ItemInstanceFieldMeta.ManufactureTime} 
          value={value.ManufactureTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Manufacture Time"
              value={itemValue}
              meta={ItemInstanceFieldMeta.ManufactureTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInstance ubl-Date ubl-BestBeforeDate"
          meta={ItemInstanceFieldMeta.BestBeforeDate} 
          value={value.BestBeforeDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Best Before Date"
              value={itemValue}
              meta={ItemInstanceFieldMeta.BestBeforeDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInstance ubl-Identifier ubl-RegistrationID"
          meta={ItemInstanceFieldMeta.RegistrationID} 
          value={value.RegistrationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Registration Identifier"
              value={itemValue}
              meta={ItemInstanceFieldMeta.RegistrationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemInstance ubl-Identifier ubl-SerialID"
          meta={ItemInstanceFieldMeta.SerialID} 
          value={value.SerialID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Serial Identifier"
              value={itemValue}
              meta={ItemInstanceFieldMeta.SerialID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemInstance ubl-ItemProperty ubl-AdditionalItemProperty"
          meta={ItemInstanceFieldMeta.AdditionalItemProperty} 
          value={value.AdditionalItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay
              key={key}
              label="Additional Item Property"
              value={itemValue}
              meta={ItemInstanceFieldMeta.AdditionalItemProperty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemInstance ubl-LotIdentification"
          meta={ItemInstanceFieldMeta.LotIdentification} 
          value={value.LotIdentification}
          itemDisplay={ (itemValue: LotIdentification, key: string | number) =>
            <LotIdentificationDisplay
              key={key}
              label="Lot Identification"
              value={itemValue}
              meta={ItemInstanceFieldMeta.LotIdentification}
            />
          }
        />
        </div>
    </div>
  )
}

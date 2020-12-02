import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ItemInstance
  meta: FieldMeta<T>
}

export default function ItemInstanceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemInstanceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemInstanceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.ProductTraceID} 
          value={value.ProductTraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemInstanceFieldMeta.ProductTraceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.ManufactureDate} 
          value={value.ManufactureDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ItemInstanceFieldMeta.ManufactureDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.ManufactureTime} 
          value={value.ManufactureTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ItemInstanceFieldMeta.ManufactureTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.BestBeforeDate} 
          value={value.BestBeforeDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ItemInstanceFieldMeta.BestBeforeDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.RegistrationID} 
          value={value.RegistrationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemInstanceFieldMeta.RegistrationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.SerialID} 
          value={value.SerialID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemInstanceFieldMeta.SerialID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.AdditionalItemProperty} 
          value={value.AdditionalItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay key={key} meta={ItemInstanceFieldMeta.AdditionalItemProperty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemInstanceFieldMeta.LotIdentification} 
          value={value.LotIdentification}
          itemDisplay={ (itemValue: LotIdentification, key: string | number) =>
            <LotIdentificationDisplay key={key} meta={ItemInstanceFieldMeta.LotIdentification} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

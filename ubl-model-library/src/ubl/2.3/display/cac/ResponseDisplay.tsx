import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Response } from  '../../model/cac/Response'
import { ResponseFieldMeta } from  '../../meta/cac/ResponseMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import StatusDisplay from './StatusDisplay'
import { Status } from '../../model/cac/Status'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Response
  meta: FieldMeta<T>
}

export default function ResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Response ubl-ResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Response ubl-UBLExtensions"
          meta={ResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Response ubl-Identifier ubl-ReferenceID"
          meta={ResponseFieldMeta.ReferenceID} 
          value={value.ReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Reference"
              value={itemValue}
              meta={ResponseFieldMeta.ReferenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Response ubl-Code ubl-ResponseCode"
          meta={ResponseFieldMeta.ResponseCode} 
          value={value.ResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Response Code"
              value={itemValue}
              meta={ResponseFieldMeta.ResponseCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Response ubl-Text ubl-Description"
          meta={ResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ResponseFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Response ubl-Date ubl-EffectiveDate"
          meta={ResponseFieldMeta.EffectiveDate} 
          value={value.EffectiveDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Effective Date"
              value={itemValue}
              meta={ResponseFieldMeta.EffectiveDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Response ubl-Time ubl-EffectiveTime"
          meta={ResponseFieldMeta.EffectiveTime} 
          value={value.EffectiveTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Effective Time"
              value={itemValue}
              meta={ResponseFieldMeta.EffectiveTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Response ubl-Status"
          meta={ResponseFieldMeta.Status} 
          value={value.Status}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay
              key={key}
              label="Status"
              value={itemValue}
              meta={ResponseFieldMeta.Status}
            />
          }
        />
        </div>
    </div>
  )
}

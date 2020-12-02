import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Response
  meta: FieldMeta<T>
}

export default function ResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseFieldMeta.ReferenceID} 
          value={value.ReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ResponseFieldMeta.ReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseFieldMeta.ResponseCode} 
          value={value.ResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ResponseFieldMeta.ResponseCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ResponseFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseFieldMeta.EffectiveDate} 
          value={value.EffectiveDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ResponseFieldMeta.EffectiveDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseFieldMeta.EffectiveTime} 
          value={value.EffectiveTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ResponseFieldMeta.EffectiveTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ResponseFieldMeta.Status} 
          value={value.Status}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay key={key} meta={ResponseFieldMeta.Status} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}

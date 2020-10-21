import { FieldMeta } from '../../FieldMeta'

export enum RailTransportField {
  TrainID = 'TrainID',
  RailCarID = 'RailCarID'
}

export const RailTransportFieldMetaTrainID = new FieldMeta<RailTransportField>(
  RailTransportField.TrainID,
  'TrainID',
  'Train Identifier',
  'Identifier',
  'An identifier for the train used as the means of transport.',
  '1',
  'Train Number (WCO ID 167)',
  undefined
)

export const RailTransportFieldMetaRailCarID = new FieldMeta<RailTransportField>(
  RailTransportField.RailCarID,
  'RailCarID',
  'Rail Car Identifier',
  'Identifier',
  'An identifier for the rail car on the train used as the means of transport.',
  '0..1',
  undefined,
  undefined
)

export class RailTransportFieldMeta {
  public static readonly TrainID = RailTransportFieldMetaTrainID
  public static readonly RailCarID = RailTransportFieldMetaRailCarID
}

export const RailTransportFieldMap = new Map([
  [RailTransportField.TrainID, RailTransportFieldMetaTrainID],
  [RailTransportField.RailCarID, RailTransportFieldMetaRailCarID]
])

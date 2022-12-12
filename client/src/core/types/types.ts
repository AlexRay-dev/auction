interface IParticipator {
  _id: string,
  name: string,
  measuresThatRaisingQuality: boolean,
  productionTime: string,
  guarantee: string,
  payment: string,
  price: string[],
  actions: string,
}

export interface IAuction {
  _id: string,
  name: string,
  startedAt: number,
  participators: IParticipator[],
}
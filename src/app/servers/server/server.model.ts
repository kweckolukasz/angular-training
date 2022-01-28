export class ServerModel {
  public name: string;
  public adress: string;
  public intervalInSeconds: number;
  constructor(name: string, adress: string, intervalInSeconds: number) {
    this.name = name;
    this.adress = adress;
    this.intervalInSeconds = intervalInSeconds;
  }
}

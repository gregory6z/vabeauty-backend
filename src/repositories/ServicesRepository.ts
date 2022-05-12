import { Service } from "../model/service";

//DTO
interface ICreateServiceDTO {
  name: string;
  description: string;
}

class ServicesRepository {
  private services: Service[];

  constructor() {
    this.services = [];
  }

  create({ description, name }: ICreateServiceDTO): void {
    const service = new Service();

    Object.assign(service, {
      name,
      description,
      created_at: new Date(),
    });

    this.services.push(service);
  }
  list(): Service[] {
    return this.services;
  }
  findByName(name: string): Service | undefined {
    const service = this.services.find((service) => service.name === name);
    return service;
  }
}

export { ServicesRepository };

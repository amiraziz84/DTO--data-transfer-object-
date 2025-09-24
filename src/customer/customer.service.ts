import { Injectable } from '@nestjs/common';
import { createCustomerDto } from './dto/create-customerdto';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomerService {
    private Customers: Customer[] = [];

    getAllCustomers(): Customer[]{
        return this.Customers;
    }

    addCustomer(createCustomerDto: createCustomerDto): Customer{
        const newCustomer: Customer = {
            //creat  dynamically id
            id: Date .now(),

            //seprad oprator (...)
            ...createCustomerDto
        };
        this.Customers.push(newCustomer);
        return newCustomer;

    }
}

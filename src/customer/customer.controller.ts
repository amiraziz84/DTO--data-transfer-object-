import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { createCustomerDto } from './dto/create-customerdto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService)
    {};

    @Get()
    getCustomers(){
        return this.customerService.getAllCustomers();
    }

    @Post()
    addCustomers(@Body() createCustomerDto: createCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }
}

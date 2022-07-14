import { GoogleBooksService } from '@modules/utils/google-books/service/google-books.service';
import { Controller, Post, Req, Res, Body, UseGuards, Get } from '@nestjs/common';

@Controller('google-books')
export class GoogleBooksController {

    constructor(
        private readonly googleBooksService: GoogleBooksService
    ) {
    }

    /*
    for testing
    TODO : delete this controller
    * */
    @Get('test')
    async test() {
        return await this.googleBooksService.getBooks('davam');
    }

    @Get('testo')
    async testo() {
        return await this.googleBooksService.getBook('kktSrgEACAAJs');
    }
}

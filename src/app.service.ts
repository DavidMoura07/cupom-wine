import { Injectable } from '@nestjs/common'; 
import * as Jimp from 'jimp';

@Injectable()
export class AppService {

  
    async editImage(cupom: string){

        const START = 180;
        const TOTAL_SPACE = 700;
        const SIZE_CHAR = 38; 
        const MIN_SIZE = 10;
        let HIGH = 1460;

        if(cupom.length < MIN_SIZE){
            HIGH += 80;
        }

        cupom = cupom.toUpperCase();

        const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
        const image = await Jimp.read('./img/cupom.png');
        return await image.print(
            font,
            // Centering string
            START + ((TOTAL_SPACE - (cupom.length * SIZE_CHAR)) / 2),
            HIGH,
            cupom,
            500,
        ).writeAsync('./img/postEdited.png');
        
    }
}

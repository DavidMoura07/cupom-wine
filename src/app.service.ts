import { Injectable } from '@nestjs/common'; 
import * as Jimp from 'jimp';

@Injectable()
export class AppService {

  
    async editImage(cupom: string){

        let LEFT_START = 140 //180;
        const TOTAL_SPACE = 700;
        const SIZE_CHAR = 38; 
        const MIN_SIZE = 10;
        let HIGH = 1025;

        if(cupom.length < MIN_SIZE){
            LEFT_START -= 60;
        }

        cupom = cupom.toUpperCase();

        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        const image = await Jimp.read('./img/cupom.png');
        return await image.print(
            font,
            // Centering string
            LEFT_START + ((TOTAL_SPACE - (cupom.length * SIZE_CHAR)) / 2),
            HIGH,
            cupom,
            500,
        ).writeAsync('./img/postEdited.png');
        
    }
}

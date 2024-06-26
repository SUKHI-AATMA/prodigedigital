var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { removeBackground } from './remove-background.js';
const bd = document.querySelector('body');
const fileInput = document.getElementById('fileInput');
const displayImage = document.getElementById('displayImage');
var imageBlobss;
fileInput.addEventListener('change', () => __awaiter(void 0, void 0, void 0, function* () {
    // alert(1);
    displayImage.src = '../t/result.png';
    bd.classList.add('generated');

    // ORiginal running code
    // const files = fileInput.files;
    // if (files && files.length > 0) {
    //     try {
    //         const imageBlob = yield removeBackground(files[0]);
    //         const objectURL = URL.createObjectURL(imageBlob);
    //         displayImage.src = objectURL;
    //         displayImage.classList.add('generated');
    //         imageBlobss = objectURL;
    //     }
    //     catch (error) {
    //         console.error('Error:', error);
    //     }
    // }

}));
document.querySelectorAll('.colorsTab').forEach(function (ele) {
    ele.addEventListener('click', function (eles) {
        var eBg = "url(" + ele.children[0].getAttribute('src') + ") no-repeat center center / cover"
        displayImage.style.background = eBg;
        var canva = document.getElementById('canvass');
        canva.getContext('2d').drawImage(imageBlobss, 0, 0, canva.width, canva.height);
    });
})

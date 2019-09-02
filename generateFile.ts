import * as fs from 'fs';
import { LoremIpsum } from "lorem-ipsum";

const fsPromises = fs.promises;
const fileName = './test.txt';



export const generateFileContent = async () => {
    console.log("1. Creating File");
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    const writer  = fs.createWriteStream(fileName)
    const sentence  = lorem.generateParagraphs(7);
    console.log("2. Generating data.");
    for(let i=0; i<400000; i++) writer.write(sentence);
    console.log("3. Completed");
}

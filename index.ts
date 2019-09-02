import { generateFileContent } from './generateFile';

async function main () {
        await generateFileContent();
}
 
main().catch(err => console.error(err));
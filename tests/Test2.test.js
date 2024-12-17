const { fireEvent } = require('@testing-library/dom');
const {JSDOM} = require('jsdom');
require('@testing-library/dom')
require('@testing-library/jest-dom');

describe('Test 2', ()=>{
    let dom;
    beforeEach(async ()=>{
        dom = await JSDOM.fromFile('./index.html',{
            resources: 'usable',
            runScripts: 'dangerously'
        });

        await new Promise((resolve) => dom.window.addEventListener('load', resolve));

    })
   
    it('Check diamond card', ()=>{
        

        let card = dom.window.document.querySelector('#diamond');

        expect(card.src).toContain('card.png');
    
        fireEvent.click(card);

        expect(card.src).toContain('diamond.png');
        

    });
})
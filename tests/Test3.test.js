const { fireEvent } = require('@testing-library/dom');
const {JSDOM} = require('jsdom');
require('@testing-library/dom')
require('@testing-library/jest-dom');

describe('Test 3', ()=>{
    let dom;
    beforeEach(async ()=>{
        dom = await JSDOM.fromFile('./index.html',{
            resources: 'usable',
            runScripts: 'dangerously'
        });

        await new Promise((resolve) => dom.window.addEventListener('load', resolve));

    })
   
    it('Check spade card', ()=>{

        let card = dom.window.document.querySelector('#spade');

        expect(card.src).toContain('card.png');
    
        fireEvent.click(card);

        expect(card.src).toContain('spade.png');
        
    });
})
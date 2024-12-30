const { fireEvent } = require('@testing-library/dom');
const {JSDOM} = require('jsdom');
require('@testing-library/dom')
require('@testing-library/jest-dom');

describe('Test 5', ()=>{
    let dom;
    beforeEach(async ()=>{
        dom = await JSDOM.fromFile('./index.html',{
            resources: 'usable',
            runScripts: 'dangerously'
        });

        await new Promise((resolve) => dom.window.addEventListener('load', resolve));

    })
   
    it('Check turn cards', ()=>{

        let button = dom.window.document.querySelector('button');
        let cards  = dom.window.document.querySelectorAll('img');

        for (const c of cards) {
            fireEvent.click(c);
            expect(c.src).toContain(c.id);
        }

        fireEvent.click(button);

        for (const c of cards) {
            expect(c.src).toContain('card.png');
        }

    });
})
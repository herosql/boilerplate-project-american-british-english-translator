const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
suite('Unit Tests', () => {
    // Translate Mangoes are my favorite fruit. to British English
    test('Translate Mangoes are my favorite fruit. to British English', done => {
        const text = 'Mangoes are my favorite fruit.';
        const locale = 'american-to-british';
        const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate We had a party at my friend's condo. to British English
    test("Translate We had a party at my friend's condo. to British English", done => {
        const text = "We had a party at my friend's condo.";
        const locale = 'american-to-british';
        const expected = `We had a party at my friend's <span class="highlight">flat</span>.`;
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate Can you toss this in the trashcan for me? to British English
    test('Translate Can you toss this in the trashcan for me? to British English', done => {
        const text = 'Can you toss this in the trashcan for me?';
        const locale = 'american-to-british';
        const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate The parking lot was full. to British English
    test('Translate The parking lot was full. to British English', done => {
        const text = 'The parking lot was full.';
        const locale = 'american-to-british';
        const expected = 'The car park was full.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate To play hooky means to skip class or work. to British English
    test('Translate To play hooky means to skip class or work. to British English', done => {
        const text = 'To play hooky means to skip class or work.';
        const locale = 'american-to-british';
        const expected = 'To bunk off means to skip class or work.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });


    // Translate No Mr. Bond, I expect you to die. to British English
    test('Translate No Mr. Bond, I expect you to die. to British English', done => {
        const text = 'No Mr. Bond, I expect you to die.';
        const locale = 'american-to-british';
        const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate Dr. Grosh will see you now. to British English
    test('Translate Dr. Grosh will see you now. to British English', done => {
        const text = 'Dr. Grosh will see you now.';
        const locale = 'american-to-british';
        const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate Lunch is at 12:15 today. to British English
    test('Translate Lunch is at 12:15 today. to British English', done => {
        const text = 'Lunch is at 12:15 today.';
        const locale = 'american-to-british';
        const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate Like a high tech Rube Goldberg machine. to British English
    test('Translate Like a high tech Rube Goldberg machine. to British English', done => {
        const text = 'Like a high tech Rube Goldberg machine.';
        const locale = 'american-to-british';
        const expected = 'Like a high tech Heath Robinson device.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });


     // Translate I ate yogurt for breakfast. to British English
    test('Translate I ate yogurt for breakfast. to British English', done => {
        const text = 'I ate yogurt for breakfast.';
        const locale = 'american-to-british';
        const expected = 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });


    // Translate We watched the footie match for a while. to American English
    test('Translate We watched the footie match for a while. to American English', done => {
        const text = 'We watched the footie match for a while.';
        const locale = 'british-to-american';
        const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate Paracetamol takes up to an hour to work. to American English
    test('Translate Paracetamol takes up to an hour to work. to American English', done => {
        const text = 'Paracetamol takes up to an hour to work.';
        const locale = 'british-to-american';
        const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate First, caramelise the onions. to American English
    test('Translate First, caramelise the onions. to American English', done => {
        const text = 'First, caramelise the onions.';
       const locale = 'british-to-american';
        const expected = 'First, <span class="highlight">caramelize</span> the onions.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });
    // Translate I spent the bank holiday at the funfair. to American English
    test('Translate I spent the bank holiday at the funfair. to American English', done => {
        const text = 'I spent the bank holiday at the funfair.';
        const locale = 'british-to-american';
        const expected = 'I spent the public holiday at the <span class="highlight">carnival</span>.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate I had a bicky then went to the chippy. to American English
    test('Translate I had a bicky then went to the chippy. to American English', done => {
        const text = 'I had a bicky then went to the chippy.';
        const locale = 'british-to-american';
        const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    

    // Translate The car boot sale at Boxted Airfield was called off. to American English
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', done => {
        const text = 'The car boot sale at Boxted Airfield was called off.';
        const locale = 'british-to-american';
        const expected = 'The swap meet at Boxted Airfield was called off.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });




    // Translate Have you met Mrs Kalyani? to American English
    test('Translate Have you met Mrs Kalyani? to American English', done => {
        const text = 'Have you met Mrs Kalyani?';
        const locale = 'british-to-american';
        const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });


    // Translate Prof Joyner of King's College, London. to American English
    test("Translate Prof Joyner of King's College, London. to American English", done => {
        const text = "Prof Joyner of King's College, London.";
        const locale = 'british-to-american';
        const expected = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate Tea time is usually around 4 or 4.30. to American English
    test('Translate Tea time is usually around 4 or 4.30. to American English', done => {
        const text = 'Tea time is usually around 4 or 4.30.';
        const locale = 'british-to-american';
        const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Translate I've just got bits and bobs in my bum bag. to American English
    test("Translate I've just got bits and bobs in my bum bag. to American English", done => {
        const text = "I've just got bits and bobs in my bum bag.";
       const locale = 'british-to-american';
        const expected = "I've just got odds and ends in my fanny pack.";
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Highlight translation in We watched the footie match for a while.
    test('Highlight translation in We watched the footie match for a while.', done => {
        const text = 'We watched the footie match for a while.';
        const locale = 'british-to-american';
        const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });

    // Highlight translation in Paracetamol takes up to an hour to work.
    test('Highlight translation in Paracetamol takes up to an hour to work.', done => {
        const text = 'Paracetamol takes up to an hour to work.';
        const locale = 'british-to-american';
        const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.translate(text, locale), expected);
        done();
    });


 // Highlight translation in Mangoes are my favorite fruit.
 test('Highlight translation in Mangoes are my favorite fruit.', done => {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    assert.equal(translator.translate(text, locale), expected);
    done();
});

// Highlight translation in I ate yogurt for breakfast.
test('Highlight translation in I ate yogurt for breakfast.', done => {
    const text = 'I ate yogurt for breakfast.';
    const locale = 'american-to-british';
    const expected = 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.';
    assert.equal(translator.translate(text, locale), expected);
    done();
});
    
});

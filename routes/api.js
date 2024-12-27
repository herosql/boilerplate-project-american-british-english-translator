'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale =  req.body.locale;
      if(locale  === undefined){
        res.json({error:'Required field(s) missing'});
      }
      switch(locale){
        case 'american-to-british':
        break;
        case 'british-to-american':
        break;
        default:
          res.json({error:'Invalid value for locale field'});
          break;
      }
      if(text  === undefined){
        res.json({error:'Required field(s) missing'});
      }
      if(text.length === 0){
        res.json({error:'No text to translate'});
      }
      const translation = translator.translate(text,locale);
      if(translation===text){
        res.json({text:text,translation:'Everything looks good to me!'});
      }
      res.json({text:text,translation:translation});
    });
};

const path = require('path');
const express = require('express');
const app = express();
var fs = require('fs');




app.get('*', (req, res,next) => {
  fs.readFile(path.resolve('../build/index.html'),'utf-8',(err,data)=>{
      if(err){
          console.log(err);
          return res.status(500)
      }
  })
});

app.listen(3000, () => {
  console.log('Server is up!');
});

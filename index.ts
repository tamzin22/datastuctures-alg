const express = require('express');
import { LinearTimeComplexity , ConstantTimeComplexity} from './dataStructures/bigO-timecomplexity';

const app = express();
const port = 3000;

const linearInstance = new LinearTimeComplexity();
const result = linearInstance.summation(5); 

const constantInstance = new ConstantTimeComplexity();
const result2 = constantInstance.summation(5)




app.get('/', (req, res) => {

  res.send(`Result: ${result}, Result2 : ${result2}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

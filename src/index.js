const express = require('express')
const productRoutes = require('./product.routes');
const {logRequest} = require('./middleware');
const {errorResponder} = require('./error.middleware');
const productRouter = require('./product/product.router');
const userRouter = require('./user/user.router');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(productRouter);
app.use(userRouter);
app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
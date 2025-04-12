const express = require('express')
const productRoutes = require('./product.routes');
const {logRequest} = require('./middleware');
const {errorResponder} = require('./error.middleware');

const app = express();
const PORT = 3000;

const userRouter = require('./user/user.router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(userRouter);
app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
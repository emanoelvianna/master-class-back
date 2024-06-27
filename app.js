const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use('/api', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const logger = require('./middleware/logger');
const postsRouter = require('./routes/posts');

const User = require('./models/User');
const Post = require('./models/Post');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/mern_middleware_population')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(logger);

app.use('/posts', postsRouter);

const seedData = async () => {
  const users = await User.find();

  if (users.length === 0) {
    const user1 = await User.create({
      username: 'john_doe',
      email: 'john.doe@example.com'
    });

    const user2 = await User.create({
      username: 'jane_smith',
      email: 'jane.smith@example.com'
    });

    await Post.create({
      title: 'First Post',
      content: 'This is the first post',
      author: user1._id
    });

    await Post.create({
      title: 'Second Post',
      content: 'This is the second post',
      author: user2._id
    });

    console.log('Seed data created');
  }
};

seedData();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

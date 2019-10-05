import models from '../src/models';

const createData = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
    email: 'wdasads@gmail.com',
    password: '1'
  });

  const user2 = new models.User({
    username: 'ddavids',
    email: 'sklsjfods@gmail.com',
    password: '2'
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};


export default createData;
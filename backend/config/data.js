import models from '../src/models';

const createData = async () => {
  const user1 = new models.User({
    username: 'juan',
    email: 'juan@gmail.com',
    password: 'juan'
  });

  const user2 = new models.User({
    username: 'pepe',
    email: 'pepe@gmail.com',
    password: 'pepe'
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
/*
  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();*/
};


export default createData;
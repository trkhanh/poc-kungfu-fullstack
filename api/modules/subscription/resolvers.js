// App imports
import models from '../../setup/models'

export async function get(parentValue, { id }) {
  return await models.Subscription.findOne({
    where: { id },
    include: [
      { model: models.User, as: 'user' },
      { model: models.Kungfu, as: 'kungfu' }
    ]
  })
}


export async function getByUser(parentValue, { }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Subscription.findAll({
      where: {
        userId: auth.user.id
      },
      include: [{ model: models.User, as: 'user' },
      { model: models.Kungfu, as: 'kungfu' },
      ]
    })
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
}

// Get all subscriptions
export async function getAll() {
  return await models.Subscription.findAll({
    include: [
      { model: models.User, as: 'user' },
      { model: models.Kungfu, as: 'kungfu' },
    ]
  })
}

// Create subscription
export async function create(parentValue, { crateId }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Subscription.create({
      crateId,
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete subscription
export async function remove(parentValue, { id }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Subscription.destroy({ where: { id, userId: auth.user.id } })
  } else {
    throw new Error('Access denied.')
  }
}
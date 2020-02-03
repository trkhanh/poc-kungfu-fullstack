import models from "../../setup/models";
import params from '../../config/params.json'

// Get kungfu by ID
export async function getById(parentValue, { kungfuId }) {
    const kungfu = await models.kungfu.findOne({ where: { id: kungfuId } })
    if (!kungfuId) {
        throw new Error('The kungfu you are looking for does not exists or has beed disconitnued');
    } else {
        return kungfuId
    }
}

export async function getAll(parentValue, { orderBy }) {
    return await models.kungfu.findAll({ order: [['id', orderBy]] })
}

// Create kungfu
export async function create(parentValue, { name, description }, { auth }) {
    if (auth.user && auth.user.role === params.user.roles.admin) {
        return await models.kungfu.create({
            name,
            description
        })
    } else {
        throw new Error('Operation denied.')
    }
}


// Update kungfu
export async function update(parentValue, { id, name, description }, { auth }) {
    if (auth.user && auth.user.role === params.user.roles.admin) {
        return await models.kungfu.update(
            {
                name,
                description
            },
            { where: { id } }
        )
    } else {
        throw new Error('Operation denied.')
    }
}

// Delete kungfu
export async function remove(parentValue, { id }, { auth }) {
    if(auth.user && auth.user.role === params.user.roles.admin) {
      return await models.kungfu.destroy({where: {id}})
    } else {
      throw new Error('Operation denied.')
    }
  }
  
const prisma = require('../prisma')

exports.getCategories = async (req, res) => {
  const categories = await prisma.category.findMany()

  res.json(categories)
}

exports.getCategoryById = async (req, res) => {

  const id = parseInt(req.params.id)

  const category = await prisma.category.findUnique({
    where: { id }
  })

  res.json(category)
}

exports.createCategory = async (req, res) => {

  const { name } = req.body

  const category = await prisma.category.create({
    data: {
      name
    }
  })

  res.json(category)
}

exports.updateCategory = async (req, res) => {

  const id = parseInt(req.params.id)

  const { name } = req.body

  const category = await prisma.category.update({
    where: { id },
    data: {
      name
    }
  })

  res.json(category)
}

exports.deleteCategory = async (req, res) => {

  const id = parseInt(req.params.id)

  await prisma.category.delete({
    where: { id }
  })

  res.json({
    message: 'Category berhasil dihapus'
  })
}
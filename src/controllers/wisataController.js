const prisma = require('../prisma')

exports.getWisata = async (req, res) => {

  const wisata = await prisma.wisata.findMany({
    include: {
      user: true,
      category: true
    }
  })

  res.json(wisata)
}

exports.getWisataById = async (req, res) => {

  const id = parseInt(req.params.id)

  const wisata = await prisma.wisata.findUnique({
    where: { id },
    include: {
      user: true,
      category: true
    }
  })

  res.json(wisata)
}

exports.createWisata = async (req, res) => {

  const {
    nama,
    lokasi,
    deskripsi,
    gambar,
    category_id
  } = req.body

  const wisata = await prisma.wisata.create({
    data: {
      nama,
      lokasi,
      deskripsi,
      gambar,
      user_id: req.user.id,
      category_id
    }
  })

  res.json(wisata)
}

exports.updateWisata = async (req, res) => {

  const id = parseInt(req.params.id)

  const wisata = await prisma.wisata.update({
    where: { id },
    data: req.body
  })

  res.json(wisata)
}

exports.deleteWisata = async (req, res) => {

  const id = parseInt(req.params.id)

  await prisma.wisata.delete({
    where: { id }
  })

  res.json({
    message: 'Wisata berhasil dihapus'
  })
}
const controller = {
  storeFile: (req, res) => {
    const { filename } = req.file;
    return res.json ({
      url: `http://localhost:3000/upload/${filename}`

    }
    )
  }
}

module.exports = controller;
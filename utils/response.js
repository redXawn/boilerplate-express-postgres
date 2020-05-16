exports.success = (req, res, response) => {
  return res.status(200).send(
    {
      status: 200,
      message: 'Success',
      data: response
    }
  )
}

exports.notFound = (req, res, error) => {
  return res.status(404).send(
    {
      status: 404,
      message: 'Not Found'
    }
  )
}

exports.failed = (req, res, error) => {
  return res.status(500).send(
    {
      status: 500,
      message: 'Failed',
      error: error
    }
  )
}

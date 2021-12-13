const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send(
        '<div>Index page</div>'
    )
})

module.exports = router;
const { Router } = require("express");
const Character = require("./CharactersInfo");
const Episode = require("./EpisodeInfo");

const router = Router();

// Configurar los routers
router.use('/character', Character)
router.use('/Episode', Episode)



module.exports = router;

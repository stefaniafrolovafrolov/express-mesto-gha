const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { URL_REGEX } = require('../utils/constants');
const {
  getUsersInfo,
  getUserInfo,
  getCurrentUserInfo,

  setUserInfo,
  setUserAvatar,
} = require('../controllers/users');

router.get('/', getUsersInfo);
router.get('/me', getCurrentUserInfo);

router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  }),
}), getUserInfo);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), setUserInfo);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi
      .string()
      .pattern(URL_REGEX),
  }),
}), setUserAvatar);

module.exports = router;

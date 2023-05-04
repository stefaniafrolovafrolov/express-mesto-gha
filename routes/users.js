const router = require('express').Router();

const {
  getUsers,
  getUserId,
  createUser,
  editProfileUserInfo,
  updateProfileUserAvatar,
} = require('../controllers/users');

// Пользователи:
router.get('/', getUsers);
// Конкретный пользователь по его ID:
router.get('/:userId', getUserId);
// Создание пользователя:
router.post('/', createUser);
// Редактирование данных пользователя:
router.patch('/me', editProfileUserInfo);
// Редактирование аватара пользователя:
router.patch('/me/avatar', updateProfileUserAvatar);

module.exports = router;

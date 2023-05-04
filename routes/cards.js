const router = require('express').Router();

const {
  getInitialCards,
  addNewCard,
  removeCard,
  addLike,
  removeLike,
} = require('../controllers/cards');

// Все карточки:
router.get('/', getInitialCards);
// Создание новой карточки:
router.post('/', addNewCard);
// Удаление карточки:
router.delete('/:cardId', removeCard);
// Лайк на карточки:
router.put('/:cardId/likes', addLike);
// Удаление лайка с карточки:
router.delete('/:cardId/likes', removeLike);

module.exports = router;

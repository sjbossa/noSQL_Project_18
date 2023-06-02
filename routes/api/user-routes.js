const router = require('express').Router;
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/user-controller');
  
// /api/users GET all and POST
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:userid').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendId

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;
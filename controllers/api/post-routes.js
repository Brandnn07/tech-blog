const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    try {
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req,res) => {
    try {
        const postData = await Post.update({
            post_title: req.body.post_title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        })
        if(!postData) {
            res.status(404).json({ message: "We do not have a post with this id" });
            return;
        }
        res.status(200).json(postData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req,res) => {
    try {
        const postData = await Post.destroy({
            post_title: req.body.post_title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        })
        if(!postData) {
            res.status(404).json({ message: "We do not have a post with this id" });
            return;
        }
        res.status(200).json(postData);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
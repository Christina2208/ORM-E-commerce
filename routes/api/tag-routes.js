const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {

  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
        {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    ]
})
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// finds a single tag by the `id`
router.get('/:id', (req, res) => {  

  Tag.findOne({
    where: {
        id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
        {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
    ]
})
    .then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: 'No tag was found by this id' });
            return;
        }
        res.json(dbTagData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// createing a new tag
router.post('/', (req, res) => {
  
  Tag.create({
    tag_name: req.body.tag_name
})
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// updating a tag's name by the `id` value
router.put('/:id', (req, res) => {
  
  Tag.update(req.body, {
    where: {
        id: req.params.id
    }
})
    .then(dbTagData => {
        if (!dbTagData[0]) {
            res.status(404).json({ message: 'No tag was found by this id' });
            return;
        }
        res.json(dbTagData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// deletes ONE tag by the `id` value
router.delete('/:id', (req, res) => {
  
  Tag.destroy({
    where: {
        id: req.params.id
    }
})
    .then(dbTagData => {
        if (!dbTagData) {
            res.status(404).json({ message: 'No tag was found by this id' });
            return;
        }
        res.json(dbTagData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
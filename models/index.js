const user = require('./User');
const story = require('./Stories');
const comment = require('./Comment');

user.hasMany(story, {
    foreignKey: 'user_id'
});

post.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

comment.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

comment.belongsTo(story, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

user.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

post.hasMany(comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

module.exports = {user,story,comment};
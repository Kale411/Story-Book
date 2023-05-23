const User = require("./User");
const Story = require("./Stories");
const Comment = require("./Comment");

User.hasMany(Story, {
  foreignKey: "user_id",
});

Story.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(Story, {
  foreignKey: "story_id",
  onDelete: "cascade",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Story.hasMany(Comment, {
  foreignKey: "story_id",
  onDelete: "cascade",
});

module.exports = { User, Story, Comment };

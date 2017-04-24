import Sequelize, { STRING } from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
import Mongoose from 'mongoose';


const db = new Sequelize('blog', null, null, {
	dialect: 'sqlite',
	storage: './blog.sqlite'
});


const AuthorModel = db.define('author', {
	firstName: {type: STRING},
	lastName: {type: STRING},
});

const PostModel = db.define('post', {
	title: {type: STRING},
	text: {type: STRING},
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);


// views in MongoDB
const mongo = Mongoose.connect('mongodb://localhost/views');
const ViewSchema = Mongoose.Schema({
	postId: Number,
	views: Number
});
const View = Mongoose.model('views', ViewSchema);
Mongoose.Promise = global.Promise;
//end





casual.seed(123);

//create some data
db.sync({force: true}).then(() => {

	_.times(10, () => AuthorModel.create({
		firstName: casual.first_name,
		lastName: casual.last_name,
	})
		.then(author => author.createPost({
			title: `A post by ${author.firstName}`,
			text: casual.text
		}))
		//mongo
		.then(post => View.update(
			{ postId: post.id }, 
			{ views: casual.integer(0, 100) }, 
			{ upsert: true }
		))
	);

});


const Author = db.models.author;
const Post = db.models.post;

export { Author, Post, View };

const typeDefinitions = `
type Author {
	id: Int
	firstName: String
	lastName: String
	fullname: String
	posts: [Post]
}

type Post {
	id: Int
	title: String
	text: String
	views: Int
	author: Author
}

type Query {
  author(firstName: String, lastName: String): Author
}

schema {
  query: Query
}
`;

export default [typeDefinitions];

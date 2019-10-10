class Article {
  constructor(title, id, topicId, author, journal, publishDate) {
    (this.title = title),
      (this.id = id),
      (this.topicId = topicId),
      (this.author = author),
      (this.journal = journal),
      (this.publishDate = publishDate);
  }
}

export default Article;

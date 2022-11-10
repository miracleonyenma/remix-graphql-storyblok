// ./app/components/ArticlesList.tsx

const ArticlesList = ({ items }: { items: [any] }) => {
  return (
    <section className="article-list-section">
      <div className="wrapper">
        <ul className="article-list">
          {items.map((item) => (
            <li key={item.id} className="bg-white p-8 capitalize">
              <a href={`/articles/${item.slug}`}>
                <div className="wrapper">
                  <h3 className="text-3xl font-bold">{item?.name}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticlesList;

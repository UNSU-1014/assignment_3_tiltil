function ListItemGallery({ title, content, author }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{content}</p>
      {author && (
        <div className="text-gray-600 text-sm mt-4">Author: {author.name}</div>
      )}
    </div>
  );
}

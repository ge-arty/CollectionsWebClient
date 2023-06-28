import React from "react";

export default function Explore() {
  const latestCollections = [
    { id: 1, title: "Collection 1" },
    { id: 2, title: "Collection 2" },
    { id: 3, title: "Collection 3" },
    { id: 4, title: "Collection 4" },
    { id: 5, title: "Collection 5" },
  ];

  // const sortedCollections = user.collections.sort((a, b) => b.createdAt - a.createdAt);
  // const latestCollections = sortedCollections.slice(0, 5);

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="display-4">
          Сreate your own collection and join our big community!
        </h1>
      </div>

      <section>
        <h2 className="mb-4">Latest updates</h2>
        <div className="card-deck">
          {latestCollections.map((collection) => (
            <div key={collection.id} className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">{collection.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
